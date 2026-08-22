import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sampled from the Elixir Tec logo/banner (navy + engineering blue).
        // Treat as a starting point — refine once real brand guidelines exist.
        brand: {
          navy: '#0B1F3A',
          blue: '#1B5FCB',
          steel: '#4A6484',
          light: '#EEF3FA'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
