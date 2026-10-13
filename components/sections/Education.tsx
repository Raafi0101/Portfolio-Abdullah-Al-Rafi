'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle, School } from 'lucide-react';
import { education, trainings } from '@/lib/constants';

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-50/60 dark:bg-dark-900/40 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-semibold uppercase tracking-wider mb-3">
            Academic & Certifications
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-accent-emerald to-accent-cyan bg-clip-text text-transparent">& Training</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Formal computer science education, academic milestones, and specialized industry training programs.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800/80 rounded-2xl p-6 sm:p-7 border border-gray-200/80 dark:border-gray-700/80 shadow-md shadow-gray-200/30 dark:shadow-none hover:border-accent-emerald/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-3">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-emerald/15 border border-accent-emerald/30 flex items-center justify-center flex-shrink-0 text-accent-emerald">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-emerald font-semibold text-sm flex items-center gap-1.5 mt-0.5">
                      <School className="h-3.5 w-3.5" />
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-dark-700 text-xs font-medium text-gray-600 dark:text-gray-300">
                  <Calendar className="h-3.5 w-3.5 text-accent-emerald" />
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>

              {edu.details && (
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/60 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-1 sm:pl-16">
                  {edu.details}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Training & Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-primary-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Training & Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {trainings.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white dark:bg-dark-800/60 border border-gray-200/80 dark:border-gray-700/80 hover:border-primary-500/30 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                    {t.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-primary-600 dark:text-primary-400 bg-primary-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {t.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  {t.organization}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
