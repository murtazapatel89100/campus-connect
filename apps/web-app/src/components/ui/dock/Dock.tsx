"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type SpringOptions,
  type MotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useMemo, useState } from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
  icon: React.ReactNode;
  label: React.ReactNode;
};

function DockItem({
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  icon,
  label,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    if (!ref.current || val === -1) return distance * 2;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    return Math.abs(val - centerX);
  });

  const targetSize = useTransform(
    mouseDistance,
    [0, distance],
    [magnification, baseItemSize],
    { clamp: true }
  );

  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-lg border border-white bg-page shadow-md transition-colors ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      <DockIcon>{icon}</DockIcon>
      <DockLabel isHovered={isHovered}>{label}</DockLabel>
    </motion.div>
  );
}

function DockIcon({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

function DockLabel({
  children,
  className = "",
  isHovered,
}: {
  children: React.ReactNode;
  className?: string;
  isHovered: MotionValue<number>;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (v) => {
      setVisible(v === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
          style={{ x: "-50%" }}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Dock({
  items,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 100,
  panelHeight = 64,
  dockHeight = 100,
  baseItemSize = 48,
}: DockProps) {
  const mouseX = useMotionValue(-1);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2),
    [dockHeight, magnification]
  );

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 pointer-events-none"
    >
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          mouseX.set(e.clientX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(-1);
        }}
        className={`${className} pointer-events-auto flex gap-4 items-end px-4 py-2 border border-slate-400 rounded-2xl backdrop-blur-md`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, idx) => (
          <DockItem
            key={idx}
            {...item}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
