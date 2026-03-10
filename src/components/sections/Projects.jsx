import React, { useState, useRef, useEffect, useCallback } from 'react';
import { projects, categories } from '../../data/projects';
import { Briefcase, Target, Globe, ChevronLeft, ChevronRight, Cpu, Shield } from 'lucide-react';
import ProjectCard from '../../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const scrollContainerRef = useRef(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Detect how many cards are visible based on container width
    const updateVisibleCount = useCallback(() => {
        const width = window.innerWidth;
        if (width >= 1024) setVisibleCount(3);       // lg
        else if (width >= 768) setVisibleCount(2);    // md
        else setVisibleCount(1);                       // mobile
    }, []);

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, [updateVisibleCount]);

    const maxIndex = Math.max(0, filteredProjects.length - visibleCount);
    const totalDots = maxIndex + 1;

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);

        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    const scrollToIndex = (index) => {
        const clampedIndex = Math.min(Math.max(0, index), maxIndex);
        setCurrentIndex(clampedIndex);
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.scrollWidth / filteredProjects.length;
            container.scrollTo({
                left: cardWidth * clampedIndex,
                behavior: 'smooth'
            });
        }
    };

    const nextSlide = () => scrollToIndex(currentIndex + 1);
    const prevSlide = () => scrollToIndex(currentIndex - 1);

    const categoryIcons = {
        'All': Target,
        'Web Application': Globe,
        'Systems / OS': Cpu,
        'Cybersecurity / IoT': Shield,
    };

    return (
        <section id='projects' className="relative py-24 bg-gradient-to-b from-blue-50/30 to-indigo-50/40 overflow-hidden">
            <RadialGradientBackground variant="projects" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={0}>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full mb-6">
                            <Briefcase className="w-4 h-4 text-primary" />
                            <span className="text-sm text-primary font-medium">My Work</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Showcasing my best work in web development, systems programming, and security research
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'text-white'
                                    : 'text-slate-600 hover:text-primary'
                                    }`}
                            >
                                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category
                                    ? 'bg-gradient-to-r from-primary to-secondary'
                                    : 'bg-slate-100 group-hover:bg-primary/10'
                                    }`} />

                                <div className='relative flex items-center gap-2'>
                                    {React.createElement(categoryIcons[category], { className: "w-4 h-4" })}
                                    <span className="text-sm">{category}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Projects Carousel */}
                <FadeIn delay={200}>
                    <div className="relative">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
                        >
                            <div className="flex gap-6 pb-4">
                                {filteredProjects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                                    >
                                        <ProjectCard project={project} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {filteredProjects.length > visibleCount && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    disabled={currentIndex === 0}
                                    className='flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white shadow-lg border border-slate-200 rounded-full hover:border-primary/30 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                                    aria-label='Previous Projects'
                                >
                                    <ChevronLeft className='w-5 h-5 text-slate-600' />
                                </button>

                                <button
                                    onClick={nextSlide}
                                    disabled={currentIndex >= maxIndex}
                                    className='flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white shadow-lg border border-slate-200 rounded-full hover:border-primary/30 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                                    aria-label='Next Projects'
                                >
                                    <ChevronRight className='w-5 h-5 text-slate-600' />
                                </button>
                            </>
                        )}

                        {/* Navigation Dots */}
                        {filteredProjects.length > visibleCount && (
                            <div className='flex items-center justify-center gap-2 mt-8'>
                                {Array.from({ length: totalDots }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollToIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                            ? 'bg-gradient-to-r from-primary to-secondary w-6 h-2'
                                            : 'bg-slate-300 w-2 h-2 hover:bg-slate-400'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Projects