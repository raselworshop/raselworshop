import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import 'react-simple-typewriter/dist/index.css';

const Test = () => {
    return (
        <div className="container mx-auto overflow-x-hidden p-4">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="bg-gray-800 text-white p-8 rounded-md shadow-md w-full">
                    <h1 className="text-4xl font-bold mb-4">
                        About Me
                    </h1>
                    <div className="divider"></div>
                    <div className="text-lg">
                        <Typewriter
                            words={["Hello! I'm MD RASEL MIA, a passionate full-stack web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to deliver exceptional user experiences through clean, efficient, and scalable code."]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <div className="text-lg mt-4">
                        <Typewriter
                            words={["In my free time, I enjoy exploring new technologies, working on personal projects, and contributing to the open-source community. When I'm not coding, you can find me reading tech blogs, enjoying outdoor activities, or spending quality time with friends and family."]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <div className="text-lg mt-4">
                        <Typewriter
                            words={["Let's connect and create something amazing together!"]}
                            loop={1}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div className="md:border-l-2 md:border-gray-400">
                    <div className="bg-gray-800 text-white p-8 rounded-md shadow-md w-full">
                        <h1 className="text-4xl font-bold mb-4">
                            Personal Information
                        </h1>
                        <div className="divider"></div>
                        {/* personal info  */}
                        <div className="text-lg mt-4">
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Name:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span> 
                                <span>
                                    <Typewriter
                                        words={[" Md Rasel Mia"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Age:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <span>
                                    <Typewriter
                                        words={[" 26"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Residency:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <span>
                                    <Typewriter
                                        words={[" Bangladeshi"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Currently:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <span>
                                    <Typewriter
                                        words={[" Malaysia"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Address:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <span>
                                    <Typewriter
                                        words={[" Kuala Lumpur, Malaysia"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Email:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <span>
                                    <Typewriter
                                        words={[" raselworshop@gmail.com"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className="mb-2 flex items-center">
                                <span className='text-lg underline'>
                                    <Typewriter
                                        words={["Whatsapp:"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                                <span>
                                    <Typewriter
                                        words={[" (+60) 11-25074037"]}
                                        loop={1}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </div>
                            <div className='mt-4'>
                                <button className='btn'>DOWNLOAD RESUME</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
