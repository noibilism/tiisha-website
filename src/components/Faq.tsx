import { Chevron } from "./Icons";
import type { Faq as FaqItem } from "@/content/markets";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span className="chev">
              <Chevron color="var(--ink)" />
            </span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
