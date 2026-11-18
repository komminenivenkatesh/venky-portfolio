import React, { useState, useEffect } from 'react';
import { FiCommand, FiMenu, FiX, FiBriefcase, FiUserCheck, FiDownload } from 'react-icons/fi';

const Navbar = ({ onOpenCommandPalette, recruiterMode, onToggleRecruiter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Softwares', href: '#softwares' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand Matching Figma */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="flex items-center gap-1 font-brand text-2xl font-black tracking-tight text-white group-hover:scale-105 transition-transform duration-200">
            <span>Portfolio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-cyan-400 inline-block transition-colors ml-0.5"></span>
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10 rounded-full font-bold">
            venky.dev
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-xs font-semibold tracking-wide uppercase font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors hover:-translate-y-0.5 transform duration-150"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/venkatesh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black hover:bg-slate-200 text-xs font-bold transition-all hover:scale-105"
              title="Open Resume PDF in new tab"
            >
              <FiDownload className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            {/* Command Palette Trigger */}
            <button
              onClick={() => onOpenCommandPalette(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-400 hover:text-white transition-all shadow-sm group"
              title="Open Command Palette (Ctrl+K)"
            >
              <FiCommand className="w-3.5 h-3.5 text-accent group-hover:rotate-12 transition-transform" />
              <span className="hidden lg:inline">Commands</span>
              <kbd className="px-1.5 py-0.5 bg-black/40 text-[10px] rounded text-slate-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Recruiter Mode Toggle Button */}
            <button
              onClick={onToggleRecruiter}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                recruiterMode
                  ? 'bg-accent text-white border-accent shadow-glow-purple'
                  : 'bg-white/5 text-slate-300 border-white/15 hover:border-accent hover:text-white'
              }`}
            >
              <FiBriefcase className={`w-3.5 h-3.5 ${recruiterMode ? 'text-white' : 'text-accent'}`} />
              <span>Recruiter Mode: {recruiterMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenCommandPalette(true)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-accent"
          >
            <FiCommand className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleRecruiter}
            className={`px-2.5 py-1 rounded-xl text-xs font-mono border ${
              recruiterMode
                ? 'bg-accent text-white border-accent'
                : 'bg-white/5 text-slate-300 border-white/15'
            }`}
          >
            Recruiter: {recruiterMode ? 'ON' : 'OFF'}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c14] border-b border-white/10 px-6 py-4 space-y-3 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-accent text-sm py-1.5"
            >
              <span className="text-accent mr-2">&gt;</span>
              {link.name}
            </a>
          ))}
          <a
            href="/venkatesh-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-accent text-sm py-2 font-bold"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download Résumé (PDF)</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
