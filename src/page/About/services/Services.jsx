import React, { useRef, useEffect } from 'react';
import { FaLaptopCode, FaDatabase, FaPaintBrush, FaSearch, FaShoppingCart, FaGithub } from 'react-icons/fa';
import { useInView } from 'framer-motion';

const Services = () => {
    const services = [
        {
            icon: <FaLaptopCode className="text-blue-500" />,
            title: "Web Development",
            description: "Crafting responsive, dynamic websites with modern stacks like React & Next.js",
            color: "from-blue-500/20 to-blue-600/10"
        },
        {
            icon: <FaShoppingCart className="text-purple-500" />,
            title: "E-commerce Solutions",
            description: "Building secure online stores with payment integration & inventory management",
            color: "from-purple-500/20 to-purple-600/10"
        },
        {
            icon: <FaDatabase className="text-emerald-500" />,
            title: "Database Architecture",
            description: "Designing scalable MongoDb solutions with optimal performance",
            color: "from-emerald-500/20 to-emerald-600/10"
        },
        {
            icon: <FaGithub />,
            title: "Version Control",
            description: "Using version control (Git) systems to manage and collaborate on code projects.",
            color: "from-amber-500/20 to-amber-600/10"
        },
        {
            icon: <FaPaintBrush className="text-pink-500" />,
            title: "UI/UX Design",
            description: "Creating intuitive interfaces with user-centered design principles",
            color: "from-pink-500/20 to-pink-600/10"
        },
        {
            icon: <FaSearch className="text-cyan-500" />,
            title: "SEO Optimization",
            description: "Boosting search rankings through technical & content strategies",
            color: "from-cyan-500/20 to-cyan-600/10"
        }
    ];

    return (
        <section className="py-6 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Professional Services
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

    // Determine animation direction based on index
    const directions = [
        'translateX(-100%)', 
        'translateX(100%)', 
        'translateY(100%)',
        'translateX(-100%)',
        'translateX(100%)',
        'translateY(100%)'
    ];

    return (
        <div 
            ref={ref}
            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            style={{
                transform: isInView ? "none" : directions[index],
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            <div className="relative flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <div className="text-4xl">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

export default Services;