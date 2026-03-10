import React from 'react'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import LeetCodeIcon from '../../ui/LeetCodeIcon';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';

const Footer = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    leetcode: LeetCodeIcon,
  };

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <FadeIn delay={0}>
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {PERSONAL_INFO.name.split(' ')[0]}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                M.Tech @ IIT Ropar • Full-Stack Developer
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className='group flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300'
                >
                  <div className='p-2 bg-primary/20 rounded-lg'>
                    <Mail className='w-4 h-4 text-primary' />
                  </div>
                  <span className='text-slate-300 text-sm group-hover:text-white transition-colors'>
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-300 text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className='group flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-300'
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-primary group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Connect With Me</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Let's connect and create something amazing together.
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='group relative p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 hover:scale-110 transition-all duration-300'
                      aria-label={`Connect on ${platform}`}
                    >
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors duration-300" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex items-center justify-center">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer