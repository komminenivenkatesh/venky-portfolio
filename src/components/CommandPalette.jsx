import React, { useState, useEffect } from 'react';
import { 
  FiTerminal, 
  FiFolder, 
  FiClock, 
  FiCpu, 
  FiMail, 
  FiDownload, 
  FiGithub, 
  FiLinkedin,
  FiEye, 
  FiCheck,
  FiX
} from 'react-icons/fi';

const CommandPalette = ({ isOpen, onClose, onToggleRecruiter, recruiterMode, onTriggerResume }) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: 'projects',
      label: 'Navigate: Projects',
      icon: <FiFolder className="text-purple-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose(false);
      },
    },
    {
      id: 'timeline',
      label: 'Navigate: Build Timeline',
      icon: <FiClock className="text-cyan-400" />,
      action: () => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
        onClose(false);
      },
    },
    {
      id: 'skills',
      label: 'Navigate: Tech Stack & Skills',
      icon: <FiCpu className="text-emerald-400" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose(false);
      },
    },
    {
      id: 'contact',
      label: 'Navigate: Get In Touch',
      icon: <FiMail className="text-pink-400" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose(false);
      },
    },
    {
      id: 'resume',
      label: 'Download Resume (venkatesh-resume.pdf)',
      icon: <FiDownload className="text-yellow-400" />,
      action: () => {
        onTriggerResume();
        onClose(false);
      },
    },
    {
      id: 'recruiter',
      label: `Toggle Recruiter Mode (${recruiterMode ? 'ON' : 'OFF'})`,
      icon: <FiEye className="text-accent" />,
      action: () => {
        onToggleRecruiter();
        onClose(false);
      },
    },
    {
      id: 'github',
      label: 'Open: github.com/komminenivenkatesh',
      icon: <FiGithub className="text-slate-200" />,
      action: () => {
        window.open('https://github.com/komminenivenkatesh', '_blank');
        onClose(false);
      },
    },
    {
      id: 'linkedin',
      label: 'Open: linkedin.com/in/komminenivenkatesh',
      icon: <FiLinkedin className="text-cyan-400" />,
      action: () => {
        window.open('https://linkedin.com/in/komminenivenkatesh', '_blank');
        onClose(false);
      },
    },
    {
      id: 'copy-email',
      label: 'Copy: Email to Clipboard',
      icon: copied ? <FiCheck className="text-emerald-400" /> : <FiMail className="text-blue-400" />,
      action: () => {
        navigator.clipboard.writeText('komminenivenkatesh045@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
  ];

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all"
      onClick={() => onClose(false)}
    >
      <div
        className="w-full max-w-xl bg-[#0f0f17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141422] border-b border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="ml-2 font-semibold text-slate-300">command_palette.sh</span>
          </div>
          <button
            onClick={() => onClose(false)}
            className="p-1 text-slate-400 hover:text-white rounded transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Input */}
        <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3 bg-black/40">
          <span className="text-accent font-bold text-lg">&gt;</span>
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white focus:outline-none text-sm placeholder:text-slate-500"
          />
          <kbd className="px-2 py-0.5 text-[11px] bg-white/10 text-slate-400 rounded border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Command list */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-accent/50 transition-colors">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-accent font-mono">
                  [run]
                </span>
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-[#12121e] border-t border-white/10 text-[11px] text-slate-500 flex justify-between items-center">
          <span>Press Enter to select</span>
          <span className="text-accent">Ctrl + K to toggle anytime</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
