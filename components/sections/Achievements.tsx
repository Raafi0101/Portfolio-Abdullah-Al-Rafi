'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, BookOpen } from 'lucide-react'
import { achievements } from '@/lib/constants'

export function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case '🎌':
        return Users
      case '📚':
        return BookOpen
      default:
        return Trophy
    }
  }

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Achievements & Activities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Highlights of my extracurricular involvement and accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative bg-white dark:bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-yellow-900/30 dark:to-amber-800/20 flex items-center justify-center text-2xl">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                      {achievement.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
