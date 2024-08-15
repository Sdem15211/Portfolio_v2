"use client";
import useDetectScroll from "@smakss/react-scroll-direction";
import Link from "next/link";
import cx from "classnames";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "@/components/icons/X";
import { Menu } from "@/components/icons/MenuIcon";

const headerdata = [
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const headerVariants = {
  hidden: {
    x: "100vw",
    y: "-50%",
  },
  visible: {
    x: 0,
    y: 0,
    transition: { type: "spring", duration: 0.85 },
  },
};

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { scrollDir } = useDetectScroll();

  return (
    <header className="overflow-x-hidden">
      <Container>
        <div className="hidden md:flex justify-center items-center">
          <nav
            className={cx(
              "w-fit h-fit bg-black rounded-full fixed top-6 flex gap-10 items-center justify-between px-3 py-2 duration-300",
              scrollDir === "down" ? "opacity-0" : "opacity-100"
            )}
          >
            {headerdata.map((header, index) => {
              return (
                <Link
                  className="text-prim text-mobsubheading tracking-wide hover:bg-white hover:text-black duration-300 rounded-3xl px-3 py-1 font-light"
                  key={index}
                  href={header.href}
                >
                  {header.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div
          className="cursor-pointer absolute right-6 top-6 md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu />
        </div>
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={showMenu ? "visible" : "hidden"}
          className="bg-black shadow-xl rounded-3xl text-prim p-8 absolute w-[300px] h-[500px] right-4 top-4"
        >
          <div className="flex flex-col gap-8 justify-between h-full w-full">
            <div className="flex justify-between items-center">
              <span className="text-neutral-40 text-mobnav">Menu</span>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className="border rounded-full p-3 border-white/50">
                  <X />
                </div>
              </div>
            </div>
            <nav className="flex flex-col gap-4 text-nav -mt-10 font-light">
              {headerdata.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                >
                  <Link href={item.href} onClick={() => setShowMenu(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-1">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
                className="text-mobaccent"
              >
                Portfolio
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
                className="text-mobaccent"
              >
                Simon Demeulemeester
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Container>
    </header>
  );
};
