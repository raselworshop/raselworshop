import React from 'react';
import { FaLaptopCode, FaDatabase, FaCodeBranch, FaPaintBrush, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Web Development",
            description: "Building responsive and dynamic websites using the latest web technologies."
        },
        {
            icon: <FaShoppingCart />,
            title: "E-commerce Development",
            description: "Creating and managing online stores with secure payment gateways and seamless user experiences."
        },
        {
            icon: <FaDatabase />,
            title: "Database Management",
            description: "Designing and managing efficient and secure databases for your applications."
        },
        {
            icon: <FaCodeBranch />,
            title: "Version Control",
            description: "Using version control systems to manage and collaborate on code projects."
        },
        {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            description: "Designing user-friendly interfaces and experiences for your web and mobile applications."
        },
        {
            icon: <FaSearch />,
            title: "SEO Optimization",
            description: "Improving your website's visibility and ranking on search engines."
        }
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">My Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
