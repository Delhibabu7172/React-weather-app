/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fweather&psig=AOvVaw3YsIXohdCgKbpg8w9aB7rf&ust=1702380109670000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiRjKCih4MDFQAAAAAdAAAAABAD')"
      }
    },
  },
  plugins: [],
}

