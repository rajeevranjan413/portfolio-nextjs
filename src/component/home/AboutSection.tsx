import React from "react";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import SectionHeading from "../ui/SectionHeading";
import SkillSphere from "../ui/SkillSphere";


interface Skill {
    name: string;
    icon: React.ReactNode | null;
}

interface Skills {
    [category: string]: Skill[];
}

const toSkills = (names: string[]): Skill[] => names.map((name) => ({ name, icon: null }));

// Skills data with proper type annotations
const skills: Skills = {
    "Languages": toSkills(["JavaScript", "TypeScript", "Python", "C++", "C", "SQL", "Liquid"]),
    "Backend": toSkills(["Node.js", "NestJS", "Express.js", "GraphQL", "REST APIs", "Webhooks"]),
    "Frontend": toSkills(["React", "Next.js (SSR)", "Remix", "Redux", "Zustand", "Tailwind CSS", "WebGL"]),
    "Data & Cloud": toSkills(["MongoDB", "MySQL", "Redis", "AWS Lambda", "EC2", "S3", "SQS", "RDS", "CloudWatch", "Serverless", "CI/CD"]),
    "E-commerce": toSkills(["Shopify Apps & Themes", "Shopify Admin API", "Klaviyo", "Google Analytics", "Google Tag Manager"]),
    "AI & Agentic": toSkills(["Claude Code", "Doc-first agentic development", "Multi-agent workflows", "LLM-assisted coding"]),
    "Imaging & Tools": toSkills(["OpenCV", "NumPy", "SciPy", "psd-tools", "Git", "Linux", "Jira", "Turborepo", "Webpack"]),
};

// Highlighted phrase inside running text
const Hl = ({ children }: { children: React.ReactNode }) => (
    <span className="text-indigo-300 font-medium">{children}</span>
);

const experienceData = [
    {
        role: "Junior Software Engineer",
        stack: "Node.js, Remix, GraphQL, Shopify, AWS",
        company: "Codeking Technologies Pvt. Ltd.",
        location: "Jaipur",
        dates: "Dec 2024 - Present",
        points: [
            <>Build public and private <Hl>Shopify apps</Hl> with Node.js, Remix, GraphQL Admin API and order/checkout webhooks.</>,
            <>Develop custom <Hl>Shopify storefronts and Liquid themes</Hl> with account features, checkout flows and order management.</>,
            <>Design <Hl>serverless AWS backends</Hl> (Lambda, SQS, RDS, S3, EC2) with the Serverless Framework, CloudWatch and CI/CD.</>,
            <>Integrate Klaviyo, Google Analytics, Tag Manager and Google Ads into client stores; interview candidates for Node.js roles.</>,
            <>Build apps with a <Hl>doc-first, agentic approach in Claude Code</Hl>: specs first, then multi-agent workflows to build and review.</>,
        ],
    },
    {
        role: "Full Stack Developer",
        stack: "NestJS, MongoDB, Next.js, Zustand, Tailwind",
        company: "Apna School App",
        location: "Jaipur",
        dates: "Oct 2024 - Dec 2024",
        points: [
            <>Built a cloud-based <Hl>school ERP</Hl> (web and Android) adopted by <Hl>about 15 schools</Hl> in the Delhi and Jaipur region.</>,
            <>Developed REST APIs in NestJS with MongoDB, and frontends in Next.js, React, Zustand and Tailwind CSS.</>,
            <>Shipped attendance, staff–student–parent communication and resource management modules.</>,
        ],
    },
    {
        role: "Software Engineer (Full Stack)",
        stack: "Next.js, Redux, Express.js, MySQL, Redis",
        company: "Ubuy India",
        location: "Jaipur",
        dates: "Sep 2023 - Oct 2024",
        points: [
            <>Built a <Hl>monorepo architecture</Hl> for Ubuy&apos;s cross-border e-commerce web app with Next.js, Redux and Express.js.</>,
            <>Combined client-side routing with server-side rendering for fast navigation across SSR product pages.</>,
            <>Restructured Redux state flow, <Hl>cutting page re-renders by 2x</Hl>; built REST APIs on MySQL with Redis caching.</>,
        ],
    },
    {
        role: "Full Stack Intern",
        stack: "React, Express.js, MongoDB, WordPress",
        company: "Ventureheap Pvt. Ltd.",
        location: "Jaipur",
        dates: "Feb 2023 - Jul 2023",
        points: [
            <>Delivered React frontends, Express.js/MongoDB APIs with JWT auth, and custom WordPress themes and plugins for clients.</>,
        ],
    },
];

const stats = [
    { value: "3+", label: "Years experience" },
    { value: "~15", label: "Schools on Apna School ERP" },
    { value: "6+", label: "Apparel products on my mockup engine" },
    { value: "100+", label: "LeetCode problems solved" },
];

const achievements = [
    <><Hl>Education Mentor, DevLearn</Hl> (part-time, Oct 2024 - Present): mentor CS students in DSA, OOP, DBMS, OS and networking.</>,
    <>Solved <Hl>100+ LeetCode</Hl> problems and led a 3-member hackathon team.</>,
    <>Write tech posts for <Hl>1,200+ LinkedIn followers</Hl>.</>,
];

const allSkills = Array.from(
    new Set(Object.values(skills).flatMap((list) => list.map((skill) => skill.name)))
).filter((name) => name.length <= 18);

const codeSnippet = `const rajeev = {
  role: 'Full Stack Software Engineer',
  location: 'Jaipur, India',
  stack: {
    backend:  ['Node.js', 'NestJS', 'Express.js', 'GraphQL'],
    frontend: ['React', 'Next.js', 'Remix', 'Tailwind CSS'],
    cloud:    ['AWS Lambda', 'SQS', 'RDS', 'S3', 'Serverless'],
    commerce: ['Shopify Apps', 'Liquid', 'Admin API'],
    ai:       ['Claude Code', 'multi-agent workflows'],
  },
  experience: [
    { company: 'Codeking Technologies', since: 'Dec 2024' },
    { company: 'Apna School App',       period: 'Oct–Dec 2024' },
    { company: 'Ubuy India',            period: 'Sep 2023–Oct 2024' },
    { company: 'Ventureheap',           period: 'Feb–Jul 2023' },
  ],
  education: 'B.Tech CSE · PIET · CGPA 9.0',
};`;

const AboutSection = () => {
    return (
        <section id="about" className="relative py-24 text-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="// who am i" title="About Me" />

                {/* Terminal + intro */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                    <Reveal from="left">
                        <TiltCard intensity={8} className="rounded-2xl">
                            <div className="gradient-border shadow-animation">
                                <div className="overflow-hidden rounded-[1.2rem] bg-[#0a0b1a]">
                                    {/* Terminal-like header */}
                                    <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                                        <span className="ml-3 font-mono text-xs text-gray-500">rajeev.ts</span>
                                    </div>
                                    <pre
                                        className="overflow-x-auto p-4 md:p-6"
                                        style={{ transform: "translateZ(30px)" }}
                                    >
                                        <code className="block whitespace-pre font-mono text-[10px] leading-relaxed text-gray-300 sm:text-xs md:text-sm lg:text-xs xl:text-[13px]">
                                            {codeSnippet}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </TiltCard>
                    </Reveal>

                    {/* Introduction */}
                    <Reveal from="right" delay={0.1}>
                        <div className="glass space-y-4 rounded-2xl p-6 text-gray-300 sm:p-8">
                            <p className="text-lg font-medium leading-snug text-white sm:text-xl">
                                I&apos;m a full stack engineer who turns business requirements into reliable, production-ready products.
                            </p>
                            <p className="text-sm leading-relaxed sm:text-base">
                                Over the past <Hl>3+ years</Hl> I&apos;ve shipped <Hl>e-commerce platforms</Hl>, <Hl>Shopify apps</Hl> and <Hl>SaaS products</Hl> end to end: Next.js and React frontends, Node.js and NestJS APIs, and serverless AWS backends.
                            </p>
                            <p className="text-sm leading-relaxed sm:text-base">
                                At <Hl>Codeking Technologies</Hl> I build Shopify apps, custom storefronts and Liquid themes for client stores. Before that, I built the monorepo behind <Hl>Ubuy</Hl>&apos;s cross-border e-commerce app, cutting page re-renders by 2x, and a school ERP adopted by about <Hl>15 schools</Hl>.
                            </p>
                            <p className="text-sm leading-relaxed sm:text-base">
                                I work <Hl>doc-first</Hl>: clear specs, then agentic workflows in Claude Code to build and review.
                            </p>
                            <p className="text-sm leading-relaxed sm:text-base">
                                B.Tech in Computer Science (CGPA 9.0) from Poornima Institute of Engineering &amp; Technology. I also mentor CS students at <Hl>DevLearn</Hl>.
                            </p>
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-indigo-300 transition hover:text-white sm:text-base"
                            >
                                Have a project or role in mind? Let&apos;s talk
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* Highlights */}
                <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <Reveal key={stat.label} from="flip" delay={i * 0.08}>
                            <div className="glass h-full rounded-2xl p-5 text-center">
                                <p className="text-gradient text-3xl font-bold md:text-4xl">{stat.value}</p>
                                <p className="mt-1 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Experience timeline */}
                <div className="mt-24">
                    <Reveal>
                        <h3 className="mb-10 text-center text-3xl font-semibold text-indigo-300">Experience</h3>
                    </Reveal>
                    <div className="relative">
                        <motion.div
                            className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 md:left-1/2"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <div className="space-y-12">
                            {experienceData?.map((experience, index) => {
                                const left = index % 2 === 0;
                                return (
                                    <div
                                        key={index}
                                        className={`relative pl-12 md:w-1/2 md:pl-0 ${left ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
                                    >
                                        <span
                                            className={`absolute left-[10px] top-6 h-3.5 w-3.5 rounded-full bg-indigo-400 shadow-[0_0_20px_4px_rgba(129,140,248,0.7)] ${left ? "md:left-auto md:-right-[7px]" : "md:-left-[7px]"}`}
                                        />
                                        <Reveal from={left ? "left" : "right"}>
                                            <TiltCard intensity={6} className="rounded-2xl">
                                                <div className="glass rounded-2xl p-6">
                                                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan-300">
                                                        {experience.dates}
                                                    </p>
                                                    <h4 className="text-lg font-semibold text-gray-100">
                                                        {experience.role} <span className="font-normal italic text-gray-400">| {experience.stack}</span>
                                                    </h4>
                                                    <p className="mb-3 text-sm text-gray-400">
                                                        <span className="font-medium text-indigo-200">{experience.company}</span> · {experience.location}
                                                    </p>
                                                    <ul className="space-y-2 text-sm leading-relaxed text-gray-300">
                                                        {experience.points.map((point, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </TiltCard>
                                        </Reveal>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Achievements & leadership */}
                <div className="mt-24">
                    <Reveal>
                        <h3 className="mb-10 text-center text-3xl font-semibold text-indigo-300">Achievements &amp; Leadership</h3>
                    </Reveal>
                    <div className="grid gap-4 md:grid-cols-3">
                        {achievements.map((item, i) => (
                            <Reveal key={i} from="up" delay={i * 0.1}>
                                <TiltCard intensity={6} className="rounded-2xl">
                                    <div className="glass h-full rounded-2xl p-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                                        <span className="mb-3 block font-mono text-xs text-cyan-300">0{i + 1}</span>
                                        {item}
                                    </div>
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-24">
                    <Reveal>
                        <h3 className="mb-10 text-center text-3xl font-semibold text-indigo-300">Skills</h3>
                    </Reveal>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        <Reveal from="left">
                            <SkillSphere skills={allSkills} />
                        </Reveal>
                        <div className="space-y-6">
                            {Object.entries(skills).map(([category, skillsList], i) => (
                                <Reveal key={category} from="right" delay={i * 0.1}>
                                    <strong className="text-base text-gray-100">{category}</strong>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {skillsList.map((skill) => (
                                            <motion.span
                                                key={skill.name}
                                                whileHover={{ y: -4, scale: 1.08, rotateX: 15 }}
                                                className="glass flex cursor-default items-center gap-2 rounded-lg px-3 py-1 hover:border-indigo-400/60"
                                            >
                                                {skill.icon && skill?.icon}
                                                <span className="text-sm text-indigo-300">{skill.name}</span>
                                            </motion.span>
                                        ))}
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
