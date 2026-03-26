'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  id: string
  className?: string
}

export function Section({ children, id, className = '' }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-padding animate-on-scroll ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: React.ReactNode
}) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      {children}
    </div>
  )
}
