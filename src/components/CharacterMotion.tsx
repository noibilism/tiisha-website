"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Brings the brand characters to life. Tiny on purpose: no library, one rAF loop that only runs while something is moving.
 * - Eyes follow the pointer on fine-pointer devices (smoothed). On touch they look at the last tap, then at the scroll direction.
 * - Blink at random intervals. Idle glances when nobody is moving the pointer.
 * - Hero teacher leans toward the learner as you scroll (data-lean).
 * - Hover or tap on a figure: a small hop and a smile.
 * With prefers-reduced-motion the characters stay still, eyes forward.
 * Nothing here reads layout except one getBoundingClientRect per eye per frame, before any writes.
 */

type Eye = { max: number; svg: SVGSVGElement; disc: SVGGElement; look: SVGGElement; x: number; y: number; tx: number; ty: number };

const MAX = 14; // pupil travel in svg units. The eye is 35 across, the pupil 18.5.

export function CharacterMotion() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const svgs = Array.from(document.querySelectorAll<SVGSVGElement>("svg[data-ii]"));
    if (!svgs.length) return;

    const eyes: Eye[] = [];
    for (const svg of svgs) {
      for (const disc of Array.from(svg.querySelectorAll<SVGGElement>("[data-eye]"))) {
        const look = disc.querySelector<SVGGElement>("[data-look]");
        if (look) eyes.push({ max: Number(svg.dataset.travel) || MAX, svg, disc, look, x: 0, y: 0, tx: 0, ty: 0 });
      }
    }

    const visible = new Set<SVGSVGElement>();
    const io = new IntersectionObserver((list) => {
      for (const e of list) (e.isIntersecting ? visible.add(e.target as SVGSVGElement) : visible.delete(e.target as SVGSVGElement));
      kick();
    });
    svgs.forEach((s) => io.observe(s));

    let target: { x: number; y: number; until: number } | null = null; // viewport point to look at
    let lastMove = performance.now();
    let raf = 0;
    const timers = new Set<number>();

    const frame = () => {
      raf = 0;
      const now = performance.now();
      if (target && target.until < now) target = null;
      // Reads first.
      const rects = eyes.map((e) => (visible.has(e.svg) ? e.disc.getBoundingClientRect() : null));
      let moving = false;
      eyes.forEach((e, i) => {
        const r = rects[i];
        if (!r) return;
        if (target) {
          const dx = target.x - (r.left + r.width / 2);
          const dy = target.y - (r.top + r.height / 2);
          const d = Math.hypot(dx, dy) || 1;
          const k = Math.min(1, d / 160); // looks straight at things close by, full travel far away
          e.tx = (dx / d) * e.max * k;
          e.ty = (dy / d) * e.max * k;
        }
        const ex = e.tx - e.x;
        const ey = e.ty - e.y;
        if (Math.abs(ex) > 0.04 || Math.abs(ey) > 0.04) {
          e.x += ex * 0.2;
          e.y += ey * 0.2;
          moving = true;
        }
      });
      // Then writes.
      eyes.forEach((e, i) => {
        if (rects[i]) e.look.style.transform = `translate(${e.x.toFixed(2)}px, ${e.y.toFixed(2)}px)`;
      });
      if (moving || target) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const onMove = (ev: PointerEvent) => {
      lastMove = performance.now();
      if (ev.pointerType === "touch" || ev.pointerType === "pen") {
        target = { x: ev.clientX, y: ev.clientY, until: lastMove + 2600 };
      } else if (fine) {
        target = { x: ev.clientX, y: ev.clientY, until: lastMove + 6000 };
      }
      kick();
    };
    const onLeave = () => {
      target = null;
      eyes.forEach((e) => {
        e.tx = 0;
        e.ty = 0;
      });
      kick();
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave, { passive: true });

    // Scroll: look the way the page is going, and lean the hero teacher.
    let lastY = window.scrollY;
    let lastLean = -1;
    let scrollRaf = 0;
    const leaners = svgs.filter((s) => s.hasAttribute("data-lean"));
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (!fine && Math.abs(dy) > 2 && !(target && target.until > performance.now() + 1500)) {
        target = { x: window.innerWidth / 2, y: dy > 0 ? window.innerHeight + 400 : -400, until: performance.now() + 900 };
        kick();
      }
      if (leaners.length && !scrollRaf) {
        scrollRaf = requestAnimationFrame(() => {
          scrollRaf = 0;
          const p = Math.min(1, Math.max(0, window.scrollY / 420));
          if (Math.abs(p - lastLean) > 0.004) {
            lastLean = p;
            for (const s of leaners) s.style.setProperty("--lean", (p * 7).toFixed(2));
          }
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Blinking and idle glances.
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };
    const blink = (svg: SVGSVGElement) => {
      svg.classList.add("blink");
      later(() => svg.classList.remove("blink"), 140);
    };
    const schedule = (svg: SVGSVGElement) => {
      later(() => {
        if (visible.has(svg) && !document.hidden) {
          blink(svg);
          if (Math.random() < 0.18) later(() => blink(svg), 260);
        }
        schedule(svg);
      }, 2200 + Math.random() * 3800);
    };
    svgs.forEach((svg, i) => {
      later(() => blink(svg), 700 + i * 120); // one blink on arrival
      schedule(svg);
    });
    const glance = () => {
      later(() => {
        if (!target && !document.hidden && performance.now() - lastMove > 3000) {
          for (const e of eyes) {
            e.tx = (Math.random() - 0.5) * e.max * 1.2;
            e.ty = (Math.random() - 0.7) * e.max * 0.8;
          }
          kick();
          later(() => {
            if (!target) eyes.forEach((e) => ((e.tx = 0), (e.ty = 0)));
            kick();
          }, 1100);
        }
        glance();
      }, 4500 + Math.random() * 3500);
    };
    glance();

    // Hop and smile on hover or tap.
    const react = (el: Element) => {
      if (el.classList.contains("react")) return;
      el.classList.add("react");
      later(() => el.classList.remove("react"), 1100);
    };
    const onEnter = (ev: Event) => {
      const f = (ev.target as Element).closest?.(".f");
      if (f) react(f);
    };
    svgs.forEach((s) => {
      s.addEventListener("pointerenter", onEnter, true);
      s.addEventListener("click", onEnter);
    });

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      timers.forEach((id) => clearTimeout(id));
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      svgs.forEach((s) => {
        s.removeEventListener("pointerenter", onEnter, true);
        s.removeEventListener("click", onEnter);
      });
    };
  }, [path]);

  return null;
}
