import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Bistro Boss",
        description: "An engaging restaurant management system with features to manage orders, reservations, and staff.",
        github: "https://github.com/raselworshop/Restaurant-client",
        demo: "https://bistro-boss-a0351.web.app"
    },
    {
        title: "Dragon News",
        description: "A news aggregation platform providing the latest updates and articles from various sources.",
        github: "https://github.com/raselworshop/Dragon_News",
        demo: "https://dragon-news-6acf2.web.app"
    },
    {
        title: "Eco-Adventure Experiences",
        description: "A website promoting eco-friendly adventure tours and experiences for nature enthusiasts.",
        github: "https://github.com/programming-hero-web-course1/b10-a9-authentication-raselworshop",
        demo: "https://eco-adventure-experience-ddce1.web.app"
    },
    {
        title: "Job Portal",
        description: "A job portal for listing job openings and applying for jobs online.",
        github: "https://github.com/raselworshop/job-portal-client",
        demo: "https://job-portal-63338.web.app"
    },
    {
        title: "Movie Portal",
        description: "A movie database platform showcasing popular movies and user reviews.",
        github: "https://github.com/programming-hero-web-course2/b10-a10-client-side-raselworshop",
        demo: "https://movie-portal-20201.web.app"
    },
    {
        title: "PlantNet",
        description: "A plant identification app using machine learning to identify plant species.",
        github: "https://github.com/raselworshop/plantNet-Client",
        demo: "https://plantnet-39b11.web.app"
    },
    {
        title: "Service Review",
        description: "A service review platform where users can rate and review various services.",
        github: "https://github.com/programming-hero-web-course2/b10a11-client-side-raselworshop",
        demo: "https://service-review-b0708.web.app"
    },
    {
        title: "Coffee Master",
        description: "A Firebase authentication demo with real-time database integration for managing coffee recipes.",
        github: "https://github.com/yourusername/simple-firebase-c39f2",
        demo: "https://simple-firebase-c39f2.web.app"
    },
    {
        title: "SoloSphere",
        description: "A social networking platform for connecting like-minded individuals.",
        github: "https://github.com/yourusername/solosphere-41948",
        demo: "https://solosphere-41948.web.app"
    },
    {
        title: "Travel Guru",
        description: "A travel planning platform with features to book flights, hotels, and activities.",
        github: "https://github.com/raselworshop/Travel_Guru",
        demo: "https://travel-guru-c27eb.web.app"
    }
];

const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // একটু বেশি সময় নেবে 
                delayChildren: 0.5, // শুরুতে একটু দেরি হবে 
                ease: "easeInOut", // স্মুথ অ্যানিমেশন
                duration: 1.2 // টাইম বাড়ানো
            }
        }
    };
    
    const itemVariants = (index) => {
        const animations = [
            { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeInOut" } } },
            { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeInOut" } } },
            { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } } }
        ];
        return animations[index % animations.length]; 
    };
    

    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-24 mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:4 lg:gap-8">
                    {projects.map((project, index) => {
                        const directions = ["left", "right", "bottom"];
                        return (
                            <motion.div 
                                key={index}
                                custom={directions[index % directions.length]}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={itemVariants(index)}
                                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex flex-col h-full">
                                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {project.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4 flex-1">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4 mt-auto">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="btn btn-sm bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 transition-all"
                                        >
                                            <FaGithub className="mr-2" /> GitHub
                                        </a>
                                        {project.demo && (
                                            <a 
                                                href={project.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn-sm bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30 transition-all"
                                            >
                                                <FaExternalLinkAlt className="mr-2" /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
