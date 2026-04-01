'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { blog } from '@/lib/constants';

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            Latest <span className="bg-gradient-to-r from-primary-400 to-accent-purple bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on development and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blog.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border dark:border-gray-800 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-purple/0 group-hover:from-primary-500/5 group-hover:to-accent-purple/5 transition-all duration-500" />

              <div className="relative">
                {/* Card Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 via-accent-purple/20 to-accent-cyan/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">📝</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-dark-950/80 backdrop-blur-sm text-xs font-medium rounded-full text-gray-300 border border-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-primary-400 group-hover:translate-x-2 transition-transform cursor-pointer">
                    <span className="text-sm font-medium">Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
