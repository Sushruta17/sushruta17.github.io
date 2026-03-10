import React from 'react';
import { Download, Code2, Sparkles, Target, Zap } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: 'Full-Stack Development',
            description: 'Building end-to-end web applications with modern frameworks and best practices.',
        },
        {
            icon: Target,
            title: 'Problem Solving',
            description: 'Strong foundation in DSA and systems programming from IIT coursework.',
        },
        {
            icon: Zap,
            title: 'Quick Learner',
            description: 'Adaptable to new technologies and frameworks with hands-on project experience.',
        },
    ];

    return (
        <section id="about" className='relative py-24 bg-gradient-to-b from-indigo-50/40 to-blue-50/30 overflow-hidden'>
            <RadialGradientBackground variant='about' />

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Main Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
                    {/* Left Column - Content */}
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-6'>
                            <FadeIn delay={60}>
                                <div className='inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full w-fit'>
                                    <Sparkles className='w-4 h-4 text-primary' />
                                    <span className='text-sm text-primary font-medium'>
                                        About Me
                                    </span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={100}>
                                <h2 className='text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight'>
                                    Passionate About Building
                                    <span className='gradient-text'> Impactful Software</span>
                                </h2>
                            </FadeIn>

                            <FadeIn delay={200}>
                                <p className='text-base text-slate-600 leading-relaxed'>
                                    {PERSONAL_INFO.bio}
                                </p>
                            </FadeIn>
                        </div>

                        <FadeIn delay={300}>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                                {STATS.map((stat, index) => (
                                    <div key={index} className='relative group'>
                                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
                                        <div className="pl-4">
                                            <div className="text-2xl font-bold gradient-text mb-1">
                                                {stat.value}
                                            </div>
                                            <p className="text-xs text-slate-500 leading-snug">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <button
                                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                                className='inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full px-8 py-4 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 w-fit group'
                            >
                                <Download className='w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300' />
                                Download Resume
                            </button>
                        </FadeIn>
                    </div>

                    {/* Right Column - Highlights Cards */}
                    <FadeIn delay={200}>
                        <div className="flex flex-col gap-4">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 card-3d">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                                                <highlight.icon className='w-6 h-6 text-primary' />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-slate-800 mb-1">{highlight.title}</h3>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    {highlight.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>


            </div>
        </section>
    )
}

export default About