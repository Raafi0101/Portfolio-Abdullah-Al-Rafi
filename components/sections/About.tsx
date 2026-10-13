'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Brain,
  Shield,
  Layers,
  Code2,
  CheckCircle,
  ExternalLink,
  Camera,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { about, personalInfo } from '@/lib/constants';

export function About() {
  const [activePhoto, setActivePhoto] = useState<number>(0);
  const profilePhotos = [
    {
      src: '/images/profile/formal-profile.jpg',
      label: 'Formal Portrait',
      tag: 'Executive',
      caption: 'Professional Software Developer',
    },
    {
      src: '/images/profile/profile-casual.jpg',
      label: 'Campus / Research',
      tag: 'Academic',
      caption: 'Computer Science & Lab Research',
    },
  ];
  const highlights = [
    {
      icon: Briefcase,
      title: 'Enterprise Banking & FinTech',
      description:
        'Hands-on engineering within Islami Bank Bangladesh PLC on live share management, CDBL workflows, and Maker-Checker approvals.',
      color: 'from-primary-500/15 to-primary-600/5',
      textColor: 'text-primary-600 dark:text-primary-400',
    },
    {
      icon: Code2,
      title: 'Java & Spring Boot Specialist',
      description:
        'Clean backend architecture, Spring Data JPA, Hibernate, REST APIs, and monolithic/microservices design patterns.',
      color: 'from-accent-cyan/15 to-accent-cyan/5',
      textColor: 'text-accent-cyan',
    },
    {
      icon: Brain,
      title: 'Computer Vision & AI Research',
      description:
        'Applied deep learning research utilizing YOLOv12, Vision Transformers (ViT), and CNNs for plant leaf pathology detection at DIU.',
      color: 'from-accent-purple/15 to-accent-purple/5',
      textColor: 'text-accent-purple',
    },
    {
      icon: Layers,
      title: 'Technical Team Leadership',
      description:
        'Co-founded Nexavira IT, translating client operational needs into scalable technical solutions and leading software sprints.',
      color: 'from-accent-emerald/15 to-accent-emerald/5',
      textColor: 'text-accent-emerald',
    },
    {
      icon: GraduationCap,
      title: 'BSc in Computer Science (2025)',
      description:
        'Graduated from Daffodil International University with solid foundations in algorithms and software engineering.',
      color: 'from-amber-500/15 to-amber-500/5',
      textColor: 'text-amber-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Fundamentals',
      description:
        'Practical knowledge of network security protocols, Linux administration, and ethical hacking fundamentals for secure code.',
      color: 'from-rose-500/15 to-rose-500/5',
      textColor: 'text-rose-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50/50 dark:bg-dark-900/40 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Profile Overview
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">Abdullah Al Rafi</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A software developer dedicated to building mission-critical enterprise systems and practical AI applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary-500/20 bg-white dark:bg-dark-800 p-2 shadow-2xl">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePhoto}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={profilePhotos[activePhoto].src}
                        alt="Abdullah Al Rafi"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Photo Tag Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {profilePhotos[activePhoto].tag}
                  </div>
                </div>
              </div>

              {/* Photo Selector Switcher */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {profilePhotos.map((photo, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => setActivePhoto(pIdx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      activePhoto === pIdx
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-500/30'
                        : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-dark-700'
                    }`}
                  >
                    <Camera className="w-3 h-3" />
                    <span>{photo.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick Info Box */}
              <div className="mt-6 p-5 rounded-2xl bg-white dark:bg-dark-800/80 border border-gray-200 dark:border-gray-700 shadow-lg text-xs space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Current Base:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">Education:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">BSc in CSE, DIU (2025)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Primary Core:</span>
                  <span className="font-semibold text-primary-600 dark:text-primary-400">Java, Spring Boot, Python</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Bridging <span className="text-primary-600 dark:text-primary-400">Banking Technology</span>, Modern Backend & AI
            </h3>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 font-normal">
              {about.summary}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-dark-800/60 border border-gray-200 dark:border-gray-700/80 text-center"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl bg-white dark:bg-dark-800/50 border border-gray-200/90 dark:border-gray-700/70 hover:border-primary-500/40 transition-all flex items-start gap-3.5 shadow-sm"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0`}>
                    <item.icon className={`h-5 w-5 ${item.textColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
