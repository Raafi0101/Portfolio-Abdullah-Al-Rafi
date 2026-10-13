'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import { experience } from '@/lib/constants';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-950 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Timeline
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical development experience spanning live banking environments, technical leadership, and computer vision research.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-10 pb-12 last:pb-0"
            >
              {/* Timeline continuous connector */}
              {index !== experience.length - 1 && (
                <div className="absolute left-2.5 sm:left-4 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-cyan/30 to-gray-200 dark:to-gray-800" />
              )}

              {/* Timeline marker */}
              <div className="absolute left-0 sm:left-1.5 top-6 w-5 h-5 rounded-full bg-white dark:bg-dark-950 border-4 border-primary-500 shadow-md shadow-primary-500/30 flex items-center justify-center z-10" />

              {/* Card Container */}
              <div className="bg-gray-50/70 dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-gray-200/80 dark:border-gray-800 hover:border-primary-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 group ml-2 sm:ml-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/20">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1.5">
                      <Building2 className="h-4 w-4" />
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 font-medium">
                      <Calendar className="h-3.5 w-3.5 text-primary-500" />
                      {exp.startDate} – {exp.endDate}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-2.5 mb-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                {exp.techStack && (
                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
