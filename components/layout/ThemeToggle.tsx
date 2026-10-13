'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-dark-700 animate-pulse" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-800 flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-yellow-500 hidden dark:block" />
      <Moon className="h-5 w-5 text-blue-500 block dark:hidden" />
    </button>
  )
}
