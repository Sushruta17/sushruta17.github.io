import React, { useState, useEffect } from 'react';
import { Code, Menu, Terminal, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${isScrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50'
        : 'bg-transparent'
        }`}
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <div className='max-w-[1320px] mx-auto px-5'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center gap-3'>
            {/* <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
              <Terminal className='w-5 h-5 text-white' />
            </div> */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-xl font-bold gradient-text hover:opacity-80 transition-opacity'
              aria-label="home"
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-8'>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-all duration-300 relative ${activeSection === link.id
                  ? 'text-primary'
                  : 'text-slate-600 hover:text-primary'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='hidden md:flex items-center gap-2'>
            <button
              onClick={() => handleNavClick('contact')}
              className='px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300'
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 text-slate-600 hover:text-primary transition-colors rounded-lg hover:bg-slate-100'
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 h-screen bg-slate-900/20 backdrop-blur-sm md:hidden"
          style={{ zIndex: -1 }}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className='bg-white/95 backdrop-blur-lg border-t border-slate-100 px-5 py-6 space-y-2 shadow-lg'>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${activeSection === link.id
                ? 'text-primary bg-primary/5'
                : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className='w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm rounded-full shadow-lg shadow-primary/25 mt-4'
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar