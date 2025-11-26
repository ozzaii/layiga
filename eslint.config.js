import html from 'eslint-plugin-html';

export default [
  {
    files: ['**/*.html'],
    plugins: {
      html,
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        IntersectionObserver: 'readonly',
        fetch: 'readonly',
        gsap: 'readonly',
        ScrollTrigger: 'readonly',
        VanillaTilt: 'readonly',
        tsParticles: 'readonly',
        Swiper: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'semi': ['error', 'always'],
      'quotes': ['warn', 'single', { avoidEscape: true }],
      'indent': ['warn', 2],
      'no-multiple-empty-lines': ['warn', { max: 2 }],
      'eqeqeq': ['warn', 'smart'],
      'curly': ['warn', 'multi-line'],
      'no-var': 'error',
      'prefer-const': 'warn',
    },
  },
];
