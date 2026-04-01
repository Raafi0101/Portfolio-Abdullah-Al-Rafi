'use client';

import { motion } from 'framer-motion';
import { Download, FileText, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Resume() {
  return (
    <section id="resume" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/20 border border-primary-500/30 flex items-center justify-center shadow-2xl shadow-primary-500/10"
            >
              <FileText className="h-12 w-12 text-primary-400" />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              Download My <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Resume</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed">
              Get a comprehensive overview of my skills, experience, education, and qualifications
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  href="/resume.pdf"
                  download
                  className="group min-w-[180px]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  PDF Format
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  href="/resume.docx"
                  download
                  className="border-gray-600 text-gray-300 hover:border-primary-500 hover:text-primary-400 min-w-[180px]"
                >
                  <FileSpreadsheet className="mr-2 h-5 w-5" />
                  DOCX Format
                </Button>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500"
            >
              Updated regularly • Always up to date
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto"
            >
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">5+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-purple mb-1">20+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-cyan mb-1">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Skills</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
