import React, { useState } from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiCpu, 
  FiTool, 
  FiTerminal, 
  FiCheckCircle, 
  FiLayers 
} from 'react-icons/fi';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiMongodb, 
  SiMysql, 
  SiTensorflow, 
  SiOpencv, 
  SiGit, 
  SiDocker, 
  SiVercel, 
  SiLinux,
  SiC,
  SiPostman,
  SiKeras,
  SiPandas,
  SiApachehadoop,
  SiR
} from 'react-icons/si';

// Radial Circular Skills matching Figma prototype
const radialSkills = [
  {
    name: 'Python Programming',
    category: 'Core Language',
    percentage: 92,
    color: '#38bdf8',
    subtext: 'Data structures, OOP, algorithmic scripting & automation',
  },
  {
    name: 'Full-Stack Web Dev',
    category: 'Frontend & Backend',
    percentage: 90,
    color: '#818cf8',
    subtext: 'React 19, Node.js, Express, stateful REST architectures',
  },
  {
    name: 'Machine Learning',
    category: 'AI & Modeling',
    percentage: 88,
    color: '#ec4899',
    subtext: 'TensorFlow, Keras, CNNs, model evaluation & tuning',
  },
  {
    name: 'Computer Vision',
    category: 'Real-Time CV',
    percentage: 86,
    color: '#a855f7',
    subtext: 'OpenCV frame processing, MediaPipe landmark pipelines',
  },
  {
    name: 'Database Engineering',
    category: 'Data Storage',
    percentage: 85,
    color: '#34d399',
    subtext: 'MongoDB aggregation, compound indexing, MySQL queries',
  },
  {
    name: 'Data Structures & Alg',
    category: 'Problem Solving',
    percentage: 84,
    color: '#fbbf24',
    subtext: 'Arrays, trees, graphs, sorting, searching & complexity analysis',
  },
];

const skillCategories = [
  {
    title: 'Languages & Frontend',
    icon: <FiCode className="text-cyan-400" />,
    skills: [
      { name: 'Python', icon: SiPython, level: 'Proficient (92%)' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, level: 'Advanced (90%)' },
      { name: 'C Language', icon: SiC, level: 'Proficient (82%)' },
      { name: 'R Language', icon: SiR, level: 'Proficient (82%)' },
      { name: 'React', icon: SiReact, level: 'Advanced (90%)' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced (92%)' },
    ],
  },
  {
    title: 'Backend & Big Data Architecture',
    icon: <FiDatabase className="text-emerald-400" />,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 'Proficient (88%)' },
      { name: 'Express.js', icon: SiExpress, level: 'Proficient (88%)' },
      { name: 'Hadoop & Big Data', icon: SiApachehadoop, level: 'Proficient (84%)' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Proficient (85%)' },
      { name: 'RESTful Architecture', icon: FiTerminal, level: 'Advanced (90%)' },
      { name: 'JWT Authentication', icon: FiCheckCircle, level: 'Proficient (85%)' },
    ],
  },
  {
    title: 'AI, Deep Learning & Vision',
    icon: <FiCpu className="text-pink-400" />,
    skills: [
      { name: 'TensorFlow & Keras', icon: SiTensorflow, level: 'Proficient (88%)' },
      { name: 'OpenCV', icon: SiOpencv, level: 'Proficient (86%)' },
      { name: 'MediaPipe Hands', icon: FiCpu, level: 'Proficient (88%)' },
      { name: 'Scikit-learn', icon: FiCode, level: 'Proficient (85%)' },
      { name: 'Pandas & NumPy', icon: SiPandas, level: 'Proficient (88%)' },
      { name: 'CNN Architectures', icon: FiLayers, level: 'Proficient (87%)' },
    ],
  },
];

// Circular SVG Progress Gauge Component
const RadialGauge = ({ skill }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

  return (
    <div className="group relative p-6 rounded-3xl bg-[#0c0c12] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1.5 shadow-lg">
      {/* Circular SVG Meter */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Track Circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="7"
            fill="transparent"
          />
          {/* Active Progress Circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke={skill.color}
            strokeWidth="7"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-white font-brand tracking-tight">
            {skill.percentage}%
          </span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            SCORE
          </span>
        </div>
      </div>

      {/* Skill Label */}
      <h4 className="text-base font-bold text-white mt-4 mb-1 font-brand group-hover:text-white transition-colors">
        {skill.name}
      </h4>
      <span className="text-xs font-mono text-accent mb-2 font-medium">
        {skill.category}
      </span>
      <p className="text-xs text-slate-400 font-sans leading-relaxed">
        {skill.subtext}
      </p>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('gauges');

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative z-10 bg-black text-slate-200">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <p className="text-xs text-accent font-mono uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
              // TECHNICAL RATINGS & PROFICIENCY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-brand">
              Technical <span className="text-slate-400">Skills</span>
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-[#0c0c12] p-1.5 rounded-full border border-white/10 self-start md:self-auto mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab('gauges')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'gauges'
                  ? 'bg-white text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Radial Meters
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'detailed'
                  ? 'bg-white text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Detailed Breakdown
            </button>
          </div>
        </div>

        {/* Mode 1: Radial Progress Rings (Matching Figma Prototype) */}
        {activeTab === 'gauges' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {radialSkills.map((skill, idx) => (
              <RadialGauge key={idx} skill={skill} />
            ))}
          </div>
        ) : (
          /* Mode 2: Detailed Categorized Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillCategories.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#0c0c12] border border-white/10 space-y-4"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-bold text-white font-brand">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  {group.skills.map((skill, sIdx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-4 h-4 text-slate-300" />
                          <span className="font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-slate-400 font-mono text-[11px]">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
