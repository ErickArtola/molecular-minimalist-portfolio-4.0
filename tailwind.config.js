/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Molecular Minimalist Color Palette
      colors: {
        // Scientific Blue Gradient (#03045e to #caf0f8)
        'scientific': {
          50: '#f0f9ff',   // Lightest scientific blue
          100: '#e0f2fe',  // Very light blue
          200: '#caf0f8',  // Light scientific blue (neutral)
          300: '#7dd3fc',  // Light blue
          400: '#38bdf8',  // Medium light blue
          500: '#0ea5e9',  // Medium blue
          600: '#0284c7',  // Medium dark blue
          700: '#0369a1',  // Dark blue
          800: '#075985',  // Darker blue
          900: '#0c4a6e',  // Very dark blue
          950: '#03045e',  // Primary dark scientific blue
        },
        
        // Secondary and accent colors
        'secondary': '#0077b6',
        'accent': '#00b4d8',
        
        // Neutral molecular grays
        'molecular': {
          50: '#fafbfc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        
        // Background variations
        'bg-primary': '#ffffff',
        'bg-secondary': '#f0f9ff',
        'bg-tertiary': '#caf0f8',
      },
      
      // Typography Scale - Inter Font Family
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      // Scientific Typography Scale
      fontSize: {
        'display': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '0em', fontWeight: '600' }],
        'h3': ['18px', { lineHeight: '28px', letterSpacing: '0em', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      
      // Molecular Spacing System (4px base unit)
      spacing: {
        '1': '4px',    // 4px
        '2': '8px',    // 8px
        '3': '12px',   // 12px
        '4': '16px',   // 16px
        '6': '24px',   // 24px
        '8': '32px',   // 32px
        '12': '48px',  // 48px
        '16': '64px',  // 64px
        '24': '96px',  // 96px
        '32': '128px', // 128px
        '40': '160px', // 160px
        '48': '192px', // 192px
      },
      
      // Border Radius - Scientific Precision
      borderRadius: {
        'none': '0px',
        'sm': '2px',     // Subtle molecular edges
        'md': '4px',     // Standard molecular radius
        'lg': '8px',     // Larger molecular structures
        'xl': '12px',    // Scientific containers
        '2xl': '16px',   // Large scientific elements
        'full': '9999px', // Circular molecular representations
      },
      
      // Box Shadow - Molecular Depth
      boxShadow: {
        'molecular-sm': '0 1px 2px 0 rgb(3 4 94 / 0.05)',
        'molecular': '0 4px 6px -1px rgb(3 4 94 / 0.1), 0 2px 4px -2px rgb(3 4 94 / 0.1)',
        'molecular-md': '0 10px 15px -3px rgb(3 4 94 / 0.1), 0 4px 6px -4px rgb(3 4 94 / 0.1)',
        'molecular-lg': '0 20px 25px -5px rgb(3 4 94 / 0.1), 0 8px 10px -6px rgb(3 4 94 / 0.1)',
        'molecular-xl': '0 25px 50px -12px rgb(3 4 94 / 0.25)',
      },
      
      // Animation - Molecular Minimalist Timings
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'molecular-float': 'molecularFloat 3s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
      },
      
      // Custom Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        molecularFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      
      // Grid Templates for Scientific Layouts
      gridTemplateColumns: {
        'molecular': 'minmax(200px, 1fr) 3fr',
        'scientific': '1fr 2fr 1fr',
        'research': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      
      // Transition Durations
      transitionDuration: {
        '250': '250ms',  // Quick molecular interactions
        '400': '400ms',  // Standard scientific transitions
        '600': '600ms',  // Deliberate scientific animations
      },
    },
  },
  plugins: [
    // Typography plugin for advanced text styling
    require('@tailwindcss/typography'),
  ],
  
  // Accessibility and color scheme
  darkMode: ['class', '[data-theme="dark"]'],
};