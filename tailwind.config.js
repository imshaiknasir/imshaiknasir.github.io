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
  plugins: [],
} 