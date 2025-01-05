import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaWind, FaServer, FaNpm } from 'react-icons/fa';

const MySkills = () => {
    const skills = [
        {
            icon: <FaHtml5 />,
            title: "HTML",
            description: "Expertise in creating semantic and accessible HTML structures."
        },
        {
            icon: <FaCss3Alt />,
            title: "CSS",
            description: "Proficient in modern CSS techniques including Flexbox and Grid."
        },
        {
            icon: <FaJsSquare />,
            title: "JavaScript",
            description: "Strong knowledge of vanilla JavaScript and ES6+ features."
        },
        {
            icon: <FaReact />,
            title: "React",
            description: "Experienced in building dynamic and responsive applications using React."
        },
        {
            icon: <FaNodeJs />,
            title: "Node.js",
            description: "Skilled in building server-side applications and RESTful APIs with Node.js."
        },
        {
            icon: <FaDatabase />,
            title: "Database Management",
            description: "Experienced with relational and non-relational databases such as MySQL and MongoDB."
        },
        {
            icon: <FaGitAlt />,
            title: "Version Control",
            description: "Proficient in using Git for version control and collaboration."
        },
        {
            icon: <FaWind />,
            title: "Tailwind CSS",
            description: "Efficient in building modern, responsive designs using Tailwind CSS."
        },
        {
            icon: <FaServer />,
            title: "Express.js",
            description: "Experienced in developing robust backend applications using Express.js."
        },
        {
            icon: <FaNpm />,
            title: "npm Packages",
            description: "Proficient in using npm packages to enhance development workflow and productivity."
        }
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div key={index} className="card shadow-lg bg-gray-800 text-white">
                        <div className="card-body text-center">
                            <div className="text-6xl mb-4">{skill.icon}</div>
                            <h2 className="text-2xl font-bold mb-2">{skill.title}</h2>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MySkills;
