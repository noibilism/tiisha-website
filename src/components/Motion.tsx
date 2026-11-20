"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * The animation layer. It renders nothing and changes no markup, so the server HTML is the same
 * with or without it and content is visible if JavaScript never runs.
 *
 * - Scroll reveals: elements that start below the fold fade and rise once as they scroll in.
 *   Elements already on screen are left alone, so nothing above the fold is delayed.
 * - Page transitions: soft navigations are wrapped in the View Transitions API where it exists.
 *   Browsers without it navigate as normal. Back and forward are untouched, so scroll restoration works.
 * - Header: tightens once the page has scrolled.
 * - FAQ table of contents: marks the topic being read.
 *
 * Motion (the small vanilla build of the Motion library) is only loaded after the page is idle,
 * and only when the visitor has not asked for reduced motion.
 */

const REVEAL = [
  ".section .title",
  ".section .lead",
  ".steps > .step",
  ".grid3 > li",
  ".facts > li",
  ".cards2 > .card",
  ".checks > li",
  ".split-art",
  ".safety",
  ".faq-group > h2",
  ".cta h2",
  ".cta .btn-row",
].join(",");

// Only motion/mini (the Web Animations based animate) is used, so the lazy chunk stays tiny.
let lib: Promise<typeof import("motion/mini")> | null = null;
const loadLib = () => (lib ??= import("motion/mini"));

/** Calls `enter` when the element is at least `amount` visible and `leave` (if returned) when it is not. */
function inView(el: Element, enter: () => void | (() => void), { amount = 0.2 } = {}) {
  let leave: void | (() => void);
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting && !leave) {
          leave = enter() || undefined;
          if (!leave) io.disconnect(); // one-shot
        } else if (!en.isIntersecting && leave) {
          leave();
          leave = undefined;
        }
      }
    },
    { threshold: amount },
  );
  io.observe(el);
  return () => io.disconnect();
}

const idle = (fn: () => void) => {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(fn, { timeout: 1200 });
    return () => window.cancelIdleCallback(id);
  }
  const t = window.setTimeout(fn, 200);
  return () => window.clearTimeout(t);
};

export function Motion() {
  const router = useRouter();
  const pathname = usePathname();
  const pending = useRef<(() => void) | null>(null);

  // Header: add a flag on <html> once scrolled, CSS does the rest.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Page transitions for internal links.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (reduce.matches || typeof document.startViewTransition !== "function") return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page or hash jump: let the browser scroll
      e.preventDefault();
      document.querySelector<HTMLDetailsElement>("details.menu")?.removeAttribute("open");
      document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            // Resolve when the new route has rendered, with a ceiling so a slow network never blocks the page.
            // On a slow connection the two scroll dots turn into a loader until the page arrives.
            const slow = window.setTimeout(() => document.documentElement.setAttribute("data-nav", "slow"), 400);
            const done = () => {
              pending.current = null;
              window.clearTimeout(timer);
              window.clearTimeout(slow);
              document.documentElement.removeAttribute("data-nav");
              resolve();
            };
            const timer = window.setTimeout(done, 1500);
            pending.current = done;
            router.push(url.pathname + url.search + url.hash);
          }),
      );
    };
    // Capture phase, so this runs before Next's own Link handler, which skips links that are already handled.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // The new route has rendered: let the transition take its snapshot on the next frame.
  useEffect(() => {
    const done = pending.current;
    if (done) requestAnimationFrame(() => requestAnimationFrame(done));
  }, [pathname]);

  // Reveals and the FAQ table of contents. Runs again on every route.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    const stops: Array<() => void> = [];
    const hidden = new Set<HTMLElement>();

    const cancelIdle = idle(async () => {
      const { animate } = await loadLib();
      if (cancelled) return;

      // Reveals: only elements that begin below the fold are hidden, then shown once.
      const vh = window.innerHeight;
      const all = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
      const groups = new Map<Element, HTMLElement[]>();
      for (const el of all) {
        if (el.getBoundingClientRect().top < vh * 0.92) continue;
        const list = groups.get(el.parentElement as Element) ?? [];
        list.push(el);
        groups.set(el.parentElement as Element, list);
      }
      for (const list of groups.values()) {
        list.forEach((el, i) => {
          hidden.add(el);
          el.style.opacity = "0";
          el.style.transform = "translateY(18px)";
          const delay = Math.min(i, 5) * 0.07;
          stops.push(
            inView(
              el,
              () => {
                const controls = animate(
                  el,
                  { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0px)"] },
                  { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
                );
                controls.finished.then(() => {
                  el.style.opacity = "";
                  el.style.transform = "";
                  hidden.delete(el);
                });
              },
              { amount: 0.2 },
            ),
          );
        });
      }

      // FAQ table of contents: mark the group being read.
      const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".faq-toc a"));
      if (links.length) {
        const byId = new Map(links.map((l) => [l.hash.slice(1), l]));
        const seen = new Set<string>();
        const io = new IntersectionObserver(
          (entries) => {
            for (const en of entries) (en.isIntersecting ? seen.add(en.target.id) : seen.delete(en.target.id));
            const first = Array.from(byId.keys()).find((id) => seen.has(id));
            for (const [id, l] of byId) (id === first ? l.setAttribute("aria-current", "true") : l.removeAttribute("aria-current"));
          },
          { rootMargin: "-20% 0px -60% 0px" },
        );
        for (const id of byId.keys()) {
          const sec = document.getElementById(id);
          if (sec) io.observe(sec);
        }
        stops.push(() => io.disconnect());
      }
    });

    return () => {
      cancelled = true;
      cancelIdle();
      for (const stop of stops) stop();
      for (const el of hidden) {
        el.style.opacity = "";
        el.style.transform = "";
      }
    };
  }, [pathname]);

  return null;
}
