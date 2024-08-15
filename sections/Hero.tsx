"use client";
import { Container } from "@/components/layout/Container";
import { MdWavingHand } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ArrowRight } from "@/components/icons/ArrowRight";

export const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: ["developer", "designer"],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1750,
  });
  return (
    <section className="h-full mb-40 mt-16">
      <Container>
        <div className="flex flex-col mt-[5rem] xl:mt-[3.8rem] uppercase text-mobheading font-medium tracking-tight md:text-mdheading lg:text-work xl:text-heading">
          <div className="flex gap-2 ">
            <p>Hi</p>
            <MdWavingHand className="-scale-x-100 rotate-12 w-8 h-8 translate-y-[10px] xl:w-[60px] xl:h-[60px] xl:translate-y-[30px] lg:translate-x-2 md:w-[45px] md:h-[45px] md:translate-y-3" />
          </div>
          <p>
            I&apos;m Simon <br className="md:hidden" /> Demeulemeester
          </p>
          <div className="flex gap-3">
            <p>a web</p>
            <div>
              <span>{typeEffect}</span>
              <Cursor cursorStyle="_" />
            </div>
          </div>
          <div className="flex gap-2">
            <p>based in belgium</p>
            <SlGlobe className="w-8 h-8 translate-y-[10px] xl:w-[60px] xl:h-[60px] xl:translate-y-[30px] lg:translate-x-4 md:w-[45px] md:h-[45px] md:translate-y-3" />
          </div>
        </div>
        <div className="w-full flex justify-end mt-[5rem] lg:mt-[3.5rem]">
          <button className="group flex gap-2 text-lg items-center border border-black md:py-3 md:px-5 py-2 px-3 rounded-full">
            <a
              href="mailto:hello@simondemeulemeester.com"
              className="font-medium text-mobbody md:text-mobaccent xl:text-accent"
            >
              hello@simondemeulemeester.com
            </a>
            <div className="group-hover:translate-x-2 duration-300 ease-out">
              <ArrowRight />
            </div>
          </button>
        </div>
        <div className="flex justify-center">
          <span className="text-mobaccent xl:text-accent uppercase mt-24 md:mt-8 opacity-80">
            (scroll)
          </span>
        </div>
      </Container>
    </section>
  );
};
