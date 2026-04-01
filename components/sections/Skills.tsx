'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Wrench, Monitor, Heart } from 'lucide-react'
import { skills } from '@/lib/constants'

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    data: skills.programming,
    color: 'from-primary-500 to-primary-600',
    borderColor: 'border-primary-500/30',
    iconBg: 'bg-primary-500/10',
    iconColor: 'text-primary-400',
  },
  {
    title: 'Core Knowledge',
    icon: Brain,
    data: skills.coreKnowledge,
    color: 'from-accent-purple to-accent-pink',
    borderColor: 'border-accent-purple/30',
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple',
  },
  {
    title: 'Tools',
    icon: Wrench,
    data: skills.tools,
    color: 'from-accent-cyan to-accent-emerald',
    borderColor: 'border-accent-cyan/30',
    iconBg: 'bg-accent-cyan/10',
    iconColor: 'text-accent-cyan',
  },
  {
    title: 'Systems',
    icon: Monitor,
    data: skills.systems,
    color: 'from-accent-emerald to-green-500',
    borderColor: 'border-accent-emerald/30',
    iconBg: 'bg-accent-emerald/10',
    iconColor: 'text-accent-emerald',
  },
  {
    title: 'Soft Skills',
    icon: Heart,
    data: skills.softSkills,
    color: 'from-pink-500 to-accent-purple',
    borderColor: 'border-pink-500/30',
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Skills & <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className={`relative bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 border ${category.borderColor} hover:border-opacity-60 transition-all group overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center border ${category.borderColor}`}
                  >
                    <category.icon className={`h-7 w-7 ${category.iconColor}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.data.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{skill.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-dark-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
