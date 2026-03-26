'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui'

export function Resume() {
  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-100 to-blue-200 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center shadow-xl">
              <FileText className="h-12 w-12 text-primary-600 dark:text-primary-400" />
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Download My Resume
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Get a detailed overview of my skills, experience, and qualifications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" href="/resume.docx" download>
                <Download className="mr-2 h-5 w-5" />
                Download DOCX
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
              Last updated: March 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
