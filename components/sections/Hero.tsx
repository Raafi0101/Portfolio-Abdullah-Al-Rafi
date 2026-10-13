'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = personalInfo.roles || [
    'Software Developer',
    'Java & Spring Boot Specialist',
    'Python & AI Researcher',
    'Fintech & Cybersecurity Enthusiast',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/15 dark:bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/15 dark:bg-accent-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-accent-cyan/15 dark:bg-accent-cyan/20 rounded-full blur-3xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left lg:col-span-7"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-300 bg-primary-500/10 dark:bg-primary-500/15 border border-primary-500/25 rounded-full mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering & Banking IT Opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-6">
              <p className="text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                {personalInfo.name}
              </h1>

              {/* Cycling animated role */}
              <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start mt-3">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-cyan to-accent-purple dark:from-primary-400 dark:via-accent-cyan dark:to-accent-purple bg-clip-text text-transparent"
                >
                  {roles[roleIndex]}
                </motion.span>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8 text-xs font-medium text-gray-600 dark:text-gray-300"
            >
              <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary-500" />
                Islami Bank PLC IT Alum
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-accent-cyan" />
                Spring Boot & Oracle
              </span>
              <span className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-accent-purple" />
                YOLOv12 & ViT Research
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <Button size="lg" href="#projects" className="group shadow-lg shadow-primary-500/25">
                Explore Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                href="/resume.pdf"
                download="Abdullah_Al_Rafi_Resume.pdf"
                className="border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="ghost"
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-800"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex items-center gap-5 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800/80 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800/80 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-accent-purple dark:hover:text-accent-purple hover:border-accent-purple/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800/80 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-accent-cyan dark:hover:text-accent-cyan hover:border-accent-cyan/40 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex justify-center lg:justify-end lg:col-span-5 w-full mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[270px] sm:max-w-[320px] lg:max-w-[350px]">
              {/* Outer decorative gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-accent-cyan to-accent-purple rounded-3xl blur-2xl opacity-30 -z-10 animate-pulse-slow" />

              {/* Main Avatar Card */}
              <div className="relative aspect-[4/5] rounded-3xl p-2.5 bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl border-2 border-primary-500/30 shadow-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-800">
                  <Image
                    src={'/images/profile/profile.jpg'}
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 350px"
                    priority
                  />
                </div>

                {/* Floating Tech Badge */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-3 sm:px-4 py-2 bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl flex items-center gap-2"
                >
                  <span className="text-lg sm:text-xl">☕</span>
                  <div className="text-left">
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-400">Specialization</p>
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white">Java & Spring Boot</p>
                  </div>
                </motion.div>

                {/* Floating Banking Badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 sm:px-4 py-2 bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl flex items-center gap-2"
                >
                  <span className="text-base sm:text-lg">🏦</span>
                  <div className="text-left">
                    <p className="text-[9px] sm:text-[10px] uppercase font-bold text-primary-500">Live Banking</p>
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900 dark:text-white">Islami Bank PLC</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-gray-500 hover:text-primary-500 transition-colors"
        >
          <span>Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
