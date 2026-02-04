import React, { useState, useEffect } from 'react';

export default function ScrollTitleDisplay() {
  const data = [
    {
      id: 1,
      title: 'Complete Agent Lifecycle Hub',
      description:
        'A flexible, modular platform that lets you design, run, monitor, and manage agents end-to-end — all in one place, without dealing with complex integrations or scattered tools.',
    },
    {
      id: 2,
      title: 'Ready-Made Blueprints for Rapid Builds',
      description: 'Pre-built templates and workflows to get started quickly',
    },
    {
      id: 3,
      title: 'Total Control of Your Data & IP',
      description: 'Complete ownership and security of your intellectual property',
    },
    {
      id: 4,
      title: 'Designed for Enterprise Scale & Security',
      description: 'Built to handle large-scale deployments with enterprise-grade security',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isScrollingToBottom = false;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if scrolled to bottom
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 10;

      if (isAtBottom && activeIndex < data.length - 1 && !isScrollingToBottom) {
        // If at bottom and not at last item, move to next
        isScrollingToBottom = true;
        setActiveIndex(prev => {
          const nextIndex = prev + 1;
          // Scroll up to allow more scrolling
          setTimeout(() => {
            window.scrollTo(0, scrollPosition - 300);
            isScrollingToBottom = false;
          }, 100);
          return nextIndex;
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.length, activeIndex]);

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-500 to-purple-600 py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* All titles visible */}
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`mb-8 p-8 rounded-lg transition-all duration-500 ${
              index === activeIndex
                ? 'bg-white/20 backdrop-blur-sm scale-105 shadow-2xl'
                : 'bg-white/5 scale-95 opacity-40'
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-60'
              }`}
            >
              {item.title}
            </h2>
            {index === activeIndex && (
              <p className='text-lg text-white/90 transition-all duration-500 opacity-100 animate-fade-in'>
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Spacer for scrolling */}
      <div className='h-[200vh]' />

      {/* Scroll indicator */}
      <div className='fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex gap-3 bg-white px-6 py-3 rounded-full shadow-lg'>
          {data.map((item, idx) => (
            <div
              key={item.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-purple-600 scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
