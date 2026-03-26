'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import { education } from '@/lib/constants'
import { Card, CardContent } from '@/components/ui'

export function Education() {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & Credentials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-visible">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    {/* Icon/Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-800/20 flex items-center justify-center">
                        <GraduationCap className="h-7 w-7 text-green-600 dark:text-green-400" />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-2 sm:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {edu.startDate} - {edu.endDate}
                          </span>
                        </div>
                      </div>

                      {edu.details && (
                        <div className="flex items-center gap-2 mt-2">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {edu.details}
                          </span>
                        </div>
                      )}
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
