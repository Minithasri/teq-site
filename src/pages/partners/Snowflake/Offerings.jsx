'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const offeringsData = [
  {
    title: 'Data Warehousing',
    description:
      'Snowflake offers a fully managed, cloud-based data warehousing solution to store, process, & analyze large volumes of data in a scalable manner.',
  },
  {
    title: 'Data Sharing',
    description:
      'Snowflake enables secure & easy data sharing between different organizations without copying or moving the data.',
  },
  {
    title: 'Data Integration',
    description:
      'Snowflake integrates with various data integration tools & platforms, allowing users to load & extract data seamlessly.',
  },
  {
    title: 'Data Warehousing',
    description:
      'Snowflake offers a fully managed, cloud-based data warehousing solution to store, process, & analyze large volumes of data in a scalable manner.',
  },
  {
    title: 'Data Sharing',
    description:
      'Snowflake enables secure & easy data sharing between different organizations without copying or moving the data.',
  },
  {
    title: 'Data Integration',
    description:
      'Snowflake integrates with various data integration tools & platforms, allowing users to load & extract data seamlessly.',
  },
];

export default function Offerings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(offeringsData.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1 >= offeringsData.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 < 0 ? offeringsData.length - 3 : prev - 1));
  };

  // Logic for sliding items.
  // We want to show 3 items at a time.
  // Simple approach: Translate X based on index * (100% / 3).
  // Note: mobile responsive might need 1 item per page.

  return (
    <section className='w-full overflow-hidden'>
      <div
        className='py-20 px-4 md:px-8 lg:px-16'
        style={{
          background:
            'linear-gradient(135deg, #7030B14D 0%, #CAB9F64D 25%, #E6F2F64D 50%, #DDA16C4D 65%, #FFA5814D 80%, #E5AA664D 100%)',
          backgroundColor: '#F9EAE1',
        }}
      >
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8'>
            <div className='flex items-center gap-6 flex-1'>
              {/* Logo 1 */}
              <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0'>
                <Image
                  src='/images/partners/Snowflake/logo1.svg'
                  alt='Icon'
                  width={32}
                  height={32}
                />
              </div>

              <div className='h-[1px] flex-1 bg-gray-300 border-t border-dashed border-gray-400 mx-4 hidden md:block' />
            </div>

            <div className='flex items-center gap-4 shrink-0'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#7030B1] text-[#7030B1] font-medium hover:bg-[#7030B1] hover:text-white transition-colors duration-300'
              >
                Talk to Our Experts
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Title & Description */}
          <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-8'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900'>Snowflake Offerings</h2>
            <p className='text-gray-600 max-w-xl text-left md:text-right leading-relaxed'>
              Snowflake, a cloud-based data warehousing platform, provides a range of offerings to
              help organizations manage & analyze their data efficiently. We ensure your cloud
              operations run smoothly & reliably so you can focus on your business goals.
            </p>
          </div>

          {/* Carousel Logic */}

          {/* Component Clean Rewrite for Carousel Logic */}
          <Carousel items={offeringsData} />
        </div>
      </div>
    </section>
  );
}

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 items on desktop, 1 on mobile
  // We navigate 1 item at a time

  const next = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 3); // loop to end
    }
  };

  return (
    <div className='space-y-8'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Default to desktop view logic for now, responsive needs media queries or window listener
        >
          {/* Note: This simple transforms assumes desktop. For mobile support we usually need a resize listener or CSS grid. 
                        To make it robust without resize listener, we can use flex-basis.
                    */}
          {items.map((item, index) => (
            <div key={index} className='w-full md:w-1/3 flex-shrink-0 px-3'>
              <div className='bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start'>
                <div className='w-14 h-14 rounded-xl border border-orange-100 bg-orange-50/30 flex items-center justify-center mb-6'>
                  <Image
                    src='/images/partners/Snowflake/logo2.png'
                    alt='Icon'
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className='text-[#FF6A00] text-xl font-bold mb-4'>{item.title}</h3>
                <p className='text-gray-500 leading-relaxed text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-center gap-4 mt-8'>
        <button
          onClick={prev}
          className='w-12 h-12 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-gray-600 transition-colors shadow-sm'
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className='w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 transition-colors shadow-md'
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Mobile note: The transform logic `translateX(-${currentIndex * (100 / 3)}%)` works perfectly for 3 items. 
                For mobile (1 item), `w-full` in item class will make it 100% width, 
                but container width is 100%. If we want to show 1 item, we need to translate 100%. 
                This needs a customized hook or CSS media query based variable. 
                
                For now I'll hardcode style for larger screens (md) and rely on hidden overflow. 
                Actually, simpler way: define `--slide-width` variable in CSS.
            */}
      <style jsx>{`
        @media (max-width: 768px) {
          .flex {
            transform: translateX(-${currentIndex * 100}%) !important;
          }
          .flex-shrink-0 {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
