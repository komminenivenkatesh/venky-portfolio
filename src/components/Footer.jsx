import React from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowUp, 
  FiTerminal, 
  FiDownload 
} from 'react-icons/fi';

const Footer = ({ onTriggerResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#07070c] py-12 px-6 lg:px-12 relative z-10 font-mono">
      <div className="container mx-auto max-w-6xl">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-1.5 font-brand text-2xl font-black mb-2">
              <span className="text-accent font-mono text-lg font-bold">&gt;</span>
              <span className="bg-gradient-to-r from-white via-purple-100 to-accent bg-clip-text text-transparent">
                Venky
              </span>
              <span className="w-2 h-2 rounded-full bg-accent inline-block shadow-glow-purple"></span>
              <span className="text-xs text-slate-500 font-mono ml-3">// SYSTEM_HALT = 0</span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-md">
              Designed & built with React, Tailwind CSS & Inconsolata monospace aesthetics.
            </p>
          </div>

          {/* Footer Resume Trigger */}
          <button
            onClick={onTriggerResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent text-xs text-slate-300 hover:text-white transition-all shadow-sm group"
          >
            <span className="text-accent font-bold">&gt;</span>
            <span className="font-mono">curl -O venkatesh-resume.pdf</span>
            <FiDownload className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent transition-colors" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/komminenivenkatesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/komminenivenkatesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://vahan-bhazar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-accent transition-colors"
            >
              Vahan Bazar
            </a>
            <span>•</span>
            <a
              href="mailto:komminenivenkatesh045@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Kommineni Venkateswarlu</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 transition-colors"
              title="Return to top"
            >
              <FiArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
