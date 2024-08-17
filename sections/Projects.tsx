"use client";
import { Container } from "@/components/layout/Container";
import { ProjectsScrollElement } from "@/components/ui/ProjectsScrollElement";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import { GoNorthStar } from "react-icons/go";

export const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 540]);

  return (
    <section ref={sectionRef} id="work" className="-z-10 mb-40 scroll-mt-28">
      <div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ type: "spring", bounce: 0.25 }}
            className="flex gap-2 items-center"
          >
            <motion.div style={{ rotate }}>
              <GoNorthStar className="md:size-6 size-4" />
            </motion.div>
            <h2 className="text-mobsubheading uppercase font-regular md:text-mdsubheading">
              Recent work
            </h2>
          </motion.div>
        </Container>
        <div className="flex justify-center items-center">
          <ProjectsScrollElement />
        </div>
      </div>
    </section>
  );
};
