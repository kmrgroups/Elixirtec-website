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
          light: '#EEF3FA',
          accent: '#38BDF8'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(27, 95, 203, 0.45)',
        card: '0 1px 2px rgba(11, 31, 58, 0.04), 0 12px 24px -12px rgba(11, 31, 58, 0.12)',
        'card-hover': '0 1px 2px rgba(11, 31, 58, 0.06), 0 20px 40px -16px rgba(11, 31, 58, 0.22)'
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'spin-reverse-slow': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'spin-reverse-slow': 'spin-reverse-slow 30s linear infinite'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};

export default config;
