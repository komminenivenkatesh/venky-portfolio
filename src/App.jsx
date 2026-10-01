import React, { useState } from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import RecruiterModal from './components/RecruiterModal';
import './App.css';

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [resumeStatus, setResumeStatus] = useState('');

  // Handle Terminal Resume Download ($ curl -O venkatesh-resume.pdf)
  const handleTriggerResume = () => {
    setResumeStatus('Resolving raw.github.com/komminenivenkatesh...');
    
    setTimeout(() => {
      setResumeStatus('Connecting to remote host [2606:50c0:8000::153]...');
    }, 400);

    setTimeout(() => {
      setResumeStatus('Downloading [████████████████████] 100% (2.4 MB/s)');
    }, 1000);

    setTimeout(() => {
      setResumeStatus('✅ Done: Saved venkatesh-resume.pdf to local disk!');
      
      // Trigger download of real PDF
      const a = document.createElement('a');
      a.href = '/venkatesh-resume.pdf';
      a.download = 'venkatesh-resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setTimeout(() => setResumeStatus(''), 4000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 selection:bg-accent/40 selection:text-white font-mono relative overflow-x-hidden">
      {/* 3D Starfield Background Canvas */}
      <StarfieldCanvas />

      {/* Floating Navbar */}
      <Navbar
        onOpenCommandPalette={setCommandPaletteOpen}
        recruiterMode={recruiterMode}
        onToggleRecruiter={() => setRecruiterMode(!recruiterMode)}
      />

      {/* Hero Section */}
      <Hero
        onTriggerResume={handleTriggerResume}
        resumeStatus={resumeStatus}
      />

      {/* Projects Showcase */}
      <Projects />

      {/* Build Timeline */}
      <Timeline />

      {/* Skills Matrix */}
      <Skills />

      {/* About & Interests */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Terminal Footer */}
      <Footer onTriggerResume={handleTriggerResume} />

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={setCommandPaletteOpen}
        onToggleRecruiter={() => setRecruiterMode(!recruiterMode)}
        recruiterMode={recruiterMode}
        onTriggerResume={handleTriggerResume}
      />

      {/* Recruiter Executive Summary Modal */}
      <RecruiterModal
        isOpen={recruiterMode}
        onClose={() => setRecruiterMode(false)}
        onTriggerResume={handleTriggerResume}
      />
    </div>
  );
}

export default App;
