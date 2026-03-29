"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, MoreVertical } from "lucide-react";
import { projects } from "@/lib/utils";
import { Button, Card, CardContent, Modal } from "@/components/ui";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-dark-900"
    >
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in data analysis,
            automation, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              delay={index * 0.1}
              className="h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">
                    {index === 0 && "📊"}
                    {index === 1 && "⚡"}
                    {index === 2 && "🗄️"}
                    {index === 3 && "🔬"}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 dark:bg-dark-800/90 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300">
                    Project {index + 1}
                  </span>
                </div>
              </div>

              <CardContent className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="p-2"
                    aria-label="View case study"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study Modal */}
        <Modal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          title={`Case Study: ${selectedProject?.title || ""}`}
        >
          {selectedProject && (
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm">
                      1
                    </span>
                    The Problem
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-10">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm">
                      2
                    </span>
                    Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-10">
                    {selectedProject.caseStudy.approach}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm">
                      3
                    </span>
                    Implementation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-10">
                    {selectedProject.caseStudy.implementation}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm">
                      4
                    </span>
                    Outcome
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-10">
                    {selectedProject.caseStudy.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tech Stack:
                  </span>
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
