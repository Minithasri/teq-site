'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import imgAdvancedAnalytics from '../../../../public/images/solutions/dataStrategyEngineer/Advanced analytics.png';
import imgCustomizedRoadmap from '../../../../public/images/solutions/dataStrategyEngineer/Customized data roadmap.png';
import imgDataCompliance from '../../../../public/images/solutions/dataStrategyEngineer/Data compliance.png';
import imgDataDiscovery from '../../../../public/images/solutions/dataStrategyEngineer/Data discovery.png';
import imgDataMaturity from '../../../../public/images/solutions/dataStrategyEngineer/Data maturity identification.png';
import imgDigitalTransformation from '../../../../public/images/solutions/dataStrategyEngineer/Digital transformation consulting.png';
import imgITInfra from '../../../../public/images/solutions/dataStrategyEngineer/IT infra optimization.png';
import imgObjectiveIdentification from '../../../../public/images/solutions/dataStrategyEngineer/Objective identification.png';
import imgTailoredStrategies from '../../../../public/images/solutions/dataStrategyEngineer/Tailored data strategies.png';
import imgTargetAudience from '../../../../public/images/solutions/dataStrategyEngineer/Target audience identification.png';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const tabs = [
  'Data discovery',
  'Advanced analytics',
  'Digital transformation consulting',
  'Customized data roadmaps',
  'Objective identification',
  'Target audience identification',
  'Tailored data strategies',
  'Data maturity identification',
  'Data compliance',
  'IT infra optimization',
];

const cards = [
  {
    badge: 'Data discovery',
    title: 'Uncover deeper insights through data discovery',
    points: [
      'Harness the potential of data discovery to make informed decisions, by uncovering patterns and trends.',
      'Embrace data discovery as a tool for efficient exploration, by allowing your team to dig deep into data effortlessly.',
    ],
    image: imgDataDiscovery,
  },
  {
    badge: 'Advanced analytics',
    title: 'Overcome complexity with advanced data analytics',
    points: [
      'Foresee trends, patterns, and potential challenges, empowering proactive responses with predictive analytics.',
      'Gain a competitive edge by leveraging sophisticated algorithms and models that extract meaningful information.',
    ],
    image: imgAdvancedAnalytics,
  },
  {
    badge: 'Digital transformation consulting',
    title:
      'Navigate digital transformation with our expert digital transformation consulting services',
    points: [
      'Expert digital transformation consulting for scalable growth.',
      'Embrace change with agility as our consultants assist in the seamless integration of digital technologies.',
    ],
    image: imgDigitalTransformation,
  },
  {
    badge: 'Customized data roadmaps',
    title: 'Craft your customized data roadmap with GWC',
    points: [
      'Our customized data roadmap ensures strategic alignment with your business objectives, paving the way for data-driven success.',
      'Crafted with scalability in mind, the roadmap evolves alongside your business, accommodating growth and technological advancements.',
    ],
    image: imgCustomizedRoadmap,
  },
  {
    badge: 'Objective identification',
    title: 'Get clear direction through objective identification for data-driven excellence',
    points: [
      'Our data strategy solution begins with objective identification, providing clarity on the strategic goals your organization aims to achieve through data use.',
      'We assess data objectives to ensure alignment with organizational priorities, enabling a purposeful and impactful data strategy.',
    ],
    image: imgObjectiveIdentification,
  },
  {
    badge: 'Target audience identification',
    title: 'Target audience identification for precise engagement',
    points: [
      'Our approach involves strategic profiling to precisely identify your target audience, ensuring a deep understanding of their preferences, behaviors, and needs.',
      'Our strategies facilitate optimized outreach efforts, ensuring that your messages resonate with the right individuals.',
    ],
    image: imgTargetAudience,
  },
  {
    badge: 'Tailored data strategies',
    title: 'Crafting tailored data strategies for excellence',
    points: [
      'Our tailored data strategies are crafted with a customized approach, aligning with the unique needs, goals, and challenges of your organization.',
      'We focus on optimizing your data ecosystem, ensuring that every component of the strategy is tailored to enhance data quality, accessibility, and relevance.',
    ],
    image: imgTailoredStrategies,
  },
  {
    badge: 'Data maturity identification',
    title: 'We reveal insights into your data maturity level',
    points: [
      "Our data maturity identification process involves a precise assessment of your organization's current data capabilities.",
      'Gain strategic insights into the potential areas for growth and improvement in your data practices.',
    ],
    image: imgDataMaturity,
  },
  {
    badge: 'Data compliance',
    title: 'Ensure data integrity while navigating data compliance challenges',
    points: [
      'Our data compliance solutions guarantee strict adherence to regulatory requirements.',
      'We implement continuous monitoring mechanisms to track changes in data compliance regulations, allowing prompt adjustments.',
    ],
    image: imgDataCompliance,
  },
  {
    badge: 'IT infra optimization',
    title: 'Streamline excellence with our IT infrastructure optimization strategies',
    points: [
      'Our IT infra optimization strategies focus on enhancing operational efficiency, ensuring that your IT resources are utilized effectively.',
      'We provide scalable solutions to accommodate the evolving needs of your organization.',
    ],
    image: imgITInfra,
  },
];

// Path to circle image
const CIRCLE_IMAGE_PATH = '/images/solutions/dataStrategyEngineer/circle_image.png';

/* ---------------- COMPONENT ---------------- */

export default function DataStrategySection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- GSAP TIMELINE (REBUILT) ---------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 40px', // Pause when section is 80px from top to show tabs
          end: `+=${cards.length * 60}%`, // Reduced for faster scroll while keeping lock
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: self => {
            // Sync active tab with scroll progress
            const index = Math.min(cards.length - 1, Math.floor(self.progress * cards.length));
            setActiveIndex(index);
          },
        },
      });

      tl.to({}, { duration: 0.5 }); // Short delay to lock first card

      cardRefs.current.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          scale: i === 0 ? 1 : 0.96,
          y: i === 0 ? 0 : 120,
          pointerEvents: i === 0 ? 'auto' : 'none',
        });

        if (i > 0) {
          tl.to(cardRefs.current[i - 1], {
            opacity: 0,
            scale: 0.96,
            y: -20,
            pointerEvents: 'none',
            duration: 1,
            ease: 'power2.out',
          });

          tl.to(
            card,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              pointerEvents: 'auto',
              duration: 1,
              ease: 'power3.out',
            },
            '<'
          );
        }
      });

      timelineRef.current = tl;
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------- TAB CLICK ---------- */
  const onTabClick = index => {
    if (!timelineRef.current) return;
    const tl = timelineRef.current;
    const progress = index / (cards.length - 1);
    tl.scrollTrigger.scroll(
      tl.scrollTrigger.start + progress * (tl.scrollTrigger.end - tl.scrollTrigger.start)
    );
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby='data-strategy-heading'
      className='relative min-h-screen bg-transparent pt-12 pb-24 z-10'
    >
      {/* MOVED BACKGROUND HERE:
        - Positioned absolutely inside this section (which gets pinned).
        - top-[-200px] pulls it UP into the previous section visual space.
        - z-[-1] ensures it is behind the cards but moves with the pin.
      */}
      <div
        className='absolute left-1/2 -translate-x-1/2 rounded-full'
        style={{
          top: '-100px', // Adjusted to control how high up it starts
          zIndex: -1,
          filter: 'blur(40px)',
          width: '1000px',
          height: '680px', // Reduced height to end within this section
          maxWidth: '90vw',
          pointerEvents: 'none',
          background: 'linear-gradient(135deg, #D7F0FF 0%, #D9CFFF 33%, #FFD1EA 66%, #FFE3D2 100%)',
          opacity: 1,
        }}
      >
        <div className='relative w-full h-full'>
          <Image
            src={CIRCLE_IMAGE_PATH}
            alt=''
            aria-hidden
            fill
            className='object-contain'
            priority
            style={{ mixBlendMode: 'overlay' }}
          />
        </div>
      </div>

      {/* TABS - VISIBLE ONLY ON LARGE SCREENS */}
      {/* Added 'hidden lg:block' to hide tabs on mobile and tablet */}
      <div className='hidden lg:block max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 mb-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => onTabClick(i)}
              className={`flex items-center justify-center px-3 py-2 rounded-full border text-xs font-medium transition text-center leading-tight min-h-[60px]
                ${
                  i === activeIndex
                    ? ' border-purple-900 '
                    : 'bg-white border-gray-300 text-gray-700 hover:border-purple-300'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-24'>
        <div className='relative min-h-[400px]'>
          {cards.map((card, i) => (
            <article
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className='absolute inset-0 w-full'
              aria-hidden={i !== activeIndex}
            >
              <div
                className={`bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-purple-400 shadow-xl p-6 md:p-8`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                  <div className='space-y-4'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-purple-50 text-purple-700'>
                      <Image src='/images/Spark.svg' alt='' aria-hidden width={16} height={16} />
                      <span className='text-sm font-medium'>{card.badge}</span>
                    </span>

                    <h2
                      id={i === 0 ? 'data-strategy-heading' : undefined}
                      className='text-2xl md:text-2xl font-bold'
                    >
                      {card.title}
                    </h2>

                    <ul className='space-y-2.5'>
                      {card.points.map((p, idx) => (
                        <li key={idx} className='flex gap-2 text-[16px] leading-relaxed'>
                          <span aria-hidden>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='relative overflow-hidden rounded-2xl border-2 border-gray-200 h-[250px] lg:h-[280px]'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      // Changed from 'object-contain object-right' to 'object-cover object-center'
                      // This ensures the image completely fills the rounded-2xl border box.
                      className='object-cover object-center'
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
