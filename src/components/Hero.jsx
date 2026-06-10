import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { contact, profile } from "../data/cv";
import {
  IconArrowDown,
  IconBlog,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "./icons";

const socials = [
  { label: "Email", href: `mailto:${contact.email}`, Icon: IconMail },
  { label: "LinkedIn", href: contact.linkedin, Icon: IconLinkedIn },
  { label: "GitHub", href: contact.github, Icon: IconGitHub },
  { label: "Blog", href: contact.blog, Icon: IconBlog },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  };
  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="hero__inner"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span className="hero__status" variants={item}>
            <span className="hero__dot" aria-hidden="true" />
            Software Engineer · Based in Cyprus
          </motion.span>

          <motion.h1 variants={item}>
            {profile.name.split(" ")[0]}{" "}
            <span className="hero__title-accent">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.p className="hero__role" variants={item}>
            {profile.title}
          </motion.p>

          <motion.p className="hero__summary" variants={item}>
            {profile.summary}
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <a className="btn btn--primary" href={profile.cvPdf} download>
              <IconDownload /> Download CV
            </a>
            <a className="btn btn--ghost" href="#experience">
              View experience <IconArrowDown width={15} height={15} />
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={item}>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="social-link"
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <Icon /> {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
