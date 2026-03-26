'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Wrench, Monitor, Heart } from 'lucide-react'
import { skills } from '@/lib/constants'

const skillCategories = [
  {
    title: 'Programming',
    icon: Code,
    data: skills.programming,
    color: 'bg-blue-500',
  },
  {
    title: 'Core Knowledge',
    icon: Brain,
    data: skills.coreKnowledge,
    color: 'bg-purple-500',
  },
  {
    title: 'Tools',
    icon: Wrench,
    data: skills.tools,
    color: 'bg-green-500',
  },
  {
    title: 'Systems',
    icon: Monitor,
    data: skills.systems,
    color: 'bg-orange-500',
  },
  {
    title: 'Soft Skills',
    icon: Heart,
    data: skills.softSkills,
    color: 'bg-pink-500',
  },
]

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 border border-gray-100 dark:border-dark-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${category.color} bg-opacity-20 rounded-lg flex items-center justify-center`}>
                  <category.icon className={`h-6 w-6 text-gray-700 dark:text-gray-300`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
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
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full ${category.color.replace('bg-', 'bg-')} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
