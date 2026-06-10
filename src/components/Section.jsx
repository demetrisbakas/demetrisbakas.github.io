import React from "react";
import Reveal from "./Reveal";

// Consistent section shell: anchor id, eyebrow, title, optional subtitle.
export default function Section({ id, eyebrow, title, sub, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {sub && <p className="section-sub">{sub}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
