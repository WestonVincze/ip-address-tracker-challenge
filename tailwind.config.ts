import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      fontSize: {
        '18px': '18px',
      },
      height: {
        '280': '280px',
        '300': '380px',
      },
      maxWidth: {
        '555': '555px',
        '1110': '1110px',
      },
      spacing: {
        '25': '25px',
        '35': '35px',
        '45': '45px'
      },
      fontWeight: {
        semibold: '500'
      }
    },
  },
  plugins: [],
} satisfies Config;
