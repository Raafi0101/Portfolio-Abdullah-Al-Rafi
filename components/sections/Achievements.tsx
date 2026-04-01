'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, BookOpen, Star, Target, Award } from 'lucide-react';
import { achievements } from '@/lib/constants';

export function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case '🎌':
        return Users
      case '📚':
        return BookOpen
      case '💡':
        return Star
      case '🎯':
        return Target
      default:
        return Award
    }
  }

  const getIconColor = (index: number) => {
    const colors = [
      'from-primary-500 to-accent-cyan',
      'from-accent-purple to-accent-pink',
      'from-accent-emerald to-green-500',
      'from-pink-500 to-accent-purple',
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            Achievements <span className="bg-gradient-to-r from-yellow-400 to-accent-emerald bg-clip-text text-transparent">& Activities</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Highlights of my extracurricular involvement and accomplishments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = getIcon(achievement.icon)
            const gradientClass = getIconColor(index)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradientClass} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`} />
                <div className="relative bg-white dark:bg-dark-900/50 backdrop-blur-sm p-6 rounded-xl border dark:border-gray-800 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${gradientClass}/20 border ${gradientClass.replace('from-', 'border-')}/30 flex items-center justify-center`}
                    >
                      <IconComponent className={`h-7 w-7 bg-gradient-to-br ${gradientClass} bg-clip-text text-transparent`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-medium text-primary-400 mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gray-500" />
                        {achievement.date}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
