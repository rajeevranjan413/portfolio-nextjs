
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import SectionHeading from "../ui/SectionHeading";

const projectsData = [
    {
        title: "Design Editor - 3D Product Mockups",
        technologies: "Python, JavaScript, WebGL, psd-tools, OpenCV, NumPy",
        description: "Built a multi-product mockup editor that extracts the exact grid-warp from Photoshop smart objects into UV meshes, then renders uploaded artwork live onto hoodies, t-shirts and swimwear with a two-pass WebGL pipeline: per-panel masks plus fabric shading.",
        image: "/assets/images/design-editor.jpg",
        link: "#",
        githubLink: "#",
    },
    {
        title: "Ubuy WebApp - Ecom Product",
        technologies: "TypeScript, Nextjs, Reactjs, Express, Redux, SQL, Redis, Tailwind",
        description: "Developed a responsive e-commerce platform with Next.js, featuring SSR, multiple product variations, and pre-order options. Enhanced performance and API efficiency, and added robust filtering and sorting options.",
        image: "/assets/images/ubuy.png", 
        link: "https://www.ubuy.bs/",
        githubLink: "#",
    },
    {
        title: "OnlineBanks - Fintech Product",
        technologies: "TypeScript, Nextjs, Nestjs, Reactjs, Zustand, MongoDB, Chakra UI",
        description: "Built a fintech solution for managing loans, credit cards, and savings. The platform offers easy access to financial products, secure handling, and user-friendly comparisons for better decision-making.",
        image: "/assets/images/onlinebank.png",
        link: "https://onlinebanks.in/",
        githubLink: "#",
    },
    {
        title: "Apna School - ERP System",
        technologies: "TypeScript, Next.js, NestJS, Reactjs, MongoDB, Tailwind CSS",
        description: "Created a cloud-based ERP for schools to support communication among staff, students, and parents. Integrates data into a single platform with customizable modules for better operations and decision-making.",
        image: "/assets/images/apnaschool.png",  
        link: "https://apnaschoolapp.com/",
        githubLink: "#",
    },
    {
        title: "Online Bank Dashboard",
        technologies: "TypeScript, Next.js, Nestjs, Zustand, MongoDB, Chakra UI",
        description: "Developed a role-based dashboard for Online Bank with features like user management, data analytics, and secure access control, designed for admins, system admins, and staff.",
        image: "/assets/images/dashboard.png", 
        link: "#",
        githubLink: "#",
    },
    
    // {
    //     title: "DNS Resolver",
    //     technologies: "UDP Protocols, JavaScript",
    //     description: "Designed a DNS resolver to convert domain names to IPs, utilizing JavaScript for DNS query parsing. Efficiently manages multiple query types with reliable resolution processes.",
    //     image: "https://via.placeholder.com/300x200", 
    //     link: "#",
    //     githubLink: "#",
    // },
];


const ProjectsSection = () => {
    return (
        <section id="projects" className="relative py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading eyebrow="// things i've built" title="My Projects" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {projectsData.map((project, index) => (
                        <Reveal key={index} from="flip" delay={(index % 3) * 0.12}>
                            <TiltCard className="rounded-2xl">
                                <div
                                    className="gradient-border h-full"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <div
                                        className="group flex h-full flex-col rounded-[1.2rem] bg-[#0b0d22]/90 p-4 lg:p-5"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div
                                            className="relative mb-5 overflow-hidden rounded-xl"
                                            style={{ transform: "translateZ(40px)" }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="h-48 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-52"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d22] via-transparent to-transparent opacity-80" />
                                            <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 font-mono text-xs text-indigo-200 backdrop-blur">
                                                0{index + 1}
                                            </span>
                                        </div>
                                        <h3
                                            className="text-lg sm:text-xl font-bold mb-3 text-white"
                                            style={{ transform: "translateZ(30px)" }}
                                        >
                                            {project.title}
                                        </h3>
                                        <div className="mb-3 flex flex-wrap gap-1.5" style={{ transform: "translateZ(20px)" }}>
                                            {project.technologies.split(",").map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md border border-indigo-400/20 bg-indigo-500/10 px-2 py-0.5 font-mono text-[11px] text-indigo-200"
                                                >
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-400 flex-grow text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div
                                            className="mt-5 flex items-center justify-between border-t border-white/5 pt-4"
                                            style={{ transform: "translateZ(25px)" }}
                                        >
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 transition hover:gap-3 hover:text-white"
                                            >
                                                Live Demo <FiArrowUpRight />
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                aria-label={`${project.title} source code`}
                                                className="text-xl text-gray-400 transition hover:rotate-12 hover:text-white"
                                            >
                                                <FaGithub />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
