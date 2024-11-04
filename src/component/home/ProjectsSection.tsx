
import React from "react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
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
    // {
    //     title: "Portfolio Website",
    //     technologies: "HTML, CSS, JS, EmailJs",
    //     description: "Created a portfolio site with HTML, CSS, and JS, featuring a dark/light mode toggle and email integration. The site is optimized for static hosting and user-friendly navigation.",
    //     image: "https://via.placeholder.com/300x200",
    //     link: "#",
    //     githubLink: "#",
    // },
];


const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover rounded-t-lg mb-4 max-h-48 sm:max-h-56"
                            />
                            <h3 className="text-lg sm:text-xl font-bold mb-2 text-indigo-400">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-xs sm:text-sm lg:text-base italic mb-2">
                                <span className="font-semibold">Technologies:</span> {project.technologies}
                            </p>
                            <p className="text-gray-400 flex-grow text-sm sm:text-base">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center mt-2">
                                <a href={project.link} className="text-indigo-400 hover:underline text-sm sm:text-base">
                                    [Link]
                                </a>
                                <a href={project.githubLink} className="text-indigo-400 hover:underline">
                                    <FaGithub className="inline-block text-lg" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
