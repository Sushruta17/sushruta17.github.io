import { ChevronDown, Briefcase, MapPin } from 'lucide-react';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiCplusplus, SiPython } from "react-icons/si";
import { PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50/50 to-violet-50/40">
      <RadialGradientBackground variant="hero" />

      {/* Floating Shapes */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content Container*/}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content*/}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 glass rounded-full shadow-sm">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm text-slate-700 font-medium">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">{PERSONAL_INFO.name}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={150}>
              <h2 className="text-2xl md:text-3xl font-medium text-slate-600 mb-6">
                Full-Stack Developer
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-slate-600 max-w-[550px] mb-4 leading-relaxed">
                Building scalable web applications and solving complex problems with modern technologies.
              </p>
              <div className="flex items-center gap-2 text-slate-500 mb-8">
                {/* <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{PERSONAL_INFO.location}</span> */}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full px-8 py-3.5 text-base font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2 bg-white text-slate-700 rounded-full px-8 py-3.5 text-base font-medium border border-slate-200 hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Projects
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex items-center gap-6">
                <span className="text-sm text-slate-500 font-medium">Tech Stack</span>
                <div className="flex items-center gap-3">
                  {[
                    { Icon: SiCplusplus, color: '#6366f1' },
                    { Icon: SiPython, color: '#8b5cf6' },
                    { Icon: SiReact, color: '#6366f1' },
                    { Icon: SiNodedotjs, color: '#8b5cf6' },
                    { Icon: SiMongodb, color: '#6366f1' },
                  ].map(({ Icon, color }, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Image */}
          <div>
            <FadeIn delay={200}>
              <div className="relative">
                <div className="relative max-w-[450px] ml-auto group">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl scale-110 group-hover:scale-115 transition-transform duration-500" />

                  {/* Background Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-3 shadow-xl border border-white/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                    {/* Image Container */}
                    <div className="relative rounded-2xl overflow-hidden">
                      <img
                        src="/developer-portrait.png"
                        alt="Sushruta Behera"
                        className="w-full h-auto object-contain rounded-2xl"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  )
}

export default Hero