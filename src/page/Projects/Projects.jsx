import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
    return (
        <div className="container mx-auto p-8">
            <div className='bg-gray-800 text-white p-6 rounded-lg mb-3'>
                <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="card shadow-lg bg-gray-800 text-white">
                        <div className="card-body">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="mb-2">{project.description}</p>
                            <div className="mb-4">
                                <strong>Technologies:</strong> Firebase, React, Tailwind CSS
                            </div>
                            <div className="flex justify-between">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-sm">
                                    <FaGithub className="mr-2" /> GitHub
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                                        <FaExternalLinkAlt className="mr-2" /> Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
