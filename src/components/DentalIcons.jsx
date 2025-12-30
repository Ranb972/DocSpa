// Custom Dental SVG Icons - matching Lucide style (outline, stroke-based)

// Tooth with dental mirror - for Conservative Dentistry
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
    {/* Tooth shape */}
    <path d="M12 2C9.5 2 7.5 3.5 7 6c-.3 1.5-.2 3 .5 4.5.5 1 .5 2 .3 3-.3 1.5-.8 3.5-.8 5 0 1.5 1 2.5 2 2.5s1.5-1 2-2.5c.3-1 .7-1.5 1-1.5s.7.5 1 1.5c.5 1.5 1 2.5 2 2.5s2-1 2-2.5c0-1.5-.5-3.5-.8-5-.2-1-.2-2 .3-3 .7-1.5.8-3 .5-4.5-.5-2.5-2.5-4-5-4z" />
    {/* Dental mirror - circle on stick */}
    <circle cx="19" cy="5" r="2.5" />
    <line x1="17" y1="7" x2="14" y2="10" />
  </svg>
);

// Dental Crown on tooth - for Restorative Treatments
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
    {/* Crown cap on top */}
    <path d="M7 8h10l-1-4H8L7 8z" />
    <line x1="7" y1="8" x2="17" y2="8" />
    {/* Tooth body below crown */}
    <path d="M7 8c-.3 1.5-.2 2.5.3 3.5.4.8.4 1.6.2 2.5-.2 1.2-.5 2.8-.5 4 0 1.2.8 2 1.6 2s1.2-.8 1.6-2c.2-.8.6-1.2.8-1.2s.6.4.8 1.2c.4 1.2.8 2 1.6 2s1.6-.8 1.6-2c0-1.2-.3-2.8-.5-4-.2-.9-.2-1.7.2-2.5.5-1 .6-2 .3-3.5" />
  </svg>
);

// Dental Implant screw - for Surgical Treatments
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
    {/* Tooth crown on top */}
    <path d="M8 2c-.5 2-.4 3.5.2 4.8.3.6.3 1.2.1 1.8L8 10h8l-.3-1.4c-.2-.6-.2-1.2.1-1.8.6-1.3.7-2.8.2-4.8" />
    {/* Abutment connector */}
    <rect x="10" y="10" width="4" height="3" rx="0.5" />
    {/* Implant screw threads */}
    <path d="M10 13l-1 2h6l-1-2" />
    <path d="M9.5 15l-.5 2h6l-.5-2" />
    <path d="M9.5 17l-.5 2h6l-.5-2" />
    <path d="M10 19l.5 2h3l.5-2" />
    {/* Screw tip */}
    <path d="M11 21l1 1 1-1" />
  </svg>
);
