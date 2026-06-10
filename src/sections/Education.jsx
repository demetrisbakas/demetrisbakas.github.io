import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { education } from "../data/cv";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic background"
      title="Education"
      sub="Where the foundations were built."
    >
      <div className="timeline">
        {education.map((e, i) => (
          <Reveal className="tl-item" key={e.title} delay={i * 0.05}>
            <div className="tl-period">{e.period}</div>
            <h3 className="tl-title">{e.title}</h3>
            <div className="tl-role">{e.org}</div>
            <p className="tl-desc">
              {e.description}
              {e.links?.map((l) => (
                <React.Fragment key={l.url}>
                  {" "}
                  <a className="inline-link" href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
