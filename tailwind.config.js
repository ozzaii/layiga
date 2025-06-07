/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'layiga-orange': '#FF6B35',
        'layiga-green': '#00B894',
        'layiga-mint': '#00CEC9',
        'forest-green': '#2D5016',
        'wood-brown': '#8B4513',
        'sky-blue': '#74B9FF'
      },
      fontFamily: {
        'handwritten': ['Kalam', 'cursive'],
        'adventure': ['Fredoka One', 'cursive'],
        'clean': ['Inter', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.5s ease-in-out',
        'leaf-fall': 'leafFall 8s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        leafFall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.8)' }
        }
      },
      backgroundImage: {
        'gradient-adventure': 'linear-gradient(135deg, #00B894 0%, #00CEC9 50%, #74B9FF 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
        'gradient-forest': 'linear-gradient(180deg, #2D5016 0%, #00B894 100%)'
      }
    },
  },
  plugins: [],
} 