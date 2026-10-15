"use client";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

const SectionHeading = ({ eyebrow, title }: SectionHeadingProps) => {
  return (
    <Reveal from="flip" className="mb-14 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-indigo-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-bold md:text-5xl text-gradient">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
    </Reveal>
  );
};

export default SectionHeading;
