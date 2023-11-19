/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'spaceGrotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'palette': {
          'blue': '#377DFF',
          'green': '#38CB89',
          'yellow': '#FFAB00',
          'red': '#FF5630',
          'brandColor': '#000000',
        }
      },
      backgroundImage: {
        'bg-product1': "url('./assets/product1.jpg')",
        'bg-placeholder': "url('./assets/bgPlaceholder.jpg')",
        'image-placeholder': "url('./assets/imgPlaceholder.jpg')",
      },
      screens: {
        'mb' : '64rem'
      },
    },
  },
  plugins: [],
}
