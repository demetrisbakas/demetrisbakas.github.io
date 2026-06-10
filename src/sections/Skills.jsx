import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import {
  programmingLanguages,
  softwareSkills,
  softSkills,
  skillsSummary,
} from "../data/cv";

const levelPct = {
  "Highly Skilled": 92,
  "Intermediate level": 65,
};

function SkillBar({ name, level, note }) {
  const reduce = useReducedMotion();
  const pct = levelPct[level] ?? 70;
  return (
    <div className="card skill-row">
      <div className="skill-row__head">
        <span className="skill-row__name">{name}</span>
        <span className="level-tag">{level}</span>
      </div>
      <div className="meter" role="img" aria-label={`${name}: ${level}`}>
        <motion.div
          className="meter__fill"
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? { width: `${pct}%` } : undefined}
        />
      </div>
      {note && <p className="skill-row__note">{note}</p>}
    </div>
  );
}

function SubHead({ children }) {
  return (
    <Reveal>
      <h3
        style={{
          fontSize: "1.25rem",
          margin: "var(--space-12) 0 var(--space-6)",
        }}
      >
        {children}
      </h3>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Tools of the trade"
      title="Skills"
      sub="Programming languages, software and the soft skills that tie them together."
    >
      <SubHead>Programming Languages</SubHead>
      <div className="grid grid--2">
        {programmingLanguages.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 0.05}>
            <SkillBar {...s} />
          </Reveal>
        ))}
      </div>

      <SubHead>Software</SubHead>
      <div className="grid grid--2">
        {softwareSkills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 0.05}>
            <SkillBar {...s} />
          </Reveal>
        ))}
      </div>

      <SubHead>Soft Skills</SubHead>
      <div className="grid grid--2">
        {softSkills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 2) * 0.05}>
            <div className="card skill-row">
              <span className="skill-row__name">{s.name}</span>
              <p className="skill-row__note">{s.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SubHead>Toolbox at a glance</SubHead>
      <Reveal className="tag-cloud">
        {skillsSummary.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
