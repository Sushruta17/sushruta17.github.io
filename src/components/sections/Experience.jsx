import React from 'react';
import { Briefcase, Calendar, Building2, BookOpen } from 'lucide-react';
import { experience } from '../../data/experience';
import { courses } from '../../data/courses';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 bg-gradient-to-b from-indigo-50/30 to-violet-50/30 overflow-hidden">
            <RadialGradientBackground variant="skills" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Experience & Courses</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                            Academic <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Teaching roles and key courses that shaped my technical foundation
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div>
                        <FadeIn delay={100}>
                            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-primary" />
                                Positions of Responsibility
                            </h3>
                        </FadeIn>

                        <div className="space-y-4">
                            {experience.map((exp, index) => (
                                <FadeIn key={exp.id} delay={200 + index * 100}>
                                    <div className={`glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-3d ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl ${exp.current ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-slate-100'}`}>
                                                <Briefcase className={`w-5 h-5 ${exp.current ? 'text-white' : 'text-slate-600'}`} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    {exp.current && (
                                                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="text-lg font-semibold text-slate-800">{exp.role}</h4>
                                                <p className="text-sm text-primary font-medium mb-1">{exp.organization}</p>
                                                <div className="flex items-center gap-1 text-xs text-slate-400 mb-2">
                                                    <Calendar className="w-3 h-3" />
                                                    {exp.period}
                                                </div>
                                                <p className="text-sm text-slate-600">{exp.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Courses Column */}
                    <div>
                        <FadeIn delay={100}>
                            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-primary" />
                                Key Courses Taken
                            </h3>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="glass rounded-2xl p-6">
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-primary mb-3">Computer Science & Engineering</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {courses.cse.map((course, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-full text-sm text-slate-700 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-secondary mb-3">Other Courses</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {courses.other.map((course, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/10 rounded-full text-sm text-slate-700 hover:border-secondary/30 hover:shadow-sm transition-all duration-300"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
