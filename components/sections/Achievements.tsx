'use client';

import { motion } from 'framer-motion';
import {
  Trophy,
  Users,
  BookOpen,
  Award,
  Sparkles,
  Phone,
  Mail,
  Building,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { achievements, references } from '@/lib/constants';

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-950 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Leadership & Endorsements
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Activities <span className="bg-gradient-to-r from-amber-500 via-primary-500 to-accent-cyan bg-clip-text text-transparent">& References</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            University club leadership, community service, robotics competitions, and verified professional references.
          </p>
        </motion.div>

        {/* Leadership & Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50/70 dark:bg-dark-900/60 rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:border-amber-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {item.organization}
                </p>
                <span className="inline-block text-[11px] font-medium px-2 py-0.5 rounded bg-gray-200/60 dark:bg-dark-800 text-gray-600 dark:text-gray-400 mb-3">
                  {item.date}
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional References Subsection */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Industry & Academic References
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Direct supervisors and senior mentors available for background verification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {references.map((ref, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-dark-900/80 rounded-2xl p-6 sm:p-7 border border-gray-200/90 dark:border-gray-800 shadow-md shadow-gray-200/30 dark:shadow-none hover:border-primary-500/40 transition-all relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-primary-500/10 dark:text-primary-400/10 pointer-events-none">
                  <Quote className="h-16 w-16" />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-3 inline-block">
                    Reference #{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {ref.name}
                  </h4>
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-1">
                    {ref.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                    {ref.department}, {ref.organization}
                  </p>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 text-xs space-y-1.5 text-gray-600 dark:text-gray-300">
                    <p className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-gray-400" />
                      <span className="font-mono">{ref.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-gray-400" />
                      <a
                        href={`mailto:${ref.email}`}
                        className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {ref.email}
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
