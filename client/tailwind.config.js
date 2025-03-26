import  plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{html,js}'], // Adjust the paths based on your project structure
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        prata: ['Prata', 'serif'],
      },
      fontSize: {
        'course-details-heading-small': ['26px', '36px'],
        'course-details-heading-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['28px', '34px'],
        default: ['15px', '21px'],
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'], // Enable class-based and custom dark mode
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a custom `dark` variant
      addVariant('dark', '&:where(.dark, .dark *)');
    }),
  ],
};
