"use client";

import { motion } from 'framer-motion'
import { ChevronRight, Download, Mail, ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import { personalInfo } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-dark-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4 backdrop-blur-sm">
                👋 Hey, I'm
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
                {personalInfo.name}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block text-3xl lg:text-5xl mt-3 bg-gradient-to-r from-primary-400 via-accent-cyan to-accent-purple bg-clip-text text-transparent"
                >
                  {personalInfo.title.split('|')[1].trim()}
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl lg:max-w-none leading-relaxed font-light"
              >
                {personalInfo.tagline}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" href="#projects" className="group">
                View My Work
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" href="/resume.pdf" download className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-500">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
              <Button size="lg" variant="ghost" href="#contact" className="text-gray-300 hover:text-white hover:bg-gray-800/50">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 to-accent-purple rounded-full blur-2xl opacity-30 -z-10"
              />

              {/* Main image container */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary-500/20 shadow-2xl shadow-primary-500/10"
                >
                  <Image
                    src="/images/profile/profile.jpg"
                    alt={personalInfo.name}
                    width={384}
                    height={384}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-dark-900 border dark:border-gray-800 rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-4xl">💻</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll</span>
          <ArrowDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
