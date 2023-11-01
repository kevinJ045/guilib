/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/rayous/**/*.{js,ts,jsx,tsx,mdx}',
    './client/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
	],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

