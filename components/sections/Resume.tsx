'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  FileText,
  Eye,
  X,
  Printer,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  personalInfo,
  about,
  experience,
  education,
  trainings,
  references,
  languages,
} from '@/lib/constants';

export function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section-padding bg-white dark:bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Icon */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary-500/20 via-accent-cyan/20 to-accent-purple/20 border border-primary-500/30 flex items-center justify-center shadow-2xl shadow-primary-500/15"
          >
            <FileText className="h-12 w-12 text-primary-500 dark:text-primary-400" />
          </motion.div>

          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Official Curriculum Vitae
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Updated <span className="bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple bg-clip-text text-transparent">Resume & Credentials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Download my verified 2-page CV containing full academic credentials, live banking engineering experience, AI research papers, technical competencies, and professional references.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                href="/resume.pdf"
                download="Abdullah_Al_Rafi_Resume.pdf"
                className="shadow-xl shadow-primary-500/25 min-w-[200px]"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF CV
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsPreviewOpen(true)}
                className="border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 min-w-[200px]"
              >
                <Eye className="mr-2 h-5 w-5" />
                View CV Online
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            <span>Updated with Live Banking Internship at Islami Bank PLC & Research at DIU</span>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-900/60 border border-gray-200/80 dark:border-gray-800">
              <div className="text-2xl lg:text-3xl font-extrabold text-primary-600 dark:text-primary-400 mb-1">
                3+ Mos
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Live Banking IT
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-900/60 border border-gray-200/80 dark:border-gray-800">
              <div className="text-2xl lg:text-3xl font-extrabold text-accent-purple mb-1">
                4 Roles
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Experience & Leadership
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-900/60 border border-gray-200/80 dark:border-gray-800">
              <div className="text-2xl lg:text-3xl font-extrabold text-accent-cyan mb-1">
                15+
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Tech Stack Tools
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-900/60 border border-gray-200/80 dark:border-gray-800">
              <div className="text-2xl lg:text-3xl font-extrabold text-accent-emerald mb-1">
                2 Key
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Industry References
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Digital CV Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 z-20 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary-500" />
                  <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
                    Abdullah Al Rafi — Curriculum Vitae
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download="Abdullah_Al_Rafi_Resume.pdf"
                    className="px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Download</span> PDF
                  </a>
                  <button
                    onClick={() => window.print()}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs transition-colors"
                    title="Print CV"
                  >
                    <Printer className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 transition-colors"
                    aria-label="Close Preview"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* CV Body Content */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                {/* Header Section */}
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-base text-primary-600 dark:text-primary-400 font-semibold mt-1">
                    {personalInfo.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {personalInfo.location}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5" /> {personalInfo.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> {personalInfo.email}
                    </span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </div>
                </div>

                {/* About Me */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-2">
                    About Me
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {about.summary}
                  </p>
                </div>

                {/* Work Experience */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" /> Work Experience
                  </h2>
                  <div className="space-y-6">
                    {experience.map((exp, idx) => (
                      <div key={idx} className="border-l-2 border-primary-500/40 pl-4 space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-bold text-gray-900 dark:text-white text-base">
                            {exp.role}
                          </h3>
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400">
                            {exp.startDate} – {exp.endDate}
                          </span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-xs font-semibold">
                          {exp.organization} — {exp.location}
                        </p>
                        <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-gray-600 dark:text-gray-300 pt-1">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> Education
                  </h2>
                  <div className="space-y-4">
                    {education.map((edu, idx) => (
                      <div key={idx} className="border-l-2 border-accent-emerald/40 pl-4 space-y-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {edu.startDate} – {edu.endDate}
                          </span>
                        </div>
                        <p className="text-accent-emerald font-semibold text-xs">
                          {edu.institution}
                        </p>
                        {edu.details && (
                          <p className="text-xs text-gray-600 dark:text-gray-400">{edu.details}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training & Certifications */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4" /> Training & Certifications
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    {trainings.map((t, i) => (
                      <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700">
                        <p className="font-bold text-gray-900 dark:text-white">{t.title}</p>
                        <p className="text-primary-600 dark:text-primary-400 text-[11px] font-medium">{t.organization} ({t.period})</p>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">{t.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* References */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                    References
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    {references.map((ref, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 space-y-1">
                        <p className="font-bold text-gray-900 dark:text-white text-sm">{ref.name}</p>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{ref.title}</p>
                        <p className="text-gray-500 dark:text-gray-400">{ref.department}, {ref.organization}</p>
                        <div className="pt-2 text-[11px] text-gray-600 dark:text-gray-400 space-y-0.5">
                          <p>Phone: <span className="font-mono">{ref.phone}</span></p>
                          <p>Email: <a href={`mailto:${ref.email}`} className="text-primary-600 dark:text-primary-400 underline">{ref.email}</a></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
