"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// ⬇️ Card component with responsive height and image fix
const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="
        max-w-5xl -mt-12 mx-auto
        w-full
        min-h-[12rem] h-[18rem] xs:h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[40rem]
        border-4 border-[#6C6C6C] p-2 md:p-6
        bg-[#222222] rounded-[30px] shadow-2xl
        flex items-center justify-center
      "
    >
      <div className="w-full h-full bg-gray-100 dark:bg-zinc-900 rounded-2xl flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate }}
    className="max-w-5xl mx-auto text-center"
  >
    {titleComponent}
  </motion.div>
);

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[26rem] xs:h-[22rem] md:h-[48rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export default function OrangeSection() {
  return (
    <>
      {/* Top Orange Wave */}
      <div className="w-full overflow-hidden pointer-events-none select-none">
        <img
          src="/waves/wave_orange.svg"
          alt="Top Orange Wave"
          className="w-full h-auto"
          draggable="false"
        />
      </div>

      {/* Orange Scroll Section */}
      <section className="w-full bg-orange-500 text-black px-4 sm:px-8 lg:px-16">
        <ContainerScroll
          titleComponent={
            <h1 className="text-4xl md:text-6xl font-bold  text-[#F4ECE8]">
              Your Personalized Dashboard
            </h1>
          }
        >
          <div className="w-full h-full flex items-center justify-center pointer-events-none select-none">
            <img
              src="/images/Dashboard.png"
              alt="tablet image"
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        </ContainerScroll>
      </section>

      {/* Bottom Orange Wave */}
      <div className="w-full overflow-hidden rotate-180 pointer-events-none select-none -mt-[1px]">
        <img
          src="/waves/wave_orange.svg"
          alt="Bottom Orange Wave"
          className="w-full h-auto"
          draggable="false"
        />
      </div>
    </>
  );
}
