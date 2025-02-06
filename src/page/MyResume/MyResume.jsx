import React, { useRef } from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaGlobe, FaCode, FaDatabase, FaTools, FaProjectDiagram, FaGraduationCap, FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const MyResume = () => {
  // Create refs for animation triggers
  const headerRef = useRef(null);
  const objectiveRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true });
  const isObjectiveInView = useInView(objectiveRef, { once: true });
  const isSkillsInView = useInView(skillsRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });
  const isEducationInView = useInView(educationRef, { once: true });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      {/* Header Section */}
      <motion.div 
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm py-16 px-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01]"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
          MD RASEL MIA
        </h1>
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-lg text-gray-300">
            <FaGlobe className="text-purple-400 animate-pulse" /> 
            Kuala Lumpur, Banting, Malaysia
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/raselworshop" 
               className="btn btn-circle btn-ghost hover:bg-blue-700/20 transition-all duration-300"
               aria-label="LinkedIn Profile">
              <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-300" />
            </a>
            <a href="https://github.com/raselworshop" 
               className="btn btn-circle btn-ghost hover:bg-purple-700/20 transition-all duration-300"
               aria-label="GitHub Profile">
              <FaGithub className="text-2xl text-purple-400 hover:text-purple-300" />
            </a>
          </div>
        </div>
        <a href="/Frontend-developer.pdf" download 
           className="btn btn-lg gap-2 bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white hover:scale-105 transition-transform">
          <FaDownload className="text-xl" /> Download Resume
        </a>
      </motion.div>

      {/* Career Objective */}
      <motion.div 
        ref={objectiveRef}
        initial={{ opacity: 0, x: -100 }}
        animate={isObjectiveInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="card bg-gray-800/50 backdrop-blur-sm shadow-xl mb-8 border border-gray-700/30 hover:border-purple-500/30 transition-all"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-blue-400">
            <FaStar className="text-yellow-400 animate-spin-slow" /> 
            Career Objective
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Aspiring front-end developer focused on creating innovative web solutions and enhancing user experiences through modern technologies. Committed to continuous learning in dynamic environments.
          </p>
        </div>
      </motion.div>

      {/* Technical Skills Grid */}
      <motion.div 
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6 mb-8"
      >
        {/* Technical Skills */}
        <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4 text-blue-400">
              <FaCode className="text-blue-400" /> Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'Tailwind', 'React.js', 'JavaScript'].map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="badge badge-lg bg-blue-500/20 text-blue-400 border-blue-500/30"
                >
                  {skill}
                </motion.div>
              ))}
              {['Node.js', 'Express.js', 'MongoDB'].map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="badge badge-lg bg-purple-500/20 text-purple-400 border-purple-500/30"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Libraries */}
        <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4 text-purple-400">
              <FaTools className="text-purple-400" /> Tools & Libraries
            </h2>
            <div className="flex flex-wrap gap-3">
              {['DaisyUI', 'Material UI', 'Figma'].map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="badge badge-lg bg-blue-500/20 text-blue-400 border-blue-500/30"
                >
                  {tool}
                </motion.div>
              ))}
              {['Firebase', 'Git', 'Postman', 'Vercel', 'Netlify'].map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isSkillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="badge badge-lg bg-purple-500/20 text-purple-400 border-purple-500/30"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all mb-8"
      >
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-blue-400">
            <FaProjectDiagram className="text-purple-400" /> Key Projects
          </h2>
          
          <div className="space-y-6">
            {/* Project 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={isProjectsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group bg-gray-700/20 p-6 rounded-xl transition-all hover:bg-gray-700/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">🚀 Service Review System</h3>
              <p className="mb-3 text-gray-300">Full-stack service feedback platform with user authentication and CRUD operations</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {['React.js', 'Node.js', 'MongoDB'].map((tech, index) => (
                  <div key={index} className="badge badge-outline border-blue-500/30 text-blue-400 bg-blue-500/10">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="btn btn-sm bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30">
                  Live Demo
                </button>
                <button className="btn btn-sm bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30">
                  Source Code
                </button>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isProjectsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="group bg-gray-700/20 p-6 rounded-xl transition-all hover:bg-gray-700/30 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
              <h3 className="text-xl font-semibold mb-2 text-purple-400">🍴 Bistro Restaurant Management</h3>
              <p className="mb-3 text-gray-300">Restaurant order management system with Stripe payment integration</p>
              <div className="flex flex-wrap gap-2">
                {['Express.js', 'Stripe', 'Formik'].map((tech, index) => (
                  <div key={index} className="badge badge-outline border-purple-500/30 text-purple-400 bg-purple-500/10">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <button className="btn btn-sm bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30">
                  Case Study
                </button>
                <button className="btn btn-sm bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30">
                  Video Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Education & Languages */}
      <motion.div 
        ref={educationRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Education */}
        <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4 text-blue-400">
              <FaGraduationCap className="text-blue-400" /> Education
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700/20 p-4 rounded-lg">
                <p className="font-medium text-blue-400">Bachelor of Arts</p>
                <p className="text-sm text-gray-300">Jadurchar Model College</p>
                <p className="text-xs text-gray-400 mt-2">2021 - Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/30 transition-all">
          <div className="card-body">
            <h2 className="card-title text-xl mb-4 text-purple-400">🌍 Languages</h2>
            <div className="space-y-4">
              {[
                { language: 'Bangla', level: 'Native', color: 'bg-green-500', width: 'w-full' },
                { language: 'English', level: 'Fluent', color: 'bg-blue-500', width: 'w-4/5' },
                { language: 'Malay', level: 'Learning', color: 'bg-yellow-500', width: 'w-2/5' }
              ].map((lang, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{lang.language}</span>
                    <span className="text-gray-400">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-gray-700/50 rounded-full">
                    <div className={`${lang.color} ${lang.width} h-full rounded-full transition-all duration-1000`}/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyResume;