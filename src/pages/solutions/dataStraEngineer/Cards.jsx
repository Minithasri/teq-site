/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Cards() {
  return (
    <section aria-labelledby='gwc-why-it-works' className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-4 md:px-6 lg:px-12 xl:px-24'>
        {/* LEFT – SINGLE IMAGE */}
        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
          <Image
            src='/images/solutions/dataStrategyEngineer/data_strat_image.png'
            alt='Data strategy and engineering collaboration and workflow visualization'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className='max-w-lg'>
          <h2
            id='gwc-why-it-works'
            className='text-4xl font-semibold mb-8'
            style={{
              background: `linear-gradient(135deg, #6F2B8B 0%, #B56DD3 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.5',
            }}
          >
            Why this works better with GWC
          </h2>

          <p className='text-gray-600 leading-loose text-md mb-12'>
            By collaborating with trusted data governance solution providers, our certified experts
            offer a full spectrum of data governance services, including data classification, access
            control, lineage tracking, quality assurance, and reporting.
          </p>

          {/* CTA */}
          <Link
            href='/contact'
            className='inline-flex items-center gap-3 px-7 py-3 text-white rounded-full shadow-md hover:opacity-90 transition'
            style={{ background: 'linear-gradient(135deg, #6F2B8B 0%, #B56DD3 100%)' }}
          >
            Contact Us
            <FiArrowRight className='w-5 h-5' aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
