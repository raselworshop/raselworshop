import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // console.log(form.current)
        // console.log(e.target)
        const data = {
            name: formData.user_name,
            email: formData.user_email,
            message: formData.message
        }

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                  console.log('SUCCESS!');
                  setStatus('success');
                  toast.success("Message sent successfully!");
                },
                (error) => {
                    setStatus('error');
                //   console.log('FAILED...', error.text);
                  toast.error('Something went wrong!');
                },
              );

            const response = await axios.post("https://raselworshop-portfolio-server.vercel.app/email", 
                data               
            );

            // if (response.status === 200) {
            //     setFormData({ name: '', email: '', message: '' });
            //     setStatus('success');
            //     toast.success("Message sent successfully!");
            // } else {
            //     setStatus('error');
            //     toast.error('Something went wrong!');
            // }
        } catch (error) {
            // console.error(error);
            // setStatus('error');
            // toast.error(error.response?.data || "Failed to send message");
        }
    };


    return (
        <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
            {/* Heading */}
            <motion.h1
                className="text-4xl font-bold text-center mb-12 text-white"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Contact Me
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                    className="bg-gray-900 p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 1,
                        boxShadow: '0px 0px 20px rgba(66, 153, 225, 0.6)'
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" ref={form} >
                        <div>
                            <label className="block text-gray-300 mb-2">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 border-none text-white font-semibold rounded-md hover:scale-105 transition-transform duration-300"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center mt-4">
                                Failed to send message. Please try again.
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    className="bg-gray-900 p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    whileHover={{
                        scale: 1.05,
                        rotate: -1,
                        boxShadow: '0px 0px 20px rgba(66, 153, 225, 0.6)'
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <motion.p
                            className="flex items-center text-gray-300 transition-colors"
                            whileHover={{ color: '#4299e1' }} // Blue-500
                        >
                            <FaEnvelope className="mr-3" />
                            raselworshop@gmail.com
                        </motion.p>
                        <motion.p
                            className="flex items-center text-gray-300 transition-colors"
                            whileHover={{ color: '#4299e1' }}
                        >
                            <FaPhone className="mr-3" />
                            (+60) 11-25074037
                        </motion.p>
                        <motion.p
                            className="flex items-center text-gray-300 transition-colors"
                            whileHover={{ color: '#4299e1' }}
                        >
                            <FaMapMarkerAlt className="mr-3" />
                            Kuala Lumpur, Malaysia
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
