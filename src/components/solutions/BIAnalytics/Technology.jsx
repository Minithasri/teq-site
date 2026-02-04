'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import img1 from '../../../../public/images/solutions/Icon.svg';

const cards = [
  {
    title: 'Comprehensive Data Visualization',
    description:
      'Navigate your data landscape efficiently with our advanced data visualization tools. Transforming intricate datasets into intuitive visualizations, we offer clarity and actionable insights into your business metrics.',
    footer: 'Clarity through visual insights',
    icon: '/images/solutions/dataStrategyEngineer/image1.svg',
  },
  {
    title: 'Advanced Analytics Integration',
    description:
      'Elevate your decision-making process with our seamlessly integrated advanced analytics solutions. Leverage AI to uncover predictive insights, enabling proactive strategies for business growth.',
    footer: 'AI-powered decision making',
    icon: '/images/solutions/dataStrategyEngineer/image2.svg',
  },
  {
    title: 'Real-time Reporting & Dashboards',
    description:
      'Stay ahead of the curve with real-time reporting and interactive dashboards. Monitor key performance indicators (KPIs) and business metrics, enabling agile responses to changing market conditions.',
    footer: 'Instant insights, agile actions',
    icon: '/images/solutions/datagoverance/logo3.svg',
  },
  {
    title: 'Data-driven Strategy Development',
    description:
      'Craft robust business strategies with our data-driven approach. We assist in formulating actionable insights derived from your data, ensuring that your organization is always well-informed and strategically aligned.',
    footer: 'Strategic alignment through data',
    icon: '/images/solutions/datagoverance/logo4.svg',
  },
];

const Technology = () => {
  return (
    <section aria-labelledby='bi-analytics-expertise' className='relative overflow-hidden w-full'>
      <div
        className='bg-[linear-gradient(135deg,_#7030B14D_0%,_#CAB9F64D_25%,_#E6F2F64D_50%,_#DDA16C4D_65%,_FFA5814D_80%,_#E5AA664D_100%)]'
        style={{ backgroundColor: '#F9EAE1', clipPath: 'none' }}
      >
        <div className='w-full px-4 md:px-6 lg:px-12 xl:px-36 pt-20 pb-16'>
          {/* Header */}
          <header className='hidden md:flex md:flex-row items-center justify-between w-full gap-4 md:gap-4 lg:gap-4 mb-16'>
            {/* Left Icon (decorative) */}
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
              className='px-8 py-3 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
              style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
            >
              Talk to our experts
              <FiArrowRight className='w-4 h-4' aria-hidden />
            </Link>
          </header>

          {/* Title + Subtitle */}
          <div className='flex flex-col mb-12 md:flex-row justify-between items-start md:items-center gap-6'>
            <h2
              id='bi-analytics-expertise'
              className='text-3xl md:text-4xl font-medium text-gray-800'
            >
              BI & Analytics expertise
            </h2>

            <p className='text-[16px] text-gray-500 mr-2 text-right'>
              Everything you need to build, deploy, and scale AI agents
            </p>
          </div>

          {/* Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cards.map((card, index) => (
              <article
                key={index}
                className='relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-between min-h-[280px] bg-white'
              >
                {/* Card Body */}
                <div className='p-10 flex flex-col items-center text-center'>
                  <div
                    className='w-14 h-14 rounded-xl flex items-center justify-center mb-4'
                    style={{
                      boxShadow:
                        '0 8px 10px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                      border: '1px solid #E5E7EB',
                    }}
                  >
                    <Image src={card.icon} alt='' aria-hidden width={24} height={24} />
                  </div>

                  <h3 className='text-orange-500 font-medium mb-4'>{card.title}</h3>

                  <div
                    aria-hidden
                    className='w-full h-[1px] mb-4 bg-[linear-gradient(to_right,#E5E7EB_35%,rgba(0,0,0,0)_0%)] bg-[length:14px_2px] bg-repeat-x rounded-full'
                  />

                  <p className='text-gray-600 text-sm leading-relaxed max-w-2xl'>
                    {card.description}
                  </p>
                </div>

                {/* Footer */}
                <footer className='relative bg-gradient-to-r from-[#FFE9D6] to-[#F7E6FF] text-gray-700 text-[14px] font-medium px-6 py-4 flex items-center justify-center gap-2 overflow-hidden'>
                  {/* Glitter effect */}
                  <div
                    className='absolute inset-0 w-[200px] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent'
                    style={{
                      animation: 'swipe 3s ease-in-out infinite',
                      pointerEvents: 'none',
                    }}
                  />
                  <Image
                    src='/images/Sparks.svg'
                    alt=''
                    aria-hidden
                    width={16}
                    height={16}
                    className='relative z-10'
                  />
                  <span className='relative z-10'>{card.footer}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style jsx>{`
        @keyframes swipe {
          0% {
            transform: translateX(-100%) rotate(-30deg);
          }
          100% {
            transform: translateX(200%) rotate(-30deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Technology;
