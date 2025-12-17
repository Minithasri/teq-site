/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const cardsData = [
  {
    id: 1,
    title: 'Combine',
    items: ['Traditional data strategy', 'Modern Data Strategies'],
    position: 'top-0 left-0',
  },
  {
    id: 2,
    title: 'Data Strategy for Better ROI',
    icon: '📊',
    position: 'top-0 right-0',
  },
  {
    id: 3,
    title: "Follow Industry Best Practices Along with GWC's Value Addition",
    position: 'bottom-0 left-0',
  },
  {
    id: 4,
    title: 'Data Strategies for AI Implementation',
    position: 'bottom-0 right-0',
  },
];

export default function Cards() {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-4 md:px-6 lg:px-12 xl:px-24'>
        {/* LEFT – IMAGE WITH OVERLAYS */}
        <div className='space-y-6'>
          {/* Title and Subtitle */}
          <div className='space-y-2'>
            <h3 className='text-3xl font-semibold text-gray-800'>
              Comprehensive Data Strategy Solutions
            </h3>
            <p className='text-gray-600 text-base'>
              Combining traditional and modern approaches for optimal results
            </p>
          </div>

          {/* Image with Text Overlays */}
          <div className='relative w-full h-[400px]'>
            {/* Background Image */}
            <Image
              src='/images/solutions/4_grids.png'
              alt='Data Strategy Solutions'
              fill
              className='object-contain'
              priority
            />

            {/* Text Overlays in Grid */}
            <div className='absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-4'>
              {/* Card 1 - Top Left (Purple) */}
              <div className='flex flex-col justify-center items-start p-6 text-white'>
                <h4 className='text-xl font-semibold mb-4'>Combine</h4>
                <div className='space-y-2 w-full'>
                  <div className='bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm'>
                    Traditional data strategy
                  </div>
                  <div className='bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm flex items-center gap-2'>
                    <span>🔗</span>
                    Modern Data Strategies
                  </div>
                </div>
              </div>

              {/* Card 2 - Top Right (Teal) */}
              <div className='flex flex-col justify-center items-center p-6 text-white text-center'>
                <div className='text-4xl mb-3'>📊</div>
                <h4 className='text-lg font-semibold leading-tight'>
                  Data Strategy for Better ROI
                </h4>
              </div>

              {/* Card 3 - Bottom Left (Orange) */}
              <div className='flex flex-col justify-center items-center p-6 text-white text-center'>
                <h4 className='text-base font-semibold leading-tight'>
                  Follow Industry Best Practices Along with GWC's Value Addition
                </h4>
              </div>

              {/* Card 4 - Bottom Right (Blue) */}
              <div className='flex flex-col justify-center items-center p-6 text-white text-center'>
                <h4 className='text-lg font-semibold leading-tight'>
                  Data Strategies for AI Implementation
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className='max-w-lg'>
          <h2 className='text-4xl font-semibold text-purple-800 mb-6'>Why Choose GWC?</h2>

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
