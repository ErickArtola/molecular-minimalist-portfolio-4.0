/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Monochrome Color Palette - Black, White, Grey
      colors: {
        // Primary greys - replacing all scientific blues
        'primary': {
          50: '#f9fafb',   // Lightest grey (near white)
          100: '#f3f4f6',  // Very light grey
          200: '#e5e7eb',  // Light grey
          300: '#d1d5db',  // Medium light grey
          400: '#9ca3af',  // Medium grey
          500: '#6b7280',  // Medium dark grey
          600: '#4b5563',  // Dark grey
          700: '#374151',  // Darker grey
          800: '#1f2937',  // Very dark grey
          900: '#111827',  // Near black
          950: '#030712',  // Darkest grey/black
        },
        
        // Accent greys for highlights (replacing blue accents)
        'accent': '#4b5563',      // Dark grey accent
        'secondary': '#6b7280',   // Medium grey secondary
        
        // Text colors
        'text': {
          'primary': '#111827',    // Dark text on light backgrounds
          'secondary': '#4b5563',  // Medium grey text
          'tertiary': '#9ca3af',   // Light grey text
          'inverse': '#ffffff',    // White text on dark backgrounds
        },
        
        // Background colors
        'bg': {
          'primary': '#ffffff',    // White background
          'secondary': '#f9fafb',  // Light grey background
          'tertiary': '#f3f4f6',   // Slightly darker light grey
          'dark': '#111827',       // Dark background
          'darker': '#030712',     // Darkest background
        },
        
        // Border colors
        'border': {
          'light': '#e5e7eb',      // Light border
          'medium': '#d1d5db',     // Medium border
          'dark': '#4b5563',       // Dark border
        },
        
        // Status colors (minimal, using greys)
        'success': '#374151',      // Dark grey for success
        'warning': '#6b7280',      // Medium grey for warning
        'error': '#1f2937',        // Very dark grey for error
        'info': '#4b5563',         // Dark grey for info
        
        // Legacy color names for backward compatibility
        'hero-text': '#ffffff',
        'hero-gray': '#4b5563',
        'molecular': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      
      // Typography Scale - Inter Font Family
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      // Typography Scale
      fontSize: {
        'display': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '0em', fontWeight: '600' }],
        'h3': ['18px', { lineHeight: '28px', letterSpacing: '0em', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0em', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      
      // Spacing System (4px base unit)
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
      
      // Border Radius
      borderRadius: {
        'none': '0px',
        'sm': '2px',     
        'md': '4px',     
        'lg': '8px',     
        'xl': '12px',    
        '2xl': '16px',   
        'full': '9999px',
      },
      
      // Box Shadow - Monochrome depth
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(17 24 39 / 0.05)',
        'DEFAULT': '0 4px 6px -1px rgb(17 24 39 / 0.1), 0 2px 4px -2px rgb(17 24 39 / 0.1)',
        'md': '0 10px 15px -3px rgb(17 24 39 / 0.1), 0 4px 6px -4px rgb(17 24 39 / 0.1)',
        'lg': '0 20px 25px -5px rgb(17 24 39 / 0.1), 0 8px 10px -6px rgb(17 24 39 / 0.1)',
        'xl': '0 25px 50px -12px rgb(17 24 39 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(17 24 39 / 0.06)',
        'none': '0 0 #0000',
        // Legacy molecular shadows
        'molecular-sm': '0 1px 2px 0 rgb(17 24 39 / 0.05)',
        'molecular': '0 4px 6px -1px rgb(17 24 39 / 0.1), 0 2px 4px -2px rgb(17 24 39 / 0.1)',
        'molecular-md': '0 10px 15px -3px rgb(17 24 39 / 0.1), 0 4px 6px -4px rgb(17 24 39 / 0.1)',
        'molecular-lg': '0 20px 25px -5px rgb(17 24 39 / 0.1), 0 8px 10px -6px rgb(17 24 39 / 0.1)',
        'molecular-xl': '0 25px 50px -12px rgb(17 24 39 / 0.25)',
      },
      
      // Animation - Minimal timings
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        // Legacy molecular animations
        'molecular-float': 'float 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      
      // Grid Templates
      gridTemplateColumns: {
        'main': 'minmax(200px, 1fr) 3fr',
        'layout': '1fr 2fr 1fr',
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      
      // Transition Durations
      transitionDuration: {
        '250': '250ms',  
        '400': '400ms',  
        '600': '600ms',  
      },
    },
  },
  plugins: [
    // Typography plugin for advanced text styling
    require('@tailwindcss/typography'),
  ],
  
  // Dark mode support
  darkMode: ['class', '[data-theme="dark"]'],
};