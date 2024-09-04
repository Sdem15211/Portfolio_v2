"use client";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { TechOld } from "@/sections/TechOld";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <Projects />
        <Services />
        <TechOld />
        <Footer />
      </div>
    </ReactLenis>
  );
}
