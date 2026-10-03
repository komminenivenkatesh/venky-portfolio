import React, { useState } from 'react';
import { 
  FiMail, 
  FiPhone,
  FiMapPin, 
  FiGithub, 
  FiLinkedin, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle,
  FiTerminal, 
  FiMessageSquare 
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'loading', text: 'Transmitting packet to Venky\'s inbox...' });

    try {
      const response = await fetch('https://formspree.io/f/xqparkbl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          text: 'Message delivered to Venky\'s Gmail! Thank you for reaching out.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        const errorMsg = data?.errors?.map((err) => err.message).join(', ') || 'Failed to dispatch message.';
        setStatus({
          type: 'error',
          text: `${errorMsg} Please email komminenivenkatesh045@gmail.com directly.`,
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        text: 'Network transmission failure. Please email komminenivenkatesh045@gmail.com directly.',
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus({ type: '', text: '' }), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 relative z-10 font-mono">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <p className="text-xs text-accent uppercase tracking-widest mb-2">
            // INITIATE CONNECTION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#12121c]/90 rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                Let's Build Something Exceptional
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                I'm actively seeking opportunities for software engineering roles, full-stack development, and machine learning projects. Whether you have an open position, a collaboration idea, or just want to discuss tech, my inbox is open!
              </p>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">DIRECT EMAIL</div>
                    <a
                      href="mailto:komminenivenkatesh045@gmail.com"
                      className="text-white hover:text-accent font-semibold transition-colors"
                    >
                      komminenivenkatesh045@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">PHONE / WHATSAPP</div>
                    <a
                      href="tel:+919100873719"
                      className="text-white hover:text-emerald-400 font-semibold transition-colors"
                    >
                      (+91) 9100873719
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-cyan-accent/20 text-cyan-accent">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">LOCATION</div>
                    <div className="text-white font-semibold">
                      Sonipat, Delhi NCR
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <FiCheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">AVAILABILITY</div>
                    <div className="text-emerald-400 font-semibold">
                      Open to Remote & Relocation
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="mt-6 pt-5 border-t border-white/10 flex gap-3">
                <a
                  href="https://github.com/komminenivenkatesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/komminenivenkatesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#12121c]/90 rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10 text-xs text-accent">
                <FiTerminal className="w-4 h-4" />
                <span>TERMINAL_DISPATCH // SEND_MESSAGE.SH</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    YOUR NAME <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    EMAIL ADDRESS <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">
                    MESSAGE PAYLOAD <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell me about your project, role, or say hello..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0a0a0f] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-bold text-sm shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <FiSend className="w-4 h-4" />
                  <span>{loading ? 'Transmitting to Gmail...' : 'Send Message'}</span>
                </button>

                {status.text && (
                  <div
                    className={`p-3 rounded-xl border text-xs font-mono flex items-center gap-2 animate-pulse ${
                      status.type === 'success'
                        ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                        : status.type === 'error'
                        ? 'bg-rose-950/80 border-rose-500/40 text-rose-300'
                        : 'bg-purple-950/80 border-purple-500/40 text-purple-200'
                    }`}
                  >
                    {status.type === 'error' ? (
                      <FiAlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    ) : (
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    )}
                    <span>{status.text}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
