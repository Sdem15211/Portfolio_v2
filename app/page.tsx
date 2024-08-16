"use client";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <Projects />
        <Services />
      </div>
    </ReactLenis>
  );
}
