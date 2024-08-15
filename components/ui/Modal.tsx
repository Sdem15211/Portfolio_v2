import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

type ModalProps = {
  modal: { active: boolean; index: number };
};

export const Modal: React.FC<ModalProps> = ({ modal }) => {
  const { active } = modal;
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.35,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.35,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      moveCursorX(pageX);
      moveCursorY(pageY);
      moveCursorLabelX(pageX);
      moveCursorLabelY(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={cursor}
        className="w-[80px] h-[80px] absolute pointer-events-none rounded-full bg-zinc-800 flex items-center justify-center"
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        ref={cursorLabel}
        className="w-[80px] h-[80px] absolute pointer-events-none rounded-full bg-transparent flex items-center justify-center text-center text-[0.875rem] text-white uppercase"
      >
        Visit
      </motion.div>
    </>
  );
};
