import React from 'react'

const RadialGradientBackground = ({ variant = 'hero', gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: 'top-0 right-0 translate-x-1/3 -translate-y-1/3',
        size: 'w-[800px] h-[800px]',
        colors: [
          { color: 'rgba(99, 102, 241, 0.15)', stop: '0%' },
          { color: 'rgba(139, 92, 246, 0.1)', stop: '40%' },
          { color: 'rgba(167, 139, 250, 0.05)', stop: '70%' },
          { color: 'transparent', stop: '100%' },
        ],
        blur: '60px',
        opacity: 0.8,
        animate: 'animate-blob',
      },
      {
        position: 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
        size: 'w-[600px] h-[600px]',
        colors: [
          { color: 'rgba(139, 92, 246, 0.12)', stop: '0%' },
          { color: 'rgba(99, 102, 241, 0.08)', stop: '50%' },
          { color: 'transparent', stop: '100%' },
        ],
        blur: '80px',
        opacity: 0.7,
        animate: 'animate-blob',
        delay: '2s',
      },
      {
        position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[500px] h-[500px]',
        colors: [
          { color: 'rgba(167, 139, 250, 0.08)', stop: '0%' },
          { color: 'transparent', stop: '70%' },
        ],
        blur: '100px',
        opacity: 0.5,
        animate: 'animate-pulse',
      },
    ],

    about: [
      {
        position: 'top-0 right-0 translate-x-1/4',
        size: 'w-[500px] h-[500px]',
        colors: [
          { color: 'rgba(99, 102, 241, 0.1)', stop: '0%' },
          { color: 'rgba(139, 92, 246, 0.05)', stop: '60%' },
          { color: 'transparent', stop: '100%' },
        ],
        blur: '60px',
        opacity: 0.6,
        animate: 'animate-blob',
      },
      {
        position: 'bottom-0 left-0 -translate-x-1/4',
        size: 'w-[400px] h-[400px]',
        colors: [
          { color: 'rgba(167, 139, 250, 0.1)', stop: '0%' },
          { color: 'transparent', stop: '80%' },
        ],
        blur: '80px',
        opacity: 0.5,
      },
    ],

    skills: [
      {
        position: 'top-1/2 left-0 -translate-x-1/2',
        size: 'w-[600px] h-[600px]',
        colors: [
          { color: 'rgba(99, 102, 241, 0.08)', stop: '0%' },
          { color: 'transparent', stop: '70%' },
        ],
        blur: '80px',
        opacity: 0.6,
        animate: 'animate-blob',
      },
    ],

    projects: [
      {
        position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[700px] h-[700px]',
        colors: [
          { color: 'rgba(139, 92, 246, 0.1)', stop: '0%' },
          { color: 'rgba(99, 102, 241, 0.05)', stop: '50%' },
          { color: 'transparent', stop: '100%' },
        ],
        blur: '60px',
        opacity: 0.7,
      },
    ],

    education: [
      {
        position: 'top-0 right-0 translate-x-1/3',
        size: 'w-[500px] h-[500px]',
        colors: [
          { color: 'rgba(99, 102, 241, 0.12)', stop: '0%' },
          { color: 'transparent', stop: '80%' },
        ],
        blur: '60px',
        opacity: 0.6,
        animate: 'animate-blob',
      },
    ],

    contact: [
      {
        position: 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
        size: 'w-[500px] h-[500px]',
        colors: [
          { color: 'rgba(139, 92, 246, 0.15)', stop: '0%' },
          { color: 'rgba(99, 102, 241, 0.08)', stop: '50%' },
          { color: 'transparent', stop: '100%' },
        ],
        blur: '60px',
        opacity: 0.7,
        animate: 'animate-blob',
      },
    ],
  };


  const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(', ');
    return `radial-gradient(circle at center, ${colorStops})`;
  };

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full ${gradient.animate || ''}`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
            animationDelay: gradient.delay || '0s',
          }}
        />

      ))}

    </div>
  )
}

export default RadialGradientBackground