import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { courses } from "../data/cv";
import { IconChevron } from "../components/icons";

export default function Courses() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const total = courses.column1.length + courses.column2.length;

  return (
    <Section
      id="courses"
      eyebrow="University curriculum"
      title="Courses"
      sub="The full set of courses completed during my integrated master's degree."
    >
      <Reveal>
        <button
          className="collapse-trigger"
          aria-expanded={open}
          aria-controls="courses-panel"
          onClick={() => setOpen((o) => !o)}
        >
          <span>{open ? "Hide courses" : "Show all courses"}</span>
          <span className="collapse-meta">{total} courses</span>
          <IconChevron aria-hidden="true" />
        </button>
      </Reveal>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="courses-panel"
            role="region"
            aria-label="Course list"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="courses-grid" style={{ paddingTop: "var(--space-8)" }}>
              <ul className="course-list">
                {courses.column1.map((c, i) => (
                  <li key={`c1-${i}`}>{c}</li>
                ))}
              </ul>
              <ul className="course-list">
                {courses.column2.map((c, i) => (
                  <li key={`c2-${i}`}>{c}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
