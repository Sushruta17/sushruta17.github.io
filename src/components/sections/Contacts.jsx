import React, { useState } from 'react';
import {
    Mail,
    MapPin,
    Github,
    Linkedin,
    Send,
    MessageSquare
} from 'lucide-react';
import LeetCodeIcon from '../../ui/LeetCodeIcon.jsx';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all fields' });
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        leetcode: LeetCodeIcon,
    };

    return (
        <section id="contact" className="relative py-24 bg-gradient-to-b from-blue-50/30 to-indigo-50/40 overflow-hidden">
            <RadialGradientBackground variant="contact" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6">
                            <MessageSquare className='w-4 h-4 text-primary' />
                            <span className="text-sm text-primary font-medium">Get In Touch</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeIn delay={100}>
                        <div className='glass rounded-2xl p-8 shadow-lg'>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor="name" className='block text-sm font-medium text-slate-700 mb-2'>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300'
                                        placeholder='Your Name'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-slate-700 mb-2'>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='your.email@example.com'
                                        className='w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className='block text-sm font-medium text-slate-700 mb-2'>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder='Tell me about your project or opportunity...'
                                        className='w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group'
                                >
                                    <span>Send Message</span>
                                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                                </button>

                                {status.message && (
                                    <div
                                        className={`p-4 rounded-xl ${status.type === 'success'
                                            ? 'bg-green-50 border border-green-200 text-green-700'
                                            : 'bg-red-50 border border-red-200 text-red-700'
                                            }`}
                                    >
                                        {status.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </FadeIn>

                    {/* Contact Info */}
                    <FadeIn delay={200}>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                                    Let's Build Something Together
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team. Feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Email Card */}
                                <div className="group glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-3d">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                                            <Mail className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-500 mb-1">Email</p>
                                            <a
                                                href={`mailto:${PERSONAL_INFO.email}`}
                                                className="text-slate-800 hover:text-primary transition-colors font-medium"
                                            >
                                                {PERSONAL_INFO.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Card */}
                                <div className="group glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-3d">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                                            <MapPin className='w-6 h-6 text-primary' />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm text-slate-500 mb-1">Location</p>
                                            <p className="text-slate-800 font-medium">{PERSONAL_INFO.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <p className="text-sm text-slate-500 mb-4">Connect With Me</p>
                                <div className="flex gap-4">
                                    {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([platform, url]) => {
                                        const Icon = socialIcons[platform];
                                        return Icon ? (
                                            <a
                                                key={platform}
                                                href={url}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className='p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary/30 hover:scale-110 transition-all duration-300 group'
                                            >
                                                <Icon className="w-6 h-6 text-slate-500 group-hover:text-primary transition-colors" />
                                            </a>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}

export default Contacts
