import { Chevron } from "./Icons";
import { FaqSearch } from "./FaqSearch";
import { allGroupFaqs, faqSlug, FAQ_GROUPS } from "@/content/faq";

/** The /faq help centre: sticky table of contents, search, and grouped accordions. */
export function FaqCenter() {
  const total = allGroupFaqs().length;
  return (
    <div className="faq-layout">
      <nav className="faq-toc" aria-label="Questions by topic">
        <p className="faq-toc-title">Topics</p>
        <ul>
          {FAQ_GROUPS.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`}>{g.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="faq-body">
        <FaqSearch total={total} />
        <div id="faq-groups">
          {FAQ_GROUPS.map((g) => (
            <section key={g.id} id={g.id} className="faq-group" aria-labelledby={`${g.id}-h`} data-faq-group>
              <h2 id={`${g.id}-h`}>{g.title}</h2>
              <p className="faq-intro">{g.intro}</p>
              {g.sections.map((s, i) => (
                <div key={s.heading || i} className="faq-block" data-faq-block>
                  {s.heading && <h3>{s.heading}</h3>}
                  <div className="faq">
                    {s.items.map((f) => (
                      <details key={f.q} id={faqSlug(f.q)} data-faq>
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
                </div>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
