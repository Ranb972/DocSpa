// Custom Dental SVG Icons - professional dental-specific icons

// Dental Mirror + Probe - for Conservative Dentistry
export const ToothMirror = ({ size = 24, strokeWidth = 1.5, color = 'currentColor', className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Mirror (left, angled) */}
    <ellipse cx="6" cy="5" rx="3" ry="2.5" transform="rotate(-30 6 5)" />
    <line x1="8" y1="7" x2="14" y2="18" />
    {/* Probe (right, angled) */}
    <line x1="16" y1="7" x2="10" y2="18" />
    <circle cx="17" cy="5" r="1" />
  </svg>
);

// Tooth with Sparkles - for Restorative Treatments
export const ToothCrown = ({ size = 24, strokeWidth = 1.5, color = 'currentColor', className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Tooth body */}
    <path d="M8 4c-2 0-3 2-3 4c0 2 0.5 4 1 6c0.5 2 1 4 1.5 4c0.5 0 1-1 1.5-1c0.5 0 1 1 1.5 1c0.5 0 1-1 1.5-1c0.5 0 1 1 1.5 1c0.5 0 1-2 1.5-4c0.5-2 1-4 1-6c0-2-1-4-3-4c-1 0-2 1-2.5 1c-0.5 0-1.5-1-2.5-1z" />
    {/* Sparkles */}
    <path d="M19 6 L20 8 L19 10 L18 8 Z" />
    <path d="M21 10 L22 11 L21 12 L20 11 Z" />
  </svg>
);

// Dental Implant (screw post with crown) - for Surgical Treatments
export const ToothImplant = ({ size = 24, strokeWidth = 1.5, color = 'currentColor', className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Crown/Tooth on top */}
    <path d="M8 2 C8 2 9 1 12 1 C15 1 16 2 16 2 L16 5 C16 6 15 7 12 7 C9 7 8 6 8 5 Z" />

    {/* Abutment (connector piece) */}
    <path d="M10 7 L10 9 L14 9 L14 7" />

    {/* Implant Screw - threaded post */}
    <path d="M10 9 L9 11 L15 11 L14 9" />
    <line x1="9" y1="11" x2="15" y2="11" />
    <path d="M9 11 L8.5 13 L15.5 13 L15 11" />
    <line x1="8.5" y1="13" x2="15.5" y2="13" />
    <path d="M8.5 13 L8 15 L16 15 L15.5 13" />
    <line x1="8" y1="15" x2="16" y2="15" />
    <path d="M8 15 L9 17 L15 17 L16 15" />
    <line x1="9" y1="17" x2="15" y2="17" />
    <path d="M9 17 L10 19 L14 19 L15 17" />
    <line x1="10" y1="19" x2="14" y2="19" />
    {/* Screw tip */}
    <path d="M10 19 L12 22 L14 19" />
  </svg>
);
