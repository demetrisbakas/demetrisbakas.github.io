import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Section from "../components/Section";
import { experience } from "../data/cv";

const groups = [
  { key: "work", label: "Work" },
  { key: "vocational", label: "Vocational" },
  { key: "events", label: "Events" },
  { key: "miscellaneous", label: "Miscellaneous" },
];

function Entry({ item }) {
  return (
    <div className="tl-item">
      <div className="tl-period">{item.period}</div>
      <h3 className="tl-title">{item.title}</h3>
      <div className="tl-role">
        <em>{item.role}</em>
      </div>
      <p className="tl-desc">
        {item.description}
        {item.links?.map((l) => (
          <React.Fragment key={l.url}>
            {" "}
            <a className="inline-link" href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default function Experience() {
  const [active, setActive] = useState("work");
  const reduce = useReducedMotion();
  const items = experience[active];

  return (
    <Section
      id="experience"
      eyebrow="Professional journey"
      title="Experience"
      sub="Work, community involvement, events and beyond."
    >
      <div className="tabs" role="tablist" aria-label="Experience categories">
        {groups.map((g) => (
          <button
            key={g.key}
            role="tab"
            aria-selected={active === g.key}
            className={`tab ${active === g.key ? "tab--active" : ""}`}
            onClick={() => setActive(g.key)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="timeline"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {items.map((item) => (
            <Entry key={item.title + item.period} item={item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
