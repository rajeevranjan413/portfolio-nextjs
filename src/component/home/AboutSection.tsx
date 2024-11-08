import React from "react";


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
                        <div className="text-gray-300 mt-6 space-y-6 p-6 sm:p-8 lg:p-10 max-w-screen-lg bg-gray-800 rounded-lg shadow-lg mx-auto">
                            {/* Introduction */}
                            <div className="text-xs sm:text-sm md:text-base lg:text-lg space-y-4">
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


                            {/* Experience Section */}
                            <div className="space-y-4 mt-8">
                                <h2 className="text-2xl font-semibold text-indigo-400">Experience</h2>

                                {experienceData?.map((experience, index) => (
                                    <div key={index}>
                                        <h3 className="text-lg font-semibold text-gray-100">{experience.position}</h3>
                                        <p className="text-sm  text-gray-400">
                                            <span className="font-medium">{experience.company}</span> · {experience.location} · <span className="italic">{experience.dates}</span>
                                        </p>
                                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                                            {experience.description}
                                        </p>
                                    </div>
                                ))}
                            </div>


                            {/* Skills Section */}
                            <div className="mt-8 space-y-4">
                                <h2 className="text-2xl font-semibold text-indigo-400">Skills</h2>
                                <ul className="list-disc pl-4 space-y-3">
                                    {Object.entries(skills).map(([category, skillsList]) => (
                                        <li key={category} className="space-y-1">
                                            <strong className="text-base text-gray-100">{category}:</strong>
                                            <div className="flex flex-wrap gap-3 pt-1">
                                                {skillsList.map((skill) => (
                                                    <span key={skill.name} className="flex items-center space-x-2 bg-gray-700 px-3 py-1 rounded-md shadow-sm">
                                                        {skill.icon && skill?.icon}
                                                        <span className="text-sm sm:text-base text-indigo-400">{skill.name}</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
