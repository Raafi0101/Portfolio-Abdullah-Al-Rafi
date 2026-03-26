import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Achievements } from '@/components/sections/Achievements'
import { Blog } from '@/components/sections/Blog'
import { Resume } from '@/components/sections/Resume'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Blog />
      <Resume />
      <Contact />
    </>
  )
}
