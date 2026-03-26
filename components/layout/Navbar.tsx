'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl lg:text-2xl font-bold text-primary-600 dark:text-primary-400"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
          >
            AR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-800'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
