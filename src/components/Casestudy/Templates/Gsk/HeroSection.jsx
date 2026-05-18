'use client';

export default function HeroSection() {
  return (
    <section
      className='relative w-full overflow-hidden'
      style={{
        background: 'linear-gradient(110.82deg, #CF7120 0.13%, #DFA02A 50%, #AE5F19 100%)',
        minHeight: '280px',
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className='relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-20 lg:py-24'>
        {/* Main Title */}
        <h1 className='font-bold leading-tight md:leading-snug mb-5 md:mb-6'>
          {/* Yellow accent line */}
          <span
            className='block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]'
            style={{ color: '#E1FD57', lineHeight: '1.1' }}
          >
            Identity Access Management (IDAM)
          </span>
          {/* White second line */}
          <span
            className='block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]'
            style={{ color: '#FFFFFF', lineHeight: '1.1' }}
          >
            Reporting &amp; License Optimization
          </span>
        </h1>

        {/* Description */}
        <p
          className='text-sm sm:text-base md:text-[15px] lg:text-base max-w-7xl leading-relaxed'
          style={{ color: '#FFFFFF', opacity: 0.88 }}
        >
          Enabling enterprise-grade governance, automation, and cost optimization through
          centralized identity and license management.
        </p>
      </div>
    </section>
  );
}
