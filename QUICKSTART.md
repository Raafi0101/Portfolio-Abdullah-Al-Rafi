# 🚀 Quick Start Guide for VS Code

## Prerequisites

Make sure you have these installed:

1. **Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org)
   - Check: `node --version`

2. **VS Code** (latest version)
   - Download from [code.visualstudio.com](https://code.visualstudio.com)

3. **Git** (optional but recommended)
   - Download from [git-scm.com](https://git-scm.com)

## Step-by-Step Setup

### 1. Open Project in VS Code
```bash
# Navigate to your project folder
cd "/Users/abdullahalrafi/Desktop/Portfolio Abdullah Al Rafi"

# Open in VS Code
code .
```

Or simply:
- Open VS Code
- File → Open Folder
- Select `Portfolio Abdullah Al Rafi`

### 2. Install Dependencies

In VS Code:
- Open Terminal (Terminal → New Terminal)
- Run:
```bash
npm install
```

Or use VS Code Tasks:
- Terminal → Run Task...
- Select "Install Dependencies"

### 3. Start Development Server

**Method A: Terminal**
```bash
npm run dev
```

**Method B: VS Code Tasks**
- Terminal → Run Task...
- Select "Start Development Server"
- Server starts at **http://localhost:3000**

**Method C: Debug (Recommended)**
- Go to Run and Debug sidebar (Ctrl+Shift+D)
- Select "Next.js: Development Server"
- Click green play button
- Opens browser automatically with hot reload

### 4. View Your Portfolio

Open browser and go to: **http://localhost:3000**

You should see:
- Header with navigation (sticky)
- Hero section with "AR" profile
- All sections scrollable
- Dark/Light mode toggle (top right)
- Smooth animations

### 5. Make Changes

Edit files in:
- `lib/constants.ts` - change your info
- Any component in `components/sections/`
- Styles in `tailwind.config.ts`

**Hot Reload**: Changes appear instantly in browser!

---

## VS Code Features We Configured

✅ **Automatic formatting** on save (Prettier + Tailwind)
✅ **IntelliSense** for TypeScript
✅ **Emmet** shortcuts for HTML/JSX
✅ **Tailwind CSS IntelliSense** (install extension!)
✅ **Debugging** support
✅ **Task shortcuts** (Terminal → Run Task)

### Recommended VS Code Extensions

1. **Tailwind CSS IntelliSense** (by Tailwind Labs)
2. **Prettier - Code formatter** (by Prettier)
3. **ESLint** (by Microsoft)
4. **GitLens** (for Git history)

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm start` | Start production server from .next folder |
| `npm run lint` | Check code quality |

---

## Troubleshooting

### Port 3000 already in use?
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Module not found errors?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
Check the terminal output - most issues are:
- Missing TypeScript types: `npm install @types/...`
- Import path typos
- Next.js version mismatch

---

## Next Steps After Setup

1. ✅ **Your profile photo is already placed** at `public/images/profile/profile.jpg`
2. ✅ **Update your info** in `lib/constants.ts`
   - Change GitHub link
   - Update project descriptions
   - Add real links when ready
3. ✅ **Deploy** to Vercel (see DEPLOYMENT.md)

---

## Project Structure Quick Reference

```
Portfolio/
├── app/                    # Next.js app router
│   ├── page.tsx           # Main page (imports all sections)
│   ├── layout.tsx         # Root layout (metadata, theme)
│   └── globals.css        # Tailwind + custom styles
├── components/
│   ├── sections/          # All page sections
│   ├── layout/            # Navbar, Footer, ThemeToggle
│   └── ui/                # Reusable components
├── lib/
│   ├── constants.ts       # ALL YOUR CONTENT HERE
│   └── utils.ts           # Helper functions
├── public/                # Static files
│   └── images/            # Your images go here
└── .vscode/               # VS Code settings (already configured)
```

---

## 🎉 You're Ready!

Start the server and see your portfolio live at **http://localhost:3000**

All your content, images, and professional information are pre-configured. Happy coding!

---

**Need help?** Check:
- `README.md` - Full documentation
- `IMAGES_SETUP.md` - Image requirements
- `DEPLOYMENT.md` - How to deploy
