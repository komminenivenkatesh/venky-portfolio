import React from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiCpu, 
  FiTool, 
  FiTerminal, 
  FiCheckCircle 
} from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiTensorflow, 
  SiOpencv, 
  SiGit, 
  SiDocker, 
  SiVercel, 
  SiLinux,
  SiThreedotjs,
  SiC,
  SiPostman,
  SiKeras,
  SiPandas,
  SiCloudinary
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Languages & Frontend',
    icon: <FiCode className="text-cyan-accent" />,
    description: 'Modern programming languages, modular UI architecture, and 3D web experiences.',
    skills: [
      { name: 'Python', icon: SiPython, level: 'Proficient' },
      { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
      { name: 'C Language', icon: SiC, level: 'Proficient' },
      { name: 'React', icon: SiReact, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
      { name: 'Three.js', icon: SiThreedotjs, level: 'Proficient' },
      { name: 'HTML5 / CSS3', icon: SiHtml5, level: 'Advanced' },
      { name: 'SQL', icon: SiMysql, level: 'Proficient' },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: <FiDatabase className="text-emerald-400" />,
    description: 'Robust RESTful API architectures, database optimization, and secure session management.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 'Proficient' },
      { name: 'Express.js', icon: SiExpress, level: 'Proficient' },
      { name: 'MongoDB', icon: SiMongodb, level: 'Proficient' },
      { name: 'MySQL', icon: SiMysql, level: 'Proficient' },
      { name: 'RESTful APIs', icon: FiTerminal, level: 'Advanced' },
      { name: 'JWT Security', icon: FiCheckCircle, level: 'Proficient' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: <FiCpu className="text-pink-400" />,
    description: 'Deep neural networks, computer vision pipelines, image processing, and numerical modeling.',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, level: 'Proficient' },
      { name: 'Keras', icon: SiKeras, level: 'Proficient' },
      { name: 'OpenCV', icon: SiOpencv, level: 'Proficient' },
      { name: 'MediaPipe', icon: FiCpu, level: 'Proficient' },
      { name: 'Scikit-learn', icon: FiCode, level: 'Proficient' },
      { name: 'NumPy & Pandas', icon: SiPandas, level: 'Proficient' },
    ],
  },
  {
    title: 'Developer Tools & Cloud',
    icon: <FiTool className="text-accent" />,
    description: 'Version control, containerization, API testing, media management, and edge deployments.',
    skills: [
      { name: 'Git & GitHub', icon: SiGit, level: 'Advanced' },
      { name: 'Docker', icon: SiDocker, level: 'Proficient' },
      { name: 'Postman', icon: SiPostman, level: 'Proficient' },
      { name: 'Cloudinary', icon: SiCloudinary, level: 'Proficient' },
      { name: 'Linux', icon: SiLinux, level: 'Proficient' },
      { name: 'Vercel', icon: SiVercel, level: 'Advanced' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 relative z-10 font-mono">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <p className="text-xs text-accent uppercase tracking-widest mb-2">
            // TECHNICAL COMPETENCIES & TOOLKIT
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">Proficiency</span>
          </h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-[#12121c]/90 rounded-2xl border border-white/10 p-7 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-lg">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-6 font-sans leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {group.skills.map((s, sIdx) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-accent/40 hover:bg-white/[0.07] transition-all group"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <Icon className="w-4 h-4 text-slate-400 group-hover:text-accent flex-shrink-0 transition-colors" />
                          <span className="text-xs text-slate-200 group-hover:text-white font-medium truncate">
                            {s.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono group-hover:text-accent/90">
                          {s.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>VERIFIED VIA GITHUB REPOSITORIES</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <FiCheckCircle className="w-3 h-3" />
                  <span>Production Ready</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
