// Custom Dental SVG Icons - professional dental-specific icons

// Dental Examination Set (mirror + probe crossed) - for Conservative Dentistry
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
    {/* Dental Mirror - round mirror on handle */}
    <circle cx="6" cy="5" r="3.5" />
    <line x1="8.5" y1="7.5" x2="14" y2="13" />
    <line x1="14" y1="13" x2="16" y2="15" />

    {/* Dental Explorer/Probe - thin pointed tool */}
    <line x1="18" y1="3" x2="10" y2="11" />
    <line x1="10" y1="11" x2="8" y2="14" />
    <path d="M8 14 L7 16" />
  </svg>
);

// Dental Crown on Tooth - for Restorative Treatments
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
    {/* Dental Crown Cap - rounded cap that covers tooth top */}
    <path d="M7 9 C7 5 9 3 12 3 C15 3 17 5 17 9" />
    <line x1="7" y1="9" x2="17" y2="9" />

    {/* Tooth body below the crown */}
    <path d="M7 9 L7 12 C7 14 7.5 16 8 18 C8.3 19.5 9 21 10 21 C10.8 21 11 20 11.2 19 C11.5 17.5 12 17 12 17 C12 17 12.5 17.5 12.8 19 C13 20 13.2 21 14 21 C15 21 15.7 19.5 16 18 C16.5 16 17 14 17 12 L17 9" />
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
