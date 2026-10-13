'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Check,
  Copy,
  MessageSquare,
  ExternalLink,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { personalInfo } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/abdullahalrafi0101@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `Portfolio Inquiry from ${formData.name} (${formData.email})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error('Server responded with an issue');
      }
    } catch (err) {
      console.error('Submission failed, activating mailto fallback:', err);
      setStatus('error');
      setErrorMessage(
        'Could not submit through the automated gateway. Please click "Open Mail Client" below to email directly!'
      );
    }
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
  )}`;

  return (
    <section id="contact" className="section-padding bg-gray-50/80 dark:bg-dark-950 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind, a job opportunity, or want to discuss banking systems, AI, or software development? Send a message directly to my inbox!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white dark:bg-dark-900/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Feel free to reach out directly via email, phone, or professional networks.
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-cyan/5 border border-primary-500/20">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-11 h-11 bg-primary-500/15 border border-primary-500/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-lg bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1 text-xs"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-green-500" />
                        <span className="text-green-500 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-800/60 border border-gray-200/80 dark:border-gray-800/80">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-11 h-11 bg-accent-purple/15 border border-accent-purple/30 rounded-xl flex items-center justify-center text-accent-purple">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-accent-purple transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-xs font-medium hover:bg-green-500/20 transition-all flex items-center gap-1.5"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    Chat
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-800/60 border border-gray-200/80 dark:border-gray-800/80 flex items-start gap-3">
                <div className="flex-shrink-0 w-11 h-11 bg-accent-cyan/15 border border-accent-cyan/30 rounded-xl flex items-center justify-center text-accent-cyan">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-100 dark:bg-dark-800/80 hover:bg-primary-500/10 border border-gray-200 dark:border-gray-700 hover:border-primary-500/40 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all text-xs font-medium"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-100 dark:bg-dark-800/80 hover:bg-accent-purple/10 border border-gray-200 dark:border-gray-700 hover:border-accent-purple/40 text-gray-700 dark:text-gray-300 hover:text-accent-purple transition-all text-xs font-medium"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-3 w-3 ml-auto opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-dark-900/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Send a Message
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Messages sent here go straight to <span className="font-semibold text-primary-600 dark:text-primary-400">{personalInfo.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                      placeholder="e.g. Abdullah / HR Recruiter"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Your Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                    placeholder="Job Opportunity / Software Consultation / Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Hello Abdullah, I came across your portfolio and would like to discuss..."
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading'}
                    className="min-w-[180px] shadow-lg shadow-primary-500/25"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending Message...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <Check className="mr-2 h-4 w-4 text-green-300" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send to Abdullah
                      </>
                    )}
                  </Button>

                  <a
                    href={mailtoUrl}
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 underline underline-offset-4 transition-colors"
                  >
                    Or open default email client
                  </a>
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-sm flex items-start gap-3"
                  >
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message successfully delivered!</p>
                      <p className="text-xs opacity-90 mt-0.5">
                        Thank you for reaching out. A notification has been dispatched to {personalInfo.email}. I will reply shortly!
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-sm flex items-start gap-3"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-semibold">Need fallback delivery</p>
                      <p className="text-xs opacity-90 mt-0.5">{errorMessage}</p>
                      <a
                        href={mailtoUrl}
                        className="inline-block mt-2 px-3 py-1.5 rounded-lg bg-primary-600 text-white font-medium text-xs hover:bg-primary-700 transition-colors"
                      >
                        Send via Mail Client Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
