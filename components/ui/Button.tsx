'use client'

import React from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  download?: boolean
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
  className?: string
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  target,
  rel,
  download,
  disabled = false,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600':
        variant === 'primary',
      'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white':
        variant === 'secondary',
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950':
        variant === 'outline',
      'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-800':
        variant === 'ghost',
      'px-3 py-2 text-sm': size === 'sm',
      'px-4 py-2.5 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
    className
  )

  if (href) {
    return (
      <NextLink
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick as any}
        {...props}
      >
        {children}
      </NextLink>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
