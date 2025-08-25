import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { AdvancedImage } from "@cloudinary/react";

type LazyLoadingProps =
  | {
      type: "local";
      image: string;
      cloudId?: never;
      alt: string;
      width: number;
      height: number;
      triggerOnce?: boolean;
      threshold?: number;
      className?: string;
    }
  | {
      type: "cloud";
      cloudId: string;
      image?: never;
      alt: string;
      width: number;
      height: number;
      triggerOnce?: boolean;
      threshold?: number;
      className?: string;
    };

const LazyLoading = ({
  image,
  alt,
  width,
  height,
  triggerOnce = true,
  threshold = 0.2,
  className,
  type,
  cloudId,
}: LazyLoadingProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {type == "local" && (
        <Image
          src={image!}
          alt={alt}
          width={width}
          height={height}
          className={cn(className)}
        />
      )}
      {type == "cloud" && (
        <Image
          src={`https://res.cloudinary.com/dt6a4jcbv/image/upload/f_avif/${cloudId}`}
          alt={alt}
          width={width}
          height={height}
          className={cn(className)}
        />
      )}
    </motion.div>
  );
};

export default LazyLoading;
