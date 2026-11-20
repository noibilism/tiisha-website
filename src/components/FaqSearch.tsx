"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Progressive enhancement for /faq. Every question and answer is already in the server HTML.
 * This only adds a filter box, which appears once the script has loaded, and opens a question
 * when the page is loaded with its anchor (#q-...).
 */
function setMood(state: string) {
  document.querySelector(".faq-toc-art")?.setAttribute("data-state", state);
}
const moodNow = { current: "idle" };

export function FaqSearch({ total }: { total: number }) {
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(total);
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const groupsEl = document.getElementById("faq-groups");
    root.current = groupsEl;
    if (!groupsEl) return;
    setReady(true);
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        el.scrollIntoView({ block: "center" });
      }
    };
    open();
    window.addEventListener("hashchange", open);
    // The character pair beside the topics is happy for a moment whenever an answer opens.
    let t = 0;
    const found = (e: Event) => {
      if (!(e.target instanceof HTMLDetailsElement) || !e.target.open) return;
      setMood("found");
      window.clearTimeout(t);
      t = window.setTimeout(() => setMood(moodNow.current), 2600);
    };
    const groups = groupsEl;
    groups.addEventListener("toggle", found, true);
    return () => {
      window.removeEventListener("hashchange", open);
      groups.removeEventListener("toggle", found, true);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const items = Array.from(el.querySelectorAll<HTMLDetailsElement>("details[data-faq]"));
    let count = 0;
    for (const d of items) {
      const hit = terms.every((t) => (d.textContent || "").toLowerCase().includes(t));
      d.hidden = !hit;
      if (hit) count++;
    }
    // Open matches when there are only a few, close them again when the box is cleared.
    for (const d of items) d.open = terms.length > 0 && count <= 5 && !d.hidden;
    for (const h of Array.from(el.querySelectorAll<HTMLElement>("[data-faq-block]"))) {
      h.hidden = !h.querySelector("details[data-faq]:not([hidden])");
    }
    for (const g of Array.from(el.querySelectorAll<HTMLElement>("[data-faq-group]"))) {
      g.hidden = !g.querySelector("details[data-faq]:not([hidden])");
    }
    setShown(count);
    moodNow.current = terms.length === 0 ? "idle" : count === 0 ? "none" : "search";
    setMood(moodNow.current);
  }, [query]);

  // The slot keeps its height before the script runs, so the page does not jump. Without JavaScript it collapses.
  if (!ready)
    return (
      <div className="faq-search faq-search-slot" aria-hidden="true">
        <noscript>
          <style>{".faq-search-slot{display:none}"}</style>
        </noscript>
      </div>
    );
  const searching = query.trim().length > 0;
  return (
    <div className="faq-search" role="search">
      <label htmlFor="faq-q" className="faq-search-label">
        Search the questions
      </label>
      <div className="faq-search-row">
        <input
          id="faq-q"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try recordings, payment or approval"
          autoComplete="off"
          enterKeyHint="search"
        />
        {searching && (
          <button type="button" className="faq-clear" onClick={() => setQuery("")}>
            Clear
          </button>
        )}
      </div>
      <p className="faq-count" role="status" aria-live="polite">
        {searching
          ? shown === 0
            ? "No questions match. Try a shorter word, or clear the search."
            : `${shown} of ${total} questions match.`
          : ""}
      </p>
    </div>
  );
}
