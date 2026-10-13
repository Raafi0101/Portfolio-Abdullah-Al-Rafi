import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Abdullah Al Rafi | Software Developer | Java, Spring Boot & AI',
  description:
    'Official Portfolio and CV of Abdullah Al Rafi - Software Developer with live banking environment experience at Islami Bank Bangladesh PLC, specialized in Java, Spring Boot, Python, and Cybersecurity.',
  keywords: [
    'Abdullah Al Rafi',
    'Software Developer',
    'Java Developer',
    'Spring Boot',
    'Islami Bank Bangladesh',
    'Python',
    'Computer Vision',
    'YOLOv12',
    'Cybersecurity',
    'Fintech',
    'Portfolio',
    'Bangladesh',
  ],
  authors: [{ name: 'Abdullah Al Rafi', url: 'https://github.com/Raafi0101' }],
  creator: 'Abdullah Al Rafi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-abdullah-al-rafi-6mo6.vercel.app',
    title: 'Abdullah Al Rafi | Software Developer',
    description:
      'Computer Science graduate with live banking technology experience at Islami Bank PLC, skilled in Java, Spring Boot, Oracle, and Python.',
    siteName: 'Abdullah Al Rafi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Al Rafi | Software Developer',
    description:
      'Portfolio of Abdullah Al Rafi - Software Developer specializing in Java, Spring Boot, live banking systems, and deep learning research.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 selection:bg-primary-500/20 selection:text-primary-600 dark:selection:text-primary-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
