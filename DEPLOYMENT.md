# 🚀 Deployment Guide

## Deploy to Vercel (Easiest - Recommended)

### Option 1: Via Vercel CLI (Quick)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel --prod
```

4. Done! Your site is live at the provided URL.

---

### Option 2: Via GitHub (Most Common)

1. **Initialize Git** (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Create a GitHub repository**:
   - Go to github.com
   - Create new repository (private or public)
   - Copy the remote URL

3. **Push your code**:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

4. **Deploy with Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Keep default settings (no need to change anything)
   - Click "Deploy"

5. Wait 2-3 minutes. Your site is live!

---

### Option 3: Via Vercel Dashboard (Manual)

1. Drag and drop your project folder to [vercel.com/import](https://vercel.com/import)

---

## Deploy to Other Platforms

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `.next` folder (with `package.json`) to Netlify, or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Render

1. Create new "Web Service"
2. Connect GitHub repo
3. Settings:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment: Node.js

---

## Important: Environment Variables

Your current portfolio **does not require any environment variables** for basic functionality.

If you add features later (contact form backend, analytics), create a `.env.local` file:
```
CONTACT_FORM_API_URL=your-api-endpoint
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

**Never commit `.env.local`** - it's already in `.gitignore`.

---

## Update Your Content Before Deploying

1. ✅ **Update personal info** in `lib/constants.ts`:
   - Email, phone, LinkedIn
   - Project GitHub links (replace `#`)
   - Live demo links when available

2. ✅ **Add your resume**:
   - Place PDF at `public/resume.pdf`
   - Place DOCX at `public/resume.docx`
   - Already linked in buttons!

3. ✅ **Verify images** (optional but recommended):
   - Profile photo: `public/images/profile/profile.jpg` ✅ Already done
   - Add project screenshots (see IMAGES_SETUP.md)

4. ✅ **Custom domain** (optional):
   - In Vercel dashboard → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

## Common Deployment Issues

### Issue: Build fails on Vercel
**Solution**:
- Check build logs for errors
- Ensure Node.js version matches local (set in `package.json` engines)
- Make sure all dependencies are listed in `package.json`

### Issue: Images not showing
**Solution**:
- Images must be in `public/` folder (not `src/`)
- Use paths like `/images/profile.jpg` (no `public/` in path)
- Don't use absolute file paths

### Issue: 404 on subpages
**Solution**:
- All routing in Next.js is handled by `app/page.tsx`
- No extra pages yet, so 404s only for non-existent routes
- Normal behavior for single-page portfolios

### Issue: CSS/Tailwind not loading
**Solution**:
- Check `tailwind.config.ts` content paths include `./app/**/*`
- Run `npm run build` locally first to verify
- Clear Vercel cache and redeploy

---

## Continuous Deployment

When you push to your Git repo, Vercel automatically:
1. Detects changes
2. Runs `npm install`
3. Runs `npm run build`
4. Deploys to production (or preview for PRs)

**Main branch** → Production URL
**Feature branches** → Preview URLs

---

## Monitoring

- **Vercel Analytics**: View performance in dashboard
- **Google Analytics**: Add to `layout.tsx` if needed
- **Uptime**: Vercel provides 99.99% uptime SLA

---

## Custom Domain Setup (Optional)

1. In Vercel dashboard, select your project
2. Go to **Settings → Domains**
3. Add your domain (e.g., `abdullahalrafi.com`)
4. Vercel gives you DNS records to add to your registrar
5. Add these records (usually 4-6 A/AAAA/CNAME records)
6. Wait 24-48 hours for propagation

---

## SEO Checklist Post-Deploy

- ✅ Meta tags in `app/layout.tsx` (already configured)
- ✅ Sitemap (Next.js auto-generates)
- ✅ Robots.txt (Next.js auto-generates)
- ✅ Structured data (JSON-LD ready to add)
- ✅ Semantic HTML (already used)
- ✅ Fast loading (SSG, optimized)

Test with:
- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🎉 Ready to Deploy?

Push to GitHub → Import to Vercel → Done! (3 minutes)

Need help? Check README.md for more details.
