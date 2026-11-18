import React, { useState, useEffect } from 'react';
import { FiCommand, FiMenu, FiX, FiBriefcase, FiDownload } from 'react-icons/fi';

const Navbar = ({ onOpenCommandPalette, recruiterMode, onToggleRecruiter }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Matching Figma */}
        <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
          <div className="flex items-center gap-1 font-brand text-xl sm:text-2xl font-black tracking-tight text-white group-hover:scale-105 transition-transform duration-200">
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
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-slate-200 text-xs font-bold transition-all hover:scale-105 shadow-sm"
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-400 hover:text-white transition-all shadow-sm group"
              title="Open Command Palette (Ctrl+K)"
            >
              <FiCommand className="w-3.5 h-3.5 text-accent group-hover:rotate-12 transition-transform" />
              <span className="hidden lg:inline font-mono">Commands</span>
              <kbd className="px-1.5 py-0.5 bg-black/40 text-[10px] font-mono rounded text-slate-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Recruiter Mode Toggle Button */}
            <button
              onClick={onToggleRecruiter}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
                recruiterMode
                  ? 'bg-accent text-white border-accent shadow-glow-purple'
                  : 'bg-white/5 text-slate-300 border-white/15 hover:border-accent hover:text-white'
              }`}
            >
              <FiBriefcase className={`w-3.5 h-3.5 ${recruiterMode ? 'text-white' : 'text-accent'}`} />
              <span className="font-mono">Recruiter Mode: {recruiterMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* Mobile controls (Clean, touch-friendly, no overflow) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenCommandPalette(true)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-accent hover:bg-white/10 active:scale-95 transition-all"
            title="Open Command Palette"
          >
            <FiCommand className="w-4 h-4" />
          </button>

          <button
            onClick={onToggleRecruiter}
            className={`p-2 rounded-full border transition-all active:scale-95 ${
              recruiterMode
                ? 'bg-accent text-white border-accent shadow-glow-purple'
                : 'bg-white/5 text-slate-300 border-white/15'
            }`}
            title="Toggle Recruiter Mode"
          >
            <FiBriefcase className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with smooth blur */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 space-y-3 font-sans animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
              >
                <span className="text-accent text-xs font-mono">&gt;</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/venkatesh-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-bold text-sm shadow-md active:scale-98 transition-transform"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={() => {
                onToggleRecruiter();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white text-xs font-mono"
            >
              <FiBriefcase className="w-3.5 h-3.5 text-accent" />
              <span>Recruiter Summary Modal: {recruiterMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
