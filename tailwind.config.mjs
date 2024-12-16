/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: "var(--base-background-color)",
        mute: "var(--mute-background-color)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "accent-color": "var(--accent-color)",
        tag: "var(--tag-background)",
      },
      borderColor: {
        tag: "var(--tag-border-color)",
      },
      textColor: {
        base : 'var(--base-text-color)',
        mute : 'var(--mute-text-color)',
      },
      fontFamily : {
        base : 'var(--base-font-family)',
        mute : 'var(--mute-font-family)',
      }
    },
    plugins: [],
  },
};
