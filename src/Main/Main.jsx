import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaCogs } from 'react-icons/fa';
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
// import Test from '../page/About/Test';

const Main = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
        if (window.innerWidth < 1024) {
            setSidebarVisible(false);  // Close the sidebar on mobile view after navigation
        }
    };

    const variants = {
        initial: {
            y: '100%',
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="relative">
            <div className='lg:hidden fixed top-0 right-0 z-50 bg-gray-800 text-white flex justify-between items-center p-2 w-full'>
                <h2>MD RASEL MIA</h2>
                <button className="btn btn-sm" onClick={toggleSidebar}>
                    {sidebarVisible ? <IoClose /> : <FaBars />}
                </button>
            </div>

            <div className="lg:flex h-screen">
                <div className={`fixed lg:relative z-40 top-8 left-0 bg-gray-800 text-white w-44 h-full transform ${sidebarVisible ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:translate-x-0 overflow-y-auto lg:overflow-y-visible`}>
                    <div>
                        <ProfileImage />
                    </div>
                    <div className="menu flex max-h-screen flex-col gap-2 p-4 bg-gray-900">
                        <ul className='flex-grow flex flex-col gap-2'>
                            <li onClick={() => handleNavClick("home")}><NavLink className={'text-center flex gap-2'}><HiHome className='pr' /><span>Home</span></NavLink></li>
                            <li onClick={() => handleNavClick("about")}><NavLink className={'text-center flex gap-2'}><SlUser /><span>About Me</span></NavLink></li>
                            <li onClick={() => handleNavClick("resume")}><NavLink className={'text-center flex gap-2'}><MdLibraryBooks /><span>My Resume</span></NavLink></li>
                            <li onClick={() => handleNavClick("skills")}><NavLink className={'text-center flex gap-2'}><FaCogs /><span>My Skills</span></NavLink></li>
                            <li onClick={() => handleNavClick("projects")}><NavLink className={'text-center flex gap-2'}><PiProjectorScreenChart /><span>Projects</span></NavLink></li>
                            <li onClick={() => handleNavClick("contact")}><NavLink className={'text-center flex gap-2'}><MdOutlineContactMail /><span>Contact</span></NavLink></li>
                        </ul>
                        <div className="divider"></div>
                        <div className='mt-auto flex flex-col'>
                            <div className='mb-4'>
                                <SocialLinks />
                            </div>
                            <aside className='text-gray-400 text-center'>
                                <p>©{new Date().getFullYear()} <span>Raselworshop</span></p>
                                <p>All right reserved</p>
                            </aside>
                        </div>
                    </div>
                </div>

                {/* right content  */}
                <div className="flex-1 px-2 md:p-2 mt-8 lg:mt-0">
                    <motion.div
                        key={activeSection}
                        initial="initial"
                        animate="animate"
                        variants={variants}
                    >
                        {activeSection === "home" && <div><Home /></div>}
                        {activeSection === "about" && <div><About /></div>}
                        {activeSection === "resume" && <div><MyResume/></div>}
                        {activeSection === "skills" && <div><MySkills/></div>}
                        {activeSection === "projects" && <div><Projects/></div>}
                        {activeSection === "contact" && <div><Contact/></div>}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Main;
