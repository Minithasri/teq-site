'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
// Reusing Spark icon for header
import img1 from '../../../../public/images/solutions/Icon.svg';

const features = [
  {
    title: 'Drag & Drop Interface',
    description:
      "Design and deploy integrations effortlessly with Boomi's intuitive interface, no extensive coding required.",
    image: '/images/partners/boomi/section_img_1.webp',
  },
  {
    title: 'Pre built Connectors',
    description:
      'Access a vast library of pre built connectors, accelerating integration and reducing time to market.',
    image: '/images/partners/boomi/section_img_2.webp',
  },
  {
    title: 'Real time Monitoring',
    description:
      'Monitor your integrations in real-time, ensuring optimal performance and reliability.',
    image: '/images/partners/boomi/section_img_3.webp',
  },
];

const FeaturesBoomi = () => {
  return (
    <section className='w-full bg-white relative overflow-hidden py-20'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full flex items-center justify-start z-0'>
        <div className='relative w-[800px] h-[800px] -translate-x-1/4'>
          <Image
            src='/images/HomePage/circle_big.webp'
            alt='Background Decoration'
            fill
            className='object-contain opacity-100'
            priority
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header (Spark + Dashed Line + CTA) */}
        <header className='hidden md:flex md:flex-row items-center justify-between w-full gap-4 md:gap-4 lg:gap-4 mb-16'>
          {/* Left Icon */}
          <div className='w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center shrink-0'>
            <Image src={img1} alt='' aria-hidden width={30} height={30} />
          </div>

          {/* Connector */}
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
          />

          {/* CTA */}
          <Link
            href='/contact'
            className='px-8 py-3 rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors shrink-0 flex items-center gap-2 bg-white/80 backdrop-blur-sm'
          >
            Talk to our experts
            <FiArrowRight className='w-4 h-4' />
          </Link>
        </header>

        {/* Title & Description */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20'>
          <div>
            <h2 className='text-[32px] md:text-[40px] text-[#1F1F1F] font-medium'>
              <span className='text-[#1F1F1F]'>Features of</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Boomi with GWC
              </span>
            </h2>
          </div>
          <div className='flex justify-start lg:justify-end'>
            <p className='text-gray-600 max-w-lg leading-relaxed text-left lg:text-left text-sm md:text-[15px]'>
              GWC leverages Boomi's cloud native platform to deliver fast, flexible, and scalable
              integrations. With GWC best practice implementation and Boomi enterprise grade
              security, your data stays protected and compliant.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group relative rounded-2xl p-[1px] w-full max-w-[374px]'
              style={{
                background: 'linear-gradient(to right, #FFF7EB, #FAE0FA)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.02)',
              }}
            >
              <article className='flex flex-col bg-white rounded-2xl h-full w-full overflow-hidden'>
                {/* Image Container */}
                <div className='relative w-full p-6'>
                  <div className='relative w-full h-[296px] rounded-xl overflow-hidden'>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='p-6 pt-2 flex-1 flex flex-col'>
                  <h3 className='text-lg font-semibold text-[#404040] mb-3'>{feature.title}</h3>
                  <p className='text-[#404040] text-[14px] leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBoomi;
