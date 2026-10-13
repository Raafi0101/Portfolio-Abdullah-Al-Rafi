'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  X,
  FileCode,
  ShieldCheck,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { projects } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const categories = ['all', 'Banking & Enterprise', 'AI & Computer Vision', 'Web & E-Commerce'];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const remainingProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  return (
    <section id="projects" className="section-padding bg-gray-50/70 dark:bg-dark-900/40 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple bg-clip-text text-transparent">Engineering Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real enterprise banking implementations, computer vision models, and production web systems.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === cat
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                    : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-dark-700'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Project Showcase */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 group"
          >
            <div className="relative bg-white dark:bg-dark-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/90 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none hover:border-primary-500/40 transition-all duration-500">
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual side */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-gradient-to-br from-primary-600/10 via-accent-purple/10 to-accent-cyan/10 overflow-hidden flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 fill-white" />
                      Key Highlight
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      {featuredProject.category}
                    </span>
                  </div>

                  <div className="my-6 text-center z-10 flex flex-col items-center">
                    <div className="px-5 py-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-xl shadow-primary-500/10 flex items-center justify-center max-w-[250px] hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/images/projects/ibbl-logo.png"
                        alt="Islami Bank Bangladesh PLC"
                        width={210}
                        height={64}
                        className="object-contain max-h-12 w-auto"
                        priority
                      />
                    </div>
                  </div>

                  <div className="z-10">
                    <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                      Islami Bank Bangladesh PLC
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      CDBL & Shareholder Infrastructure
                    </p>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="h-4 w-4 text-primary-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                        {featuredProject.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {featuredProject.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {featuredProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="shadow-md shadow-primary-500/20"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-dark-900/80 rounded-2xl p-6 border border-gray-200/80 dark:border-gray-800 shadow-md shadow-gray-200/30 dark:shadow-none hover:border-primary-500/40 hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1"
                  >
                    Details <ChevronRight className="h-3 w-3" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-medium rounded bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] font-medium text-gray-500">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800 text-xs">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
                >
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 transition-colors"
                  title="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between z-10">
                <div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg bg-gray-100 dark:bg-dark-800"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Case Study Steps */}
                <div className="space-y-5">
                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-800/60 border border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center text-xs">1</span>
                      Problem & Challenge
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-800/60 border border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-bold text-accent-purple mb-1 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center text-xs">2</span>
                      Architectural Approach
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                      {selectedProject.caseStudy.approach}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-800/60 border border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-bold text-accent-cyan mb-1 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-cyan/20 flex items-center justify-center text-xs">3</span>
                      Technical Implementation
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                      {selectedProject.caseStudy.implementation}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gray-50 dark:bg-dark-800/60 border border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-bold text-accent-emerald mb-1 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-accent-emerald/20 flex items-center justify-center text-xs">4</span>
                      Business & Technical Outcome
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                      {selectedProject.caseStudy.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech stack & CTAs */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-800 text-gray-800 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source on GitHub
                    </Button>
                    <Button
                      variant="outline"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Project / Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
