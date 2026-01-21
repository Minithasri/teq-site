'use client';

import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function CaseStudyTemplate({ caseStudy }) {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section with Title and Image */}
      <section className='relative w-full py-12 lg:py-24 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Back Button and Industry Tag */}
          <div className='flex items-center gap-4 mb-8'>
            <Link
              href='/Casestudy'
              className='inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-700 border border-gray-300 hover:border-purple-600 rounded-lg transition-all duration-200'
            >
              <FiArrowLeft size={18} />
              <span className='text-sm font-medium'>Back</span>
            </Link>

            {caseStudy.industry && (
              <span className='inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium'>
                {caseStudy.industry}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className='text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-8 leading-tight'>
            {caseStudy.title}
          </h1>

          {/* Hero Image */}
          <div
            className='relative w-full rounded-2xl overflow-hidden shadow-lg'
            style={{ maxWidth: '1100px', height: '500px', margin: '0 auto 2rem auto' }}
          >
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Problem Statement */}
          <div className='max-w-6xl mx-auto -mb-8 mt-2'>
            <p className='text-gray-700 text-base leading-relaxed text-justify'>
              {caseStudy.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Implemented */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-[#1a1a1a] mb-6'>Solution Implemented</h2>
          <p className='text-gray-700 text-base leading-relaxed text-justify'>
            {caseStudy.solutionImplemented}
          </p>
        </div>
      </section>

      {/* Business Impact */}
      <section className='py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-[#1a1a1a] mb-6'>Business Impact</h2>
          <ul className='space-y-4'>
            {caseStudy.businessImpact.map((item, index) => (
              <li key={index} className='flex items-start gap-3'>
                <div className='flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2' />
                <p className='text-gray-700 text-base leading-relaxed'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology Used */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-[#1a1a1a] mb-6'>Technology Used</h2>
          <div className='flex flex-wrap gap-3'>
            {caseStudy.technologyUsed.map((tech, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <LastSection />
    </main>
  );
}
