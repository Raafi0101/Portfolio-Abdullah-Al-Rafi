'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { education } from '@/lib/constants';

export function Education() {
  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-primary-400 to-accent-emerald bg-clip-text text-transparent">& Credentials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative mb-6 last:mb-0"
            >
              {/* Timeline connector line (optional) */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/30 to-transparent -z-10" />

              <div className="relative bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 border dark:border-gray-800 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1 ml-4 md:ml-0">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
                  {/* Icon/Logo */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-emerald/20 border border-primary-500/20 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/20 transition-shadow"
                    >
                      {edu.logo ? (
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <GraduationCap className={`h-8 w-8 text-primary-400 ${edu.logo ? 'hidden' : ''}`} />
                    </motion.div>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span className="px-3 py-1 bg-gray-800/50 rounded-full">
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                    </div>

                    {edu.details && (
                      <div className="flex items-start gap-2 mt-3">
                        <Award className="h-4 w-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 leading-relaxed">
                          {edu.details}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
