import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Freelance / Personal Projects",
      period: "2023 - Present",
      description: "Developed modern web applications including Vahan Bhazar (Next.js marketplace) and e-commerce platforms using React and Node.js. Integrated MongoDB for database management and implemented responsive designs using Tailwind CSS."
    },
    {
      role: "Machine Learning Researcher",
      company: "Academic Projects",
      period: "2022 - 2023",
      description: "Built and trained machine learning models for Brain Tumor Detection and Real-time Indian Sign Language Recognition using Python, TensorFlow, and OpenCV. Achieved high accuracy rates in image classification tasks."
    },
    {
      role: "Bachelor of Technology",
      company: "Computer Science and Engineering",
      period: "Graduated",
      description: "Studied core computer science concepts including data structures, algorithms, database management systems, and software engineering. Participated in various hackathons and tech symposiums."
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center reveal">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0">
            {experiences.map((exp, index) => (
              <div key={index} className={`mb-12 ml-8 md:ml-12 reveal delay-${(index + 1) * 100}`}>
                <div className="absolute w-6 h-6 bg-dark-900 border-4 border-primary rounded-full -left-[13px] md:-left-[13px] mt-1.5 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-primary font-medium text-sm mt-2 md:mt-0 px-3 py-1 bg-primary/10 rounded-full inline-block w-max">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 font-medium mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    {exp.company}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {exp.description}
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

export default Experience;
