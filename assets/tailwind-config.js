tailwind.config = {
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#9b7fe8',
          light: '#b39deb',
          dark: '#7c5fc5',
        },
        surface: {
          DEFAULT: '#0a0a0f',
          2: '#111118',
          3: '#16161e',
          4: '#1e1e28',
        },
        ink: {
          DEFAULT: '#f0eef9',
          2: '#c8c5dd',
          3: '#9898b2',
          4: '#5a5a72',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '9999px',
      },
      boxShadow: {
        accent: '0 0 60px rgba(155, 127, 232, 0.12)',
        'accent-sm': '0 0 30px rgba(155, 127, 232, 0.08)',
        glow: '0 4px 32px rgba(155, 127, 232, 0.25)',
      },
    },
  },
};
