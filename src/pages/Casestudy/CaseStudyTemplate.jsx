'use client';

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
      <section
        className='py-16 lg:py-20'
        style={{
          background: 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)',
        }}
      >
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-gray-600 text-lg mb-8'>
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-medium text-base hover:scale-105 transition-transform shadow-lg'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
