import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["var(--font-montserrat)"],
			},
			colors: {
				waikawa: {
					50: "#F2F7FB",
					100: "#E7F0F8",
					200: "#D3E2F2",
					300: "#B9CFE8",
					400: "#9CB6DD",
					500: "#839DD1",
					600: "#6A7FC1",
					DEFAULT: "#6374AE",
					800: "#4A5989",
					900: "#414E6E",
					950: "#262C40",
				},
				fiverr: {
					50: '#edfcf3',
					100: '#d4f7e0',
					200: '#aceec7',
					300: '#76dfa7',
					400: '#3ec983',
					DEFAULT: '#1dbf73',
					600: '#0e8d55',
					700: '#0b7146',
					800: '#0c5939',
					900: '#0a4a30',
					950: '#05291c',
				},
				linkedin: {
					50: '#f1f7fe',
					100: '#e1eefd',
					200: '#bddbfa',
					300: '#82bef7',
					400: '#409ef0',
					500: '#1782e0',
					DEFAULT: '#0a66c2',
					700: '#09509b',
					800: '#0c4480',
					900: '#103b6a',
					950: '#0b2546',
				},

			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
				"6xl": "3rem",
			},
			scale: {
				flip: "-1",
				102: "1.02",
				103: "1.03",
				104: "1.04",
			},
			screens: {
				"3xl": "2000px",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
