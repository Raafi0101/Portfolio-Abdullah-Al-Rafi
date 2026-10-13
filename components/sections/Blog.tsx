'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { blog } from '@/lib/constants';

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-gray-50/60 dark:bg-dark-900/40 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-xs font-semibold uppercase tracking-wider mb-3">
            Articles & Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Engineering <span className="bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple bg-clip-text text-transparent">Articles & Research</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical insights on secure banking architectures, Spring Boot best practices, and deep learning models.
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
              className="group bg-white dark:bg-dark-900/70 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800 shadow-md shadow-gray-200/30 dark:shadow-none hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* High-Resolution Article Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-dark-900">
                  <Image
                    src={(post as any).image || '/images/blog/banking-system.jpg'}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 bg-white/95 dark:bg-dark-950/90 backdrop-blur-md text-xs font-semibold rounded-full text-primary-600 dark:text-primary-400 border border-gray-200/80 dark:border-gray-700 shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-accent-cyan" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-2.5 transition-all"
                >
                  <span>Discuss this topic</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
