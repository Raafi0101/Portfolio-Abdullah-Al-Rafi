'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Download, Mail, ArrowDown } from 'lucide-react'
import { personalInfo } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-900 dark:via-dark-950 dark:to-dark-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                Welcome to my portfolio
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                {personalInfo.name}
                <span className="block text-3xl lg:text-5xl mt-2 text-primary-600 dark:text-primary-400">
                  {personalInfo.title.split('|')[1].trim()}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl lg:max-w-none leading-relaxed">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" href="#projects">
                View Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="secondary" href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500 justify-center lg:justify-start"
            >
              <span>{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/profile/profile.jpg"
                    alt={personalInfo.name}
                    width={384}
                    height={384}
                    className="w-full h-full object-cover object-top"
                    style={{ imageRendering: 'auto' }}
                    priority
                  />
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-dark-800 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white dark:border-dark-900"
              >
                <span className="text-4xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-500"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
