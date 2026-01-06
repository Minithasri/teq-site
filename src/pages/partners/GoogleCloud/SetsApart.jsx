'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
// Reusing the Spark icon
import img1 from '../../../../public/images/solutions/Icon.svg';

const cards = [
  {
    title: 'Symphonic Team',
    description:
      'Our team of Certified Architects and Data Engineers ensures that your GCP Managed services requirements are handled effectively.',
    image: '/images/partners/google-cloud/google1.png',
  },
  {
    title: 'Proactive Infrastructure Management',
    description:
      'Leverage our expertise to ensure your GCP infrastructure is optimized for performance, security, and cost efficiency.',
    image: '/images/partners/google-cloud/google2.png',
  },
  {
    title: 'IoT Integration with Google Cloud',
    description:
      'Transform machine data into actionable insights with GCP integration into IoT hardware designed by us.',
    image: '/images/partners/google-cloud/google3.png',
  },
  {
    title: 'Cost Optimization',
    description:
      'We help you maximize cost savings by identifying and eliminating inefficiencies in your GCP usage, ensuring you only pay for what you need.',
    image: '/images/partners/google-cloud/google4.png',
  },
  {
    title: 'Security and Compliance',
    description:
      'Trust in our expertise in using GCP’s security measures and compliance practices, keeping your data safe and meeting industry standards.',
    image: '/images/partners/google-cloud/google5.png',
  },
  {
    title: 'Real time Monitoring',
    description:
      'Our GCP-managed services facilitate seamless collaboration, allowing users from different locations to access and edit projects concurrently.',
    image: '/images/partners/google-cloud/google6.png',
  },
];

const SetsApart = () => {
  return (
    <section className='w-full bg-white relative overflow-hidden py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header (Spark + Dashed Line + CTA) */}
        <header className='flex items-center mb-16 gap-4'>
          {/* Left Icon */}
          <div className='w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
            <Image src={img1} alt='' aria-hidden width={24} height={24} />
          </div>

          {/* Connector */}
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x'
          />

          {/* CTA */}
          <Link
            href='/contact'
            className='px-6 py-2.5 rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors shrink-0 flex items-center gap-2 text-sm'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4' />
          </Link>
        </header>

        {/* Title & Description */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20'>
          <div>
            <h2 className='text-3xl md:text-4xl font-semibold leading-tight text-gray-900'>
              What sets us apart?
            </h2>
          </div>
          <div className='flex justify-start lg:justify-end'>
            <p className='text-gray-600 max-w-lg leading-relaxed text-left lg:text-left text-sm md:text-base'>
              GWC&apos;s Managed Services team navigates the GCP landscape for you, delivering peak
              performance and unlocking sustainable growth through a trusted partnership.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='group relative rounded-2xl p-[1px] w-full max-w-[374px] h-[520px]'
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
                  <h3 className='text-lg font-bold text-gray-900 mb-3'>{card.title}</h3>
                  <p className='text-gray-600 text-[14px] leading-relaxed'>{card.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetsApart;
