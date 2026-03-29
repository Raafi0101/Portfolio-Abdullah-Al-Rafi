import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Abdullah Al Rafi | Software Engineer',
  description: 'Portfolio of Abdullah Al Rafi - Software Engineer specializing in data analysis, automation, and efficient solutions based in Bangladesh.',
  keywords: ['Abdullah Al Rafi', 'Software Engineer', 'Portfolio', 'Bangladesh', 'Data Analysis', 'Automation', 'Next.js', 'React', 'TypeScript'],
  authors: [{ name: 'Abdullah Al Rafi' }],
  creator: 'Abdullah Al Rafi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdullah-al-rafi.vercel.app',
    title: 'Abdullah Al Rafi | Software Engineer',
    description: 'Portfolio of Abdullah Al Rafi - AI Software Engineer specializing in data analysis, automation, and efficient solutions.',
    siteName: 'Abdullah Al Rafi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Al Rafi | Software Engineer',
    description: 'Portfolio of Abdullah Al Rafi - Software Engineer specializing in data analysis, automation, and efficient solutions.',
    creator: '@abdullahalrafi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
