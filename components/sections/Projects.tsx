'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Star, X } from "lucide-react";
import { projects } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and approach
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 group"
          >
            <div className="relative bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-accent-purple/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image side */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary-600/10 to-accent-purple/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl opacity-20">🚀</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-semibold rounded-full backdrop-blur-sm flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary-400" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">Case Study</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-400 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium bg-primary-500/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      View Live
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source Code
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      onClick={() => setSelectedProject(featuredProject)}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-500"
                    >
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-purple/0 group-hover:from-primary-500/5 group-hover:to-accent-purple/5 transition-all duration-500" />

              <div className="relative">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-600/5 to-accent-purple/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                      {index === 0 && "⚡"}
                      {index === 1 && "🗄️"}
                      {index === 2 && "🔬"}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/80 dark:bg-dark-950/80 backdrop-blur-sm text-xs font-medium rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      0{project.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-500/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-label="View case study"
                    >
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white dark:bg-dark-900 border border-gray-200 dark:border-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white dark:bg-dark-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white pr-4">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  aria-label="Close modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {selectedProject.description}
                </p>

                <div className="grid gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-500 mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-sm">1</span>
                      The Problem
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-accent-purple mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center text-sm">2</span>
                      Approach
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                      {selectedProject.caseStudy.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-accent-cyan mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-sm">3</span>
                      Implementation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                      {selectedProject.caseStudy.implementation}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-accent-emerald mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-accent-emerald/20 flex items-center justify-center text-sm">4</span>
                      Outcome
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-11">
                      {selectedProject.caseStudy.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack:</span>
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Source
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-500"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
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
