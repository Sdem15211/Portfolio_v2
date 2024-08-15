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

interface ModalState {
  active: boolean;
  index: number;
}

export const ProjectsScrollElement: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });
  const marqueeContainers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const titles = document.querySelectorAll<HTMLHeadingElement>(".item h1");
    titles.forEach((titleElement) => {
      new SplitType(titleElement, { types: "chars" });
    });

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

      const words = Array.from(
        marquee.querySelectorAll<HTMLHeadingElement>(".item h1")
      );

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
            { fontWeight: 200 },
            {
              fontWeight: 800,
              duration: 1,
              ease: "none",
              stagger: {
                each: 0.35,
                from: reverse ? "start" : "end",
                ease: "linear",
              },
              scrollTrigger: {
                trigger: container,
                start: "50% 75%",
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
    <section className="w-full lg:h-[150vh] h-[100vh] flex flex-col justify-center overflow-hidden">
      <Link href="https://energy-website-sooty.vercel.app/" target="_blank">
        <motion.div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[25%]"
          id="marquee-3"
          ref={addToRefs}
          onMouseEnter={() => setModal({ active: true, index: 0 })}
          onMouseLeave={() => setModal({ active: false, index: 0 })}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-6 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow2.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                {["F", "l", "o", "w"].map((char, index) => (
                  <span key={index} className="char">
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow1.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow3.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow4.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="https://saasprojectsimon-self.vercel.app/" target="_blank">
        <motion.div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[35%] lg:left-0"
          id="marquee-3"
          ref={addToRefs}
          onMouseEnter={() => setModal({ active: true, index: 0 })}
          onMouseLeave={() => setModal({ active: false, index: 0 })}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-6 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/SAAS3.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/SAAS2.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/SAAS1.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                {["S", "a", "a", "S"].map((char, index) => (
                  <span key={index} className="char">
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/SAAS4.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="https://energy-website-sooty.vercel.app/" target="_blank">
        <motion.div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[25%]"
          id="marquee-3"
          ref={addToRefs}
          onMouseEnter={() => setModal({ active: true, index: 0 })}
          onMouseLeave={() => setModal({ active: false, index: 0 })}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-6 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Kreativy3.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                {["K", "r", "e", "a", "t", "i", "v", "y"].map((char, index) => (
                  <span key={index} className="char">
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Kreativy1.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Kreativy2.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Kreativy4.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="https://energy-website-sooty.vercel.app/" target="_blank">
        <motion.div
          className="relative lg:w-[125%] lg:h-[250px] w-[250%] h-[150px] flex mb-5 overflow-hidden -left-[35%] lg:left-0"
          id="marquee-3"
          ref={addToRefs}
          onMouseEnter={() => setModal({ active: true, index: 0 })}
          onMouseLeave={() => setModal({ active: false, index: 0 })}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-full h-full absolute top-[50%] left-0 -translate-y-1/2 flex gap-6 marquee items-center">
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow1.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow2.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow3.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-center items-center flex-1 lg:flex-[1.3] item">
              <h1 className="text-black text-3xl lg:text-work uppercase tracking-tight">
                {["F", "l", "o", "w"].map((char, index) => (
                  <span key={index} className="char">
                    {char}
                  </span>
                ))}
              </h1>
            </div>
            <div className="relative w-[200px] h-[180px] flex justify-center items-center flex-1 rounded-lg">
              <Image
                src="/images/Flow4.png"
                fill
                alt="image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </Link>
      <Modal modal={modal} />
    </section>
  );
};
