export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay: 0.2,
    },
  },
});

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right') => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.4,
    },
  },
}); 