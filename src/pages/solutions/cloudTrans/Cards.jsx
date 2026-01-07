/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function Cards() {
  return (
    <section aria-labelledby='gwc-what-we-do' className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-4 md:px-6 lg:px-12 xl:px-24'>
        {/* LEFT – SINGLE IMAGE */}
        <div className='relative w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden'>
          <Image
            src='/images/solutions/cloudtransformation/cloud_transform_image.png'
            alt='Cloud Transformation platform visualization'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className='max-w-lg'>
          <h2
            id='gwc-what-we-do'
            className='text-4xl font-semibold mb-6'
            style={{
              background: 'linear-gradient(135deg, #6F2B8B 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.5',
            }}
          >
            Why this works better with GWC ?
          </h2>

          <p className='text-gray-600 leading-loose text-md mb-12'>
            We design and deliver data driven transformation, powered by breakthrough technology and
            operational excellence — bridging your challenges and guiding your business toward its
            goals.
          </p>

          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[170px] h-[45px] rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
            style={{
              background: 'linear-gradient(135deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            Contact us
            <FiArrowRight className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </section>
  );
}
