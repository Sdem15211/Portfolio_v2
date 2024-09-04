import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoNorthStar } from "react-icons/go";

export const Footer = () => {
  return (
    <>
      <section id="contact" className="bg-txt relative z-0 h-[80vh]">
        <div className="container mx-auto">
          <h1 className="text-mobsubheading uppercase font-medium md:text-mdsubheading pt-24 mb-20 text-prim flex gap-2 items-center">
            <GoNorthStar />
            Contact
          </h1>
          <div className="flex flex-col justify-center items-center gap-8">
            <p className="lg:text-nav text-mobnav uppercase text-prim">
              Want to work together?
            </p>
            <p className="lg:text-heading md:text-mdheading text-mobheading uppercase text-prim">
              Let&apos;s connect
            </p>
            <a href="mailto:hello@simondemeulemeester.com">
              <button>hello@simondemeulemeester.com</button>
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-txt">
        <div className="container mx-auto pb-4 flex justify-between items-center text-prim opacity-80">
          <div className="flex flex-col md:flex-row md:gap-2 md:text-[1.125rem] text-mobbody">
            <a
              href="https://www.instagram.com/simondemeulemeester/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Instagram</p>
            </a>
            <a
              href="https://www.linkedin.com/in/simon-demeulemeester-023b58208/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-1">
            <p className="md:text-[1.125rem] text-mobbody text-center">
              Simon <br className="md:hidden" /> Demeulemeester &copy;
            </p>
          </div>
          <div className="md:-translate-y-6 -translate-y-4">
            <a href="#">
              <FaArrowUp className="w-8 h-12 hover:-translate-y-6 duration-500 ease-out" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
