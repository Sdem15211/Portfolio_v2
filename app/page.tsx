"use client";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <Projects />
      </div>
    </ReactLenis>
  );
}
