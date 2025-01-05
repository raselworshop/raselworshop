import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://raselworshop-portfolio-server.vercel.app/send-email', formData)
        .then((response) => {
                setFormData({ name: '', email: '', message: '' });  // Clear form after sending
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.log(error)
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="input input-bordered w-full" placeholder="Your Email" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} className="textarea textarea-bordered w-full" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <p className="mb-2"><FaEnvelope className="inline mr-2" /> raselworshop@gmail.com</p>
                    <p className="mb-2"><FaPhone className="inline mr-2" /> (+60) 11-25074037</p>
                    <p className="mb-2"><FaMapMarkerAlt className="inline mr-2" /> Kuala Lumpur, Malaysia</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
