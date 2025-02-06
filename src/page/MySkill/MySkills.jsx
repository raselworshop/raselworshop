import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaWind, FaServer, FaNpm } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const MySkills = () => {
    const skills = [
        { icon: <FaHtml5 className="text-[#E34F26]" />, title: "HTML", description: "Expertise in creating semantic and accessible HTML structures." },
        { icon: <FaCss3Alt className="text-[#1572B6]" />, title: "CSS", description: "Proficient in modern CSS techniques including Flexbox and Grid." },
        { icon: <FaJsSquare className="text-[#F7DF1E]" />, title: "JavaScript", description: "Strong knowledge of vanilla JavaScript and ES6+ features." },
        { icon: <FaReact className="text-[#61DAFB]" />, title: "React", description: "Experienced in building dynamic and responsive applications using React." },
        { icon: <FaNodeJs className="text-[#339933]" />, title: "Node.js", description: "Skilled in building server-side applications and RESTful APIs with Node.js." },
        { icon: <FaDatabase className="text-[#4479A1]" />, title: "Database Management", description: "Experienced with SQL and NoSQL databases." },
        { icon: <FaGitAlt className="text-[#F05032]" />, title: "Version Control", description: "Proficient in Git for version control and collaboration." },
        { icon: <FaWind className="text-[#38B2AC]" />, title: "Tailwind CSS", description: "Efficient in building modern responsive designs with Tailwind." },
        { icon: <FaServer className="text-[#68A063]" />, title: "Express.js", description: "Experienced in developing robust backend applications with Express." },
        { icon: <FaNpm className="text-[#CB3837]" />, title: "npm Packages", description: "Proficient in using npm to enhance development workflow." }
    ];

    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px 0px -100px 0px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Technical Expertise
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-24 mt-4 rounded-full" />
                </motion.h2>
                
                <motion.div 
                    ref={containerRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="relative group bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative flex flex-col items-center text-center">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + index * 0.05 }}
                                    className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110"
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    {skill.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;