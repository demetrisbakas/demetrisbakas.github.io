import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { publications } from "../data/cv";
import { IconExternal } from "../components/icons";

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Things I've made & shared"
      title="Publications & Projects"
      sub="A blog, an educational video and a game."
    >
      <div className="grid grid--3">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="card pub-card">
              <span className="chip">{p.year}</span>
              <h3>{p.title}</h3>
              <span className="pub-sub">{p.subtitle}</span>
              <p className="pub-desc">{p.description}</p>
              {p.link && (
                <a
                  className="btn btn--ghost btn--sm"
                  href={p.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.link.label} <IconExternal width={15} height={15} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
