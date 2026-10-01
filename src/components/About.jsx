import React from 'react';
import { 
  FiUser, 
  FiMapPin, 
  FiCode, 
  FiCpu, 
  FiHeart, 
  FiCoffee, 
  FiBookOpen, 
  FiCompass, 
  FiExternalLink,
  FiAward
} from 'react-icons/fi';

const credentials = [
  {
    icon: <FiAward className="text-yellow-400" />,
    title: 'Machine Learning Professional',
    desc: 'Professional Certificate — Issued by IBM. Verified in deep learning, model evaluation, and predictive pipelines.',
  },
  {
    icon: <FiAward className="text-cyan-accent" />,
    title: 'Data Science Methodologies',
    desc: 'Professional Certificate — Issued by IBM. Specialized in data analytics, iterative pipelines, and statistical modeling.',
  },
  {
    icon: <FiAward className="text-emerald-400" />,
    title: 'Introduction to Python',
    desc: 'Professional Certificate — Issued by IBM. Solid foundational and algorithmic programming in Python.',
  },
  {
    icon: <FiCode className="text-accent" />,
    title: 'Full-Stack Engineering Intern',
    desc: 'Sysslan IT Solutions (Remote, 2026). Building interactive UI modules and integrating backend REST APIs.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative z-10 font-mono bg-white/[0.01]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <p className="text-xs text-accent uppercase tracking-widest mb-2">
            // BACKGROUND & PHILOSOPHY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">Me</span>
          </h2>
        </div>

        {/* Bio Card + Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio (7 cols) */}
          <div className="lg:col-span-7 bg-[#12121c]/90 rounded-2xl border border-white/10 p-8 shadow-xl space-y-5 font-sans leading-relaxed">
            <div className="flex items-center gap-3 font-mono text-xs text-accent pb-3 border-b border-white/10">
              <FiUser className="w-4 h-4" />
              <span>WHO AM I // DEVELOPER PROFILE</span>
            </div>

            <p className="text-slate-200 text-base sm:text-lg">
              Hello! I'm <strong className="text-white font-bold">Venkateswarlu Kommineni</strong>, a curious and motivated Computer Science undergraduate at <strong className="text-accent">SRM University</strong> specializing in <strong className="text-white">Data Science & AI</strong>.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              I combine sharp analytical thinking and consistency with hands-on full-stack web development and practical AI solutions. During my internship at <strong className="text-slate-200">Sysslan IT Solutions</strong>, I engineered interactive UI modules and integrated production backend APIs.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              From architecting 3D wealth-tracking dashboards using <strong className="text-slate-200">Three.js</strong> and the MERN stack to training deep <strong className="text-slate-200">Convolutional Neural Networks (CNN)</strong> for clinical MRI diagnostics, I love building responsive, dependable software solutions.
            </p>

            <div className="pt-4 border-t border-white/10 font-mono text-xs text-slate-400 flex flex-wrap gap-4 items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-300">
                <FiMapPin className="text-accent" />
                <span>Sonipat, Delhi NCR</span>
              </span>
              <a
                href="https://github.com/komminenivenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1 font-semibold"
              >
                <span>github.com/komminenivenkatesh</span>
                <FiExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Credentials & Internship (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs text-accent uppercase tracking-widest font-mono mb-2 flex items-center gap-1.5">
              <FiAward className="w-3.5 h-3.5" />
              <span>// CERTIFICATIONS & INTERNSHIP</span>
            </p>

            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#12121c]/80 rounded-xl border border-white/10 p-4 hover:border-accent/40 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 shadow-md"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-lg flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
