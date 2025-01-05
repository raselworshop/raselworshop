import React from 'react';
import { motion } from 'framer-motion';
import bgImage from "../../../src/assets/bgLogo.jpg";

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
        <div
            className="sm:w-fit md:w-full hero  min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md mx-auto flex flex-col justify-center items-center">
                    <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">
                        <TypingEffect text="MD RASEL MIA" />
                    </h1>
                    <p className="mb-5 text-center">
                        <TypingEffect 
                        text="I am a full-stack 
web developer with a passion for creating dynamic and 
responsive web applications." />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
