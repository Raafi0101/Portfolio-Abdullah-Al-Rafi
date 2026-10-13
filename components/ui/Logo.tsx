'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeMap = {
    sm: { box: 34, icon: 22, text: 'text-sm' },
    md: { box: 42, icon: 26, text: 'text-base' },
    lg: { box: 52, icon: 32, text: 'text-lg' },
  };

  const { box, text } = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Designed SVG Emblem */}
      <motion.div
        whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: box, height: box }}
      >
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-500 via-accent-cyan to-accent-purple opacity-40 blur-md group-hover:opacity-80 group-hover:blur-lg transition-all duration-500 -z-10" />

        {/* Custom Vector Badge */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arGradientPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="arGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="arDarkSurface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Squircle / Hex-Shield Background */}
          <rect
            x="6"
            y="6"
            width="88"
            height="88"
            rx="26"
            fill="url(#arDarkSurface)"
            stroke="url(#arGradientStroke)"
            strokeWidth="3.5"
            className="transition-all duration-300"
          />

          {/* Subtle Cyber Grid Accent */}
          <circle cx="22" cy="22" r="3" fill="#6366f1" opacity="0.6" />
          <circle cx="78" cy="78" r="3" fill="#06b6d4" opacity="0.6" />
          <path
            d="M 18 50 L 26 50"
            stroke="url(#arGradientStroke)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M 74 50 L 82 50"
            stroke="url(#arGradientStroke)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Stylized Modern Tech Monogram (Intertwined Code Brackets & A/R Geometry) */}
          {/* Left bracket forming 'A' slope */}
          <path
            d="M 38 72 L 48 28 C 49 24 51 24 52 28 L 62 72"
            stroke="url(#arGradientPrimary)"
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crossbar of A extending into code prompt */}
          <path
            d="M 41 55 L 59 55"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Right loop & leg forming stylized 'R' terminal curve */}
          <path
            d="M 48 30 H 64 C 71 30 75 35 75 42 C 75 48 70 53 62 53 L 74 72"
            stroke="url(#arGradientStroke)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Center Core Dot */}
          <circle cx="50" cy="42" r="2.5" fill="#22d3ee" />
        </svg>
      </motion.div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold tracking-tight text-gray-900 dark:text-white ${text} group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors`}>
            Abdullah <span className="bg-gradient-to-r from-primary-600 via-accent-cyan to-accent-purple dark:from-primary-400 dark:via-accent-cyan dark:to-accent-purple bg-clip-text text-transparent">Al Rafi</span>
          </span>
          <span className="text-[10px] font-medium tracking-widest text-gray-400 dark:text-gray-500 uppercase mt-0.5">
            Software Developer
          </span>
        </div>
      )}
    </div>
  );
}
