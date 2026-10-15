"use client";
import { useEffect, useMemo, useRef } from "react";

interface SkillSphereProps {
  skills: string[];
}

// Rotating 3D tag cloud. Tags are spread on a sphere (fibonacci lattice) and
// projected every frame; the cursor steers the rotation axis and speed.
const SkillSphere = ({ skills }: SkillSphereProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const pointer = useRef({ x: 0.3, y: 0.15 });

  const points = useMemo(() => {
    const n = skills.length;
    return skills.map((_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      };
    });
  }, [skills]);

  useEffect(() => {
    const pts = points.map((p) => ({ ...p }));
    let frame = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      const el = containerRef.current;
      if (!el) return;
      const radius = el.clientWidth / 2.6;
      const ay = reduce ? 0 : pointer.current.x * 0.02;
      const ax = reduce ? 0 : -pointer.current.y * 0.02;
      const cy = Math.cos(ay), sy = Math.sin(ay);
      const cx = Math.cos(ax), sx = Math.sin(ax);

      pts.forEach((p, i) => {
        // rotate around Y then X
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y2 = p.y * cx - z1 * sx;
        const z2 = p.y * sx + z1 * cx;
        p.x = x1;
        p.y = y2;
        p.z = z2;

        const tag = tagRefs.current[i];
        if (!tag) return;
        const scale = (p.z + 2) / 3; // 0.33 .. 1
        tag.style.transform = `translate(-50%, -50%) translate3d(${p.x * radius}px, ${p.y * radius}px, 0) scale(${scale})`;
        tag.style.opacity = String(0.25 + scale * 0.75);
        tag.style.zIndex = String(Math.round(scale * 100));
        tag.style.filter = p.z < -0.3 ? "blur(1px)" : "none";
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [points]);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMove}
      className="relative mx-auto aspect-square w-full max-w-md select-none"
      aria-label="Skills"
    >
      <div className="absolute inset-[18%] rounded-full bg-indigo-600/20 blur-3xl" aria-hidden />
      {skills.map((skill, i) => (
        <span
          key={skill}
          ref={(el) => {
            tagRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-indigo-400/30 bg-indigo-950/60 px-3 py-1 font-mono text-xs text-indigo-200 shadow-[0_0_20px_rgba(99,102,241,0.25)] will-change-transform sm:text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillSphere;
