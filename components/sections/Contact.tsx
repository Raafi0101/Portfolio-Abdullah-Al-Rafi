'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { personalInfo } from '@/lib/constants'
import { Button } from '@/components/ui'

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
    <section id="contact" className="section-padding bg-white dark:bg-dark-950">
      <div className="container-custom">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 dark:bg-dark-900 rounded-xl">
                <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Email</p>
                      <p className="text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Phone</p>
                      <p className="text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">Location</p>
                      <p className="text-gray-900 dark:text-white">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">LinkedIn</p>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        abdullah-al-rafi
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <Github className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-500">GitHub</p>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        @abdullahalrafi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-8 bg-gray-50 dark:bg-dark-900 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="I'd like to discuss a project opportunity..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'loading' || status === 'success'}
                    className="flex-1"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <div className="mr-2 h-4 w-4 text-green-500">✓</div>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again.
                    </p>
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
