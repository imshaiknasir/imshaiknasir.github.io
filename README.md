# Shaik Nasir Ahemad's Portfolio Website

A professional portfolio website showcasing my experience as a Full Stack QA Engineer, built with Astro.js, Tailwind CSS, and featuring a technical blog and contact form.

## 👨‍💻 Live Demo

**[imshaiknasir.github.io](https://imshaiknasir.github.io)**

## 🛠️ Tech Stack

- **Framework**: [Astro.js](https://astro.build) - Zero/minimal JavaScript with excellent Markdown support
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Fonts**: Inter (sans-serif), Fira Code (monospace)
- **Form Handling**: Google Sheets API integration
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Project Structure

```
/
├── .github/            # GitHub Actions workflow configuration
├── public/             # Static assets (images, favicon)
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page templates and routes
│   ├── content/        # Blog posts in Markdown format
│   └── styles/         # Global CSS styles
├── astro.config.mjs    # Astro configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🔧 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/imshaiknasir/imshaiknasir.github.io.git
   cd imshaiknasir.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   # or with pnpm
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or with pnpm
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Content Management

- **Experience**: Edit `src/components/ExperienceSection.astro`
- **Education**: Update `src/components/EducationSection.astro`
- **Skills**: Modify `src/components/SkillsSection.astro`
- **Awards**: Edit `src/components/AwardsSection.astro`
- **Blog Posts**: Add Markdown files to `src/content/blog/`

### Blog Post Format

Create new blog posts as Markdown files in `src/content/blog/` with the following frontmatter:

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
description: "Brief description for SEO and previews"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 📊 Contact Form Setup

The contact form uses Google Sheets API for submission handling:

1. Create a Google Form connected to a Google Sheet
2. Set up Google Apps Script to receive and process form submissions
3. Update the form action URL in `src/components/ContactSection.astro`

Detailed setup instructions are available in the [Google Sheets API documentation](https://developers.google.com/sheets/api/guides/concepts).

## 🚀 Deployment to GitHub Pages

This site automatically deploys to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

### Initial Setup

1. Create a GitHub repository named `username.github.io` (replace "username" with your GitHub username)
2. Push your code to the repository:
   ```bash
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. In your repository settings, navigate to "Pages" and verify:
   - Source: "GitHub Actions"
   - Branch: main

### GitHub Actions Workflow

The deployment workflow is configured in `.github/workflows/deploy.yml`. It:

1. Builds the site using Astro's official GitHub Action
2. Deploys the built site to GitHub Pages

The workflow runs automatically on pushes to the main branch, or you can trigger it manually from the Actions tab in your repository.

### Custom Domain (Optional)

To use a custom domain:

1. Add your custom domain in GitHub repository settings under "Pages"
2. Create a `CNAME` file in the `public/` directory containing your domain name
3. Configure DNS settings with your domain registrar:
   - Type: A Record
   - Name: @
   - Value: GitHub Pages IP addresses (currently 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   - TTL: 3600 or automatic

## 🔍 Performance Optimization

- Run `npm run build` locally to check for any build errors
- Test performance with [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Optimize images using tools like [Squoosh](https://squoosh.app/)

## 📄 License

All rights reserved. © 2023 Shaik Nasir Ahemad.