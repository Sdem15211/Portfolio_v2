"use client";
import { Container } from "@/components/layout/Container";
import { ProjectsScrollElement } from "@/components/ui/ProjectsScrollElement";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GoNorthStar } from "react-icons/go";

export const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1440]);

  return (
    <section id="work" className="-z-10 mb-40 scroll-mt-28">
      <div ref={sectionRef}>
        <Container>
          <div className="flex gap-2 items-center">
            <motion.div style={{ rotate }}>
              <GoNorthStar className="md:size-6 size-4" />
            </motion.div>
            <h2 className="text-mobsubheading uppercase font-regular md:text-mdsubheading">
              Recent work
            </h2>
          </div>
        </Container>
        <div className="flex justify-center items-center">
          <ProjectsScrollElement />
        </div>
      </div>
    </section>
  );
};
