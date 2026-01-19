'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    id: 'app-studio',
    title: 'Domo App Studio',
    tagline:
      "Unlock the power of data immersion with Domo's App Studio - now available for all customers!",
    points: [
      'Empower users to build immersive data experiences effortlessly.',
      'Explore the revamped Forms Edit Modal for intuitive form-building.',
      'Now available for all customers, democratizing app creation without technical skills.',
      'Seamlessly embed App Studio content with Domo Everywhere Embed for versatile usage.',
    ],
    video: '/images/partners/domo/video1.gif',
    link: '#',
  },
  {
    id: 'workflows',
    title: 'Domo Workflows',
    tagline: 'Simplify and streamline data-driven processes effortlessly',
    points: [
      'Reduce time spent on complex tasks with low-code logic-building.',
      'Orchestrate steps and actions across enterprise SaaS platforms outside Domo.',
      'Access queue and task capabilities on-the-go for enhanced productivity.',
      "Simplify task management with Domo's Task center app, available on the Apple and Google Play stores.",
    ],
    video: '/images/partners/domo/video2.gif',
    link: '#',
  },
  {
    id: 'domo-ai',
    title: 'Domo.AI',
    tagline: "Unleash the potential of AI with Domo's Advanced Solutions",
    points: [
      "Seamlessly integrate AI and ML models into your business processes with Domo's user-friendly platform.",
      'Manage your own models serverlessly, integrate external models, and continuously refine and optimize performance for peak efficiency.',
      "Empower decision-making with Domo's AI chat feature, offering personalized insights and guiding conversations within your workflow.",
    ],
    video: '/images/partners/domo/video3.gif',
    link: '#',
  },
  {
    id: 'cloud-amplifier',
    title: 'Cloud Amplifier',
    tagline:
      'Seamless Integration & Effortless Transformation to Unlock Data Potential with Cloud Amplifier',
    points: [
      "Domo Cloud Amplifier integrates effortlessly with existing cloud and data infrastructure, enabling Domo's data experience platform usage without data movements.",
      'Customers can now customize how often Domo checks for updated data, ensuring data freshness and reliability.',
      'Streamline data connections, empowering data architects to optimize each data source while ensuring intelligent, governed, and speedy transformations directly where data resides.',
    ],
    video: '/images/partners/domo/video4.gif',
    link: '#',
  },
];

export default function AnalyticsBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Only run on client side
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top-=230', // Pins when section hits top
        end: `+=${contentData.length * 70}%`, // Increased distance to make scrolling slower and smoother
        pin: true,
        scrub: 0.5,
        onUpdate: self => {
          const progress = self.progress;
          // Calculate index based on progress
          const newIdx = Math.min(
            Math.floor(progress * contentData.length),
            contentData.length - 1
          );
          setActiveIndex(newIdx);
        },
      });

      return () => {
        st.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className='w-full py-20 bg-white relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Header Row */}
        <div className='flex items-center justify-between gap-4 mb-16 w-full'>
          {/* Sparkle Icon */}
          <div className='w-12 h-12 bg-white border border-purple-100 rounded-xl shadow-sm flex items-center justify-center p-2 shrink-0'>
            <Image
              src='/images/partners/domo/sparkss.svg'
              alt='Sparkle'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </div>

          {/* Dotted Line - Stretches between icon and button */}
          <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,#A0A0A0_50%,rgba(0,0,0,0)_0%)] bg-[length:10px_2px] bg-repeat-x opacity-30'></div>

          {/* CTA Button */}
          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#9156AA] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors duration-300 shrink-0'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Title and Subtitle Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start'>
          <h2 className='text-[32px] md:text-[40px] font-bold text-[#404040]'>Do more with Domo</h2>
          <p className='text-gray-500 text-[16px] leading-relaxed md:text-right max-w-xl md:ml-auto'>
            Empower your business to build automate analyze and scale faster using a unified data
            and AI platform
          </p>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
          {/* Left Interactive List */}
          <div className='w-full lg:w-5/12 flex flex-col gap-4'>
            {contentData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  className={`pl-6 border-l-4 transition-all duration-300 cursor-pointer py-4 ${
                    isActive ? 'border-[#8B3DA8]' : 'border-gray-200 hover:border-purple-200'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${
                      isActive ? 'text-[#404040]' : 'text-gray-400'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className='text-[#6B7280] font-medium mb-4 text-md leading-relaxed'>
                      {item.tagline}
                    </p>
                    <ul className='space-y-2 mb-4'>
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className='text-gray-500 text-sm leading-relaxed flex items-start gap-2'
                        >
                          <span className='mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0'></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button className='text-[#8B3DA8] font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-2'>
                      Learn more
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Visual Section */}
          <div className='w-full lg:w-7/12'>
            <div className='relative top-10 w-full aspect-[4/3] lg:aspect-[16/10] bg-gradient-to-br from-[#F5E6FA] to-[#E6E6FA] rounded-3xl overflow-hidden shadow-lg border border-purple-50 p-2'>
              {/* Currently Active Image/Video */}
              <div className='relative w-full h-full rounded-xl overflow-hidden shadow-sm bg-white'>
                {/* We use key to force re-render animation when activeIndex changes */}
                <Image
                  key={activeIndex}
                  src={contentData[activeIndex].video}
                  alt={contentData[activeIndex].title}
                  fill
                  unoptimized
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
