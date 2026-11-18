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
import { FiCheckCircle, FiLayers } from 'react-icons/fi';

const softwareList = [
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'Development Environment',
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
    category: 'Mobile & SDK Tooling',
    role: 'Native Android Dev',
    description: 'Mobile emulation, Gradle build pipelines, SDK platform tools, and performance profiling.',
    icon: SiAndroidstudio,
    color: '#3DDC84',
    bgGlow: 'hover:border-[#3DDC84]/60 hover:shadow-[0_8px_30px_rgba(61,220,132,0.25)]',
    badge: 'MOBILE SDK'
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Version Control & CI/CD',
    role: 'Distributed VCS',
    description: 'Branch management, semantic commit workflows, GitHub Actions CI/CD automation, and pull request reviews.',
    icon: SiGithub,
    color: '#F05032',
    bgGlow: 'hover:border-[#F05032]/60 hover:shadow-[0_8px_30px_rgba(240,80,50,0.25)]',
    badge: 'DEVOPS'
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'API Engineering',
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
    category: 'Containerization',
    role: 'Container Orchestration',
    description: 'Multi-stage Dockerfiles, docker-compose container clusters, volume persistence, and microservices.',
    icon: SiDocker,
    color: '#2496ED',
    bgGlow: 'hover:border-[#2496ED]/60 hover:shadow-[0_8px_30px_rgba(36,150,237,0.25)]',
    badge: 'CONTAINERS'
  },
  {
    id: 'mongodb-compass',
    name: 'MongoDB Compass',
    category: 'Database GUI',
    role: 'Query & Schema Profiling',
    description: 'Aggregation pipeline builder, collection schema analysis, compound indexing, and query execution plans.',
    icon: SiMongodb,
    color: '#47A248',
    bgGlow: 'hover:border-[#47A248]/60 hover:shadow-[0_8px_30px_rgba(71,162,72,0.25)]',
    badge: 'DATABASE'
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX & Prototyping',
    role: 'Interface Design System',
    description: 'Wireframing, design system tokenization, high-fidelity interactive prototypes, and auto-layout components.',
    icon: SiFigma,
    color: '#F24E1E',
    bgGlow: 'hover:border-[#F24E1E]/60 hover:shadow-[0_8px_30px_rgba(242,78,30,0.25)]',
    badge: 'DESIGN'
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    category: 'Network Protocol Analysis',
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
    category: '3D & Computer Graphics',
    role: '3D Modeling & Rendering',
    description: '3D mesh modeling, texture baking, and lighting setups for interactive WebGL / Three.js web assets.',
    icon: SiBlender,
    color: '#E87D0D',
    bgGlow: 'hover:border-[#E87D0D]/60 hover:shadow-[0_8px_30px_rgba(232,125,13,0.25)]',
    badge: '3D GRAPHICS'
  },
  {
    id: 'linux',
    name: 'Linux / Bash',
    category: 'System Operations',
    role: 'Shell & Server Admin',
    description: 'Bash automation, cron jobs, process signals, SSH key routing, and Ubuntu/Debian server deployment.',
    icon: SiLinux,
    color: '#FCC624',
    bgGlow: 'hover:border-[#FCC624]/60 hover:shadow-[0_8px_30px_rgba(252,198,36,0.25)]',
    badge: 'SYSTEMS'
  },
  {
    id: 'hadoop',
    name: 'Apache Hadoop & HDFS',
    category: 'Big Data & Distributed Computing',
    role: 'Distributed Cluster Framework',
    description: 'HDFS cluster management, MapReduce data processing, and big data ecosystem integration (IBM Certified).',
    icon: SiApachehadoop,
    color: '#FFEA00',
    bgGlow: 'hover:border-[#FFEA00]/60 hover:shadow-[0_8px_30px_rgba(255,234,0,0.25)]',
    badge: 'BIG DATA'
  },
  {
    id: 'jupyter',
    name: 'Jupyter & Google Colab',
    category: 'Data Science & ML',
    role: 'Model Experimentation',
    description: 'Exploratory data analysis, GPU training loops, confusion matrix evaluation, and hyperparameter tuning.',
    icon: SiPython,
    color: '#3776AB',
    bgGlow: 'hover:border-[#3776AB]/60 hover:shadow-[0_8px_30px_rgba(55,118,171,0.25)]',
    badge: 'ML PIPELINES'
  },
  {
    id: 'vercel',
    name: 'Vercel Edge Network',
    category: 'Cloud Hosting & Edge',
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
    <section id="softwares" className="py-24 px-6 lg:px-12 relative z-10 bg-black text-slate-200">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <p className="text-xs text-accent font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
              // TOOLCHAIN & ECOSYSTEM
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand">
              Softwares <span className="text-slate-400">Known</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-md mt-3 md:mt-0">
            Professional developer environments, analysis suites, and DevOps tooling utilized for daily production engineering.
          </p>
        </div>

        {/* Softwares Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {softwareList.map((item) => {
            const IconComponent = item.icon;
            const isSelected = selectedSoftware?.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedSoftware(item)}
                className={`group relative p-5 rounded-2xl bg-[#0c0c12] border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? 'border-white/40 shadow-[0_10px_35px_rgba(255,255,255,0.08)] -translate-y-1 bg-[#12121a]'
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
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-white/5 border border-white/10"
                      style={{ color: item.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  {/* Software Name & Category */}
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-accent mb-3 font-semibold">
                    {item.role}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-200">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.category}</span>
                  <FiCheckCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
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
