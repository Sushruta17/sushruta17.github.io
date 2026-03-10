import React from 'react';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Skills = () => {
    const skillCategories = {
        'Programming Languages': [
            skills.find(s => s.name === 'C'),
            skills.find(s => s.name === 'C++'),
            skills.find(s => s.name === 'Python'),
            skills.find(s => s.name === 'JavaScript'),
        ].filter(Boolean),

        'Frontend Development': [
            skills.find(s => s.name === 'React.js'),
            skills.find(s => s.name === 'Tailwind CSS'),
        ].filter(Boolean),

        'Backend & APIs': [
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'Express.js'),
            skills.find(s => s.name === 'REST APIs'),
            skills.find(s => s.name === 'Socket.io'),
        ].filter(Boolean),

        'Databases': [
            skills.find(s => s.name === 'MongoDB'),
            skills.find(s => s.name === 'MySQL'),
        ].filter(Boolean),

        'Tools & Platforms': [
            skills.find(s => s.name === 'Git'),
            skills.find(s => s.name === 'GitHub'),
            skills.find(s => s.name === 'Docker'),
            skills.find(s => s.name === 'Linux'),
            skills.find(s => s.name === 'Shell Scripting'),
        ].filter(Boolean),
    };

    return (
        <section id='skills' className='relative py-24 bg-gradient-to-b from-violet-50/30 to-indigo-50/40 overflow-hidden'>
            <RadialGradientBackground variant="skills" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={100}>
                    <div className="text-center mb-16">
                        <div className='inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6'>
                            <Icons.Sparkles className='w-4 h-4 text-primary' />
                            <span className='text-sm text-primary font-medium'>Technical Skills</span>
                        </div>
                        <h2 className='text-3xl lg:text-4xl font-semibold text-slate-900 mb-4'>
                            Skills & <span className="gradient-text">Technologies</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Technologies and tools I use to build amazing products
                        </p>
                    </div>
                </FadeIn>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                        <FadeIn key={category} delay={categoryIndex * 100}>
                            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 card-3d h-full">
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                    <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
                                </div>

                                {/* Skills Grid - Square boxes */}
                                <div className="flex flex-wrap gap-3">
                                    {categorySkills.map((skill) => {
                                        const IconComponent = Icons[skill.icon] || Icons.Code2;

                                        return (
                                            <div
                                                key={skill.id}
                                                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-xl hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                                            >
                                                <IconComponent className="w-4 h-4 text-primary" />
                                                <span className="text-sm font-medium text-slate-700">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills