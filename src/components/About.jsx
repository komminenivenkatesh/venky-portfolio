import React from 'react';
import { 
  FiUser, 
  FiMapPin, 
  FiCode, 
  FiCpu, 
  FiHeart, 
  FiAward, 
  FiCheckCircle, 
  FiExternalLink 
} from 'react-icons/fi';

const credentials = [
  {
    icon: <FiCode className="text-accent" />,
    title: 'Full-Stack Web Dev Internship Certificate',
    desc: 'Sysslan IT Solutions (1-Month Commercial Internship). Boosted Lighthouse to 91, cut DOM re-renders by 28%, and built 12+ REST endpoints.',
  },
  {
    icon: <FiAward className="text-yellow-400" />,
    title: 'Introduction to Big Data, Hadoop & Ecosystems',
    desc: 'Professional Certificate — IBM Developer Skills Network & SRM University (Distributed Computing, HDFS, MapReduce).',
  },
  {
    icon: <FiAward className="text-cyan-400" />,
    title: 'Machine Learning with R & ML Professional',
    desc: 'Professional Certificates — IBM & Coursera (Supervised Learning, Deep Neural Networks, Loss Optimization).',
  },
  {
    icon: <FiAward className="text-emerald-400" />,
    title: 'Data Science Methodologies & Python',
    desc: 'Professional Certificates — Issued by IBM. Iterative analytic models, data structures, and statistical validation.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 relative z-10 bg-black text-slate-200">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs text-accent font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
              // BIOGRAPHY & CREDENTIALS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand">
              About <span className="text-slate-400">Me</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Bridging robust full-stack engineering with applied artificial intelligence and production systems.
          </p>
        </div>

        {/* Two-Column About: Left Avatar & Stats, Right Narrative & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Circular Portrait + Quick Stats Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start space-y-6">
            
            {/* Circular Framed Photo Matching Figma */}
            <div className="relative group mx-auto sm:mx-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent via-cyan-400 to-purple-600 blur-md opacity-40 group-hover:opacity-80 transition duration-500" />
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white/20 bg-[#12121c] shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Venkatesh Kommineni"
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-black/90 text-white border border-white/20 text-[10px] font-mono flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>SRM '27</span>
              </div>
            </div>

            {/* Fast Stats Card */}
            <div className="w-full p-5 rounded-2xl bg-[#0c0c12] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-slate-500">Degree:</span>
                <span className="text-white font-semibold">B.Tech CSE</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-slate-500">Specialization:</span>
                <span className="text-accent font-semibold">Data Science & AI</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-slate-500">Institution:</span>
                <span className="text-slate-300">SRM University</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-slate-500">Internship:</span>
                <span className="text-cyan-400 font-semibold">Sysslan IT Solutions</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-300">Andhra Pradesh / Delhi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Bio Narrative + Certifications (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Story Card */}
            <div className="p-8 rounded-3xl bg-[#0c0c12] border border-white/10 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider pb-3 border-b border-white/5">
                <FiUser className="w-4 h-4" />
                <span>Developer Profile & Engineering Philosophy</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-brand">
                Passionate about turning complex systems into elegant, high-impact digital products.
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                I am <strong className="text-white">Venkatesh Kommineni</strong>, a Computer Science undergraduate at <strong className="text-white">SRM University</strong> specializing in Data Science & Artificial Intelligence. My work bridges the gap between scalable full-stack software and machine learning systems.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                During my engineering internship at <strong className="text-slate-200">Sysslan IT Solutions</strong>, I architected modular React interfaces that slashed redundant DOM re-renders by 28%, raised Google Lighthouse performance from 72 to 91, and engineered 12+ RESTful endpoints tested via Postman and Docker container pipelines.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                My portfolio includes <strong className="text-slate-200">Vahan Bazar</strong> (a two-wheeler marketplace with compound query optimizations speeding search latency by 36%), clinical <strong className="text-slate-200">Brain Tumor Detection AI (94.2% test accuracy)</strong>, a real-time <strong className="text-slate-200">Indian Sign Language engine (28+ FPS)</strong>, and <strong className="text-slate-200">StockAI Pulse</strong> financial forecasting models.
              </p>
            </div>

            {/* Certifications Grid */}
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FiAward className="text-accent" />
                <span>VERIFIED CERTIFICATIONS & ACHIEVEMENTS</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0c0c12] border border-white/10 hover:border-white/20 transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mt-0.5">
                      {cred.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1 font-brand">
                        {cred.title}
                      </h5>
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
