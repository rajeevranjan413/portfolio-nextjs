import React from "react";


const skills = {
    "Programming Languages": [
        {
            name: "C",
            icon: null, // No icon specified
        },
        {
            name: "JavaScript",
            icon: (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <rect width="512" height="512" fill="#f7df1e" rx="15%"></rect>
                    <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49z"></path>
                </svg>
            ),
        },
        // Add other programming languages similarly
    ],
    "Web Frameworks": [
        {
            name: "React.js",
            icon: (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                    <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4"></circle>
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"></path>
                    </g>
                </svg>
            ),
        },
        // Add other frameworks similarly
    ],
};


const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-6 text-center text-indigo-400 animate-pulse">
                    About Me
                </h2>

                {/* Code block container */}
                <div className="relative">
                    {/* Background shadow effect */}
                    <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 hover:opacity-60 -z-10"></div>
                    <div className="bg-black p-6 md:p-12 rounded-lg shadow-lg relative overflow-hidden">
                        {/* Terminal-like header */}
                        <div className="flex items-center space-x-2 absolute top-0 left-0 p-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>

                        {/* Code content */}
                        <div className="overflow-x-auto relative">
                            {/* Shadow background effect with animation */}
                            <div className="absolute md:p-8 inset-0 text-indigo-400 rounded-lg shadow-lg shadow-animation"></div>

                            <pre className="relative bg-gray-900 rounded-2xl md:p-4 shadow-lg">
                                <code className="block text-gray-300 font-mono text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed whitespace-pre-line p-3 md:p-6">
                                    {`
const fullStackDeveloper = {
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
};`}
                                </code>

                            </pre>
                        </div>

                        {/* text content */}
                        <div className="text-gray-300 mt-6 space-y-4 p-4 sm:p-6 lg:p-8 max-w-screen-lg">
                            {/* Introduction */}
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                                {`Hi, I'm Rajeev Ranjan, a FullStack Developer skilled in various programming languages, frameworks, databases, and tools. I have experience in:`}
                            </p>

                            {/* Skills Section */}
                            <ul className="list-disc space-y-2">
                                {Object.entries(skills).map(([category, skillsList]) => (
                                    <li key={category} className="flex flex-col sm:flex-row sm:items-start space-y-1 sm:space-y-0 sm:space-x-2">
                                        <strong className="text-sm sm:text-base">{category}:</strong>
                                        <span className="flex flex-wrap gap-2 sm:gap-4">
                                            {skillsList.map((skill) => (
                                                <span key={skill.name} className="flex items-center space-x-1 sm:space-x-2">
                                                    {skill.icon && skill.icon}
                                                    <span className="text-indigo-400 text-xs sm:text-sm md:text-base">{skill.name}</span>
                                                </span>
                                            ))}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
