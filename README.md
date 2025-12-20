# DocSpa - Dental Clinic Landing Page

A modern, responsive landing page for a dental clinic built with React and Vite. Features RTL (Right-to-Left) support for Hebrew content and a clean, professional medical aesthetic.

## Features

- Single-page landing with smooth scroll navigation
- Mobile-responsive design
- RTL (Hebrew) support
- Clean, professional medical theme
- Component-based architecture

## Sections

- **Header** - Fixed navigation with smooth scroll links
- **Hero** - Welcome message with CTA button
- **About** - Clinic information and statistics
- **Services** - Dental services offered
- **Testimonials** - Patient reviews
- **Contact** - Contact information and working hours
- **Footer** - Quick links and social media

## Tech Stack

- React 18
- Vite
- CSS3 (CSS Variables, Flexbox, Grid)

## Project Structure

```
src/
├── components/      # Reusable components (Header, Footer)
├── sections/        # Page sections (Hero, About, Services, etc.)
├── styles/          # Global styles
└── assets/          # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/DocSpa.git
cd DocSpa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #2E86AB;
  --secondary-color: #57C5B6;
  --text-primary: #1A3A4A;
  /* ... */
}
```

### Content

Update the Hebrew text and content in the section components located in `src/sections/`.

### Images

Replace placeholder components with actual images in the respective section files.

## License

MIT License
