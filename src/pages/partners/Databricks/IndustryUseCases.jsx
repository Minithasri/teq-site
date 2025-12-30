'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Reuse Spark Icon
import img1 from '../../../../public/images/solutions/Icon.svg';

const industries = [
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Integrate EMR, genomics, imaging, claims data to build predictive models for disease progression, drug response, or patient flow.',
    image: '/images/partners/databricks/image_11.png',
  },
  {
    title: 'Financial Services (BFSI)',
    description:
      'Real-time fraud detection, risk scoring, integrating transactional, customer, and alternative data for insights.',
    image: '/images/partners/databricks/image_12.png',
  },
  {
    title: 'Retail & eCommerce',
    description:
      'Real-time recommendation engines, supply chain demand forecasting, personalized marketing campaigns.',
    image: '/images/partners/databricks/image_13.png',
  },
  {
    title: 'Manufacturing & Industrial',
    description:
      'IoT sensor data analysis for predictive maintenance, quality monitoring, and throughput optimization.',
    image: '/images/partners/databricks/image_14.png',
  },
  {
    title: 'Telecommunications & Media',
    description:
      'Streaming analytics for network performance, customer usage, and content consumption patterns.',
    image: '/images/partners/databricks/image_15.png',
  },
  {
    title: 'Energy, Utilities & Infrastructure',
    description:
      'Smart grid analytics, demand forecasting, and asset management to optimize operations.',
    image: '/images/partners/databricks/image_16.png',
  },
];

const IndustryUseCases = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // --- SCROLL TRIGGER LOGIC ---
  useEffect(() => {
    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    const ctx = gsap.context(() => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top -10%',
        end: `+=${industries.length * 40}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: self => {
          const progress = self.progress;
          const newIdx = Math.min(Math.floor(progress * industries.length), industries.length - 1);
          setActiveStep(newIdx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className='w-full bg-white py-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col'>
        {/* --- Header Section --- */}
        <div className='mb-12'>
          <header className='flex items-center mb-16 gap-4'>
            <div className='w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
              <Image src={img1} alt='' aria-hidden width={24} height={24} />
            </div>
            <div
              aria-hidden
              className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x'
            />
            <Link
              href='/contact'
              className='w-[250px] h-[50px] rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors shrink-0 flex items-center justify-center gap-2 text-sm'
            >
              Talk to Our Experts
              <FiArrowRight className='w-4 h-4' />
            </Link>
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
            <h2 className='text-3xl md:text-[40px] font-bold text-gray-800 leading-tight'>
              Industry{' '}
              <span
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Use Cases
              </span>
            </h2>
            <div className='flex justify-start lg:justify-end'>
              <p className='text-gray-600 max-w-lg leading-relaxed lg:text-right'>
                Here's how GWC ensures success with tailored solutions across industries.
              </p>
            </div>
          </div>
        </div>

        {/* --- Content Area --- */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 flex-1'>
          {/* Left: Interactive List */}
          <div className='w-full lg:w-1/3 flex flex-col justify-center gap-2'>
            {industries.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-300 py-4 border-l-[4px] pl-6 ${
                    isActive
                      ? 'border-[#7030B1] bg-gray-50/50 rounded-r-xl'
                      : 'border-transparent hover:bg-gray-50 rounded-r-xl'
                  }`}
                >
                  <h3
                    className={`text-lg font-bold transition-colors duration-300 ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100 mt-2'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className='overflow-hidden'>
                      <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image Display */}
          <div className='w-full lg:w-2/3 relative min-h-[400px] lg:min-h-auto flex justify-end'>
            <div className='w-full max-w-[550px] h-[390px] bg-[#F3E5F5] rounded-[24px] overflow-hidden flex items-center justify-center p-2 border border-[#E1BEE7] shadow-sm'>
              <div className='relative w-full h-full rounded-[20px] overflow-hidden'>
                {industries.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-white ${
                      activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image src={item.image} alt={item.title} fill className='object-cover' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;
