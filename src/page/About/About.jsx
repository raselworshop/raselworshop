import React, { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Services from './services/Services';
import { FaDownload, FaUser, FaMapMarkerAlt, FaFlag, FaEnvelope, FaWhatsapp, FaCode, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const personalInfo = [
        { icon: <FaUser className="text-blue-400" />, label: "Name:", value: "Md Rasel Mia" },
        { icon: <FaUser className="text-blue-400" />, label: "Age:", value: "26" },
        { icon: <FaFlag className="text-blue-400" />, label: "Residency:", value: "Bangladeshi" },
        { icon: <FaMapMarkerAlt className="text-blue-400" />, label: "Currently:", value: "Malaysia" },
        { icon: <FaMapMarkerAlt className="text-blue-400" />, label: "Address:", value: "Kuala Lumpur, Malaysia" },
        { icon: <FaEnvelope className="text-blue-400" />, label: "Email:", value: "raselworshop@gmail.com" },
        { icon: <FaWhatsapp className="text-blue-400" />, label: "Whatsapp:", value: "(+60) 11-25074037" }
    ];

    // Create refs for animation triggers
    const headerRef = useRef(null);
    const aboutTextRef = useRef(null);
    const personalInfoRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const isAboutTextInView = useInView(aboutTextRef, { once: true });
    const isPersonalInfoInView = useInView(personalInfoRef, { once: true });

    return (
        <div className=" lg:px-4 py-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
            {/* Header Section */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: -50 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='mb-12 text-center md:text-left'
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    About Me
                </h1>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-24 mt-4 rounded-full" />
            </motion.div>

            {/* Main Content */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                {/* About Text */}
                <motion.div
                    ref={aboutTextRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={isAboutTextInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="lg:col-span-2 space-y-6"
                >
                    <div className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
                            <Typewriter
                                words={['Full-Stack Web Developer']}
                                loop={1}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                            />
                        </h1>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            Hello! I'm MD RASEL MIA, a passionate full-stack web developer with a knack for creating dynamic
                            and responsive web applications. With expertise in both frontend and backend technologies,
                            I craft exceptional digital experiences through clean, efficient, and scalable solutions.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            When I'm not coding, you'll find me exploring new tech trends, contributing to open-source projects,
                            or enjoying outdoor adventures. Let's connect and bring innovative ideas to life!
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    >
                        {/* Highlight 1: Expertise */}
                        <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all">
                            <div className="text-4xl mb-4 text-blue-400">
                                <FaCode className="inline-block animate-pulse" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Full-Stack Expertise</h3>
                            <p className="text-gray-300">
                                Proficient in both frontend and backend development, delivering end-to-end solutions with modern tech stacks like <span className="text-blue-400">React</span>, <span className="text-purple-400">Node.js</span>, and <span className="text-blue-400">MongoDB</span>.
                            </p>
                        </div>

                        {/* Highlight 2: Problem Solver */}
                        <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all">
                            <div className="text-4xl mb-4 text-purple-400">
                                <FaProjectDiagram className="inline-block animate-bounce" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-purple-400">Creative Problem Solver</h3>
                            <p className="text-gray-300">
                                Adept at tackling complex challenges with innovative solutions, ensuring scalable and maintainable code for real-world applications.
                            </p>
                        </div>

                        {/* Highlight 3: Continuous Learner */}
                        <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all">
                            <div className="text-4xl mb-4 text-blue-400">
                                <FaGraduationCap className="inline-block animate-spin-slow" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Lifelong Learner</h3>
                            <p className="text-gray-300">
                                Constantly updating my skills with the latest technologies and best practices to stay ahead in the ever-evolving tech landscape.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Personal Information */}
                <motion.div
                    ref={personalInfoRef}
                    initial={{ opacity: 0, x: 100 }}
                    animate={isPersonalInfoInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="flex md:border-l-2 md:border-gray-700/30 md:pl-8"
                >
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/30 transition-all">
                        <h2 className="text-2xl font-bold mb-6 text-purple-400">
                            Personal Details
                        </h2>
                        <div className="space-y-4">
                            {personalInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isPersonalInfoInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center space-x-4"
                                >
                                    <span className="text-2xl">{info.icon}</span>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm">{info.label}</p>
                                        <p className="text-gray-200 font-medium">{info.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isPersonalInfoInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="mt-8"
                        >
                            <a href="/Frontend-developer.pdf" download
                                className="btn w-full bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white 
                                         hover:scale-[1.02] transition-transform">
                                <FaDownload className="mr-2" /> Download Resume
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Services Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-16"
            >
                <Services />
            </motion.div>
        </div>
    );
};

export default About;