'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Brain,
  Database,
  Shield,
  Wrench,
  Sparkles,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { skillCategories, languages } from '@/lib/constants';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-950 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical Competencies
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Battle-tested technical skills in enterprise Java & Spring Boot, AI research, relational databases, and secure banking workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.category
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
                }`}
              >
                {cat.icon} {cat.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="bg-gray-50/70 dark:bg-dark-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 hover:border-primary-500/30 transition-all shadow-sm group"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200/60 dark:border-gray-800">
                <span className="text-2xl p-2 rounded-xl bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 shadow-sm">
                  {categoryGroup.icon}
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="font-mono text-gray-500 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-gray-200 dark:bg-dark-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: sIdx * 0.08, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Communication Strip */}
        <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-gray-50/70 dark:bg-dark-900/60 border border-gray-200/80 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-4 w-4 text-primary-500" />
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Language Proficiency
            </h4>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="p-3.5 rounded-xl bg-white dark:bg-dark-800 border border-gray-200/80 dark:border-gray-700/80 flex items-center justify-between text-xs"
              >
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{lang.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-[11px]">{lang.proficiency}</p>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold font-mono text-[11px]">
                  {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
