import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

// WebGL scene is client-only; load it after hydration
const HeroScene = dynamic(() => import("../three/HeroScene"), { ssr: false });

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 40, rotateX: -60 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const socials = [
    { href: "https://www.linkedin.com/in/rajeev-ranjan-dev", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://github.com/rajeevranjan413", icon: <FaGithub />, label: "GitHub" },
    { href: "mailto:rajuranjan413@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

export const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    // Pause the WebGL render loop whenever the hero is scrolled out of view
    const inView = useInView(sectionRef, { margin: "100px 0px" });
    const [sceneReady, setSceneReady] = useState(false);

    // Mount the heavy 3D scene only after the intro text animation has had the
    // main thread to itself, so the first second of the page stays smooth.
    useEffect(() => {
        const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
        let idle: number | undefined;
        const timer = window.setTimeout(() => {
            if (w.requestIdleCallback) idle = w.requestIdleCallback(() => setSceneReady(true), { timeout: 800 });
            else setSceneReady(true);
        }, 700);
        return () => {
            window.clearTimeout(timer);
            if (idle !== undefined) (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idle);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden text-white">
            {/* 3D background */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: sceneReady ? 1 : 0 }}
                transition={{ duration: 1.2 }}
            >
                {sceneReady && <HeroScene active={inView} />}
            </motion.div>
            <div className="perspective-floor" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05060f] to-transparent" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                style={{ perspective: 800 }}
                className="pointer-events-none relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-24 text-center sm:px-6 lg:px-8 lg:text-left"
            >
                <motion.p variants={item} className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-indigo-300">
                    <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400 align-middle" />
                    Available for work
                </motion.p>

                <motion.h1 variants={item} className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
                    Hi, I&apos;m <br className="hidden lg:block" />
                    <span className="text-gradient">Rajeev Ranjan</span>
                </motion.h1>

                {/* Typing animation */}
                <motion.div variants={item} className="mb-10 hidden md:block">
                    <p
                        className="typing-animation max-w-full text-lg text-gray-300 lg:text-xl"
                        style={{ "--chars": 62 } as React.CSSProperties}
                    >
                        Full Stack Software Engineer · Node.js, Next.js, Shopify & AWS
                    </p>
                </motion.div>
                <motion.div variants={item} className="md:hidden">
                    <p className="mb-10 max-w-full text-base text-gray-300 sm:text-lg">
                        Full Stack Software Engineer building with Node.js, Next.js, Shopify
                        and AWS.
                    </p>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={item} className="pointer-events-auto mb-10 flex justify-center gap-4 lg:justify-start">
                    {socials.map((s) => (
                        <motion.a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            whileHover={{ y: -6, rotateY: 180 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className="glass flex h-12 w-12 items-center justify-center rounded-xl text-xl text-gray-200 hover:text-indigo-300"
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div variants={item} className="pointer-events-auto flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                    <a
                        href="#projects"
                        className="btn-glow rounded-xl px-8 py-4 text-lg font-semibold text-white"
                    >
                        See My Work
                    </a>
                    <a
                        href="/assets/resume.pdf"
                        target="_blank"
                        className="glass rounded-xl px-8 py-4 text-lg font-semibold text-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400/60 hover:text-white"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>

            <motion.a
                href="#about"
                aria-label="Scroll to About"
                className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-2xl text-indigo-300 sm:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
            >
                <HiArrowDown />
            </motion.a>
        </section>
    );
};
