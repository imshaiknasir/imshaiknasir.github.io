/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",    // Professional dark blue
        secondary: "#38BDF8",  // Complementary accent color
        background: "#F8FAFC", // Light gray/white
        text: "#1F2937",       // Dark gray for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '4': '1rem', // Add explicit px-4 value
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      boxShadow: {
        'skill': '0 4px 6px -1px rgba(56, 189, 248, 0.1), 0 2px 4px -1px rgba(56, 189, 248, 0.06)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#1F2937',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h1: {
              fontSize: '2.25rem',
              marginTop: '0',
              marginBottom: '1rem',
              lineHeight: '1.2',
              fontWeight: '800',
              color: '#1E3A8A',
            },
            h2: {
              fontSize: '1.875rem',
              marginTop: '2rem',
              marginBottom: '1rem', 
              lineHeight: '1.3',
              fontWeight: '700',
              color: '#1E3A8A',
            },
            h3: {
              fontSize: '1.5rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
              lineHeight: '1.4',
              fontWeight: '600',
              color: '#1E3A8A',
            },
            a: {
              color: '#38BDF8',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              fontStyle: 'normal',
              fontWeight: '400',
              borderLeftColor: '#38BDF8',
              borderLeftWidth: '0.25rem',
              paddingLeft: '1rem',
              fontFamily: '"Inter", sans-serif',
              backgroundColor: '#F3F4F6',
              borderRadius: '0.25rem',
              padding: '1rem',
            },
            code: {
              color: '#1F2937',
              backgroundColor: '#F3F4F6',
              borderRadius: '0.25rem',
              padding: '0.2em 0.4em',
              fontWeight: '400',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            pre: {
              backgroundColor: '#1F2937',
              color: '#F3F4F6',
              borderRadius: '0.5rem',
              padding: '1.25rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            ul: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            ol: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 