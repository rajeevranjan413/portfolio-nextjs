"use client";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  // Max rotation in degrees
  intensity?: number;
}

// Card that tilts in 3D toward the cursor with a moving glare highlight.
// Children can use `style={{ transform: "translateZ(40px)" }}` to pop out in depth.
const TiltCard = ({ children, className = "", intensity = 12 }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateY = useTransform(springX, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(springY, [0, 1], [intensity, -intensity]);
  const glareX = useTransform(springX, [0, 1], [0, 100]);
  const glareY = useTransform(springY, [0, 1], [0, 100]);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 30 });
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18), transparent 55%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
    glareOpacity.set(1);
  };

  const reset = () => {
    x.set(0.5);
    y.set(0.5);
    glareOpacity.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className={`relative h-full ${className}`}
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glare, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
};

export default TiltCard;
