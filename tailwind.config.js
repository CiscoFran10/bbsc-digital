/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "#E4F1F5",
				secondary: {
					100: "#A9A7B0",
					200: "#86878b",
					300: "#656565",
					400: "#070219",
				},
				accent: "#5EC900",
			},
		},
	},
	plugins: [],
};
