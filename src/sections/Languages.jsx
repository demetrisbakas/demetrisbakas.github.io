import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { motion, useReducedMotion } from "motion/react";
import { languages } from "../data/cv";
import { IconExternal } from "../components/icons";

const levelPct = {
  Native: 100,
  Professional: 85,
};

function Meter({ level }) {
  const reduce = useReducedMotion();
  const pct = levelPct[level] ?? 70;
  return (
    <div
      className="meter"
      role="img"
      aria-label={`Proficiency: ${level}`}
    >
      <motion.div
        className="meter__fill"
        initial={reduce ? false : { width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={reduce ? { width: `${pct}%` } : undefined}
      />
    </div>
  );
}

export default function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="Spoken languages"
      title="Languages"
      sub="How I communicate, day to day."
    >
      <div className="grid grid--2">
        {languages.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.06}>
            <div className="card skill-row">
              <div className="skill-row__head">
                <span className="skill-row__name">{l.name}</span>
                <span className="level-tag">{l.level}</span>
              </div>
              <Meter level={l.level} />
              {l.note && <p className="skill-row__note">{l.note}</p>}
              {l.file && (
                <a
                  className="inline-link"
                  href={l.file}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "0.85rem" }}
                >
                  View IGCSE certificate{" "}
                  <IconExternal width={12} height={12} aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
