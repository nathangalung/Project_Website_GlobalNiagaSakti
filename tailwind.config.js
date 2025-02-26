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
          'h1': ['34px', { lineHeight: '44px', fontWeight: '700' }],
          'h2': ['30px', { lineHeight: '36px', fontWeight: '700' }],
          'h3': ['26px', { lineHeight: '36px', fontWeight: '700' }],
          'h4': ['22px', { lineHeight: '28px', fontWeight: '700' }],
          'h5': ['18px', { lineHeight: '28px', fontWeight: '700' }],

          'body1': ['18px', { lineHeight: '24px', fontWeight: '700' }],
          'body2': ['18px', { lineHeight: '24px', fontWeight: '400' }],
          'body3': ['14px', { lineHeight: '20px', fontWeight: '700' }],
          'body4': ['14px', { lineHeight: '20px', fontWeight: '400' }],
          'body5': ['16px', { lineHeight: '22px', fontWeight: '700' }],
          'body6': ['16px', { lineHeight: '22px', fontWeight: '400' }],
          'body7': ['12px', { lineHeight: '18px', fontWeight: '700' }],
          'body8': ['12px', { lineHeight: '18px', fontWeight: '400' }],
          
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