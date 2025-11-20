export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
  },
  slideInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const hoverScale = 'hover:scale-105 transition-transform duration-300 ease-out'
export const hoverShadow = 'hover:shadow-xl transition-shadow duration-300'
export const hoverLift = 'hover:-translate-y-1 transition-transform duration-300'

export const smoothTransition = 'transition-all duration-300 ease-out'
export const smoothTransitionSlow = 'transition-all duration-500 ease-out'

export const cardHoverClass = `${hoverScale} ${hoverShadow} cursor-pointer`
