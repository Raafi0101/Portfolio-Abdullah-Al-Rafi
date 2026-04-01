'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { experience } from '@/lib/constants';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-primary-400 to-accent-purple bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experience.length - 1 && (
                <div className="absolute left-4 md:left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-purple opacity-30" />
              )}

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                className="absolute left-2 md:left-5 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan border-4 border-dark-950 shadow-lg shadow-primary-500/50"
              />

              <div className="relative bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 border dark:border-gray-800 hover:border-primary-500/30 transition-all duration-500 group ml-2 md:ml-4">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 border border-primary-500/20 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/20 transition-shadow">
                      <Briefcase className="h-8 w-8 text-primary-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span className="px-3 py-1 bg-gray-800/50 rounded-full">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                    </div>

                    {exp.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}

                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 + 0.2 }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full mt-2 shadow-sm" />
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
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
