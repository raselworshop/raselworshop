import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaCogs, FaDownload } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { MdLibraryBooks, MdOutlineContactMail } from 'react-icons/md';
import { PiProjectorScreenChart } from 'react-icons/pi';
import { SlUser } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';
import SocialLinks from '../component/common/Social/SocialLinks';
import ProfileImage from '../component/common/profile/ProfileImage';
import Home from '../page/Home/Home';
import About from '../page/About/About';
import MySkills from '../page/MySkill/MySkills';
import MyResume from '../page/MyResume/MyResume';
import Projects from '../page/Projects/Projects';
import Contact from '../page/ContactMe/Contact';

const Main = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 1024) setSidebarVisible(false);
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' }
  };

  const navLinks = [
    { id: 'home', icon: <HiHome />, text: 'Home' },
    { id: 'about', icon: <SlUser />, text: 'About Me' },
    { id: 'resume', icon: <MdLibraryBooks />, text: 'My Resume' },
    { id: 'skills', icon: <FaCogs />, text: 'My Skills' },
    { id: 'projects', icon: <PiProjectorScreenChart />, text: 'Projects' },
    { id: 'contact', icon: <MdOutlineContactMail />, text: 'Contact' }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 w-full z-50 bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">MD RASEL MIA</h2>
          <div className="flex items-center gap-4">
            <a href="/Frontend-developer.pdf" download
              className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
              <FaDownload className="mr-2" /> Resume
            </a>
            <button onClick={toggleSidebar} className="text-white text-2xl hover:text-purple-400 transition-colors">
              {sidebarVisible ? <IoClose /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Backdrop (Mobile) */}
      {sidebarVisible && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />
      )}

      <div className="flex h-screen pt-16 lg:pt-0">
        {/* Sidebar */}
        <motion.nav
          className="fixed lg:block z-40 top-0 left-0 bg-gray-800 text-white w-64 h-full shadow-xl lg:shadow-none"
          initial="closed"
          animate={sidebarVisible ? "open" : "closed"}
          variants={sidebarVariants}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <div className="h-full flex flex-col">
            <ProfileImage />
            <div className="flex-1 flex flex-col justify-between bg-gray-900 p-4 overflow-y-auto">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={({ isActive }) => `
                        flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                        ${isActive ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' : 'hover:bg-gray-700 hover:text-white'}
                      `}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-sm font-medium">{link.text}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <div className="divider my-4" />
                <SocialLinks className="flex justify-center gap-4 mb-6" iconClass="text-2xl hover:text-purple-400 transition-colors" />
                <div className="text-center text-sm text-gray-400">
                  <p>©{new Date().getFullYear()} Raselworshop</p>
                  <p>All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeSection}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={contentVariants}
                transition={{ duration: 0.3 }}
              >
                {activeSection === "home" && <Home />}
                {activeSection === "about" && <About />}
                {activeSection === "resume" && <MyResume />}
                {activeSection === "skills" && <MySkills />}
                {activeSection === "projects" && <Projects />}
                {activeSection === "contact" && <Contact />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
