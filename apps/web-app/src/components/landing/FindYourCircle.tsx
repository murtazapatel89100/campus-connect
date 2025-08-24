"use client";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function FindYourCircle() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  // Memoize Cloudinary instance to prevent recreation on every render
  const myImage = useMemo(() => {
    const cld = new Cloudinary({
      cloud: {
        cloudName: "dt6a4jcbv",
      },
    });
    return cld.image("find_your_circle_ktxxet");
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section 
      ref={ref}
      className="w-full bg-[#F4ECE8] py-20 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Cloudinary Image with lazy loading */}
        <div className="w-full lg:w-1/2">
          <AdvancedImage
            cldImg={myImage as any}
            alt="Find your circle"
            plugins={[lazyload(), placeholder({ mode: "blur" })]}
            className="w-full h-auto max-w-[600px] max-h-[400px] rounded-xl hover:scale-105 hover:shadow-2xl transition-transform shadow-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-black text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-gothic-expanded font-extrabold tracking-wide mb-6">
            Find Your Circle,
            <br />
            Build Your Campus Story
          </h2>
          <p className="text-lg md:text-xl font-family-goudy leading-relaxed">
            Explore interest-based clubs, attend exclusive student events, and
            meet peers who vibe with your passions. Campus Connect helps you
            discover and join communities that make college more than just
            classes — it becomes connection, creativity, and real collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
