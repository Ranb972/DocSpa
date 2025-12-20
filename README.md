# DocSpa - Dental Clinic Landing Page

A premium, Apple-inspired landing page for Dr. Amit Moritz's dental clinic in Rehovot. Built with React and Vite, featuring RTL support for Hebrew, smooth scroll animations, and a clean medical aesthetic.

## Design

- **Apple-inspired aesthetic** - Clean layouts, generous white space, large typography
- **Smooth animations** - Fade-in and scale animations on scroll
- **Card-based design** - Rounded corners, soft shadows, subtle depth
- **Medical color palette** - White, light gray, soft blue accents

## Features

- Single-page landing with smooth scroll navigation
- Mobile-responsive design
- RTL (Hebrew) support
- Intersection Observer scroll animations
- Backdrop blur glass-morphism header
- Premium card components

## Sections

- **Header** - Fixed navigation with frosted glass effect
- **Hero** - Dr. Amit Moritz introduction with CTA
- **About** - Professional background and highlights
- **Services** - Dental services in Apple-style cards
- **Clinic** - Modern facility features
- **Testimonials** - Patient reviews in elegant cards
- **Contact** - Address in Rehovot, phone, working hours
- **Footer** - Minimal Apple-style footer

## Tech Stack

- React 18
- Vite
- CSS3 (CSS Variables, Flexbox, Grid)
- Heebo Font (Hebrew optimized)

## Project Structure

```
src/
├── components/      # Header, Footer
├── sections/        # Hero, About, Services, Clinic, Testimonials, Contact
├── styles/          # Global design system
└── assets/          # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/DocSpa.git
cd DocSpa
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

## Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #0071e3;
  --color-black: #1d1d1f;
  --color-gray: #6e6e73;
  --color-gray-bg: #f5f5f7;
}
```

### Content

Update Hebrew text in the section components under `src/sections/`.

### Images

Replace emoji placeholders with actual images in the section files.

## Doctor Information

- **Name**: ד״ר עמית מוריץ (Dr. Amit Moritz)
- **Profession**: רופאת שיניים (Dentist)
- **Location**: מרפאה פרטית ברחובות (Private clinic in Rehovot)

## License

MIT License
