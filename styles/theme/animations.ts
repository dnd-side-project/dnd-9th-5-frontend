export const animations = {
  fadeIn: {
    '0%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0)' },
    '50%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.3)' },
    '100%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.6)' },
  },
  slideIn: {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  fadeOut: {
    '0%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.6)' },
    '50%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.3)' },
    '100%': { backgroundColor: 'rgba(0.8, 0.8, 0.8, 0.0)' },
  },
  slideOut: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(100%)' },
  },
  slideUp: {
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(0)' },
  },
  slideDown: {
    '0%': { transform: 'translateY(0%)' },
    '100%': { transform: 'translateY(100%)' },
  },
};
