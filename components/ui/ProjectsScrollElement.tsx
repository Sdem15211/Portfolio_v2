"use client";
import Image from "next/image";
import React, { useEffect, useRef, RefObject } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/ui/Modal";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: ["F", "l", "o", "w"],
    img1: "Flow2.png",
    img2: "Flow1.png",
    img3: "Flow3.png",
    img4: "Flow4.png",
    href: "https://energy-website-sooty.vercel.app/",
    reverse: false,
  },
  {
    name: ["S", "a", "a", "S"],
    img1: "SAAS3.png",
    img2: "SAAS2.png",
    img3: "SAAS1.png",
    img4: "SAAS4.png",
    href: "https://saasprojectsimon-self.vercel.app/",
    reverse: true,
  },
  {
    name: ["K", "r", "e", "a", "t", "i", "v", "y"],
    img1: "Kreativy3.png",
    img2: "Kreativy1.png",
    img3: "Kreativy2.png",
    img4: "Kreativy4.png",
    href: "https://saasprojectsimon-self.vercel.app/",
    reverse: false,
  },
  {
    name: ["K", "r", "e", "a", "t", "i", "v", "y"],
    img1: "Kreativy3.png",
    img2: "Kreativy1.png",
    img3: "Kreativy2.png",
    img4: "Kreativy4.png",
    href: "https://saasprojectsimon-self.vercel.app/",
    reverse: true,
  },
];

type ModalState = {
  active: boolean;
  index: number;
};

export const ProjectsScrollElement: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const marqueeContainers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    marqueeContainers.current.forEach((container, index) => {
      if (!container) return;

      let start = "0%";
      let end = "-25%";

      if (index % 2 === 0) {
        start = "0%";
        end = "20%";
      }

      const marquee = container.querySelector<HTMLDivElement>(".marquee");
      if (!marquee) return;

      const words = marquee.querySelectorAll<HTMLHeadingElement>(".item h2");

      gsap.fromTo(
        marquee,
        { x: start },
        {
          x: end,
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "150% top",
            scrub: true,
          },
        }
      );

      words.forEach((word) => {
        const chars = Array.from(
          word.querySelectorAll<HTMLSpanElement>(".char")
        );
        if (chars.length) {
          const reverse = index % 2 !== 0;
          gsap.fromTo(
            chars,
            { fontWeight: 100 },
            {
              fontWeight: 900,
              duration: 1,
              ease: "none",
              stagger: {
                each: 0.35,
                from: reverse ? "start" : "end",
                ease: "linear",
              },
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "top top",
                scrub: true,
              },
            }
          );
        }
      });
    });
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !marqueeContainers.current.includes(el)) {
      marqueeContainers.current.push(el);
    }
  };

  return (
    <section className="w-full lg:h-[150vh] flex flex-col justify-center overflow-hidden">
      {projects.map((project, index) => (
        <Link key={index} href={project.href} target="_blank">
          <motion.div
            className={`relative w-[125%] h-[250px] flex mb-5 overflow-hidden ${
              project.reverse ? "left-0" : "-left-[25%]"
            }`}
            id="marquee-3"
            ref={addToRefs}
            onMouseEnter={() => setModal({ active: true, index: 0 })}
            onMouseLeave={() => setModal({ active: false, index: 0 })}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <div className="w-full h-full absolute top-1/2 left-0 -translate-y-1/2 flex justify-between gap-6 marquee items-center">
              <div className="relative w-[350px] h-[200px] flex justify-center items-center rounded-lg shrink-0">
                <Image
                  src={`/images/${project.img1}`}
                  fill
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {project.reverse ? null : (
                <div className="flex justify-center items-center flex-[1.5] shrink-0 item">
                  <h2 className="text-black lg:text-work uppercase tracking-tight">
                    {project.name.map((char, index) => (
                      <span key={index} className="char">
                        {char}
                      </span>
                    ))}
                  </h2>
                </div>
              )}

              <div className="relative w-[350px] h-[200px] flex justify-center items-center rounded-lg shrink-0">
                <Image
                  src={`/images/${project.img2}`}
                  fill
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative w-[350px] h-[200px] flex justify-center items-center rounded-lg shrink-0">
                <Image
                  src={`/images/${project.img3}`}
                  fill
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {project.reverse ? (
                <div className="flex justify-center items-center flex-[1.5] shrink-0 item">
                  <h2 className="text-black lg:text-work uppercase tracking-tight">
                    {project.name.map((char, index) => (
                      <span key={index} className="char">
                        {char}
                      </span>
                    ))}
                  </h2>
                </div>
              ) : null}
              <div className="relative w-[350px] h-[200px] flex justify-center items-center rounded-lg shrink-0">
                <Image
                  src={`/images/${project.img4}`}
                  fill
                  alt="image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
      <Modal modal={modal} />
    </section>
  );
};
