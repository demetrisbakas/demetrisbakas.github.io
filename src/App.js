import React from "react";
import useTheme from "./hooks/useTheme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Publications from "./sections/Publications";
import Languages from "./sections/Languages";
import Skills from "./sections/Skills";
import Interests from "./sections/Interests";
import Courses from "./sections/Courses";
import Badges from "./sections/Badges";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Education />
        <Experience />
        <Certifications />
        <Badges />
        <Publications />
        <Languages />
        <Skills />
        <Interests />
        <Courses />
      </main>
      <Footer />
    </>
  );
}
