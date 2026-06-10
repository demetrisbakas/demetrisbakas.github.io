import React from "react";
import Reveal from "./Reveal";
import { contact, profile } from "../data/cv";
import {
  IconBlog,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconPhone,
} from "./icons";

const links = [
  { label: contact.email, href: `mailto:${contact.email}`, Icon: IconMail },
  { label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, Icon: IconPhone },
  { label: "LinkedIn", href: contact.linkedin, Icon: IconLinkedIn },
  { label: "GitHub", href: contact.github, Icon: IconGitHub },
  { label: "Blog", href: contact.blog, Icon: IconBlog },
];

export default function Footer() {
  return (
    <footer id="contact" className="section section--bordered">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title" style={{ marginBottom: "var(--space-6)" }}>
            Let's build something useful.
          </h2>
          <p className="section-sub" style={{ maxWidth: 560, marginTop: 0 }}>
            I'm always happy to talk about software, technology and new opportunities.
          </p>

          <div className="hero__socials" style={{ marginTop: "var(--space-8)" }}>
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                className="social-link"
                href={href}
                target={
                  href.startsWith("mailto:") || href.startsWith("tel:")
                    ? undefined
                    : "_blank"
                }
                rel="noreferrer"
              >
                <Icon /> {label}
              </a>
            ))}
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <a className="btn btn--primary" href={profile.cvPdf} download>
              <IconDownload /> Download CV (PDF)
            </a>
          </div>
        </Reveal>

        <div className="footer__inner" style={{ marginTop: "var(--space-16)" }}>
          <div>
            <div className="footer__brand">{profile.name}</div>
            <div className="footer__note">
              © {new Date().getFullYear()} {profile.name}. Built with React &amp; Motion.
            </div>
          </div>
          <a className="nav__link" href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
