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
    headline: 'Sysslan IT Solutions — Remote Full-Stack Internship',
    summary: 'Commercial full-stack web development internship constructing modular React UI components, 12+ secure RESTful API endpoints in Node.js/Express, and Docker containerized testing.',
    metrics: [
      { label: 'DOM Re-renders', value: '-28% Cut', desc: 'Memoized hooks architecture' },
      { label: 'Lighthouse Score', value: '72 → 91', desc: '+19 pts performance boost' },
      { label: 'API Services', value: '12+ REST Endpoints', desc: 'Joi validation & centralized middleware' },
    ],
    milestones: [
      'Architected modular React/Tailwind UI components with memoized hooks, cutting redundant DOM re-renders by 28% and boosting Lighthouse performance from 72 to 91.',
      'Constructed 12+ secure RESTful API endpoints in Node.js/Express for multi-step form data, integrating Joi schema validation and centralized error-handling middleware.',
      'Containerized backend services via Docker and configured Postman API test collections, catching 15+ edge-case integration defects prior to staging deployment.',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Docker', 'Postman', 'Joi'],
    links: {},
  },
  {
    id: 'sushuruth',
    tabName: 'Sushuruth HMS',
    period: '2026',
    role: 'Backend & Database Architect',
    headline: 'Hospital Medical System (Sushuruth)',
    summary: 'Architected an end-to-end hospital management platform handling patient admissions, digital medical records (EMR), and scheduled doctor consultations.',
    metrics: [
      { label: 'Access Control', value: 'RBAC', desc: 'Admin, doctor, patient roles' },
      { label: 'Database', value: 'MongoDB Aggregation', desc: 'Fast query turnaround on histories & stock' },
      { label: 'Security', value: 'JWT & REST APIs', desc: 'Strict medical records privacy' },
    ],
    milestones: [
      'Architected an end-to-end hospital management platform handling patient admissions, digital medical records (EMR), and scheduled doctor consultations.',
      'Implemented role-based access control (RBAC) across admin, doctor, and patient dashboards to ensure strict medical record privacy and authorization.',
      'Designed optimized MongoDB aggregation schemas to query patient histories and pharmacy stock statuses with low query turnaround time.',
    ],
    tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT'],
    links: {
      github: 'https://github.com/komminenivenkatesh/hospital-medical-system-sushuruth-',
    },
  },
  {
    id: 'vahan-bhazar',
    tabName: 'Vahan Bazar',
    period: '2025 - 2026',
    role: 'Lead Full-Stack Developer',
    headline: 'Vahan Bazar (Two-Wheeler Marketplace)',
    summary: 'Built a full-stack e-commerce marketplace supporting multi-criteria vehicle searches, structured seller workflows, and inventories across 1,200+ indexed listings.',
    metrics: [
      { label: 'Indexed Listings', value: '1,200+', desc: 'Multi-criteria vehicle inventories' },
      { label: 'Query Latency', value: '850ms → 540ms', desc: '~36% speedup via compound indexes' },
      { label: 'Payload Weight', value: '-47% Cut', desc: '3.2MB → 1.7MB via Cloudinary multipart' },
    ],
    milestones: [
      'Built a full-stack e-commerce marketplace supporting multi-criteria vehicle searches, structured seller workflows, and inventories across 1,200+ indexed listings.',
      'Designed MongoDB aggregation pipelines and compound indexes on brand, price, and location, slashing search query latency from 850ms down to 540ms (~36% speedup).',
      'Integrated Cloudinary multipart image transformations and client-side cursor pagination, reducing initial page network payload weights from 3.2 MB down to 1.7 MB (47% cut).',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Cloudinary', 'Vercel'],
    links: {
      live: 'https://vahan-bhazar.vercel.app',
      github: 'https://github.com/komminenivenkatesh/vahan-bhazar',
    },
  },
  {
    id: 'brain-tumor',
    tabName: 'Brain Tumor AI',
    period: '2026',
    role: 'AI / Machine Learning Engineer',
    headline: 'Brain Tumor Detection AI — Clinical Diagnostics',
    summary: 'Trained a deep Convolutional Neural Network (CNN) across 3,000+ axial brain MRI images from the Kaggle Br35H dataset to classify tumorous vs. non-tumorous tissue.',
    metrics: [
      { label: 'Test Accuracy', value: '94.2%', desc: '0.93 F1-score & 95.1% sensitivity' },
      { label: 'Dataset Scale', value: '3,000+ Scans', desc: 'Kaggle Br35H axial brain MRI images' },
      { label: 'Validation', value: '5-Fold CV', desc: 'Verified via confusion matrix diagnostics' },
    ],
    milestones: [
      'Trained a deep Convolutional Neural Network (CNN) across 3,000+ axial brain MRI images from the Kaggle Br35H dataset to classify tumorous vs. non-tumorous tissue.',
      'Constructed an end-to-end data pipeline incorporating OpenCV contrast enhancement, scaling, and affine augmentations to prevent overfitting on clinical training subsets.',
      'Attained 94.2% test accuracy, 0.93 F1-score, and 95.1% sensitivity, verified via 5-fold cross-validation and confusion matrix diagnostics.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'NumPy'],
    links: {
      github: 'https://github.com/komminenivenkatesh/Brain-tumor-detection-using-ML_model',
    },
  },
  {
    id: 'sign-language',
    tabName: 'Sign Language AI',
    period: '2025 - 2026',
    role: 'Computer Vision Engineer',
    headline: 'Real-Time Indian Sign Language & Emotion Recognition',
    summary: 'Constructed an inference pipeline translating continuous Indian Sign Language gestures into English text at 28+ FPS with under 35ms end-to-end frame latency.',
    metrics: [
      { label: 'Stream Latency', value: '< 35ms', desc: '28+ FPS continuous inference pipeline' },
      { label: 'Hand Landmarks', value: '21 Points', desc: '3D Euclidean coordinates via MediaPipe' },
      { label: 'Accuracy', value: '96.4%', desc: 'Normalized gesture classifier' },
    ],
    milestones: [
      'Constructed an inference pipeline translating continuous Indian Sign Language gestures into English text at 28+ FPS with under 35ms end-to-end frame latency.',
      'Extracted 21 coordinate landmarks per hand in 3D Euclidean space via MediaPipe Hands, feeding a normalized classifier achieving 96.4% gesture accuracy.',
      'Engineered a dynamic frame capture loop and adaptive bounding box stabilizer in OpenCV to eliminate tracking jitter under variable lighting.',
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn'],
    links: {
      github: 'https://github.com/komminenivenkatesh/Real-Time-Indian-Sign-Language-Emotion-Recognition-System',
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
    id: 'stockai-pulse',
    tabName: 'StockAI Pulse',
    period: '2026',
    role: 'Quantitative ML & AI Engineer',
    headline: 'AI-Driven Financial Market Intelligence & Sentiment Engine',
    summary: 'Engineered a real-time predictive analytics and financial intelligence engine that ingests market time-series feeds, computes technical momentum indicators, and applies machine learning models to forecast price volatility and sentiment dynamics.',
    metrics: [
      { label: 'ML Framework', value: 'TensorFlow & Sklearn', desc: 'Predictive time-series modeling' },
      { label: 'Data Ingestion', value: 'Live Financial APIs', desc: 'Yahoo Finance & technical indicators' },
      { label: 'Intelligence', value: 'Sentiment + Technicals', desc: 'Hybrid signal generation' },
    ],
    milestones: [
      'Engineered real-time data pipelines pulling OHLCV financial feeds and economic indicators using Python and Yahoo Finance APIs.',
      'Constructed machine learning models to identify market regime shifts, trend momentum, and volatility patterns.',
      'Designed technical analysis feature transformers (RSI, MACD, Bollinger Bands) coupled with sentiment heuristics to generate predictive signals.',
    ],
    tech: ['Python', 'Machine Learning', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Yahoo Finance API'],
    links: {
      github: 'https://github.com/komminenivenkatesh/StockAI_Pulse',
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
      'Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Object-Oriented Programming, Machine Learning.',
      'Earned IBM Machine Learning Professional Certificate (Supervised Learning, Neural Networks).',
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
