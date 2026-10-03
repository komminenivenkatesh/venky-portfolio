import React, { useState, useEffect } from 'react';
import { 
  FiDownload, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiPhone,
  FiTerminal, 
  FiCheckCircle, 
  FiArrowRight, 
  FiExternalLink 
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiPython, 
  SiThreedotjs,
  SiTensorflow, 
  SiOpencv, 
  SiNodedotjs, 
  SiMongodb, 
  SiDocker, 
  SiGit, 
  SiLinux 
} from 'react-icons/si';
import MusicPlayer from './MusicPlayer';

const phrases = [
  'Building Digital Experiences',
  'Crafting Web & AI Solutions',
  'Full-Stack Developer & ML Enthusiast',
  'Turning Complex Ideas into Clean Code',
];

const techIcons = [
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'Python', icon: SiPython, color: '#3776ab' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5c3ee8' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ed' },
  { name: 'Linux', icon: SiLinux, color: '#fcc624' },
];

const Hero = ({ onTriggerResume, resumeStatus }) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1800);
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
    <section id="hero" className="min-h-screen pt-28 pb-16 px-6 lg:px-12 flex flex-col justify-center relative z-10 font-mono">
      <div className="container mx-auto max-w-6xl">
        {/* Befikir Large Monospace Typing Headline */}
        <div className="mb-10">
          <p className="text-xs sm:text-sm text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block animate-ping"></span>
            PORTFOLIO // 2026 // PRODUCTION
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight min-h-[3.2em] sm:min-h-[2.5em]">
            <span className="text-slate-300">&gt; </span>
            <span>{displayText}</span>
            <span className="inline-block text-accent animate-pulse font-normal ml-1">_</span>
          </h1>
        </div>

        {/* Profile + Skills + Resume + Music Player Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Profile Card + Shell Resume + Tech Icons (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Profile Avatar & Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative inline-block group">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-[3px] border-accent shadow-glow-purple bg-[#1a1a2e] transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="https://avatars.githubusercontent.com/u/147895500?v=4"
                    alt="Kommineni Venkateswarlu"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* GPA / Status Badge */}
                <div className="absolute -bottom-2 right-0 sm:right-1 bg-badge text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg border border-white/20 flex items-center gap-1.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>OPEN TO WORK</span>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Kommineni Venkateswarlu
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full font-brand text-xs font-black bg-gradient-to-r from-accent/30 to-purple-600/30 text-purple-200 border border-accent/50 shadow-sm">
                    Venky
                  </span>
                </div>
                <p className="text-slate-400 text-sm mt-1">
                  Full-Stack Web Developer & Practical AI Engineer
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 text-xs mt-1">
                  <span>📍 Sonipat, Delhi NCR</span>
                  <span>•</span>
                  <span>🎓 SRM University (Data Science & AI)</span>
                </div>

                {/* Social & Contact Quick Icons */}
                <div className="flex items-center gap-3 mt-3">
                  <a
                    href="https://github.com/komminenivenkatesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="GitHub: github.com/komminenivenkatesh"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/komminenivenkatesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="LinkedIn: linkedin.com/in/komminenivenkatesh"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:komminenivenkatesh045@gmail.com"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Email: komminenivenkatesh045@gmail.com"
                  >
                    <FiMail className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+919100873719"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    title="Phone: (+91) 9100873719"
                  >
                    <FiPhone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://vahan-bhazar.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/15 hover:bg-accent/25 text-accent border border-accent/40 text-xs font-semibold transition-colors"
                  >
                    <span>Vahan Bhazar Live</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Clean Single Resume Launcher */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2 font-mono flex items-center gap-2">
                <FiTerminal className="text-accent" />
                <span>RÉSUMÉ & CV</span>
              </p>

              <button
                onClick={onTriggerResume}
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-5 py-3 rounded-xl bg-[#0f0f18] hover:bg-[#151525] border border-white/15 hover:border-accent shadow-md hover:shadow-glow-purple transition-all duration-300 text-left font-mono"
                title="Download Venkatesh Resume (PDF)"
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent font-bold">&gt;</span>
                  <span className="text-white font-mono group-hover:text-purple-300 transition-colors">
                    curl -O venkatesh-resume.pdf
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-md text-xs text-slate-300 group-hover:bg-accent group-hover:text-white transition-all">
                  <FiDownload className="w-3.5 h-3.5" />
                  <span>Download</span>
                </div>
              </button>

              {/* Status readout */}
              {resumeStatus && (
                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-2 animate-pulse">
                  <FiCheckCircle className="w-3.5 h-3.5" />
                  <span>{resumeStatus}</span>
                </div>
              )}
            </div>

            {/* Tech Icons Grid (Befikir squircle lang-tags) */}
            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-3 tracking-wider">
                CORE TECHNOLOGIES & TOOLCHAIN
              </p>
              <div className="flex flex-wrap gap-2.5">
                {techIcons.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group relative w-12 h-12 rounded-xl bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 hover:border-white/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 shadow-md"
                    >
                      <Icon 
                        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                      {/* Tooltip */}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 text-white text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/15 z-20">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Spotify Music Player + Quick Terminal Stats (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-6">
            {/* Music Player */}
            <MusicPlayer />

            {/* Terminal Quick Specs Card */}
            <div className="w-full max-w-[320px] bg-[#0d0d14]/90 border border-white/10 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-xs text-slate-400">
                <span className="text-accent font-bold">// SYSTEM SPECS</span>
                <span className="text-[10px] text-emerald-400">ACTIVE</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Education:</span>
                  <span className="text-white font-bold">SRM University '27</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Specialization:</span>
                  <span className="text-accent font-semibold">Data Science & AI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Experience:</span>
                  <span className="text-cyan-accent font-semibold">Sysslan IT Solutions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Certifications:</span>
                  <span className="text-purple-300 font-semibold">IBM Certified (3x)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Live Project:</span>
                  <a 
                    href="https://vahan-bhazar.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    Vahan Bazar ↗
                  </a>
                </div>
              </div>

              {/* View Projects CTA */}
              <div className="mt-4 pt-3 border-t border-white/10 flex gap-2">
                <a
                  href="#projects"
                  className="flex-1 py-2 rounded-xl bg-accent hover:bg-accent-light text-white text-xs font-semibold text-center transition-colors shadow-md shadow-accent/20 flex items-center justify-center gap-1"
                >
                  <span>Explore Projects</span>
                  <FiArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="#contact"
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold text-center border border-white/10 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
