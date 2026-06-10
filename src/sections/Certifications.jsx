import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { certifications } from "../data/cv";
import { IconDownload, IconExternal } from "../components/icons";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Verified credentials"
      title="Certifications"
      sub="Each certificate can be viewed or downloaded directly."
    >
      <div className="grid grid--auto">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.06}>
            <article className="card cert-card">
              <div className="cert-card__top">
                <span className="chip">{c.year}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="cert-card__desc">{c.description}</p>
              <div className="cert-card__foot">
                <span className="cert-issuer">{c.issuer}</span>
                {c.file ? (
                  <a
                    className="btn btn--ghost btn--sm"
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View certificate: ${c.title}`}
                  >
                    <IconDownload width={15} height={15} /> Certificate
                  </a>
                ) : (
                  <span className="level-tag">Credential</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="section-sub" style={{ marginTop: "var(--space-8)" }}>
        Most credentials are also verifiable as digital badges in the{" "}
        <a className="inline-link" href="#badges">
          Badges
        </a>{" "}
        section. <IconExternal width={13} height={13} aria-hidden="true" />
      </p>
    </Section>
  );
}
