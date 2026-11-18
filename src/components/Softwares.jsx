import React, { useState } from 'react';
import { VscVscode } from 'react-icons/vsc';
import { 
  SiAndroidstudio, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiDocker, 
  SiMongodb, 
  SiFigma, 
  SiWireshark, 
  SiBlender, 
  SiLinux,
  SiVercel,
  SiPython,
  SiApachehadoop
} from 'react-icons/si';
import { FiCheckCircle } from 'react-icons/fi';

const softwareList = [
  {
    id: 'vscode',
    name: 'VS Code',
    fullName: 'Visual Studio Code',
    category: 'Environment',
    role: 'Primary Code Editor',
    description: 'Customized workspace with extensions for React, Python, Docker, ESLint, GitLens, and live debugging.',
    icon: VscVscode,
    color: '#007ACC',
    bgGlow: 'hover:border-[#007ACC]/60 hover:shadow-[0_8px_30px_rgba(0,122,204,0.25)]',
    badge: 'DAILY DRIVER'
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    fullName: 'Android Studio',
    category: 'Mobile & SDK',
    role: 'Native Android Dev',
    description: 'Mobile emulation, Gradle build pipelines, SDK platform tools, and performance profiling.',
    icon: SiAndroidstudio,
    color: '#3DDC84',
    bgGlow: 'hover:border-[#3DDC84]/60 hover:shadow-[0_8px_30px_rgba(61,220,132,0.25)]',
    badge: 'MOBILE SDK'
  },
  {
    id: 'hadoop',
    name: 'Apache Hadoop',
    fullName: 'Hadoop & HDFS Cluster',
    category: 'Big Data',
    role: 'Distributed Cluster',
    description: 'HDFS cluster management, MapReduce data processing, and big data ecosystem integration (IBM Certified).',
    icon: SiApachehadoop,
    color: '#FFEA00',
    bgGlow: 'hover:border-[#FFEA00]/60 hover:shadow-[0_8px_30px_rgba(255,234,0,0.25)]',
    badge: 'BIG DATA'
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    fullName: 'Git & GitHub DevOps',
    category: 'DevOps / VCS',
    role: 'Distributed VCS',
    description: 'Branch management, semantic commit workflows, GitHub Actions CI/CD automation, and PR reviews.',
    icon: SiGithub,
    color: '#F05032',
    bgGlow: 'hover:border-[#F05032]/60 hover:shadow-[0_8px_30px_rgba(240,80,50,0.25)]',
    badge: 'DEVOPS'
  },
  {
    id: 'postman',
    name: 'Postman',
    fullName: 'Postman API Platform',
    category: 'API Testing',
    role: 'RESTful API Testing',
    description: 'Automated test suites, JWT header validation, mock servers, and REST API documentation generation.',
    icon: SiPostman,
    color: '#FF6C37',
    bgGlow: 'hover:border-[#FF6C37]/60 hover:shadow-[0_8px_30px_rgba(255,108,55,0.25)]',
    badge: 'API TESTING'
  },
  {
    id: 'docker',
    name: 'Docker',
    fullName: 'Docker Container Engine',
    category: 'Containers',
    role: 'Container Orchestration',
    description: 'Multi-stage Dockerfiles, docker-compose clusters, volume persistence, and microservices.',
    icon: SiDocker,
    color: '#2496ED',
    bgGlow: 'hover:border-[#2496ED]/60 hover:shadow-[0_8px_30px_rgba(36,150,237,0.25)]',
    badge: 'CONTAINERS'
  },
  {
    id: 'mongodb-compass',
    name: 'MongoDB',
    fullName: 'MongoDB Compass',
    category: 'Database GUI',
    role: 'Query & Schema Profiling',
    description: 'Aggregation pipeline builder, collection schema analysis, compound indexing, and query plans.',
    icon: SiMongodb,
    color: '#47A248',
    bgGlow: 'hover:border-[#47A248]/60 hover:shadow-[0_8px_30px_rgba(71,162,72,0.25)]',
    badge: 'DATABASE'
  },
  {
    id: 'figma',
    name: 'Figma',
    fullName: 'Figma Design System',
    category: 'UI/UX Design',
    role: 'Interface Design System',
    description: 'Wireframing, design tokenization, high-fidelity interactive prototypes, and auto-layout.',
    icon: SiFigma,
    color: '#F24E1E',
    bgGlow: 'hover:border-[#F24E1E]/60 hover:shadow-[0_8px_30px_rgba(242,78,30,0.25)]',
    badge: 'DESIGN'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    fullName: 'Wireshark Network Suite',
    category: 'Networking',
    role: 'Packet Inspection',
    description: 'Network packet captures, TCP handshake inspection, SSL/TLS handshake debugging, and payload analytics.',
    icon: SiWireshark,
    color: '#1679A7',
    bgGlow: 'hover:border-[#1679A7]/60 hover:shadow-[0_8px_30px_rgba(22,121,167,0.25)]',
    badge: 'NETWORKING'
  },
  {
    id: 'blender',
    name: 'Blender',
    fullName: 'Blender 3D Suite',
    category: '3D Graphics',
    role: '3D Modeling & Mesh',
    description: '3D mesh modeling, texture baking, and lighting setups for interactive WebGL / Three.js web assets.',
    icon: SiBlender,
    color: '#E87D0D',
    bgGlow: 'hover:border-[#E87D0D]/60 hover:shadow-[0_8px_30px_rgba(232,125,13,0.25)]',
    badge: '3D GRAPHICS'
  },
  {
    id: 'linux',
    name: 'Linux / Bash',
    fullName: 'Linux & Unix Terminal',
    category: 'Systems',
    role: 'Shell & Server Admin',
    description: 'Bash automation, cron jobs, process signals, SSH key routing, and Ubuntu server deployment.',
    icon: SiLinux,
    color: '#FCC624',
    bgGlow: 'hover:border-[#FCC624]/60 hover:shadow-[0_8px_30px_rgba(252,198,36,0.25)]',
    badge: 'SYSTEMS'
  },
  {
    id: 'jupyter',
    name: 'Jupyter / Colab',
    fullName: 'Jupyter & Google Colab',
    category: 'Data Science',
    role: 'Model Experimentation',
    description: 'Exploratory data analysis, GPU training loops, confusion matrix evaluation, and hyperparameter tuning.',
    icon: SiPython,
    color: '#3776AB',
    bgGlow: 'hover:border-[#3776AB]/60 hover:shadow-[0_8px_30px_rgba(55,118,171,0.25)]',
    badge: 'ML PIPELINES'
  },
  {
    id: 'vercel',
    name: 'Vercel Edge',
    fullName: 'Vercel Edge Cloud',
    category: 'Cloud Edge',
    role: 'Production Deployment',
    description: 'Zero-config continuous Git deployments, preview URLs, global edge CDN caching, and serverless runtime.',
    icon: SiVercel,
    color: '#FFFFFF',
    bgGlow: 'hover:border-white/60 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]',
    badge: 'EDGE CLOUD'
  },
];

const Softwares = () => {
  const [selectedSoftware, setSelectedSoftware] = useState(softwareList[0]);

  return (
    <section id="softwares" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 relative z-10 bg-black text-slate-200">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 pb-5 sm:pb-6 border-b border-white/10 gap-3">
          <div>
            <p className="text-xs text-accent font-mono uppercase tracking-widest mb-1.5 sm:mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
              // TOOLCHAIN & ECOSYSTEM
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand">
              Softwares <span className="text-slate-400">Known</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md">
            Professional developer environments, big data suites, and DevOps tooling for production engineering.
          </p>
        </div>

        {/* Softwares Grid (2-col on mobile, 4-col on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {softwareList.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selectedSoftware?.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedSoftware(item)}
                className={`group relative p-3.5 sm:p-5 rounded-2xl bg-[#0c0c12] border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'border-white/40 shadow-[0_8px_25px_rgba(255,255,255,0.08)] -translate-y-1 bg-[#12121a]'
                    : 'border-white/10 hover:border-white/25 hover:-translate-y-1'
                } ${item.bgGlow}`}
              >
                {/* Ambient Top Glow Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: item.color }}
                />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div 
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-white/5 border border-white/10 flex-shrink-0"
                      style={{ color: item.color }}
                    >
                      <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-mono tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10 font-medium truncate max-w-[50%]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Software Name & Category */}
                  <h3 className="text-xs sm:text-base font-bold text-white mb-0.5 sm:mb-1 group-hover:text-white transition-colors truncate">
                    <span className="sm:hidden">{item.name}</span>
                    <span className="hidden sm:inline">{item.fullName}</span>
                  </h3>
                  <p className="text-[10px] sm:text-xs font-mono text-accent mb-2 sm:mb-3 font-semibold truncate">
                    {item.role}
                  </p>

                  {/* Description */}
                  <p className="text-[10px] sm:text-xs text-slate-400 font-sans leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-slate-500">
                  <span className="truncate">{item.category}</span>
                  <FiCheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors flex-shrink-0 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Softwares;
