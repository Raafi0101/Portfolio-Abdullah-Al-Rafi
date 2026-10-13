# Abdullah Al Rafi - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, clean design with dark/light mode toggle
- 🚀 Built with Next.js 14 App Router for optimal performance
- 🎨 Styled with Tailwind CSS for a consistent, responsive design
- 🌙 Smooth animations with Framer Motion
- 📱 Fully responsive (mobile-first approach)
- 🔍 SEO optimized with proper metadata
- ♿ Accessible design with ARIA labels
- 🎯 6+ sections: Hero, About, Skills, Projects, Experience, Education, Achievements, Blog, Contact, Resume

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light mode)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd portfolio-abdullah-al-rafi
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-abdullah-al-rafi/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Resume.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Modal.tsx
│   │       └── Section.tsx
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       ├── profile/
│       ├── projects/
│       ├── companies/
│       └── education/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── vercel.json
└── README.md
```

## Customization

### Updating Content

All content is stored in `lib/constants.ts`. You can easily customize:
- Personal information
- About section text
- Skills with proficiency levels
- Project details and case studies
- Experience and education entries
- Achievements and blog posts

### Adding Real Images

Replace placeholder images in the `public/` directory:
- `public/images/profile/profile.jpg` - Profile picture
- `public/images/projects/` - Project screenshots
- `public/images/companies/` - Company logos
- `public/images/education/` - Institution logos

### Styling

The color scheme is defined in `tailwind.config.ts`. Primary colors:
- Light mode: Blue-600
- Dark mode: Slate-900 with Blue accents

Fonts: Inter (Google Fonts)

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Set environment variables if needed (none required for basic deployment)
5. Click Deploy

Your site will be live at `https://your-project-name.vercel.app`

### Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

All platforms support Next.js 14 with minimal configuration.

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add actual project images and screenshots
- [ ] Integrate contact form with email service (Formspree, EmailJS, etc.)
- [ ] Add real PDF resume file
- [ ] Implement blog CMS
- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Add more project case studies
- [ ] Include testimonials section
- [ ] Add certifications section

## License

This project is open source and available for personal use. Feel free to customize for your own portfolio.

## Credits

Built with modern web technologies by Abdullah Al Rafi.

---

**Questions or feedback?** Feel free to reach out at abdullahalrafi0101@gmail.com

To run this code : 

Step 1: Go to frontend folder
cd frontend
npm install
npm run dev

Go to backend folder;

cd backend
npm install
npm run dev



Connect Frontend ↔ Backend
fetch("http://localhost:5000/api/data")
