'use client';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowRight } from 'lucide-react'
import { personalInfo } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission (replace with actual API endpoint)
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', formData)
    setStatus('success')
    setFormData({ name: '', email: '', message: '' })

    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              <div className="bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 border dark:border-gray-800">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-primary-500/10 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/20 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary-400" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <p className="text-sm text-gray-300 group-hover:text-primary-400 transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-accent-purple/10 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 w-12 h-12 bg-accent-purple/10 border border-accent-purple/20 rounded-xl flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-accent-purple" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <p className="text-sm text-gray-300 group-hover:text-accent-purple transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </a>

                  <div className="group flex items-start gap-4 p-3 rounded-xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Location</p>
                      <p className="text-sm text-gray-300">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t dark:border-gray-800">
                    <p className="text-xs text-gray-500 mb-3">Social Links</p>
                    <div className="flex gap-3">
                      <motion.a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-gray-800 hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500/30 rounded-lg flex items-center justify-center transition-all"
                      >
                        <Github className="h-5 w-5 text-gray-400 hover:text-primary-400" />
                      </motion.a>
                      <motion.a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-gray-800 hover:bg-primary-500/20 border border-gray-700 hover:border-primary-500/30 rounded-lg flex items-center justify-center transition-all"
                      >
                        <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary-400" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-dark-900/50 backdrop-blur-sm rounded-2xl p-8 border dark:border-gray-800">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                Send a Message
              </h3>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-dark-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-dark-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-dark-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="I'd like to discuss a project opportunity..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === 'loading' || status === 'success'}
                      className="min-w-[160px]"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </>
                      ) : status === 'success' ? (
                        <>
                          <div className="mr-2 h-4 w-4 text-green-500">✓</div>
                          Sent!
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-400 text-sm"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
