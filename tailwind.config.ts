import type { Config } from 'tailwindcss';
import GridPlugin from './src/index';

const config: Config = {
  content: ["./demo/**/*.{html,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    GridPlugin,
  ],
};

export default config;
