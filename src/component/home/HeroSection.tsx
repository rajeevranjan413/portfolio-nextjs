import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const HeroSection = () => {
    return (
        <section className="bg-gray-900 text-white py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-bold mb-6 md:text-6xl">
                    Hi, I'm Rajeev Ranjan
                </h1>

                {/* Typing animation */}
                <p className="typing-animation text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-full break-words">
                    FullStack Developer with experience in React, Next.js, Node.js, and
                    more.
                </p>

                <div></div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-indigo-500 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-indigo-500 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-indigo-500 transition duration-300"
                    >
                        <FaTwitter />
                    </a>
                </div>

                {/* Buttons */}
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
                    <a
                        href="#projects"
                        className="bg-indigo-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 transition duration-300"
                    >
                        See My Work
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-transparent border border-indigo-500 text-indigo-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-500 hover:text-white transition duration-300"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};
