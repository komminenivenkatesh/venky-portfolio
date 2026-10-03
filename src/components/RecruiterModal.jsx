import React, { useState } from 'react';
import { 
  FiX, 
  FiDownload, 
  FiMail, 
  FiPhone, 
  FiGithub, 
  FiLinkedin, 
  FiCheckCircle, 
  FiBriefcase, 
  FiAward, 
  FiCopy, 
  FiCheck,
  FiFileText 
} from 'react-icons/fi';

const RecruiterModal = ({ isOpen, onClose, onTriggerResume }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText('komminenivenkatesh045@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md font-mono"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0f0f18] border border-accent/40 rounded-2xl shadow-glow-purple overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141424] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-accent/20 text-accent">
              <FiBriefcase className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                Recruiter Executive Summary
              </h3>
              <p className="text-[11px] text-slate-400">
                High-level snapshot for hiring managers & technical recruiters
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Candidate Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/147895500?v=4"
                alt="Kommineni Venkateswarlu"
                className="w-14 h-14 rounded-full border-2 border-accent object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-white">Venkateswarlu Kommineni</h4>
                <p className="text-xs text-accent font-semibold">Full-Stack Web Developer & AI Solutions Engineer</p>
                <p className="text-[11px] text-slate-400">Sonipat, Delhi NCR • SRM University '27 (Data Science & AI)</p>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
              <a
                href="/venkatesh-resume.pdf"
                download="venkatesh-resume.pdf"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-accent hover:bg-accent-light text-white text-xs font-bold transition-all shadow-md text-center"
              >
                <FiDownload className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <a
                href="/venkatesh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs transition-colors text-center"
              >
                <FiFileText className="w-3.5 h-3.5 text-accent" />
                <span>View PDF</span>
              </a>
              <button
                onClick={copyEmail}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs transition-colors"
              >
                {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Key Competencies */}
          <div>
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
              Target Roles & Core Focus
            </h5>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Full-Stack Web Developer',
                'Software Engineer',
                'MERN Stack Developer',
                'AI & Machine Learning Engineer',
                'Computer Vision Developer',
              ].map((role) => (
                <span key={role} className="px-3 py-1 rounded-full bg-accent/15 text-purple-200 border border-accent/30 font-semibold">
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Technical Highlights */}
          <div>
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
              Verified Experience & Technical Achievements
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Sysslan IT Solutions:</strong> Full-Stack Web Development Intern (March – April 2026). Cut DOM re-renders by 28%, boosted Lighthouse from 72 to 91, and engineered 12+ secure REST endpoints with Docker & Postman testing.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Vahan Bazar:</strong> Full-stack two-wheeler marketplace with 1,200+ listings, compound indexes slashing query latency from 850ms to 540ms (~36% speedup), and Cloudinary payload reduction of 47%.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Hospital Medical System (Sushuruth):</strong> End-to-end healthcare platform handling admissions, digital medical records (EMR), scheduled consultations, and role-based access control (RBAC).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Brain Tumor Detection AI:</strong> Deep CNN across 3,000+ Kaggle Br35H brain MRI images achieving 94.2% test accuracy, 0.93 F1-score, and 95.1% sensitivity via 5-fold cross-validation.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Real-Time Indian Sign Language AI:</strong> 28+ FPS gesture-to-text inference pipeline under 35ms latency extracting 21 3D MediaPipe hand landmarks with 96.4% gesture accuracy.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Full-Stack E-Commerce Website:</strong> Online retail store with product catalogues, category filtering, and real-time stateful cart checkout flow.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FiCheckCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>IBM Certifications (3x):</strong> Machine Learning Professional (Supervised Learning, Neural Networks), Data Science Methodologies, and Introduction to Python.
                </span>
              </div>
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:komminenivenkatesh045@gmail.com"
                className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
              >
                <FiMail className="text-accent" />
                <span>komminenivenkatesh045@gmail.com</span>
              </a>
              <a
                href="tel:+919100873719"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <FiPhone className="text-emerald-400" />
                <span>(+91) 9100873719</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/komminenivenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white flex items-center gap-1"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="https://linkedin.com/in/komminenivenkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-accent flex items-center gap-1"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="https://vahan-bhazar.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-accent hover:underline flex items-center gap-1"
              >
                <span>Vahan Bazar Live ↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#12121e] border-t border-white/10 flex justify-between items-center text-xs text-slate-500">
          <span>Press ESC or click outside to dismiss</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecruiterModal;
