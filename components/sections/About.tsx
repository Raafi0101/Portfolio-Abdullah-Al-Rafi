'use client';

import { motion } from "framer-motion";
import { GraduationCap, Target, Award, Lightbulb, Code, Brain, Zap } from "lucide-react";
import Image from "next/image";
import { about } from "@/lib/constants";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science & Engineering",
      description: "Bachelor's degree with solid foundations in software engineering principles",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Analytical thinker focused on efficient, scalable solutions with AI",
    },
    {
      icon: Award,
      title: "Research Experience",
      description: "Hands-on experience in data analysis and technical documentation",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Committed to staying updated with latest technologies",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experience with modern web technologies and frameworks",
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Passionate about integrating AI into practical solutions",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-full blur-3xl opacity-20 -z-10" />

              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-primary-500/20 shadow-2xl shadow-primary-500/10">
                <Image
                  src={about.image}
                  alt="Abdullah Al Rafi"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-dark-900 border dark:border-gray-800 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Zap className="h-10 w-10 text-primary-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              I'm a <span className="bg-gradient-to-r from-primary-400 to-accent-purple bg-clip-text text-transparent">Software Engineer</span>
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              <p>{about.summary}</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:border-primary-500/30 transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-purple/0 group-hover:from-primary-500/5 group-hover:to-accent-purple/5 rounded-xl transition-all duration-500" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
