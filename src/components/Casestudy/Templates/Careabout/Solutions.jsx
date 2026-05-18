'use client';

import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

const implementationPoints = [
  'Designed and developed scalable ETL pipelines using DBT for efficient data transformation',
  'Built a centralized meta package to manage dependencies and standardize transformations across projects',
  'Migrated the entire data platform from Azure to AWS and Snowflake for improved performance',
  'Integrated Amazon S3 for scalable storage and Dagster for pipeline orchestration',
  'Developed robust data pipelines using Python for complex data processing requirements',
  'Established a Single Source of Truth (SSOT) through standardized data models',
  'Integrated processed data with Domo for real-time reporting and analytics dashboards',
  'Improved modularity, scalability, and maintainability of the overall architecture',
];

export default function Solutions() {
  return (
    <section className='w-full' style={{ backgroundColor: '#F6F7F9' }}>
      <div className='relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-10 md:py-14'>
        {/* care3 image — right side, absolute */}
        <div className='hidden lg:block absolute right-0 bottom-0 w-[240px] xl:w-[280px] z-10'>
          <div className='relative w-full h-[300px] xl:h-[340px] rounded-tl-2xl overflow-hidden'>
            <Image
              src='/images/Templates/careabout/care3.png'
              alt='Healthcare data specialist'
              fill
              className='object-cover object-top'
              priority
            />
          </div>
        </div>

        {/* Text content — padded right to clear the image */}
        <div className=''>
          {/* Our Solution */}
          <h2 className='text-2xl md:text-3xl font-bold mb-4' style={{ color: '#4250EE' }}>
            Our Solution
          </h2>
          <p
            className='text-sm sm:text-[15px] md:text-[17px] leading-relaxed mb-8'
            style={{ color: '#6A7181' }}
          >
            We delivered a comprehensive cloud-native data platform, combining best-in-class tools
            and modern engineering practices to transform the client&apos;s data infrastructure from
            the ground up.
          </p>

          {/* Key Implementation Details */}
          <h3 className='text-lg md:text-2xl font-bold mb-5' style={{ color: '#4250EE' }}>
            Key Implementation Details
          </h3>

          <ul className='space-y-3'>
            {implementationPoints.map((point, i) => (
              <li key={i} className='flex items-start gap-3'>
                <FiCheckCircle
                  className='flex-shrink-0 mt-1'
                  style={{ color: '#1AA2E6' }}
                  size={20}
                />
                <span
                  className='text-sm md:text-[17px] leading-snug'
                  style={{ color: 'rgba(21, 28, 40, 0.80)' }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile image */}
        <div className='lg:hidden relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-8'>
          <Image
            src='/images/Templates/careabout/care3.png'
            alt='Healthcare data specialist'
            fill
            className='object-cover object-top'
          />
        </div>
      </div>
    </section>
  );
}
