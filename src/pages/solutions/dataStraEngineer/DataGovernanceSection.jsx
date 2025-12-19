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
  'Data Discovery',
  'Advanced Analytics',
  'Digital Transformation Consulting',
  'Customized Data Roadmaps',
  'Objective Identification',
  'Target Audience Identification',
  'Tailored Data Strategies',
  'Data Maturity Identification',
  'Data Compliance',
  'IT Infra Optimization',
];

const cards = [
  {
    badge: 'Data Discovery',
    title: 'Uncover Deeper Insights Through Data Discovery',
    points: [
      'Harness the potential of data discovery to make informed decisions, by uncovering patterns and trends.',
      'Embrace data discovery as a tool for efficient exploration, by allowing your team to dig deep into data effortlessly.',
    ],
    image: imgDataDiscovery,
  },
  {
    badge: 'Advanced Analytics',
    title: 'Overcome Complexity With Advanced Data Analytics',
    points: [
      'Foresee trends, patterns, and potential challenges, empowering proactive responses with predictive analytics.',
      'Gain a competitive edge by leveraging sophisticated algorithms and models that extract meaningful information.',
    ],
    image: imgAdvancedAnalytics,
  },
  {
    badge: 'Digital Transformation Consulting',
    title:
      'Navigate Digital Transformation With Our Expert Digital Transformation Consulting Services',
    points: [
      'Get a strategic roadmap tailored to your business, guiding you through the complexities of digital evolution with a clear plan for success.',
      'Embrace change with agility as our consultants assist in the seamless integration of digital technologies.',
    ],
    image: imgDigitalTransformation,
  },
  {
    badge: 'Customized Data Roadmaps',
    title: 'Craft Your Customized Data Roadmap With GWC',
    points: [
      'Our customized data roadmap ensures strategic alignment with your business objectives, paving the way for data-driven success.',
      'Crafted with scalability in mind, the roadmap evolves alongside your business, accommodating growth and technological advancements.',
    ],
    image: imgCustomizedRoadmap,
  },
  {
    badge: 'Objective Identification',
    title: 'Get Clear Direction Through Objective Identification For Data-Driven Excellence',
    points: [
      'Our data strategy solution begins with objective identification, providing clarity on the strategic goals your organization aims to achieve through effective data utilization.',
      'We meticulously assess the relevance of data objectives to ensure alignment with organizational priorities, enabling the creation of a purposeful and impactful data strategy.',
    ],
    image: imgObjectiveIdentification,
  },
  {
    badge: 'Target Audience Identification',
    title: 'Target Audience Identification For Precise Engagement',
    points: [
      'Our approach involves strategic profiling to precisely identify your target audience, ensuring a deep understanding of their preferences, behaviors, and needs.',
      'Our strategies facilitate optimized outreach efforts, ensuring that your messages resonate with the right individuals.',
    ],
    image: imgTargetAudience,
  },
  {
    badge: 'Tailored Data Strategies',
    title: 'Crafting Tailored Data Strategies For Excellence',
    points: [
      'Our tailored data strategies are crafted with a customized approach, aligning with the unique needs, goals, and challenges of your organization.',
      'We focus on optimizing your data ecosystem, ensuring that every component of the strategy is tailored to enhance data quality, accessibility, and relevance.',
    ],
    image: imgTailoredStrategies,
  },
  {
    badge: 'Data Maturity Identification',
    title: 'We Reveal Insights Into Your Data Maturity Level',
    points: [
      "Our data maturity identification process involves a precise assessment of your organization's current data capabilities.",
      'Gain strategic insights into the potential areas for growth and improvement in your data practices.',
    ],
    image: imgDataMaturity,
  },
  {
    badge: 'Data Compliance',
    title: 'Ensure Data Integrity While Navigating Data Compliance Challenges',
    points: [
      'Our data compliance solutions guarantee strict adherence to regulatory requirements.',
      'We implement continuous monitoring mechanisms to track changes in data compliance regulations, allowing prompt adjustments.',
    ],
    image: imgDataCompliance,
  },
  {
    badge: 'IT Infra Optimization',
    title: 'Streamline Excellence With Our IT Infrastructure Optimization Strategies',
    points: [
      'Our IT infra optimization strategies focus on enhancing operational efficiency, ensuring that your IT resources are utilized effectively.',
      'We provide scalable solutions to accommodate the evolving needs of your organization.',
    ],
    image: imgITInfra,
  },
];

const borderColors = [
  'border-purple-400',
  'border-blue-400',
  'border-indigo-400',
  'border-violet-400',
  'border-fuchsia-400',
  'border-pink-400',
  'border-rose-400',
  'border-orange-400',
  'border-amber-400',
  'border-emerald-400',
];

/* ---------------- COMPONENT ---------------- */

export default function DataGovernanceSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollTriggerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- CARD TRANSITION ---------- */
  const animateToCard = (nextIndex, direction = 1) => {
    if (nextIndex === currentIndexRef.current) return;

    const prev = cardRefs.current[currentIndexRef.current];
    const next = cardRefs.current[nextIndex];

    setActiveIndex(nextIndex);

    gsap.to(prev, {
      opacity: 0,
      scale: 0.97,
      y: direction === 1 ? -20 : 20,
      duration: 0.5,
      ease: 'power2.inOut',
      pointerEvents: 'none',
    });

    gsap.fromTo(
      next,
      { opacity: 0, scale: 0.97, y: direction === 1 ? 50 : -50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        pointerEvents: 'auto',
      }
    );

    currentIndexRef.current = nextIndex;
  };

  /* ---------- SCROLL ---------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          scale: i === 0 ? 1 : 0.97,
          y: 0,
          pointerEvents: i === 0 ? 'auto' : 'none',
        });
      });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${cards.length * 120}vh`,
        pin: true,
        scrub: false,
        onUpdate: self => {
          const next = Math.min(cards.length - 1, Math.floor(self.progress * cards.length));
          const dir = next > currentIndexRef.current ? 1 : -1;
          animateToCard(next, dir);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ---------- TAB CLICK ---------- */
  const onTabClick = index => {
    const trigger = scrollTriggerRef.current;
    if (!trigger) return;

    const progress = index / cards.length;
    trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
  };

  return (
    <div ref={sectionRef} className='relative min-h-screen bg-white pt-20 pb-12'>
      {/* TABS */}
      {/* <div className="container mx-auto px-4 mb-12">
  <div className="grid grid-cols-5 gap-4 max-w-6xl mx-auto">
    {tabs.map((tab, i) => (
      <button
        key={i}
        onClick={() => onTabClick(i)}
        className={`flex items-center justify-center h-16 px-3 rounded-full border text-sm font-medium transition text-center text-ellipsis overflow-hidden whitespace-nowrap ${
          i === activeIndex
            ? 'bg-purple-100 border-purple-400 text-purple-700'
            : 'bg-white border-gray-300 text-gray-700 hover:border-purple-300'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
</div> */}
      <div className='container mx-auto px-4 mb-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ma  '>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => onTabClick(i)}
              className={`flex items-center justify-center px-4 py-2.5 rounded-full border text-xs font-medium transition text-center
          ${
            i === activeIndex
              ? 'bg-purple-100 border-purple-400 text-purple-700'
              : 'bg-white border-gray-300 text-gray-700 hover:border-purple-300'
          }`}
            >
              <span className='block text-center leading-snug break-words'>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CARDS */}
      <div className='container mx-auto px-4'>
        <div className='relative min-h-[500px]'>
          {cards.map((card, i) => (
            <div key={i} ref={el => (cardRefs.current[i] = el)} className='absolute inset-0 w-full'>
              <div
                className={`bg-white rounded-3xl border-2 ${borderColors[i]} shadow-xl p-6 md:p-8`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                  <div className='space-y-4'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-purple-50 text-purple-700'>
                      <Image
                        src='/images/Spark.svg'
                        alt='Spark'
                        width={16}
                        height={16}
                        className='w-4 h-4'
                      />
                      <span className='text-sm font-medium'>{card.badge}</span>
                    </span>
                    <h2 className='text-2xl md:text-3xl font-bold'>{card.title}</h2>
                    <ul className='space-y-2.5'>
                      {card.points.map((p, idx) => (
                        <li key={idx} className='flex gap-2 text-sm leading-relaxed'>
                          <span className='text-purple-600'>•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='relative rounded-3xl h-[250px] lg:h-[280px]'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className='object-contain rounded-3xl'
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
