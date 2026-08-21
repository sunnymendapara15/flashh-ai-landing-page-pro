# Flashh AI — Landing Page

A premium, conversion-focused landing page for **Flashh AI**: describe your idea, and Flashh builds the workflow through a simple text conversation.

## Stack

- React 18 (Create React App)
- Custom CSS design system (no UI framework)
- Intersection Observer scroll reveals (no heavy animation libraries)
- Google Fonts — Inter

## Getting started

```bash
cd frontend
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Production build

```bash
cd frontend
npm run build
```

The optimized bundle is written to `frontend/build`.

## Structure

```
frontend/
├── public/index.html
└── src/
    ├── index.js
    ├── App.js
    ├── index.css
    ├── hooks/useReveal.js
    └── components/
        ├── Navbar.js
        ├── Hero.js
        ├── SocialProof.js
        ├── Features.js
        ├── Showcase.js
        ├── Benefits.js
        ├── Testimonials.js
        ├── Pricing.js
        ├── FAQ.js
        ├── CTA.js
        └── Footer.js
```

## Features

- Sticky glassmorphism navbar with mobile menu
- Hero with ambient animated gradients and a live chat-to-workflow mock
- Social proof logo strip
- Feature grid with staggered reveals and hover glow
- Product showcase (conversation → workflow)
- Alternating benefit rows for technical & non-technical audiences
- Testimonials, pricing, and an accessible FAQ accordion
- Final CTA with email capture and a full footer
- Fully responsive, mobile-first, keyboard-accessible, with reduced-motion support
