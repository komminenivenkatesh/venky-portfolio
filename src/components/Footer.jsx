import React from 'react';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowUp, 
  FiDownload 
} from 'react-icons/fi';

const Footer = ({ onTriggerResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black py-14 px-6 lg:px-12 relative z-10 text-slate-400">
      <div className="container mx-auto max-w-6xl">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-1 font-brand text-2xl font-black text-white mb-2">
              <span>Portfolio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-0.5"></span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-md">
              Designed & developed by Venkatesh Kommineni. Full-Stack Software & Artificial Intelligence Engineer.
            </p>
          </div>

          {/* Footer Resume Trigger */}
          <button
            onClick={onTriggerResume}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-black border border-white/15 text-xs font-semibold transition-all duration-300 shadow-sm"
          >
            <span>Download Resume</span>
            <FiDownload className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
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
              className="text-slate-400 hover:text-white transition-colors"
            >
              Vahan Bazar Live
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
            <span>&copy; {new Date().getFullYear()} Venkatesh Kommineni. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white text-slate-400 hover:text-black border border-white/10 transition-colors"
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
