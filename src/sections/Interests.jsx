import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { interests } from "../data/cv";
import { interestIcon } from "../components/icons";

export default function Interests() {
  return (
    <Section
      id="interests"
      eyebrow="Outside the editor"
      title="Interests"
      sub="What keeps me curious and recharged."
    >
      <div className="grid grid--2">
        {interests.map((it, i) => {
          const Icon = interestIcon(it.name);
          return (
            <Reveal key={it.name} delay={(i % 2) * 0.06}>
              <div className="card interest-card">
                <span className="interest-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{it.name}</h3>
                  <p>{it.note}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
