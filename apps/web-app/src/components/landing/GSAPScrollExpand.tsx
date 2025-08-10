"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPScrollExpandProps {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  children?: React.ReactNode;
}

const GSAPScrollExpand: React.FC<GSAPScrollExpandProps> = ({
  mediaSrc,
  bgImageSrc,
  title,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !mediaRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        // Safely access conditions, fallback to false if undefined
        const isMobile = context.conditions?.["isMobile"] ?? false;

        const maxWidth = isMobile ? 650 : 1250;
        const maxHeight = isMobile ? 200 : 400;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current!,
            start: "top top",
            end: "+=500",
            scrub: true,
            pin: true,
            onUpdate: (self) => {
              setExpanded(self.progress === 1);
            },
          },
        });

        tl.to(mediaRef.current!, {
          width: 300 + maxWidth,
          height: 400 + maxHeight,
          ease: "none",
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          mm.revert();
        };
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100vh] bg-transparent"
      style={{ backgroundColor: expanded ? "#F4ECE8" : "transparent" }}
    >
      {/* Background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={bgImageSrc}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Media container */}
      <div className="flex flex-col items-center justify-center min-h-[100vh]">
        <div
          ref={mediaRef}
          className="rounded-xl shadow-xl overflow-hidden relative"
          style={{ width: 300, height: 400, maxWidth: "95vw", maxHeight: "85vh" }}
        >
          <Image
            src={mediaSrc}
            alt={title || "Media"}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            className="absolute inset-0 bg-black/50"
            style={{ pointerEvents: "none" }}
          />
        </div>

        {/* Title */}
        {title && (
          <h2 className="mt-8 text-4xl font-bold text-blue-200 font-gothic-expanded">
            {title}
          </h2>
        )}

        {/* Content, shown when expanded */}
        <div
          className={`max-w-4xl px-8 py-10 transition-opacity duration-700 ${
            expanded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GSAPScrollExpand;
