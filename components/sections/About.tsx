"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Award, Lightbulb } from "lucide-react";
import Image from "next/image";
import { about } from "@/lib/constants";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Computer Science and Engineering",
      description:
        "Bachelor's degree with solid foundations in software engineering principles",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description:
        "Analytical thinker focused on efficient, scalable solutions with AI",
    },
    {
      icon: Award,
      title: "Research Experience",
      description:
        "Hands-on experience in data analysis and technical documentation",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description:
        "Committed to staying updated with latest technologies and best practices",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-blue-200 dark:from-primary-900/30 dark:to-primary-800/20 overflow-hidden shadow-xl">
                <Image
                  src={about.image}
                  alt="Abdullah Al Rafi"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    3.30
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    CGPA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
              <p className="leading-relaxed">{about.summary}</p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
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
