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

// Skills data with proper type annotations
const skills: Skills = {
    "Programming Languages": [
        { name: "C", icon: null },
        { name: "C++", icon: null },
        { name: "Node.js", icon: null },
        { name: "JavaScript", icon: null },
        { name: "TypeScript", icon: null },
    ],
    "Frontend Technologies": [
        { name: "HTML", icon: null },
        { name: "CSS", icon: null },
        { name: "JavaScript", icon: null },
        { name: "ReactJs", icon: null },
        { name: "React Native", icon: null },
        { name: "NextJs", icon: null },
        { name: "Redux", icon: null },
        { name: "Zustand", icon: null },
        { name: "Tailwind CSS", icon: null },
        { name: "Chakra UI", icon: null },
        { name: "Webpack", icon: null },
    ],
    "Backend Technologies": [
        { name: "ExpressJs", icon: null },
        { name: "NestJS", icon: null },
        { name: "REST APIs", icon: null },
        { name: "Mongoose", icon: null },
        { name: "Sequelize", icon: null },
        { name: "MongoDB", icon: null },
        { name: "MySQL", icon: null },
        { name: "Redis", icon: null },
    ],
    "DevOps and Tools": [
        { name: "Linux", icon: null },
        { name: "Git", icon: null },
        { name: "GitHub", icon: null },
        { name: "GitLab", icon: null },
        { name: "GitHub Actions", icon: null },
        { name: "Docker", icon: null },
        { name: "AWS", icon: null },
        { name: "Jest", icon: null },
        { name: "Postman", icon: null },
        { name: "Nginx", icon: null },
        { name: "Jira", icon: null },
        { name: "Turborepo", icon: null },
    ],
};

const experienceData = [
    {
        position: (<>FullStack Developer |<span className="text-gray-300 font-normal italic"> Typescript, Nestjs, Nextjs, Zustand, MongoDb</span></>),
        company: "Apna School App",
        location: "Jhotwara, Jaipur, Rajasthan, India",
        dates: "Oct 2024 - Present",
        description: (
            <>
                Working on an <span className="text-indigo-300 font-medium">education management system</span> using <span className="text-indigo-300 font-medium">Next.js, NestJS, Zustand, MongoDB,</span> and <span className="text-indigo-300 font-medium">TypeScript</span>. My role includes developing features for communication between teachers, students, and parents, and creating modules for data management and performance analytics.
            </>
        )
    },
    {
        position: (<>FullStack Developer |<span className="text-gray-300 font-normal italic"> Typescript, Nextjs, Expressjs, Redux, SQL, Redis</span></>),
        company: "Ubuy",
        location: "Mansarovar, Jaipur, Rajasthan, India",
        dates: "Feb 2024 - Oct 2024",
        description: (
            <>
                Leading frontend development for an <span className="text-indigo-300 font-medium">e-commerce platform</span> with a focus on enhancing <span className="text-indigo-300 font-medium">user experience</span> and implementing features like <span className="text-indigo-300 font-medium">product filtering</span> and <span className="text-indigo-300 font-medium">API integrations</span>. Using <span className="text-indigo-300 font-medium">Next.js, TypeScript, Redux, Tailwind CSS,</span> and <span className="text-indigo-300 font-medium">SQL</span> to create scalable solutions.
            </>
        )
    },
    {
        position:(<>FullStack Intern |<span className="text-gray-300 font-normal italic"> HTML5, CSS, Javascript, Nodejs, Tailwind, Firebase</span></>),
        company: "Ventureheap Private Limited",
        location: "Agrasen Nagar, Gopal Pura Mode, Jaipur, Rajasthan",
        dates: "Feb 2024 - Oct 2024",
        description: (
            <>
                Leading frontend development for an <span className="text-indigo-300 font-medium">e-commerce platform</span> with a focus on enhancing <span className="text-indigo-300 font-medium">user experience</span> and implementing features like <span className="text-indigo-300 font-medium">product filtering</span> and <span className="text-indigo-300 font-medium">API integrations</span>. Using <span className="text-indigo-300 font-medium">Next.js, TypeScript, Redux, Tailwind CSS,</span> and <span className="text-indigo-300 font-medium">SQL</span> to create scalable solutions.
            </>
        )
    }

];

const allSkills = Array.from(
    new Set(Object.values(skills).flatMap((list) => list.map((skill) => skill.name)))
);

const codeSnippet = `const fullStackDeveloper = {
  skills: {
    programmingLanguages: [
      'C', 'JavaScript', 'C++', 'TypeScript', 'Node.js'
    ],
    webFrameworks: [
      'React.js', 'REST API', 'Express.js', 'Tailwind CSS', 'Next.js', 'Chakra UI'
    ],
    databases: [
      'MongoDB', 'MySQL', 'Redis'
    ],
    toolsAndLibraries: [
      'Redux', 'Linux', 'Zustand', 'Git', 'Jira', 'Turborepo'
    ]
  },
  experience: [
    { company: 'Ubuy India', role: 'Next.js Developer', date: 'Feb’24 - Oct’24' },
    { company: 'Apna School ERP', role: 'FullStack Developer', date: 'Oct’24 - Current' }
  ]
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
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                Hi, I&apos;m <span className="text-indigo-300 font-medium">Rajeev Ranjan</span>, an Indian software engineer and freelance developer passionate about building innovative web applications. Currently based in <span className="text-indigo-300 font-medium">Jaipur</span>, I&apos;m excited to share my journey with you.
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                With a <span className="text-indigo-300 font-medium">Bachelor&apos;s degree in Computer Science</span> from <span className="text-indigo-300 font-medium">Poornima Institute of Engineering and Technology</span>, I&apos;ve developed a strong foundation in full-stack development. My experience includes working with technologies like <span className="text-indigo-300 font-medium">Nest.js, Next.js, React,</span> and <span className="text-indigo-300 font-medium">Express.js</span>. I&apos;ve collaborated on projects like the <span className="text-indigo-300 font-medium">e-commerce</span> platform for Ubuy.
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                My freelance journey began while honing my skills, enabling me to work with diverse clients and projects. I help businesses create minimum viable products (MVPs) and provide tailored solutions. I&apos;m also part of the <span className="text-indigo-300 font-medium">Dev Learn community</span>, where I conduct workshops on computer science fundamentals.
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                I thrive on problem-solving and enjoy tackling challenges, whether optimizing performance or designing user-friendly interfaces. I host workshops to share my knowledge and skills.
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                I enjoy solving algorithmic challenges and contributing to open-source projects. I&apos;m always eager to learn and explore new technologies.
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                                Thank you for taking the time to learn more about me!
                            </p>
                        </div>
                    </Reveal>
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
                                                    <h4 className="text-lg font-semibold text-gray-100">{experience.position}</h4>
                                                    <p className="mb-3 text-sm text-gray-400">
                                                        <span className="font-medium text-indigo-200">{experience.company}</span> · {experience.location}
                                                    </p>
                                                    <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                                                        {experience.description}
                                                    </p>
                                                </div>
                                            </TiltCard>
                                        </Reveal>
                                    </div>
                                );
                            })}
                        </div>
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
