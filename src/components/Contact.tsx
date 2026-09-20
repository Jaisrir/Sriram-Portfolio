import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, FileText, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PersonalData } from '../types';

interface ContactProps {
  personalData: PersonalData;
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ personalData, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastTransmission, setLastTransmission] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: string;
    recipient: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalData.email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = personalData.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (e) {
      console.warn('Failed to copy email to clipboard:', e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    const subjectText = formState.subject.trim() || `Portfolio Inquiry from ${formState.name.trim()}`;
    const senderEmail = formState.email.trim() || 'visitor@portfolio.dev';

    const timestamp = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const transmissionRecord = {
      name: formState.name.trim(),
      email: senderEmail,
      subject: subjectText,
      message: formState.message.trim(),
      recipient: personalData.email,
      timestamp
    };

    // Save record to local storage for user review & in-app message inbox
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = JSON.parse(window.localStorage.getItem('portfolio_sent_messages') || '[]');
        saved.unshift(transmissionRecord);
        window.localStorage.setItem('portfolio_sent_messages', JSON.stringify(saved.slice(0, 30)));
      }
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    // Call real email delivery API (FormSubmit) directly from the browser
    try {
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personalData.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: senderEmail,
          _subject: subjectText,
          message: formState.message.trim(),
          _template: 'table',
          _captcha: 'false'
        })
      });
    } catch (err) {
      console.warn('Direct email API dispatch error:', err);
    }

    setLastTransmission(transmissionRecord);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const socialChannels = [
    {
      name: 'Email Directly',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      icon: Mail,
      action: 'Send Email',
      highlight: true
    },
    {
      name: 'LinkedIn',
      value: `in/${personalData.linkedinUrl.split('/').filter(Boolean).pop() || 'developer'}`,
      href: personalData.linkedinUrl,
      icon: Linkedin,
      action: 'Connect',
      highlight: false
    },
    {
      name: 'GitHub',
      value: `@${personalData.githubUsername}`,
      href: personalData.githubUrl,
      icon: Github,
      action: 'Follow & Star',
      highlight: false
    },
    {
      name: 'Twitter / X',
      value: `@${personalData.twitterUrl.split('/').filter(Boolean).pop() || 'developer'}`,
      href: personalData.twitterUrl,
      icon: Twitter,
      action: 'Message',
      highlight: false
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Extraordinary</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base sm:text-lg">
            Have an engineering role, software project, or collaboration inquiry? Submit the note below or connect directly.
          </p>
        </div>

        {/* Two-Column Contact Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Resume Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-mono">Direct Communication</h3>
                  <p className="text-xs text-slate-400">Response within 24 hours</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/5 font-mono text-xs text-cyan-300 break-all mb-4">
                {personalData.email}
              </div>

              <div className="flex items-center gap-3">
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialChannels.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 truncate max-w-[120px]">
                          {item.value}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
                  </a>
                );
              })}
            </div>

            {/* Resume / CV Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Curriculum Vitae</div>
                  <div className="text-xs text-slate-400">Wise Work & MERN credentials</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  id="contact-resume-direct-btn"
                  href={personalData.resumeUrl || '/resume.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 text-xs font-mono font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-xl transition-colors shrink-0 shadow-sm flex items-center gap-1.5"
                  title="Open resume file in new tab"
                >
                  <span>PDF File</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <button
                  id="contact-resume-modal-btn"
                  onClick={onOpenResume}
                  className="px-3.5 py-2 text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  View CV
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form (No 'Your Email' input required) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-2xl">
              
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-cyan-950/50 text-cyan-400 border border-cyan-500/20">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Leave a note for <span className="text-cyan-300 font-mono">{personalData.email}</span>
                  </p>
                </div>
              </div>

              {submitted && lastTransmission ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-cyan-500/40 space-y-4 shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-mono">
                        Message Dispatched Successfully!
                      </h4>
                      <p className="text-xs text-cyan-300 font-mono">
                        Delivered to: <span className="underline font-semibold">{lastTransmission.recipient}</span>
                      </p>
                    </div>
                  </div>

                  {/* Summary of Dispatched Payload */}
                  <div className="p-4 rounded-xl bg-slate-950/90 border border-white/10 font-mono text-xs space-y-2 text-slate-300">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>STATUS: <strong className="text-emerald-400">DISPATCHED</strong></span>
                      </span>
                      <span>{lastTransmission.timestamp}</span>
                    </div>
                    <div><span className="text-cyan-400">TO:</span> {lastTransmission.recipient}</div>
                    <div><span className="text-cyan-400">FROM:</span> {lastTransmission.name} ({lastTransmission.email})</div>
                    <div><span className="text-cyan-400">SUBJECT:</span> {lastTransmission.subject}</div>
                    <div className="pt-2 border-t border-white/5 text-slate-200 whitespace-pre-wrap">
                      <span className="text-cyan-400 block mb-1">MESSAGE:</span>
                      {lastTransmission.message}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="flex-1 px-4 py-2.5 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalData.email)}&su=${encodeURIComponent(lastTransmission.subject)}&body=${encodeURIComponent(lastTransmission.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1.5"
                      title="Open in Gmail Web"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Open in Gmail</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="px-4 py-2.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-colors text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email in responsive 2-column layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 text-sm text-white bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 text-sm text-white bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Software Engineering Role / Project Inquiry"
                      className="w-full px-4 py-3 text-sm text-white bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 text-sm text-white bg-slate-950/80 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-bold font-mono text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                        <span>Delivering email to {personalData.email}...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message Directly to Sriram</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
