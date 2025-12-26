# CLAUDE.md - DocSpa Project Guide

## Project Overview

**DocSpa** is a premium dental clinic landing page for **Dr. Amit Moritz (ד״ר עמית מוריץ)**, a dentist with a private clinic in **Rehovot, Israel**. The design follows Apple's aesthetic principles with a focus on clean layouts, generous white space, and smooth animations.

## Tech Stack

- **React 18** - Component-based UI
- **Vite** - Build tool and dev server
- **CSS3** - Custom properties, Flexbox, Grid
- **Heebo Font** - Hebrew-optimized Google Font

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx/css   # Fixed nav with frosted glass effect
│   └── Footer.jsx/css   # Minimal Apple-style footer
├── sections/            # Page sections (order matters)
│   ├── Hero.jsx/css     # Main landing with CTA
│   ├── About.jsx/css    # Doctor bio and stats
│   ├── Services.jsx/css # Dental services cards
│   ├── Clinic.jsx/css   # Facility features
│   ├── Testimonials.jsx/css # Patient reviews
│   └── Contact.jsx/css  # Contact info and hours
├── styles/
│   └── global.css       # Design system and CSS variables
└── App.jsx              # Main app component
```

## Commands

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build to /dist
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Design Guidelines

### Apple-Inspired Principles
- **White space**: Generous padding (120px sections)
- **Typography**: Large headlines (48-80px), negative letter-spacing
- **Cards**: Rounded corners (28px), soft shadows, subtle hover lift
- **Colors**: Minimal palette - white, light gray (#f5f5f7), blue accent (#0071e3)
- **Animations**: Subtle fade-in on scroll, no flashy effects

### RTL Hebrew Support
- HTML has `dir="rtl"` and `lang="he"`
- Text alignment defaults to right
- Arrow icons point left (‹) for RTL
- Heebo font is used for Hebrew optimization

### Color Variables (in global.css)
```css
--color-primary: #0071e3;      /* Blue accent */
--color-black: #1d1d1f;        /* Text primary */
--color-gray: #6e6e73;         /* Text secondary */
--color-gray-bg: #f5f5f7;      /* Section backgrounds */
--color-white: #ffffff;        /* Cards, main bg */
```

## Coding Conventions

### Components
- Each section has its own `.jsx` and `.css` file
- Use `useRef` and `IntersectionObserver` for scroll animations
- Add `animate-on-scroll fade-in` classes for animation elements
- Keep components focused - one section per file

### CSS
- Use CSS variables from `global.css` - never hardcode colors
- Use `var(--radius-xl)` for card border-radius (28px)
- Use `var(--transition-medium)` for hover animations
- Mobile breakpoints: 1068px, 834px, 480px
- Class naming: `.section-name` prefix (e.g., `.hero-title`, `.about-grid`)

### Content
- All user-facing text is in Hebrew
- Doctor name: ד״ר עמית מוריץ
- Location: רחובות (Rehovot)
- Phone placeholder: 08-1234567
- Use emoji placeholders for images (will be replaced later)

## Files Not to Modify Without Reason

| File | Reason |
|------|--------|
| `src/styles/global.css` | Core design system - changes affect entire site |
| `index.html` | RTL/lang settings, meta tags |
| `vite.config.js` | Build configuration |
| `package.json` | Dependencies and scripts |

## Section Order (in App.jsx)

1. Hero
2. About
3. Services
4. Clinic
5. Testimonials
6. Contact

This order is intentional for user flow - do not reorder without discussion.

## Adding New Sections

1. Create `SectionName.jsx` and `SectionName.css` in `src/sections/`
2. Use existing section as template (copy animation setup)
3. Import in `App.jsx` and add to render order
4. Add nav link in `Header.jsx` navItems array
5. Add footer link in `Footer.jsx` navItems array

## Common Patterns

### Scroll Animation Setup
```jsx
const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
  elements?.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
```

### Section Header Pattern
```jsx
<div className="section-header animate-on-scroll fade-in">
  <p className="eyebrow text-primary">Section Label</p>
  <h2 className="headline-medium">כותרת בעברית</h2>
</div>
```

## Notes for Future Development

- Image placeholders use emoji - replace with actual photos when available
- Map placeholder in Contact section - integrate Google Maps when ready
- Phone/email are placeholders - update with real contact info
- Consider adding: appointment booking form, WhatsApp integration
