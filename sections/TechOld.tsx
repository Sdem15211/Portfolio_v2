"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const TechOld = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.9], [40, 0]);
  return (
    <section>
      <div ref={container} className="flex flex-col relative">
        <motion.div style={{ height }} className="relative mt-24">
          <div className="shadow-[0_60px_50px_rgba(0,0,0,0.75)] absolute h-[750%] lg:h-[1150%] w-[120vw] left-[50%] -translate-x-1/2 bg-prim rounded-br-[50%] rounded-bl-[50%] z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};
