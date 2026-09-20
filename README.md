# Sriram E – Full Stack Developer Portfolio

A dark futuristic, highly responsive, and modular developer portfolio website for **Sriram E (@Jaisrir)** built with **React**, **Vite**, **Tailwind CSS**, and **Motion**. Pre-configured with Sriram's 30+ GitHub projects and ready for 1-click automated deployment to **GitHub Pages**.

---

## ⚡ Portfolio Configuration & Customization

All personal information is centralized in **`src/portfolioData.ts`**:
- **Name**: Sriram E
- **GitHub**: [github.com/Jaisrir](https://github.com/Jaisrir)
- **Email**: sriramjai983@gmail.com
- **Featured Repositories**: Final_year_projectsaviour, GrowEasy, DONART Artistry, WiseHR, Personal Expense Tracker, and XO Game.

> **Pro Tip:** You can also click the **"Customize Info"** button in the website's top navigation bar to test edits live in your browser and instantly copy updated TypeScript code!

---

## 🚀 How to Deploy to GitHub Pages for Jaisrir

Follow these step-by-step instructions to take your portfolio live on GitHub Pages:

### Step 1: Download / Export the Project
1. In Google AI Studio Build, click the **Settings** or **Export** menu in the top-right corner.
2. Choose **"Download as ZIP"** (or connect your GitHub account to push directly).
3. Extract the downloaded ZIP file onto your computer.

### Step 2: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com) as **Jaisrir**.
2. Click the **`+`** icon in the top-right corner and select **"New repository"**.
3. Choose a name for your repository:
   - For your personal primary site: `Jaisrir.github.io`
   - OR as a dedicated project repository: `portfolio` (e.g. `github.com/Jaisrir/portfolio`)
4. Set visibility to **Public**.
5. Do **not** initialize with a README (our project already contains one).
6. Click **"Create repository"**.

### Step 3: Push the Project to GitHub
Open your terminal inside the extracted project folder and run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files and commit
git add .
git commit -m "Initial commit of Sriram E developer portfolio"

# 3. Rename branch to main
git branch -M main

# 4. Link your remote repository:
# For user site (Jaisrir.github.io):
git remote add origin https://github.com/Jaisrir/Jaisrir.github.io.git

# OR for portfolio repo:
# git remote add origin https://github.com/Jaisrir/portfolio.git

# 5. Push code to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages in Repository Settings
This project comes pre-configured with an automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).

1. On GitHub, navigate to your repository `Jaisrir/Jaisrir.github.io` (or `Jaisrir/portfolio`).
2. Go to **Settings** > **Pages** (in the left sidebar under "Code and automation").
3. Under **"Build and deployment"** > **Source**, select:
   👉 **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site! You can monitor progress under the **Actions** tab.

### Step 5: Your Live Website URL
Once the GitHub Action completes:
- If your repo was named `Jaisrir.github.io`, your live URL is:  
  👉 **`https://Jaisrir.github.io/`**
- If your repo was named `portfolio`, your live URL is:  
  👉 **`https://Jaisrir.github.io/portfolio/`**

*(Note: `vite.config.ts` has `base: './'` pre-configured, so all assets and links will resolve automatically in both formats!)*

### Step 6: Connect a Custom Domain (Optional)
If you purchase a custom domain (e.g. `alexchen.dev` or `yourname.com`):
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **"Custom domain"**, enter your domain name (e.g., `alexchen.dev`) and click **Save**.
3. At your DNS provider (e.g. Namecheap, Cloudflare, Google Domains):
   - Add a `CNAME` record pointing `www` to `YOUR_USERNAME.github.io`.
   - Add `A` records pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. Check **"Enforce HTTPS"** once the certificate generates.

---

## 📁 Repository File Overview

- `src/portfolioData.ts` — **Primary configuration file**. Edit your name, bio, skills, projects, experience, and contact info here.
- `src/components/` — Modular, cleanly separated React components:
  - `Navbar.tsx` — Sticky blurred glass navigation with mobile drawer and active scroll spy.
  - `Hero.tsx` — Futuristic hero section with dynamic titles and ambient glowing mesh.
  - `About.tsx` — Biography, education, and quick statistics bento cards.
  - `Skills.tsx` — Categorized technology badges with search filter and proficiency bars.
  - `Projects.tsx` — Showcase cards with category filters, GitHub/Demo links, and architecture modal.
  - `GitHubSection.tsx` — 52-week contribution graph heatmap, repository metrics, and language distribution.
  - `Experience.tsx` — Vertical glowing timeline for work history and academic honors.
  - `Contact.tsx` — Direct contact channels, 1-click email copier, and responsive message form.
  - `CustomizerModal.tsx` — Built-in live browser customizer and TypeScript generator.
  - `Footer.tsx` — Clean footer with back-to-top button.
- `index.html` — Page title, OpenGraph social meta tags, and Google Fonts.
- `vite.config.ts` — Vite configuration configured with `base: './'` for GitHub Pages.
- `.github/workflows/deploy.yml` — Automated GitHub Actions CI/CD deployment script.
