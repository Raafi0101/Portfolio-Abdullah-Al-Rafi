'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp, Phone, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/constants';
import { Logo } from '@/components/ui/Logo';

const currentYear = new Date().getFullYear();

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-dark-950 border-t border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300">
      <div className="container-custom py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" showText={true} />
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
              Computer Science graduate specializing in enterprise Java, Spring Boot, live banking systems, and computer vision research.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 hover:text-accent-purple dark:hover:text-accent-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Abdullah_Al_Rafi_Resume.pdf"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-xs font-semibold flex items-center gap-1.5"
                title="Download CV"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Me', href: '#about' },
                { name: 'Skills & Tech', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Work Experience', href: '#experience' },
                { name: 'Education & Credentials', href: '#education' },
                { name: 'Resume', href: '#resume' },
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

          {/* Direct Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-900 dark:text-white">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-primary-500 flex-shrink-0" />
                <span className="break-all">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2.5 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-accent-purple flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="flex items-start gap-2.5 text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p className="text-center sm:text-left">
            © {currentYear} Abdullah Al Rafi. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
