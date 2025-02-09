/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
            'primary': {
              1: '#050052',
              2: '#ABABAB',
              3: '#D8AA00'
            },
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        fontSize: {
          // Desktop
          'h1': ['36px', { lineHeight: '44px', fontWeight: '700' }],
          'h2': ['32px', { lineHeight: '40px', fontWeight: '700' }],
          'h3': ['28px', { lineHeight: '36px', fontWeight: '700' }],
          'h4': ['24px', { lineHeight: '32px', fontWeight: '700' }],
          'body1': ['20px', { lineHeight: '30px', fontWeight: '600' }],
          'body2': ['20px', { lineHeight: '30px', fontWeight: '400' }],
          'body3': ['16px', { lineHeight: '24px', fontWeight: '600' }],
          'body4': ['16px', { lineHeight: '24px', fontWeight: '400' }],
          
          // Mobile (70% of desktop size)
          'mobile-h1': ['25px', { lineHeight: '32px', fontWeight: '700' }],
          'mobile-h2': ['22px', { lineHeight: '30px', fontWeight: '700' }],
          'mobile-h3': ['20px', { lineHeight: '28px', fontWeight: '700' }],
          'mobile-h4': ['17px', { lineHeight: '24px', fontWeight: '700' }],
          'mobile-body1': ['16px', { lineHeight: '24px', fontWeight: '600' }],
          'mobile-body2': ['16px', { lineHeight: '24px', fontWeight: '400' }],
          'mobile-body3': ['14px', { lineHeight: '20px', fontWeight: '600' }],
          'mobile-body4': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        },
        spacing: {
          'nav': '80px',
          'section': '120px',
        },
      },
    },
    plugins: [],
  }