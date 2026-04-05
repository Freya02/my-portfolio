# Freya Jayant Vora — Personal Portfolio

> A high-performance, animated personal portfolio built with **Next.js 15 App Router**, **GSAP**, and a custom **dark glassmorphism design system** — deployed on Vercel.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-freya--vora--portfolio.vercel.app-ff3366?style=for-the-badge&logo=vercel)](https://freya-vora-portfolio.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

---

## ✨ Features

- **GSAP Scroll Animations** — Entrance animations with `ScrollTrigger` for every section; animated skill progress bars
- **Glassmorphism Design** — Floating navbar capsule with `backdrop-filter` blur, glass-panel cards, and ambient background glows
- **Responsive Mobile Menu** — Custom hamburger icon with animated X-state transition, solid-background slide-in drawer
- **Active Nav Tracking** — ScrollTrigger-powered active state highlighting for current section in viewport
- **Dynamic Skill Bars** — Animated competency bars driven by `data-percent` attributes
- **Orbitron Typography** — Google Fonts heading font for a clean, technical aesthetic

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Animations | GSAP 3 + `@gsap/react` + ScrollTrigger |
| Styling | Vanilla CSS (custom design tokens, glassmorphism) |
| Fonts | Google Fonts — Inter + Orbitron |
| Deployment | Vercel (CI/CD via GitHub push) |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout — metadata, fonts, Navbar import
│   ├── Navbar.js          # Client component — mobile menu state, hamburger
│   ├── page.js            # Main page — all sections + GSAP animation logic
│   └── globals.css        # Design system — tokens, glass styles, responsive media queries
├── public/
│   ├── logo.png           # FV nav logo
│   └── profile.jpg        # Hero profile photo
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.0`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Freya02/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📐 Design System

The portfolio uses a custom CSS token-based design system defined in `globals.css`:

```css
:root {
  --bg-color:           #05050f;
  --text-primary:       #e0e6ed;
  --text-secondary:     #8a9bb3;
  --accent-color:       #ff3366;   /* Pink-red highlight */
  --accent-secondary:   #7000ff;   /* Purple highlight */
  --glass-bg:           rgba(255, 255, 255, 0.03);
  --glass-border:       rgba(255, 255, 255, 0.08);
}
```

---

## 📦 Key Dependencies

```json
{
  "next": "^15.x",
  "gsap": "^3.x",
  "@gsap/react": "^2.x"
}
```

---

## 🌍 Deployment

This project auto-deploys to **Vercel** on every push to `master`.

To deploy your own fork:

1. Fork this repository
2. Import into [Vercel](https://vercel.com/new)
3. Set framework preset to **Next.js**
4. Deploy — Vercel handles the rest

---

## 📬 Contact

**Freya Jayant Vora** — Full Stack Developer

- 📧 [freya.vora@dal.ca](mailto:freya.vora@dal.ca)
- 💼 [LinkedIn](https://linkedin.com/in/freya-vora/)
- 🐙 [GitHub](https://github.com/Freya02)
