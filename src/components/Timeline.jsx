import React, { useState } from 'react';
import { 
  FiCheckCircle, 
  FiClock, 
  FiCode, 
  FiExternalLink, 
  FiGithub, 
  FiTrendingUp, 
  FiAward 
} from 'react-icons/fi';

const timelineData = [
  {
    id: 'sysslan-internship',
    tabName: 'Sysslan IT (Internship)',
    period: 'March 2026 – April 2026',
    role: 'Full-Stack Web Development Intern',
    headline: 'Sysslan IT Solutions — Remote Internship',
    summary: 'Gained hands-on commercial experience in full-stack web application development, building high-performance interactive UI components and integrating production backend REST APIs.',
    metrics: [
      { label: 'Role', value: 'Full-Stack Intern', desc: 'Remote engineering team' },
      { label: 'Focus', value: 'UI & APIs', desc: 'Component architecture & backend integration' },
      { label: 'Toolchain', value: 'React & Node', desc: 'MERN stack development' },
    ],
    milestones: [
      'Engineered reusable, interactive frontend UI modules with modern state handling.',
      'Constructed and tested scalable RESTful API endpoints for backend services.',
      'Collaborated within an agile remote workflow adhering to production code standards.',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'REST APIs', 'Git', 'Postman'],
    links: {},
  },
  {
    id: 'vahan-bhazar',
    tabName: 'Vahan Bhazar',
    period: '2025 - 2026',
    role: 'Lead Full-Stack Developer',
    headline: 'Next-Gen Automobile Marketplace Platform',
    summary: 'Architected and built a high-performance vehicle discovery and marketplace web application using Next.js, TypeScript, and modern CSS. Focused on ultra-fast search indexing and intuitive user checkout flow.',
    metrics: [
      { label: 'Platform Performance', value: '99/100', desc: 'Lighthouse score with SSR' },
      { label: 'Code Quality', value: '100% Type-Safe', desc: 'Strict TypeScript interfaces' },
      { label: 'Deployment', value: 'Vercel Edge', desc: 'Global CDN distribution' },
    ],
    milestones: [
      'Engineered dynamic search filters for vehicle make, model, price, and year.',
      'Constructed responsive UI cards with image carousels and detailed specs.',
      'Configured CI/CD pipeline deploying automatically to Vercel production.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    links: {
      live: 'https://vahan-bhazar.vercel.app',
      github: 'https://github.com/komminenivenkatesh/vahan-bhazar',
    },
  },
  {
    id: 'sushuruth',
    tabName: 'Sushuruth HMS',
    period: '2026',
    role: 'Backend & Database Architect',
    headline: 'Hospital Management & Clinical Care Infrastructure',
    summary: 'Engineered a scalable hospital management platform handling patient records, doctor consultations, appointment queues, and prescription tracking.',
    metrics: [
      { label: 'API Architecture', value: 'RESTful', desc: 'Clean MVC layered routing' },
      { label: 'Database', value: 'MongoDB', desc: 'NoSQL schema for dynamic records' },
      { label: 'Security', value: 'JWT & Bcrypt', desc: 'Role-based access controls' },
    ],
    milestones: [
      'Designed database schemas linking patients, appointments, and doctors.',
      'Implemented secure authentication with session encryption and error handling.',
      'Structured modular API controllers for seamless frontend integration.',
    ],
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    links: {
      github: 'https://github.com/komminenivenkatesh/hospital-medical-system-sushuruth-',
    },
  },
  {
    id: 'ecommerce',
    tabName: 'E-Commerce Store',
    period: '2026',
    role: 'Full-Stack Developer',
    headline: 'Full-Stack Online Store & Cart Management Engine',
    summary: 'Developed a comprehensive online shopping portal with stateful cart management, product filtering by category, search indexing, and modern responsive UI.',
    metrics: [
      { label: 'State Model', value: 'React State', desc: 'Real-time cart state' },
      { label: 'Component System', value: 'Modular UI', desc: 'Reusable component library' },
      { label: 'UI Layout', value: '100% Mobile', desc: 'Responsive grid & touch friendly' },
    ],
    milestones: [
      'Constructed client-side filtering, sorting, and search querying.',
      'Implemented persistent cart state with local storage synchronization.',
      'Created seamless checkout form validation with real-time feedback.',
    ],
    tech: ['JavaScript', 'React', 'Node.js', 'CSS Modules'],
    links: {
      github: 'https://github.com/komminenivenkatesh/e-commerce-website',
    },
  },
  {
    id: 'brain-tumor',
    tabName: 'Brain Tumor AI',
    period: '2026',
    role: 'AI / Machine Learning Researcher',
    headline: 'Deep Convolutional Neural Network (CNN) for MRI Diagnostics',
    summary: 'Designed and trained a deep Convolutional Neural Network (CNN) architecture optimized for computer-aided clinical diagnostics. Implemented image augmentation and structured preprocessing arrays to consistently identify and classify irregularities across complex MRI scans.',
    metrics: [
      { label: 'Architecture', value: 'Deep CNN', desc: 'Multi-layer convolutional classifier' },
      { label: 'Image Augmentation', value: 'OpenCV', desc: 'Geometric transforms & noise filtering' },
      { label: 'Framework', value: 'TensorFlow', desc: 'Python deep learning pipeline' },
    ],
    milestones: [
      'Engineered automated image normalization, skull-stripping, and contour detection.',
      'Trained CNN model with Dropout and Batch Normalization layers to prevent overfitting.',
      'Evaluated precision, recall, and ROC curves across clinical MRI test benchmarks.',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'NumPy'],
    links: {
      github: 'https://github.com/komminenivenkatesh/Brain-tumor-detection-using-ML_model',
    },
  },
  {
    id: 'sign-language',
    tabName: 'Sign Language AI',
    period: '2025 - 2026',
    role: 'Computer Vision Engineer',
    headline: 'Real-Time Gesture & Emotion Computer Vision Engine',
    summary: 'Engineered a highly responsive, real-time computer vision processing stream designed to convert continuous manual gestures into text strings instantly. Deployed precise visual geometric matrices and localized frame bounding to guarantee dependable sign recognition for inclusive communication.',
    metrics: [
      { label: 'Stream Speed', value: 'Real-Time', desc: 'Instant continuous manual gesture text' },
      { label: 'Localization', value: 'Bounding Box', desc: 'Precise visual geometric matrices' },
      { label: 'Libraries', value: 'Python & OpenCV', desc: 'Computer vision camera pipelines' },
    ],
    milestones: [
      'Engineered localized frame bounding to isolate and track fast hand movements.',
      'Mapped gesture landmark coordinates into real-time text translation strings.',
      'Enhanced accessibility for hearing and speech impaired community members.',
    ],
    tech: ['Python', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    links: {
      github: 'https://github.com/komminenivenkatesh/Real-Time-Indian-Sign-Language-Emotion-Recognition-System',
    },
  },
  {
    id: 'srm-university',
    tabName: 'SRM University',
    period: 'Aug 2023 – July 2027',
    role: 'B.Tech Undergrad (CS - Data Science & AI)',
    headline: 'Bachelor of Technology in Computer Science & Engineering',
    summary: 'Pursuing undergraduate degree in Computer Science & Engineering with an honors specialization in Data Science and Artificial Intelligence at SRM University. Rigorous coursework in algorithms, databases, and intelligent systems.',
    metrics: [
      { label: 'Degree', value: 'B.Tech CSE', desc: 'SRM University (2023 - 2027)' },
      { label: 'Specialization', value: 'Data Science & AI', desc: 'Intelligent systems & analytics' },
      { label: 'Certifications', value: '3x IBM', desc: 'ML, Data Science, Python' },
    ],
    milestones: [
      'Coursework: Data Structures & Algorithms, DBMS, MongoDB, Machine Learning.',
      'Earned IBM Machine Learning Professional Certificate.',
      'Earned IBM Data Science Methodologies Certificate & Introduction to Python Certificate.',
    ],
    tech: ['Data Structures', 'Algorithms', 'DBMS', 'Machine Learning', 'Python'],
    links: {},
  },
];

const Timeline = () => {
  const [activeTab, setActiveTab] = useState(timelineData[0].id);

  const current = timelineData.find((t) => t.id === activeTab) || timelineData[0];

  return (
    <section id="timeline" className="py-24 px-6 lg:px-12 relative z-10 font-mono bg-white/[0.01]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <p className="text-xs text-accent uppercase tracking-widest mb-2">
            // ENGINEERING MILESTONES & ARCHITECTURE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Build <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">Timeline</span>
          </h2>
        </div>

        {/* Project Tabs (Befikir style tabs) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {timelineData.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeTab === item.id
                  ? 'bg-accent text-white border-accent shadow-glow-purple scale-[1.02]'
                  : 'bg-[#12121c] text-slate-400 hover:text-white border-white/10 hover:border-white/25'
              }`}
            >
              <span>{item.tabName}</span>
            </button>
          ))}
        </div>

        {/* Active Project Impact Card */}
        <div className="bg-[#12121c]/90 rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                  {current.period}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {current.role}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {current.headline}
              </h3>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {current.links.live && (
                <a
                  href={current.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent hover:bg-accent-light text-white text-xs font-semibold shadow-md transition-all"
                >
                  <span>Visit App</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={current.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/15 text-xs font-semibold transition-all"
              >
                <FiGithub className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            </div>
          </div>

          {/* Summary */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-sans">
            {current.summary}
          </p>

          {/* 3 Impact Metrics (Befikir design hallmark) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {current.metrics.map((m, i) => (
              <div
                key={i}
                className="bg-[#0b0b12] rounded-xl p-4 border border-white/5 hover:border-accent/40 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-black text-accent mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-white mb-0.5">
                  {m.label}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Engineering Key Milestones */}
          <div>
            <h4 className="text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiCode className="text-accent" />
              <span>KEY ENGINEERING MILESTONES</span>
            </h4>
            <div className="space-y-3">
              {current.milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-mono">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
