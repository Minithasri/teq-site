'use client';

import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const features = [
  {
    title: 'Business Apps',
    description:
      "Empower smarter decision-making with Domo's low-code and pro-code apps, enabling seamlessly automate business insights.",
    linkText: 'Explore Foundation',
    href: '#',
  },
  {
    title: 'BI & Analytics',
    description:
      'Accelerate innovation and streamline processes, ensuring that your organization transforms data into actionable intelligence effortlessly.',
    linkText: 'See BI & Analytics',
    href: '#',
  },
  {
    title: 'Data Foundation',
    description:
      'Seamlessly integrate real-time data from any source to construct elevated data experiences.',
    linkText: 'Discover Apps',
    href: '#',
  },
];

const pills = [
  'Build customizable, real time dashboards with ease using intuitive tools',
  'Seamlessly connect data from multiple systems and cloud data warehouses',
  'Ensure strong governance, security, and compliance with built in controls',
];

export default function FeaturesSection() {
  return (
    <section className='w-full bg-white relative overflow-hidden py-20'>
      {/* Background Image for Whole Section */}
      <div className='absolute top-[400px] md:top-32 inset-0 flex items-center justify-center pointer-events-none z-0'>
        <div className='relative w-[450px] h-[500px] md:w-full md:h-full opacity-100'>
          <Image
            src='/images/partners/domo/Background.webp'
            alt='Background Decoration'
            fill
            className='object-contain md:object-cover'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='flex items-center justify-center gap-3 mb-16'>
          <Image src='/images/partners/domo/sparkss.svg' alt='spark' width={24} height={24} />
          <h2 className='text-[28px] md:text-[32px] font-bold text-center'>
            <span
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Features of Domo with GWC
            </span>
          </h2>
        </div>

        {/* Top Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-20 lg:mb-[400px]'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='w-full max-w-[380px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white h-full flex flex-col'
            >
              <div className='bg-[#F9F3FB] mx-2 mt-2 rounded-xl p-8 flex-1'>
                <h3
                  className='text-lg font-bold mb-4'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {feature.title}
                </h3>
                <p className='text-[#4B5563] text-[13px] leading-relaxed'>{feature.description}</p>
              </div>
              <div
                className='bg-white p-6 flex items-center justify-between group cursor-pointer'
                onClick={e => {
                  e.preventDefault();
                  const target = document.getElementById('domo-ai-banner');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span
                  className='text-[14px] font-medium group-hover:underline'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {feature.linkText}
                </span>
                <FiArrowRight className='w-5 h-5 text-[#6F2B8B] transition-transform group-hover:translate-x-1' />
              </div>
            </div>
          ))}
        </div>

        {/* What is Domo Section */}
        <div className='text-center max-w-4xl mx-auto pt-24 mb-16 relative z-10'>
          <h2 className='text-[36px] md:text-[52px] font-bold text-[#1F1F1F] mb-6'>
            What is Domo?
          </h2>
          <p className='text-[#6B7280] text-[16px] leading-relaxed max-w-2xl mx-auto'>
            Domo is a unified cloud platform that brings together data, analytics, app development,
            security, and governance to deliver real time insights through interactive dashboards.
          </p>
        </div>

        {/* Bottom Pills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10'>
          {pills.map((text, index) => (
            <div
              key={index}
              className='rounded-[50px] px-4 py-4 flex items-center justify-center text-center h-full min-h-[100px]'
              style={{
                background:
                  'linear-gradient(white, white) padding-box, linear-gradient(90deg, #E67582 0%, #7785F4 100%) border-box',
                border: '1px solid transparent',
              }}
            >
              <p className='text-[#4B5563] text-[14px] font-medium leading-relaxed'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
