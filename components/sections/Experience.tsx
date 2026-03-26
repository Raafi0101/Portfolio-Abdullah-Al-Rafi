'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { experience } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui'

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-visible">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-100 to-blue-200 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center shadow-md">
                        <Briefcase className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.role}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {exp.organization}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {exp.startDate} - {exp.endDate}
                          </span>
                        </div>
                      </div>

                      {exp.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
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
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2" />
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
