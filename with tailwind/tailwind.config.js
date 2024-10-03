/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(135.72deg, #09e5e5 -12.91%, #12e6dc -0.28%, #2beac5 20.76%, #55f1a0 48.11%, #8efa6d 79.68%, #a8ff57 92.3%)",
			},

			fontFamily: {
				rotabold: ["rotabold", "sans-serif"],
				ethosnova: ["ethosnova", "sans-serif"],
				"ethosnova-thin": ["ethosnova-thin", "sans-serif"],
			},
		},
	},
	plugins: [],
};
