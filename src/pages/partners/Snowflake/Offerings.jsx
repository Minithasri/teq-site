'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const offeringsData = [
  {
    title: 'Data Warehousing',
    description:
      'Snowflake offers a fully managed, cloud-based data warehousing solution to store, process, & analyze large volumes of data in a scalable manner.',
    icon: '/images/partners/snowflake/data_warehouse.svg',
  },
  {
    title: 'Data Sharing',
    description:
      'Snowflake enables secure & easy data sharing between different organizations without copying or moving the data.',
    icon: '/images/partners/snowflake/data_sharing.svg',
  },
  {
    title: 'Data Integration',
    description:
      'Snowflake integrates with various data integration tools & platforms, allowing users to load & extract data seamlessly.',
    icon: '/images/partners/snowflake/Data_Integration.svg',
  },
  {
    title: 'Snowpark',
    description:
      'Snowpark is a feature that allows users to run custom code directly within Snowflake using familiar programming languages like Java & Scala.',
    icon: '/images/partners/snowflake/Snowpark.svg',
  },
  {
    title: 'Secure Data Collaboration',
    description:
      'Snowflake emphasizes security, providing features such as encryption, role-based access control, & compliance with various data protection regulations.',
    icon: '/images/partners/snowflake/Secure_data_collaboration.svg',
  },
  {
    title: 'Multi-Cloud Architecture',
    description:
      'Snowflake supports a multi-cluster, multi-cloud architecture, giving organizations the flexibility to choose cloud providers & scale compute resources based on their needs.',
    icon: '/images/partners/snowflake/Multi_cloud_architecture.svg',
  },
  {
    title: 'Query Performance',
    description:
      'Snowflake is designed for high-performance query processing. It optimizes the speed of data retrieval & analysis, allowing users to derive insights rapidly.',
    icon: '/images/partners/snowflake/Quary_performance.svg',
  },
  {
    title: 'Global Availability',
    description:
      'Snowflake enables users to deploy data warehouses in different regions & across multiple cloud providers. This enhances performance, redundancy, & data accessibility.',
    icon: '/images/partners/snowflake/global.svg',
  },
  {
    title: 'Snowflake Marketplace',
    description:
      'The Snowflake Marketplace is a platform where users can discover & access a variety of data sets, connectors, & applications to enhance their Snowflake environment.',
    icon: '/images/partners/snowflake/Snowflake_market.svg',
  },
  {
    title: 'Data Governance & Management',
    description:
      'Snowflake provides features for effective data governance, including metadata management, data lineage, & auditing capabilities.',
    icon: '/images/partners/snowflake/governance.svg',
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
          <header className='flex flex-col md:flex-row items-center mb-16 gap-6 md:gap-2'>
            {/* Left Icon (decorative) */}
            <div className='w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center shrink-0'>
              <Image src='/images/Spark.svg' alt='' aria-hidden width={24} height={24} />
            </div>

            {/* Connector */}
            <div
              aria-hidden
              className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
            />

            {/* CTA */}
            <Link
              href='/contact'
              className='px-8 py-2 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
              style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
            >
              Talk to Our Experts
              <FiArrowRight className='w-4 h-4' aria-hidden />
            </Link>
          </header>

          {/* Title & Description */}
          <div className='flex flex-col md:flex-row justify-between items-start mb-12 gap-8'>
            <h2 className='text-[40px] font-bold'>Snowflake Offerings</h2>
            <p
              className='text-[15px] max-w-xl text-left leading-relaxed'
              style={{ color: '#70707B' }}
            >
              Snowflake, a cloud based data warehousing platform, provides a range of offerings to
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
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive logic to show 1 item on mobile, 3 on desktop
  // Using useEffect to handle window resize


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    if (currentIndex < items.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - itemsPerPage); // loop to end
    }
  };

  return (
    <div className='space-y-8'>
      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className='flex-shrink-0 px-3 transition-all duration-300'
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div className='bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100' style={{ width: '400px', height: '320px' }}>
                <div className='bg-gray-50 rounded-xl p-6 h-full flex flex-col items-start'>
                  <div className='w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 shadow-md'>
                    <Image
                      src={item.icon}
                      alt='Icon'
                      width={28}
                      height={28}
                    />
                  </div>
                  <h3 className='text-xl font-bold mb-4' style={{ color: '#F97316' }}>
                    {item.title}
                  </h3>
                  <p className='text-[15px] leading-relaxed' style={{ color: '#70707B' }}>
                    {item.description}
                  </p>
                </div>
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
    </div>
  );
}
