import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import { education, achievements } from '../../data/education';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Education = () => {
    const getIcon = (iconName) => {
        const icons = {
            graduation: GraduationCap,
            book: BookOpen,
            school: BookOpen,
            award: Award,
        };
        return icons[iconName] || BookOpen;
    };

    return (
        <section id="education" className="relative py-24 bg-gradient-to-b from-blue-50/40 to-violet-50/30 overflow-hidden">
            <RadialGradientBackground variant="education" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6">
                            <GraduationCap className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">Education</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                            Academic <span className="gradient-text">Background</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            {/* My educational journey from school to IIT Ropar */}
                        </p>
                    </div>
                </FadeIn>

                {/* Achievement Badge */}
                {achievements.map((achievement) => (
                    <FadeIn key={achievement.id} delay={100}>
                        <div className="flex justify-center mb-12">
                            <div className="glass rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-500">{achievement.title}</div>
                                        <div className="text-xl font-bold gradient-text">{achievement.value}</div>
                                        <div className="text-xs text-slate-400">{achievement.subtitle}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block" />

                    <div className="space-y-8">
                        {education.map((edu, index) => {
                            const Icon = getIcon(edu.icon);
                            const isLeft = index % 2 === 0;

                            return (
                                <FadeIn key={edu.id} delay={200 + index * 100}>
                                    <div className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        {/* Timeline Dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                                            <div className={`w-4 h-4 rounded-full ${edu.current ? 'bg-gradient-to-r from-primary to-secondary animate-pulse' : 'bg-slate-300'} ring-4 ring-white`} />
                                        </div>

                                        {/* Card */}
                                        <div className={`w-full lg:w-[calc(50%-40px)] ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                            <div className={`glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-3d ${edu.current ? 'ring-2 ring-primary/20' : ''}`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`p-3 rounded-xl ${edu.current ? 'bg-gradient-to-br from-primary to-secondary' : 'bg-slate-100'}`}>
                                                        <Icon className={`w-6 h-6 ${edu.current ? 'text-white' : 'text-slate-600'}`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            {edu.current && (
                                                                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                                                    Current
                                                                </span>
                                                            )}
                                                            <div className="flex items-center gap-1 text-xs text-slate-400">
                                                                <Calendar className="w-3 h-3" />
                                                                {edu.year}
                                                            </div>
                                                        </div>
                                                        <h3 className="text-lg font-semibold text-slate-800 mb-1">
                                                            {edu.degree}
                                                        </h3>
                                                        {edu.field && (
                                                            <p className="text-sm text-primary font-medium mb-1">{edu.field}</p>
                                                        )}
                                                        <p className="text-sm text-slate-600 mb-2">{edu.institute}</p>
                                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                                                            <span className="text-sm font-semibold text-slate-700">
                                                                {edu.cgpa.includes('%') ? edu.cgpa : `CGPA: ${edu.cgpa}`}
                                                            </span>
                                                            {edu.cgpaNote && (
                                                                <span className="text-xs text-slate-400">({edu.cgpaNote})</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
