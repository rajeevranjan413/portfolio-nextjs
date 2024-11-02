import React from "react";

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
                    <div className="bg-black p-12 rounded-lg shadow-lg relative overflow-hidden">
                        {/* Terminal-like header */}
                        <div className="flex items-center space-x-2 absolute top-0 left-0 p-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>

                        {/* Code content */}
                        <div className="overflow-x-auto relative">
                            {/* Shadow background effect with animation */}
                            <div className="absolute p-8 inset-0 text-indigo-400 rounded-lg shadow-lg shadow-animation"></div>

                            <pre className="relative bg-gray-900 rounded-2xl p-4 shadow-lg">
                                <code className="text-gray-300 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre">
                                    {`// Hi, I'm Rajeev Ranjan
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
                        <div className="text-gray-300 space-y-4 mt-6">
                            {/* Introduction */}
                            <p className="text-sm sm:text-base">
                                {`Hi, I'm Rajeev Ranjan, a FullStack Developer skilled in various programming languages, frameworks, databases, and tools. I have experience in:`}
                            </p>

                            {/* Skills Section */}
                            <ul className="list-disc pl-5 text-sm sm:text-base space-y-2">

                                {/* Programming Languages */}
                                <li className="flex items-start space-x-2">
                                    <strong>Programming Languages:</strong>
                                    <span className="flex flex-wrap items-center space-x-4 space-y-2">

                                        {/* Language - C */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">C</span>
                                        </span>

                                        {/* Language - JavaScript */}
                                        <span className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <rect width="512" height="512" fill="#f7df1e" rx="15%"></rect>
                                                <path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49z" />
                                            </svg>
                                            <span className="text-indigo-400">JavaScript</span>
                                        </span>

                                        {/* Language - C++ */}
                                        <span className="flex items-center space-x-2">
                                            <svg className="w-5 h-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                                                <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                            </svg>
                                            <span className="text-indigo-400">C++</span>
                                        </span>

                                        {/* Language - TypeScript */}
                                        <span className="flex items-center space-x-2">

                                            <svg className="w-5 h-5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="typescript">
                                                <path fill="#007acc" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"></path>
                                            </svg>
                                            <span className="text-indigo-400">TypeScript</span>
                                        </span>

                                        {/* Language - Node.js */}
                                        <span className="flex items-center space-x-2">

                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="node-js">
                                                <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
                                            </svg>
                                            <span className="text-indigo-400">Node.js</span>
                                        </span>
                                    </span>
                                </li>

                                {/* Web Frameworks */}
                                <li className="flex items-start space-x-2">
                                    <strong>Web Frameworks:</strong>
                                    <span className="flex flex-wrap items-center space-x-4 space-y-2">

                                        {/* Framework - React.js */}
                                        <span className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="react">
                                                <g fill="#61DAFB">
                                                    <circle cx="64" cy="64" r="11.4"></circle>
                                                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                                                </g>
                                            </svg>
                                            <span className="text-indigo-400">React.js</span>
                                        </span>

                                        {/* Framework - REST API */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">REST API</span>
                                        </span>

                                        {/* Framework - Express.js */}
                                        <span className="flex items-center space-x-2">
                                            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="express">
                                                <path fill="#FF0000" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"></path>
                                            </svg>

                                            <span className="text-indigo-400">Express.js</span>
                                        </span>

                                        {/* Framework - Tailwind CSS */}
                                        <span className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="tailwind-css">
                                                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
                                            </svg>
                                            <span className="text-indigo-400">Tailwind CSS</span>
                                        </span>

                                        {/* Framework - Next.js */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Next.js</span>
                                        </span>

                                        {/* Framework - Chakra UI */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Chakra UI</span>
                                        </span>
                                    </span>
                                </li>

                                {/* Databases */}
                                <li className="flex items-start space-x-2">
                                    <strong>Databases:</strong>
                                    <span className="flex flex-wrap items-center space-x-4 space-y-2">

                                        {/* Database - MongoDB */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">MongoDB</span>
                                        </span>

                                        {/* Database - MySQL */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">MySQL</span>
                                        </span>

                                        {/* Database - Redis */}
                                        <span className="flex items-center space-x-2">
                                            <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="redis">
                                                <path fill="#D82C20" d="M6.2 52.7c6.7 3.2 43.7 18.1 49.5 20.9 5.8 2.8 10 2.8 17.4-1 7.4-3.9 42.2-18.1 48.9-21.6 3.4-1.8 4.9-3.2 4.9-4.4v-12.5c0-1.3-1.7-2.4-5-3.6-6.5-2.4-41.1-16.1-47.7-18.6-6.6-2.4-9.3-2.3-17.1.5-7.8 2.8-44.5 17.2-51.1 19.8-3.2 1.3-5 2.4-5 3.7h-.2v12.7c.2 1.2 2.1 2.5 5.4 4.1zm60.4 1.8l-20.3-8.4 29.1-4.5-8.8 12.9zm44.1-20l-17.2 6.8-1.9.7-17.2-6.8 19.1-7.5 17.2 6.8zm-50.6-12.5l-2.8-5.2 8.8 3.4 8.3-2.7-2.2 5.4 8.4 3.2-10.9 1.1-2.4 5.9-3.9-6.5-12.6-1.1 9.3-3.5zm-21.7 7.3c8.6 0 15.6 2.7 15.6 6s-7 6-15.6 6-15.6-2.7-15.6-6 7-6 15.6-6zM122 59.8c-6.7 3.5-41.4 17.8-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-43-17.7-49.6-20.9-3.4-1.6-5.3-2.9-5.3-4.2v12.7c0 1.3 1.9 2.6 5.2 4.2 6.7 3.2 43.7 18.1 49.5 20.9 5.8 2.8 10 2.8 17.4-1 7.4-3.9 42.2-18.1 48.9-21.6 3.4-1.8 4.9-3.2 4.9-4.4v-12.5c0 1.1-1.6 2.5-4.9 4.2zM122 80.5c-6.7 3.5-41.4 17.8-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-43-17.7-49.6-20.9-3.4-1.5-5.3-2.9-5.3-4.2v12.7c0 1.3 1.9 2.6 5.2 4.2 6.7 3.2 43.7 18.1 49.5 20.9 5.8 2.8 10 2.8 17.4-1 7.4-3.9 42.2-18.1 48.9-21.6 3.4-1.8 4.9-3.2 4.9-4.4v-12.5c0 1.2-1.6 2.5-4.9 4.2z"></path>
                                            </svg>
                                            <span className="text-indigo-400">Redis</span>
                                        </span>
                                    </span>
                                </li>

                                {/* Tools and Libraries */}
                                <li className="flex items-start space-x-2">
                                    <strong>Tools and Libraries:</strong>
                                    <span className="flex flex-wrap items-center space-x-4 space-y-2">

                                        {/* Tool - Redux */}
                                        <span className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="redux">
                                                <path fill="#FF0000" d="M17 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2z"></path>
                                                <path fill="#FF0000" d="M5.316 23.983c-1.534 0-2.887-.465-3.861-1.438-2.44-2.439-1.757-7.231 1.624-11.395a.5.5 0 1 1 .777.631c-3.002 3.696-3.73 8.02-1.693 10.057 2.338 2.338 7.415 1.069 11.314-2.828a15.715 15.715 0 0 0 2.346-2.975.5.5 0 1 1 .856.518 16.715 16.715 0 0 1-2.495 3.164c-2.759 2.758-6.105 4.266-8.868 4.266z"></path>
                                                <path fill="#FF0000" d="M6.453 18.327a1.985 1.985 0 0 1-1.414-.586 1.986 1.986 0 0 1-.586-1.414c0-.535.208-1.037.586-1.414.753-.755 2.071-.757 2.828 0 .378.377.586.879.586 1.414 0 .534-.208 1.036-.586 1.414s-.88.586-1.414.586zm0-3c-.267 0-.518.104-.707.293s-.293.439-.293.707c0 .267.104.518.293.707a1.025 1.025 0 0 0 1.414 0 .993.993 0 0 0 .293-.707 1.001 1.001 0 0 0-1-1z"></path>
                                                <path fill="#FF0000" d="M6.067 15.382a.499.499 0 0 1-.485-.381A16.782 16.782 0 0 1 5.109 11c0-6.065 3.14-11 7-11 3.452 0 6.356 3.871 6.908 9.205a.5.5 0 0 1-.995.104C17.533 4.571 14.991 1 12.109 1c-3.309 0-6 4.486-6 10 0 1.301.149 2.566.444 3.763a.499.499 0 0 1-.486.619z"></path>
                                                <path fill="#FF0000" d="M10.487 11.163a2.003 2.003 0 0 1-1.87-2.718 1.977 1.977 0 0 1 1.055-1.109 1.994 1.994 0 0 1 2.639 1.016 1.99 1.99 0 0 1 .039 1.53 1.984 1.984 0 0 1-1.055 1.109 1.977 1.977 0 0 1-.808.172zm-.003-3a.995.995 0 0 0-.406.087.99.99 0 0 0-.527.555c-.096.249-.089.521.02.765s.305.432.554.527c.25.097.522.09.766-.02a.99.99 0 0 0 .527-.555.995.995 0 0 0-.574-1.292 1.024 1.024 0 0 0-.36-.067zm-.609-.37h.01-.01z"></path>
                                                <path fill="#FF0000" d="M16.615 24.004c-1.258 0-2.608-.181-3.998-.557a.5.5 0 1 1 .261-.965c4.595 1.245 8.842.154 9.877-2.535 1.188-3.087-2.032-7.21-7.178-9.19a15.682 15.682 0 0 0-3.671-.938.5.5 0 1 1 .126-.993c1.303.165 2.617.5 3.904.996 5.661 2.179 9.138 6.882 7.752 10.483-.905 2.359-3.642 3.698-7.073 3.699z"></path>
                                            </svg>

                                            <span className="text-indigo-400">Redux</span>
                                        </span>

                                        {/* Tool - Linux */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Linux</span>
                                        </span>

                                        {/* Tool - Zustand */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Zustand</span>
                                        </span>

                                        {/* Tool - Git */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Git</span>
                                        </span>

                                        {/* Tool - Jira */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Jira</span>
                                        </span>

                                        {/* Tool - Turborepo */}
                                        <span className="flex items-center space-x-2">
                                            <span className="text-indigo-400">Turborepo</span>
                                        </span>
                                    </span>
                                </li>
                            </ul>

                            {/* Experience Section */}
                            <p className="text-sm sm:text-base mt-6">
                                <strong>Experience:</strong>
                            </p>
                            <ul className="list-disc pl-5 text-sm sm:text-base space-y-2">
                                <li>Next.js Developer at <span className="text-indigo-400">Ubuy India</span>, {`Feb’24 - Oct’24`}</li>
                                <li>FullStack Developer at <span className="text-indigo-400">Apna School ERP</span>, {`Oct’24 - Current`}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
