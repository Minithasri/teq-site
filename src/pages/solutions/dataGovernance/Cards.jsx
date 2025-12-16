/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

export default function Cards() {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-6'>
        {/* LEFT – SINGLE IMAGE */}
        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
          <Image
            src='/images/solutions/datagoverance/section_left_image.png'
            alt='Data Governance'
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className='max-w-lg'>
          <h2 className='text-4xl font-semibold text-purple-800 mb-6'>
            Why This Works Better with GWC
          </h2>

          <p className='text-gray-600 leading-relaxed text-md mb-8'>
            By collaborating with trusted data governance solution providers, our certified experts
            offer a full spectrum of data governance services, including data classification, access
            control, lineage tracking, quality assurance, and reporting.
          </p>

          <button className='inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white rounded-full shadow-md hover:bg-purple-700 transition'>
            Contact Us
            <FiArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
}
