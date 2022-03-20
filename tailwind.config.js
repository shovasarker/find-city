module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      stone: {
        100: '#f5f5f4',
        200: '#e7e5e4',
      },
      gray: {
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
      },
      green: {
        400: '#4ade80',
        500: '#22c55e',
      },
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
