# Xiaodan Zhao Academic Website — Site Guide

## Architecture Overview

### Tech Stack
- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 (utility-first CSS)
- **Export:** Static HTML (`output: 'export'` in `next.config.ts`)
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **URL:** https://zhao-xiaodan.github.io

### How the Build Works

1. `npm run build` runs Next.js static export
2. Next.js compiles all `.tsx` pages into static HTML/CSS/JS in the `out/` directory
3. GitHub Actions uploads `out/` to GitHub Pages on every push to `main`

### How `/src` Code Integrates

```
src/
├── app/                    # Pages (each folder = one URL route)
│   ├── layout.tsx          # Root layout — wraps ALL pages with Navbar + Footer
│   ├── page.tsx            # Home page (/)
│   ├── research/page.tsx   # /research
│   ├── publications/page.tsx  # /publications
│   ├── patents-media/page.tsx # /patents-media
│   ├── teaching/page.tsx   # /teaching
│   ├── beyond-research/page.tsx # /beyond-research
│   └── globals.css         # Global styles + Tailwind theme colors
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Top navigation bar (responsive + mobile hamburger)
│   ├── Footer.tsx          # Footer with social links
│   ├── HeroSection.tsx     # Hero banner on home page
│   ├── SnapshotGrid.tsx    # 6-block stats grid on home page
│   ├── ResearchCard.tsx    # Research highlight cards (home page)
│   ├── PublicationCard.tsx # Individual publication entry
│   ├── NewsCard.tsx        # News item with thumbnail
│   └── SectionHeading.tsx  # Reusable section title with accent bar
└── data/                   # Structured content (edit these to update content)
    ├── publications.ts     # All 21 publications with citations, summaries, DOIs
    ├── research.ts         # 4 research domains (A-D) with detailed entries
    ├── news.ts             # News & updates feed items
    └── patents.ts          # Patents + media coverage entries
```

**Data flow:** Data files (`src/data/*.ts`) → imported by pages/components → rendered as static HTML at build time.

**To update content:** Edit the relevant `.ts` file in `src/data/`, then push to GitHub. The site rebuilds automatically.

---

## Image Dimensions & Specifications

### Where dimensions are defined

| Location | File | CSS Class | Current Size |
|---|---|---|---|
| Home: Research Highlight cards | `src/components/ResearchCard.tsx:12` | `h-48 object-contain` | full width × 192px height |
| Research page: domain entry figures | `src/app/research/page.tsx:139` | `md:w-72 max-h-[240px] object-contain` | 288px wide × max 240px tall |
| Home: Hero portrait | `src/components/HeroSection.tsx:8` | `w-48 h-48 sm:w-56 sm:h-56` | 192×192px (224×224 on sm+) |
| Patents page: patent diagrams | `src/app/patents-media/page.tsx:19` | `h-48 object-cover` | full width × 192px height |
| Patents page: media screenshots | `src/app/patents-media/page.tsx:46` | `md:w-48 object-cover` | 192px wide |
| News cards: thumbnails | `src/components/NewsCard.tsx:10` | `w-20 h-20 object-cover` | 80×80px |

### Recommended image sizes for web

| Use Case | Recommended Dimensions | Target File Size | Format |
|---|---|---|---|
| Research figures | 800×450px | 50–100 KB | WebP |
| Patent diagrams | 800×540px | 40–80 KB | WebP |
| Portrait photo | 400×400px | 5–15 KB | WebP |
| Media screenshots | 600×340px | 20–50 KB | WebP |
| News thumbnails / logos | 160×160px | 1–5 KB | WebP |
| Journal logos | 160×160px | 1–5 KB | WebP |

**General guidelines:**
- All images should be **under 100 KB** for fast mobile loading
- Use **WebP** format (best compression-to-quality ratio)
- Original high-res backups are saved in `public/images/backup/`
- Resize to max **800px wide** for content images, **400px** for portraits

---

## Recent Updates (Feb 2025)

### Image Optimization
- All images converted from PNG/JPG (3–6 MB each) to WebP (30–80 KB each)
- Total image payload reduced from ~34 MB to ~0.7 MB
- Original files backed up in `public/images/backup/`

### Content Updates
- **Citations:** Updated to 500+ (from ~400)
- **h-index:** Updated to 12 (from 11)
- Located in: `src/components/SnapshotGrid.tsx`

### Research Domains Restructured
- **Domain A:** Changed to "Materials Physics & Functional Surfaces" with representative paper (MnO₂ nanotube, Adv. Funct. Mater.)
- **Domain B:** Changed to "Single-Molecule DNA Mechanics & Topology" — now covers 3 papers: HMGA2 supercoiling, TRF2 distortion, Site-Specific DNA Binding
- Domains C (Translational Diagnostics) and D (AI & Computational Tools) unchanged
- Located in: `src/data/research.ts`

### Publications Page
- **Removed** category filter tabs (categories were imprecise)
- Now shows all publications in a single list
- Filter code was in: `src/app/publications/page.tsx` (lines 23-51 removed)
- Page converted from client component (`"use client"`) to static server component

### Missing DOIs Added
- Added DOIs for: Mechanobiology in Medicine (2024), Nature Communications (2023), PLoS One (2019), J. Phys. Chem. Lett. (2018), Nucleic Acids Research (2018), PLoS One (2017), Adv. Mater. Interfaces (2016), Adv. Funct. Mater. (2011), Langmuir (2011)
- Located in: `src/data/publications.ts`

### News & Updates Enhanced
- JACS (2025): Added JACS logo + paper DOI link
- Communications Biology: Added journal logo + DOI link
- AI Tool Development: Added HuggingFace logo + HuggingFace Spaces link
- NUS News: Added link (`https://news.nus.edu.sg/...`)
- Located in: `src/data/news.ts`

### NUS News Link Added
- Media section: `https://news.nus.edu.sg/nus-mechanobiology-institute-receives-s49m-boost-to-develop-biomedical-innovations-for-age-related-conditions/`
- Located in: `src/data/patents.ts` (media items) and `src/data/news.ts`

### Image Display Fixes
- Research figures changed from `object-cover` (crops) to `object-contain` (shows full image)
- Research page sidebar figures: `md:w-72` (288px) with `max-h-[240px]`
- Home page cards: `h-48` (192px) with `object-contain`

---

## Quick Reference: Where to Edit

| What to change | File to edit |
|---|---|
| Site title / SEO | `src/app/layout.tsx` |
| Hero section (name, title, portrait) | `src/components/HeroSection.tsx` |
| Stats grid (citations, h-index) | `src/components/SnapshotGrid.tsx` |
| Professional bio | `src/app/page.tsx` (About section) |
| Featured research cards (home) | `src/app/page.tsx` (`featuredProjects` array) |
| Research trajectory timeline | `src/app/research/page.tsx` |
| Research domains A-D | `src/data/research.ts` |
| Publications | `src/data/publications.ts` |
| News & updates | `src/data/news.ts` |
| Patents & media | `src/data/patents.ts` |
| Teaching | `src/app/teaching/page.tsx` |
| Beyond Research | `src/app/beyond-research/page.tsx` |
| Navigation links | `src/components/Navbar.tsx` |
| Footer / social links | `src/components/Footer.tsx` |
| Colors / theme | `src/app/globals.css` |
| Static export config | `next.config.ts` |
| Deploy workflow | `.github/workflows/deploy.yml` |

## Adding New Images

1. Place the image in `public/images/` (use WebP, max 800px wide, under 100KB)
2. Reference it in the relevant data file as `/images/your-image.webp`
3. Push to GitHub — the site rebuilds automatically
