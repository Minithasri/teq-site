'use client';

import { domoData } from '@/data/partners/domo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
// Reusing Spark icon for consisteny
import img1 from '../../../../public/images/solutions/Icon.svg';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Data for this section (adapting from domoData to match BoomiPower structure)
// We will map 'domoData.feature' to this structure
const steps = domoData.feature.map((feat, index) => ({
  title: feat.title,
  description: feat.description,
  // Using different images for each step as placeholders or specific images if available
  // In a real scenario, you'd want specific images for each feature
  image:
    [
      '/images/domo/PrincipalDomo/Principal3.webp', // Domo App Studio
      '/images/domo/PrincipalDomo/Principal4.webp', // Domo Workflows
      '/images/domo/PrincipalDomo/Principal1.webp', // Domo AI
      '/images/domo/PrincipalDomo/Principal2.webp', // Cloud Amplifier
    ][index] ||
    feat.image ||
    '/images/domo/domoredomo1.gif',
}));

const DoMoreWithDomo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    // Kill previous trigger if exists (safety for re-renders)
    if (scrollTriggerRef.current) scrollTriggerRef.current.kill();

    let mm = gsap.matchMedia();

    // Add matchMedia for Desktop only
    mm.add('(min-width: 1024px)', () => {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top -8%', // Starts when top of section is 10% from top of viewport
        end: `+=${steps.length * 50}%`, // Scroll distance: 50% viewport height per item
        pin: true, // Pin the container
        scrub: 0.5, // Smooth scrubbing
        onUpdate: self => {
          // Calculate active index based on scroll progress
          const progress = self.progress;
          const newIdx = Math.min(Math.floor(progress * steps.length), steps.length - 1);
          setActiveStep(newIdx);
        },
      });
    });

    return () => mm.revert(); // Cleanup GSAP MatchMedia context (kills triggers)
  }, []);

  return (
    <section ref={sectionRef} className='w-full bg-white py-20 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col'>
        {/* --- Header Section --- */}
        <div className='mb-12'>
          <header className='hidden md:flex md:flex-row items-center justify-between w-full gap-4 md:gap-4 lg:gap-4 mb-8'>
            <div className='w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center shrink-0'>
              <Image src={img1} alt='' aria-hidden width={30} height={30} />
            </div>
            <div
              aria-hidden
              className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
            />
            <Link
              href='/contact'
              className='px-8 py-3 rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors shrink-0 flex items-center gap-2'
            >
              Talk to our experts
              <FiArrowRight className='w-4 h-4' />
            </Link>
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
            <h2 className='text-3xl md:text-4xl text-[#1F1F1F] font-medium lg:leading-[52px]'>
              Do more with
              <br />
              Domo
            </h2>
            <div className='flex justify-start lg:justify-end'>
              <p className='text-[#1F1F1F] max-w-lg leading-relaxed lg:text-left'>
                From intuitive app creation to automated workflows, Domo empowers you to unlock the
                full potential of your data and drive intelligent action across your business.
              </p>
            </div>
          </div>
        </div>

        {/* --- Desktop Content Area (Interactive) --- */}
        <div className='hidden lg:flex flex-col lg:flex-row gap-8 lg:gap-20 flex-1'>
          {/* Left: Interactive List */}
          <div className='w-full lg:w-1/3 flex flex-col justify-center'>
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)} // Allow click override
                  className={`cursor-pointer transition-all duration-300 py-6 border-l-[4px] pl-8 ${
                    isActive
                      ? 'border-[#7030B1]' // Active Purple Border
                      : 'border-[#EEE4F8]' // Inactive Requested Color
                  }`}
                >
                  <h3
                    className={`text-xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-[#4A2050]' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Expandable Description */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? 'grid-rows-[1fr] opacity-100 mt-4'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className='overflow-hidden'>
                      <p className='text-gray-600 text-sm leading-relaxed'>{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Image Display */}
          <div className='w-full lg:w-2/3 relative min-h-[400px] lg:min-h-auto flex justify-end'>
            <div className='w-full max-w-[530px] h-[350px] bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] rounded-[16px] overflow-hidden flex items-center justify-center p-8 shadow-inner'>
              {/* Image Transition Wrapper */}
              <div className='relative w-full h-full max-w-[550px] max-h-[450px]'>
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                      activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={500}
                      height={400}
                      className='object-contain w-auto h-auto max-w-full max-h-full drop-shadow-xl'
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Mobile Content Area (Stacked) --- */}
        <div className='flex lg:hidden flex-col gap-8'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='bg-white rounded-[24px] p-6 shadow-md border border-gray-100'
            >
              {/* Image */}
              <div className='w-full h-[240px] bg-gradient-to-br from-[#F3E5F5] to-[#E1BEE7] rounded-xl mb-6 flex items-center justify-center p-4 overflow-hidden'>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={300}
                  height={200}
                  className='object-contain max-h-full'
                />
              </div>

              {/* Text */}
              <div>
                <h3 className='text-xl font-bold text-[#4A2050] mb-3'>{step.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoMoreWithDomo;
