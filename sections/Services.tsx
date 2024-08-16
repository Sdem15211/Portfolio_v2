import { Container } from "@/components/layout/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { GoNorthStar } from "react-icons/go";

export const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -1400]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <section ref={sectionRef} id="services" className="mb-40 scroll-mt-28">
      <Container>
        <div className="flex gap-2 items-center">
          <motion.div style={{ rotate }}>
            <GoNorthStar className="md:size-6 size-4" />
          </motion.div>
          <h2 className="text-mobsubheading uppercase font-regular md:text-mdsubheading">
            Services
          </h2>
        </div>
        <div className="h-[150vh] w-full relative">
          <motion.div>
            <motion.div
              style={{
                y: lg,
              }}
              className="bg-[#161616] flex flex-col gap-8 p-11 w-[390px] justify-center rounded-3xl absolute shadow-2xl left-0 top-[700px]"
            >
              <div className="w-[300px] h-[200px] relative rounded-3xl self-center z-10">
                <Image
                  src={`/images/MOCKUPDEVELOPMENT.webp`}
                  fill
                  alt="develoment"
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-prim font-menlo text-[1.75rem] mb-8">
                  &lt;web development&gt;
                </h3>
                <p className="text-prim text-[1rem] leading-6">
                  I build custom websites that bring your unique brand identity
                  to life. With smooth animations, high performance and easy
                  navigation, I create sites that look great and keep your
                  audience engaged. offering both custom-coded and{" "}
                  <span className="underline">Webflow</span> options.
                </p>
              </div>
              <div className="absolute inset-0 w-full h-full opacity-25 rounded-3xl z-0">
                <Image
                  src={`/images/noise.png`}
                  fill
                  alt="noise"
                  className="rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            style={{ y: sm }}
            className="bg-[#161616] flex flex-col gap-8 p-11 w-[390px] justify-center rounded-3xl absolute shadow-2xl right-0 top-[200px]"
          >
            <div className="w-[300px] h-[200px] relative rounded-3xl self-center z-10">
              <Image
                src={`/images/MOCKUPDESIGN.webp`}
                fill
                alt="develoment"
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-prim text-[2rem] mb-8">web design</h3>
              <p className="text-prim text-[1rem] leading-6">
                I design websites that capture your brand’s essence and make a
                lasting impression. With clean layouts, intuitive navigation,
                and engaging visuals, I create designs that look great and
                connect with your audience. Wether you need a fresh design or a
                complete redesign, i’m here to help.
              </p>
            </div>
            <div className="absolute inset-0 w-full h-full opacity-25 rounded-3xl z-0">
              <Image
                src={`/images/noise.png`}
                fill
                alt="noise"
                className="rounded-3xl"
              />
            </div>
          </motion.div>
          <motion.div
            style={{ y: md }}
            className="bg-[#161616] p-11 rounded-3xl absolute shadow-2xl w-[800px] left-0 top-[1000px]"
          >
            <div className="w-full h-full flex gap-8 justify-between">
              <div className="w-1/2 h-[240px] relative rounded-3xl self-center z-10">
                <Image
                  src={`/images/MOCKUPFULLSERVICE.webp`}
                  fill
                  alt="develoment"
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="relative z-10 w-1/2">
                <h3 className="text-prim text-[2rem] mb-8">full service</h3>
                <p className="text-prim text-[1rem] leading-6">
                  I design websites that capture your brand’s essence and make a
                  lasting impression. With clean layouts, intuitive navigation,
                  and engaging visuals, I create designs that look great and
                  connect with your audience. Wether you need a fresh design or
                  a complete redesign, i’m here to help.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 w-full h-full opacity-25 rounded-3xl z-0">
              <Image
                src={`/images/noise.png`}
                fill
                alt="noise"
                className="rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
