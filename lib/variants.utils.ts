import { Variants } from "framer-motion";

const easing = [0.175, 0.85, 0.42, 0.96];

export const containerVariants: Variants = {
  initial: { scale: 0.96, y: 100, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export const imageVariants: Variants = {
  initial: { x: -50, opacity: 0 },
  exit: { x: -50, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
      delay: 0.5,
    },
  },
};

export const tabVariants: Variants = {
  initial: { x: 50, opacity: 0 },
  exit: { x: 50, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.5, ease: easing },
  },
};

export const returnVariants: Variants = {
  initial: { x: -50, opacity: 0 },
  exit: {
    x: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

export const cardVariants: Variants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
