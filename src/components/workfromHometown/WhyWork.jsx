'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
// Reusing the Spark icon
import img1 from '../../../public/images/solutions/Icon.svg';

const cards = [
  {
    title: 'Work-Life Harmony',
    description:
      'Embrace a balanced lifestyle with Work from Hometown, looking forward to lengthy commutes and integrate your professional and personal life, prioritizing what matters most to you.',
    image: '/images/WFH/wfhimg1.webp',
  },
  {
    title: 'Cost Savings',
    description:
      'Enjoy significant cost savings as urban office expenses become a thing of the past. Contribute to your local economy while enjoying a more affordable and comfortable work environment.',
    image: '/images/WFH/wfhimg2.webp',
  },
  {
    title: 'Local Talent Empowerment',
    description:
      'Our initiative creates job opportunities, fueling economic growth in regions often overlooked in the corporate landscape. This way, we empower local talent in tier 2 and 3 cities.',
    image: '/images/WFH/wfhimg3.webp',
  },
  {
    title: 'Innovation & Collaboration',
    description:
      'Unleash the power of diverse perspectives and innovative ideas from various locations. Our robust digital infrastructure ensures seamless communication, making teamwork effortless.',
    image: '/images/WFH/wfhimg4.webp',
  },
  {
    title: 'Community Connection',
    description:
      'Strengthen ties within your local community while contributing to a global mission. Participate in local events, dinner and inclusive remote work. ',
    image: '/images/WFH/wfhimg5.webp',
  },
  {
    title: 'Increased Job Satisfaction',
    description:
      'Working in a familiar environment and being close to loved ones, your happiness can lead to increased job satisfaction and a sense of purpose.',
    image: '/images/WFH/wfhimg6.png',
  },
];

const WhyWork = () => {
  return (
    <section className='w-full bg-white relative overflow-hidden py-20'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full flex items-center justify-start z-0'>
        <div className='relative w-[1200px] h-[1200px] -translate-x-1/4 -mt-40'>
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
            className='px-8 py-3 rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors shrink-0 flex items-center gap-2'
          >
            Explore Opportunity
            <FiArrowRight className='w-4 h-4' />
          </Link>
        </header>

        {/* Title & Description */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20'>
          <div>
            <h2 className='text-3xl md:text-4xl font-medium leading-tight text-[#404040]'>
              Why Work from Hometown ?
            </h2>
          </div>
          <div className='flex justify-start lg:justify-end'>
            <p className='text-[#404040] max-w-lg leading-relaxed text-left lg:text-left text-sm md:text-base'>
              Work from Hometown lets you stay close to family while enjoying flexible work, lower
              living costs, and a better work life balance.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='group relative rounded-2xl p-[1px] w-full h-[520px]'
              style={{
                background: 'linear-gradient(to right, #D9B8FF, #F5D1FA)',
              }}
            >
              <article className='flex flex-col bg-white rounded-[15px] h-full w-full overflow-hidden'>
                {/* Image Container */}
                <div className='relative w-full p-[21px]'>
                  <div className='relative w-full h-[300px] rounded-xl overflow-hidden'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='px-6 pb-6 pt-0 flex-1 flex flex-col'>
                  <h3 className='text-lg font-semibold text-[#404040] mb-3'>{card.title}</h3>
                  <p className='text-[#404040] text-[14px] leading-relaxed'>{card.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
