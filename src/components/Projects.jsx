import React, { useState } from 'react';
import { 
  FiExternalLink, 
  FiGithub, 
  FiFolder, 
  FiStar, 
  FiLayers, 
  FiCpu, 
  FiGlobe 
} from 'react-icons/fi';

const allProjects = [
  {
    id: 'vahan-bhazar',
    title: 'Vahan Bazar',
    category: 'web',
    tagline: 'Two-Wheeler Marketplace (1,200+ Listings)',
    description: 'Built a full-stack e-commerce marketplace supporting multi-criteria vehicle searches, structured seller workflows, and compound indexing slashing search latency from 850ms to 540ms (~36% speedup). Integrated Cloudinary multipart image transformations cutting page payload by 47%.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
    live: 'https://vahan-bhazar.vercel.app',
    github: 'https://github.com/komminenivenkatesh/vahan-bhazar',
    badge: 'LIVE ON VERCEL',
    accentColor: '#3b82f6',
    borderGlow: 'hover:border-blue-500/70 hover:shadow-[0_10px_35px_rgba(59,130,246,0.3)]',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'hospital-system',
    title: 'Hospital Medical System (Sushuruth)',
    category: 'web',
    tagline: 'EMR Platform & Role-Based Clinical Care',
    description: 'Architected an end-to-end hospital management platform handling patient admissions, digital medical records (EMR), scheduled doctor consultations, and role-based access control (RBAC) across admin, doctor, and patient dashboards.',
    tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT'],
    github: 'https://github.com/komminenivenkatesh/hospital-medical-system-sushuruth-',
    badge: 'FULL-STACK BACKEND',
    accentColor: '#10b981',
    borderGlow: 'hover:border-emerald-500/70 hover:shadow-[0_10px_35px_rgba(16,185,129,0.3)]',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'brain-tumor',
    title: 'Brain Tumor Detection AI',
    category: 'ai',
    tagline: '94.2% Test Accuracy MRI Diagnostic CNN',
    description: 'Trained a deep Convolutional Neural Network (CNN) across 3,000+ axial brain MRI images from the Kaggle Br35H dataset to classify tumorous vs. non-tumorous tissue. Attained 94.2% test accuracy, 0.93 F1-score, and 95.1% sensitivity via 5-fold cross-validation.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'NumPy'],
    github: 'https://github.com/komminenivenkatesh/Brain-tumor-detection-using-ML_model',
    badge: 'AI / COMPUTER VISION',
    accentColor: '#ec4899',
    borderGlow: 'hover:border-pink-500/70 hover:shadow-[0_10px_35px_rgba(236,72,153,0.3)]',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'sign-language',
    title: 'Real-Time Indian Sign Language & Emotion AI',
    category: 'ai',
    tagline: '28+ FPS Gesture & Emotion Inference Engine',
    description: 'Constructed an inference pipeline translating continuous Indian Sign Language gestures into English text at 28+ FPS with under 35ms end-to-end frame latency. Extracted 21 coordinate landmarks per hand in 3D Euclidean space via MediaPipe Hands with 96.4% gesture accuracy.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'Deep Learning'],
    github: 'https://github.com/komminenivenkatesh/Real-Time-Indian-Sign-Language-Emotion-Recognition-System',
    badge: 'REAL-TIME CV',
    accentColor: '#8b5cf6',
    borderGlow: 'hover:border-purple-500/70 hover:shadow-[0_10px_35px_rgba(139,92,246,0.3)]',
    image: 'https://images.unsplash.com/photo-1534972195531-a756b11269d5?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'ecommerce',
    title: 'Full-Stack E-Commerce Website',
    category: 'web',
    tagline: 'Modern Online Store & Cart Engine',
    description: 'Full-stack retail application featuring responsive product catalogue, category filtering, cart state management, checkout simulation, and user authentication.',
    tech: ['JavaScript', 'React', 'Node.js', 'Express.js', 'CSS Modules'],
    github: 'https://github.com/komminenivenkatesh/e-commerce-website',
    badge: 'WEB APP',
    accentColor: '#f59e0b',
    borderGlow: 'hover:border-amber-500/70 hover:shadow-[0_10px_35px_rgba(245,158,11,0.3)]',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=80',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = allProjects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 relative z-10 font-mono">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-white/10">
          <div>
            <p className="text-xs text-accent font-mono uppercase tracking-widest mb-2">
              // PRODUCTION WORK & GITHUB PROJECTS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-[#12121c] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-accent text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({allProjects.length})
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'web'
                  ? 'bg-accent text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Apps (3)
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'ai'
                  ? 'bg-accent text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & ML (2)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative bg-[#12121c]/90 rounded-2xl border border-white/10 ${project.borderGlow} transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2`}
            >
              {/* Card Banner Image with Dark Vignette */}
              <div className="relative h-48 w-full overflow-hidden bg-[#181824]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121c] via-[#12121c]/40 to-transparent"></div>

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/15">
                    {project.badge}
                  </span>
                </div>

                {/* Live Indicator if live */}
                {project.live && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>ONLINE</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-3 font-semibold">
                    {project.tagline}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-accent hover:bg-accent-light text-white text-xs font-semibold shadow-md shadow-accent/20 transition-all hover:scale-[1.02]"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/15 text-xs font-semibold transition-all ${
                        project.live ? 'flex-1' : 'w-full'
                      }`}
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
