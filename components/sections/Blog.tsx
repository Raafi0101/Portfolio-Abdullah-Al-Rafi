'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { blog } from '@/lib/constants'
import { Card, CardContent, Button } from '@/components/ui'

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on software development and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blog.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-shadow duration-300">
                {/* Card Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">📝</span>
                  </div>
                </div>

                <CardContent className="flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-1 mb-2">
                    <Tag className="h-3 w-3 text-primary-600 dark:text-primary-400" />
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn w-full justify-start p-0"
                  >
                    <span className="text-primary-600 dark:text-primary-400 group-hover/btn:underline flex items-center gap-2">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 text-primary-600 dark:text-primary-400 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
