"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  mediaSrc?: string;
  bgImageSrc?: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  mediaSrc = "/videos/landing1.mp4",
  bgImageSrc = "/images/herobg.png",
  title = "Campus Connect",
  textBlend = false,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const campusRef = useRef<HTMLSpanElement>(null);
  const connectRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Responsive logic
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Combined GSAP animation - Media resize + Text animation + Background fade
  useEffect(() => {
    if (
      !containerRef.current ||
      !mediaRef.current ||
      !campusRef.current ||
      !connectRef.current ||
      !logoRef.current ||
      !bgOverlayRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const media = mediaRef.current!;
      const container = containerRef.current!;
      const campus = campusRef.current!;
      const connect = connectRef.current!;
      const logo = logoRef.current!;
      const bgOverlay = bgOverlayRef.current!;

      const mediaFinalWidth = isMobile ? 950 : 1550;
      const mediaFinalHeight = isMobile ? 600 : 800;

      // Set initial states
      gsap.set(campus, { opacity: 0, x: "100vw" }); // Campus from right
      gsap.set(connect, { opacity: 0, x: "-100vw" }); // Connect from left
      gsap.set(logo, { opacity: 0, scale: 0.5 });
      gsap.set(bgOverlay, { opacity: 0 }); // Background overlay starts invisible

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom+=300 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setExpanded(self.progress === 1);
          },
        },
      });

      // Phase 1: Text animation (0-40% of scroll)
      tl.fromTo(
        campus,
        { x: "100vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power4.out" },
      )
        .fromTo(
          connect,
          { x: "-100vw", opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, ease: "power4.out" },
          "<", // Start at the same time as Campus
        )
        // Phase 2: Text disappears, logo appears (40-60% of scroll)
        .to(
          [campus, connect],
          { opacity: 0, duration: 0.2, ease: "power2.in" },
          "+=0.1",
        )
        .to(
          logo,
          { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" },
          "<",
        )
        // Phase 3: Media resize + Logo scaling + Background fade (60-100% of scroll)
        .to(
          media,
          {
            width: mediaFinalWidth,
            height: mediaFinalHeight,
            ease: "power1.out",
            duration: 0.4,
          },
          "+=0.1",
        )
        .to(
          media,
          {
            boxShadow: "0px 0px 80px rgba(0,0,0,0.5)",
            ease: "power1.out",
            duration: 0.4,
          },
          "<",
        )
        .to(
          logo,
          {
            width: isMobile ? 300 : 400, // Made even larger for better visibility
            height: isMobile ? 300 : 400,
            ease: "power1.out",
            duration: 0.4,
          },
          "<", // Start at the same time as media resize
        )
        // Add pulsing effect for extra attention
        .to(
          logo,
          {
            filter:
              "drop-shadow(0 8px 25px rgba(0,0,0,0.4)) drop-shadow(0 0 40px rgba(255,255,255,1))",
            ease: "power2.out",
            duration: 0.2,
          },
          "<0.2",
        )
        .to(
          bgOverlay,
          {
            opacity: 1, // Fade in the background overlay
            ease: "power1.out",
            duration: 0.4,
          },
          "<", // Start at the same time as media resize
        );

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start min-h-[100dvh]"
      style={{ backgroundColor: expanded ? "#F4ECE8" : "transparent" }}
    >
      {/* Background Video + Overlay */}
      <div className="absolute inset-0 z-0 h-full">
        {!videoError ? (
          <video
            className="w-screen h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
          >
            <source src={bgImageSrc} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/herobg.png"
            alt="Background"
            width={1920}
            height={1080}
            className="w-screen h-screen object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/10" />
        {/* Background color overlay that fades in */}
        <div
          ref={bgOverlayRef}
          className="absolute inset-0 opacity-0"
          style={{ backgroundColor: "#F4ECE8" }}
        />
      </div>

      {/* Main container content */}
      <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
        <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
          {/* Media */}
          <div
            ref={mediaRef}
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{
              width: 300,
              height: 400,
              maxWidth: "95vw",
              maxHeight: "85vh",
            }}
          >
            <video
              src={mediaSrc}
              className="w-full h-full object-cover rounded-xl"
              width={1280}
              height={720}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{ background: "transparent" }}
            />
            <div className="absolute inset-0 pointer-events-none bg-black/35 rounded-xl" />
          </div>

          {/* Title */}
          <div
            className={`relative z-10 mt-4 text-center ${
              textBlend ? "mix-blend-difference" : "mix-blend-normal"
            }`}
          >
            {title && (
              <div className="flex justify-center items-center gap-4 text-blue-200 relative">
                <span
                  ref={campusRef}
                  className="text-6xl font-bold font-gothic-expanded inline-block"
                  style={{ willChange: "transform, opacity" }}
                >
                  Campus
                </span>
                <span
                  ref={connectRef}
                  className="text-6xl font-bold font-gothic-expanded inline-block"
                  style={{ willChange: "transform, opacity" }}
                >
                  Connect
                </span>
                <span
                  ref={logoRef}
                  className="inline-block absolute opacity-0"
                  style={{
                    width: 80,
                    height: 80,
                    pointerEvents: "none",
                    left: "50%",
                    transform: "translateX(-50%)",
                    willChange: "opacity, transform, width, height",
                  }}
                >
                  {/* SVG with better scaling properties */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 80 80"
                    style={{
                      width: "100%",
                      height: "100%",
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                    }}
                  >
                    <image href="/assets/app-logo.svg" width="80" height="80" />
                  </svg>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Expanded content area */}
        <div className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 text-black bg-[#F4ECE8]">
          {children ?? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-extrabold mb-6 font-gothic-expanded">
                About Campus Connect
              </h2>
              <p className="text-2xl mb-8 font-family-goudy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia perspiciatis quis soluta nam harum dolore ab. Quo
                consectetur rem non saepe laudantium recusandae? Provident
                laborum ea cupiditate exercitationem dicta aspernatur?
              </p>
              <p className="text-2xl mb-8 font-family-goudy">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                qui veniam, praesentium perspiciatis eligendi sequi commodi
                sapiente repellat quia dolores voluptatem id, dolore, rem
                numquam autem magnam ipsam placeat accusamus?
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <button className="px-8 py-4 bg-teal-500 text-white text-lg font-semibold rounded-lg hover:teal-700 duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-teal-500 text-teal-500 text-lg font-semibold rounded-lg hover:bg-teal-500 hover:text-white duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
