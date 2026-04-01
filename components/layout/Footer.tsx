'use client';

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram, Twitter } from 'lucide-react'
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
    <footer className="bg-gray-50 dark:bg-dark-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              Abdullah Al Rafi
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer passionate about building efficient and data-driven solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
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
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:abdullahalrafi0101@gmail.com"
                className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Mail className="h-4 w-4 text-primary-400" />
                </div>
                <span className="text-gray-400 group-hover:text-primary-400 transition-colors text-sm">abdullahalrafi0101@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-al-rafi-5016b3235/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2 rounded-lg hover:bg-accent-purple/10 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                  <Linkedin className="h-4 w-4 text-accent-purple" />
                </div>
                <span className="text-gray-400 group-hover:text-accent-purple transition-colors text-sm">linkedin.com/in/abdullah-al-rafi</span>
              </a>
              <a
                href="https://github.com/abdullahalrafi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-2 rounded-lg hover:bg-accent-cyan/10 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                  <Github className="h-4 w-4 text-accent-cyan" />
                </div>
                <span className="text-gray-400 group-hover:text-accent-cyan transition-colors text-sm">github.com/abdullahalrafi</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 text-center md:text-left"
          >
            © {currentYear} Abdullah Al Rafi. Made with <Heart className="inline h-4 w-4 text-red-500" /> in Bangladesh.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
