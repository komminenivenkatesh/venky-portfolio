import React, { useState, useEffect } from 'react';
import { 
  FiDownload, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiCheckCircle, 
  FiArrowRight, 
  FiBriefcase
} from 'react-icons/fi';

const phrases = [
  'Full-Stack Web Developer',
  'AI & Machine Learning Engineer',
  'Computer Vision Specialist',
  'Software Engineer',
];

const Hero = ({ onTriggerResume, resumeStatus, onToggleRecruiter }) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Smooth typing effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 85
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12 flex flex-col justify-center relative z-10 bg-black text-white">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hello, It's Me + Headline + Bio + Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-5 sm:space-y-6">
            
            {/* Small Greeting */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Hello, It's Me</span>
            </div>

            {/* Main Name & Title */}
            <div className="w-full">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight font-brand leading-none mb-2 sm:mb-3">
                Venkatesh
                <span className="block text-slate-400 font-bold text-2xl sm:text-4xl lg:text-6xl mt-1 sm:mt-2">
                  Kommineni
                </span>
              </h1>
              
              <div className="flex flex-wrap items-baseline gap-1.5 text-base sm:text-xl lg:text-2xl font-mono text-slate-300 min-h-[2.5rem]">
                <span className="text-slate-400 font-light">And I'm a</span>
                <span className="font-bold text-white border-b-2 border-accent pb-0.5 break-all">
                  {displayText}
                </span>
                <span className="w-1.5 sm:w-2 h-5 sm:h-6 bg-accent inline-block animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Bio Narrative */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-400 font-sans leading-relaxed max-w-xl">
              Undergraduate in Computer Science & Engineering (Data Science & AI) at SRM University.
              Full-stack software engineer crafting responsive web architectures, real-time computer vision systems, and predictive deep learning pipelines.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              <a
                href="https://github.com/komminenivenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/komminenivenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-[#0077b5] text-slate-300 hover:text-white border border-white/10 hover:border-[#0077b5] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:komminenivenkatesh045@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919100873719"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white text-slate-300 hover:text-black border border-white/10 hover:border-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                title="Phone"
              >
                <FiPhone className="w-4 h-4" />
              </a>
            </div>

            {/* Actions: Prominent Pill Resume Button + Recruiter / Explore */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
              <button
                onClick={onTriggerResume}
                className="w-full sm:w-auto justify-center px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-slate-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2.5 active:scale-95"
              >
                <FiDownload className="w-4 h-4" />
                <span>Resume</span>
              </button>

              <a
                href="#projects"
                className="flex-1 sm:flex-initial justify-center px-6 py-3 rounded-full bg-transparent hover:bg-white/10 text-white border border-white/25 hover:border-white text-sm font-semibold transition-all duration-300 flex items-center gap-2 text-center"
              >
                <span>Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              {onToggleRecruiter && (
                <button
                  onClick={onToggleRecruiter}
                  className="flex-1 sm:flex-initial justify-center px-5 py-3 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-all duration-200 flex items-center gap-2"
                >
                  <FiBriefcase className="w-3.5 h-3.5 text-accent" />
                  <span>Recruiter Mode</span>
                </button>
              )}
            </div>

            {/* Resume status feedback banner */}
            {resumeStatus && (
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-2 animate-pulse bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-2 rounded-xl w-full">
                <FiCheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{resumeStatus}</span>
              </div>
            )}

            {/* Quick Metrics Tagline (Responsive 3-col grid on mobile) */}
            <div className="pt-3 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-6 text-center sm:text-left text-xs font-mono text-slate-500 border-t border-white/10 w-full">
              <div className="p-2 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent">
                <span className="text-white font-bold block text-sm">SRM '27</span>
                <span className="text-[10px] sm:text-xs text-slate-400">AI & DS</span>
              </div>
              <div className="p-2 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent">
                <span className="text-white font-bold block text-sm">6 Projects</span>
                <span className="text-[10px] sm:text-xs text-slate-400">Web & ML</span>
              </div>
              <div className="p-2 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent">
                <span className="text-emerald-400 font-bold block text-sm">Open</span>
                <span className="text-[10px] sm:text-xs text-slate-400">Intern / FT</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Contrast Studio Portrait (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-2 sm:mt-6 lg:mt-0">
            <div className="relative group max-w-[270px] sm:max-w-sm w-full mx-auto lg:ml-auto">
              
              {/* Ambient Studio Lighting Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Studio Frame Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#14141e] to-black border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Image Container with Vignette Fade on Bottom */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Venkatesh Kommineni"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:contrast-105 group-hover:brightness-100 transition-all duration-700 ease-out transform group-hover:scale-105"
                  />
                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Ambient Top Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>

                {/* Floating Bottom Card Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white font-brand">Kommineni Venkatesh</p>
                    <p className="text-[10px] sm:text-[11px] font-mono text-slate-400">Software & AI Engineer</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20">
                    SRM UNIV
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
