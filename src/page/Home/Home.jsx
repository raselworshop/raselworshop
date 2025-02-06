import React from 'react';
import { motion } from 'framer-motion';
import bgImage from "../../../src/assets/bgLogo.jpg";
import { FaDownload } from 'react-icons/fa';
import SocialLinks from '../../component/common/Social/SocialLinks';

const TypingEffect = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="text"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home = () => {
  return (
    <motion.div
      className="container hero min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      // Overall background hover effect: slight scale up and brightness/saturation boost
      whileHover={{ scale: 1.02, filter: "brightness(1.2) saturate(1.2)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Animated overlay that changes to a colorful gradient on hover */}
      <motion.div
        className="hero-overlay absolute inset-0"
        initial={{ opacity: 0.6, background: "rgba(0, 0, 0, 0.3)" }}
        whileHover={{
          opacity: 0.8,
          background:
            "linear-gradient(45deg, rgba(255, 0, 150, 0.3), rgba(0, 204, 255, 0.3))",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      ></motion.div>

      <div className="hero-content relative flex-col text-neutral-content text-center">
        {/* Desktop View */}
        <div className="hidden max-w-md mx-auto md:flex flex-col justify-center items-center">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
            <TypingEffect text="MD RASEL MIA" />
          </h1>
          <p className="mb-5 text-center">
            <TypingEffect
              text="I am a full-stack 
web developer with a passion for creating dynamic and 
responsive web applications."
            />
          </p>
        </div>
        {/* Mobile View */}
        <div className="md:hidden max-w-md mx-auto sm:flex flex-col justify-center items-center">
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
            <TypingEffect text="MD RASEL MIA" />
          </h1>
          <p className="mb-5 text-center">
            <TypingEffect
              text="I am a full-stack 
web developer with a passion for 
creating dynamic and 
responsive web applications."
            />
          </p>
        </div>
        {/* Download Resume Button */}
        <motion.a
          href="/Frontend-developer.pdf"
          download
          whileHover={{
            scale: 1.1,
            transition: { ease: "easeIn", duration: 0.3 },
          }}
          className="btn btn-accent btn-md md:btn-lg gap-2"
        >
          <FaDownload /> Download Resume
        </motion.a>
        <section className="mt-6">
          <SocialLinks />
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
