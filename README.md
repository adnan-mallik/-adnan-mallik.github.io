# Adnan Malik — Senior Full-Stack & Shopify App Developer Portfolio

A developer portfolio website designed for **Adnan Malik**, Senior Full-Stack Developer specializing in Shopify Apps, Laravel backends, and React/Remix applications.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Completely static and pre-configured for free zero-cost deployment to **GitHub Pages** via GitHub Actions.

---

## 🚀 Live Demo & Repository Setup

- **Local Preview:** Runs on `http://localhost:3000` or `http://localhost:5173`
- **GitHub Pages:** Automatically deploys on push to `main` via `.github/workflows/deploy.yml`

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS 4 with custom dark palette, electric blue accents, and typography hierarchy
- **Icons:** Lucide React
- **Typography:** Outfit (Display) & Plus Jakarta Sans (Body)
- **Deployment:** GitHub Pages (Static build, no SSR or server required)

---

## 📂 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for Pages
├── src/
│   ├── assets/
│   │   └── images/             # Developer portrait & project previews
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky 3-zone header & mobile menu
│   │   ├── Hero.jsx            # Split hero, portrait, tech stack & proof strip
│   │   ├── About.jsx           # 2-column narrative & 4 engineering pillars
│   │   ├── Skills.jsx          # 5 grouped skill categories (no fake stats)
│   │   ├── Projects.jsx        # 6 production projects with filters & cards
│   │   ├── ProjectModal.jsx    # Expanded project detail lightbox
│   │   ├── Experience.jsx      # Career vertical timeline (Casa Apps, Base2Brand, Wixpa)
│   │   ├── Services.jsx        # "What I Do" - 6 specialized service offerings
│   │   ├── Contact.jsx         # Mailto composer, 1-click email copy & social links
│   │   ├── CvModal.jsx         # Formatted CV viewer, text download & print-to-PDF
│   │   └── Footer.jsx          # Brand wordmark, quick links, copyright
│   ├── data/
│   │   └── portfolio.js        # Centralized configuration file for all portfolio data
│   ├── App.tsx                 # Root layout & modal state
│   ├── index.css               # Design system & dark mode variables
│   └── main.tsx                # Client entry point
├── index.html                  # SEO tags, OpenGraph cards & JSON-LD schema
├── vite.config.ts              # Relative base path for GitHub Pages compatibility
└── package.json
```

---

## ⚙️ Quick Start (Local Development)

### 1. Install dependencies:
```bash
npm install
```

### 2. Start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for production:
```bash
npm run build
```
The compiled, optimized static assets will be in the `/dist` directory.

### 4. Preview production build locally:
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages (Exact Steps for adnan-mallik.github.io)

This repository is pre-configured to deploy directly to your primary GitHub Pages domain:
**`https://adnan-mallik.github.io`**

### Step 1: Create your user repository on GitHub
1. Log in to your GitHub account: **`adnan-mallik`**.
2. Create a new repository named exactly: **`adnan-mallik.github.io`**
   - Make it **Public**.
   - Do not initialize with a README (this repository already has everything).

### Step 2: Push your code to GitHub
Run the following commands in this project directory:
```bash
git init
git add .
git commit -m "feat: release developer portfolio for adnan-mallik.github.io"
git branch -M main
git remote add origin https://github.com/adnan-mallik/adnan-mallik.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages with GitHub Actions
1. On GitHub, navigate to your repository: `https://github.com/adnan-mallik/adnan-mallik.github.io`
2. Click **Settings** (top navigation tab).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment > Source**, click the dropdown and select **GitHub Actions**.

### Step 4: Automatic Deployment
- The included `.github/workflows/deploy.yml` workflow will trigger automatically upon push.
- Once the workflow completes (usually ~30–45 seconds), your portfolio will be live at:
  👉 **https://adnan-mallik.github.io**

---

## ⚙️ Local Development Commands

### Install dependencies:
```bash
npm install
```

### Start the development server:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Build production static assets:
```bash
npm run build
```
Creates an optimized, production-ready static bundle in `/dist`.

### Preview production build locally:
```bash
npm run preview
```

---

## 📄 License

MIT © Adnan Malik. Free to customize and adapt.
