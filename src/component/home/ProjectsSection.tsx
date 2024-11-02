import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-16 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-indigo-400">
                            Ubuy E-commerce WebApp
                        </h3>
                        <p className="text-gray-300 mb-2">
                            <span className="font-semibold">Technologies:</span> TypeScript,
                            Next.js, Redux, Tailwind
                        </p>
                        <p className="text-gray-400 mb-4 flex-grow">
                            Built a responsive web app with Next.js (SSR). Integrated 4+
                            product variations and pre-order functionality. Led frontend
                            development in TypeScript, optimizing API performance. Implemented
                            5+ search filters and sorting options.
                        </p>
                        {/* Flex container for Link and GitHub Icon */}
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-indigo-400 hover:underline">
                                [Link]
                            </a>
                            <a href="#" className="text-indigo-400 hover:underline">
                                <FaGithub className="inline-block text-lg" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-indigo-400">
                            DNS Resolver
                        </h3>
                        <p className="text-gray-300 mb-2">
                            <span className="font-semibold">Technologies:</span> UDP
                            Protocols, JavaScript
                        </p>
                        <p className="text-gray-400 mb-4 flex-grow">
                            Built a DNS resolver to translate domain names into IP addresses.
                            Implemented using native JavaScript for querying and parsing DNS
                            records. Designed to handle multiple DNS query types with
                            efficient resolution.
                        </p>
                        {/* Flex container for Link and GitHub Icon */}
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-indigo-400 hover:underline">
                                [Link]
                            </a>
                            <a href="#" className="text-indigo-400 hover:underline">
                                <FaGithub className="inline-block text-lg" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative flex flex-col">
                        <h3 className="text-xl font-bold mb-2 text-indigo-400">
                            Portfolio Website
                        </h3>
                        <p className="text-gray-300 mb-2">
                            <span className="font-semibold">Technologies:</span> HTML, CSS,
                            JS, EmailJs
                        </p>
                        <p className="text-gray-400 mb-4 flex-grow">
                            Developed and deployed a static website using HTML, CSS, and
                            JavaScript. Implemented dark/light mode toggle and email
                            integration. Hosted on a static web server.
                        </p>
                        {/* Flex container for Link and GitHub Icon */}
                        <div className="flex justify-between items-center mt-4">
                            <a href="#" className="text-indigo-400 hover:underline">
                                [Link]
                            </a>
                            <a href="#" className="text-indigo-400 hover:underline">
                                <FaGithub className="inline-block text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
