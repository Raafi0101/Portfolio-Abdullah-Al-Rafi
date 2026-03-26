'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Abdullah Al Rafi
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Engineer passionate about building efficient and data-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:abdullahalrafi0101@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>abdullahalrafi0101@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-al-rafi-5016b3235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {currentYear} Abdullah Al Rafi. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
