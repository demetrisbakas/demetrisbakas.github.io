import React, { useEffect } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { badges } from "../data/cv";

// Inject each unique Credly/Acclaim embed script once per page load. The script
// scans the DOM for [data-share-badge-id] divs and replaces them with the badge
// iframe. A module-level guard keeps it idempotent across React StrictMode /
// HMR remounts (this section stays mounted for the app's lifetime).
let embedScriptsInjected = false;

function injectEmbedScripts() {
  if (embedScriptsInjected) return;
  embedScriptsInjected = true;
  const sources = [...new Set(badges.map((b) => b.script))];
  sources.forEach((src) => {
    const s = document.createElement("script");
    s.async = true;
    s.type = "text/javascript";
    s.src = src;
    document.body.appendChild(s);
  });
}

export default function Badges() {
  useEffect(() => {
    injectEmbedScripts();
  }, []);

  return (
    <Section
      id="badges"
      eyebrow="Verified digital badges"
      title="Badges"
      sub="Issued via Credly — click any badge to verify its authenticity."
    >
      <Reveal className="badges-grid">
        {badges.map((b) => (
          <div className="badge-frame card" key={b.id}>
            <div
              data-iframe-width="230"
              data-iframe-height="262"
              data-share-badge-id={b.id}
              data-share-badge-host={b.host}
            />
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
