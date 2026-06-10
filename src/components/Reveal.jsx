// Scroll-triggered entrance reveal built on Motion.
// Respects prefers-reduced-motion automatically (Motion disables transforms
// when the user opts out, and we fall back to a static element).
import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 18,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
