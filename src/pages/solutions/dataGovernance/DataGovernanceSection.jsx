/* eslint-disable indent */
'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import img1 from '../../../../public/images/solutions/datagoverance/imgi_4_Audit.png';
import img2 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Access.png';
import img3 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Classification.png';
import img4 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Lifecycle.png';
import img5 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Governance_Training.png';
import img6 from '../../../../public/images/solutions/datagoverance/imgi_4_Governance.png';
import img7 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Privacy.png';
import img8 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Risk.png';
import img9 from '../../../../public/images/solutions/datagoverance/imgi_4_Metadata.png';
import img10 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Quality.png';

gsap.registerPlugin(ScrollTrigger);

// ---------------- CONTENT ----------------
const tabs = [
  'Data Classification & Sensitivity',
  'Data Quality Management',
  'Data Lineage',
  'Data Access & Authorization',
  'Data Privacy Compliance',
  'Data Governance Policies',
  'Metadata Management',
  'Training & Awareness',
  'Data Risk Management',
  'Audit & Monitoring',
];

const cards = [
  {
    badge: 'Data Classification & Sensitivity',
    title: 'Craft Your Customized Data Roadmap With GWC',
    points: [
      'Secure your business and comply with regulations by implementing a robust data classification and sensitivity approach.',
      'Protect confidential information, prevent data breaches, and build trust with customers and stakeholders.',
    ],
    image: img3,
  },
  {
    badge: 'Data Quality Management',
    title: 'Ensure Reliable & Trusted Data',
    points: [
      'Ensure trusted data fuels informed decisions.',
      'Turn data chaos into clarity to empower your business.',
    ],
    image: img10,
  },
  {
    badge: 'Data Lineage',
    title: 'Gain End-to-End Data Visibility',
    points: [
      'Identifies potential downstream effects of data changes.',
      'Provides transparency into data origins and processing.',
    ],
    image: img4,
  },
  {
    badge: 'Data Access & Authorization',
    title: 'Secure Role-Based Data Access',
    points: [
      'Protects sensitive information from unauthorized access and misuse.',
      'Sets clear data classification levels based on sensitivity.',
    ],
    image: img2,
  },
  {
    badge: 'Data Privacy Compliance',
    title: 'Meet Global Privacy Standards',
    points: [
      'Robust security measures in place to protect customer data from unauthorized access, disclosure, alteration, or destruction.',
      'Includes encryption, access controls, and incident response plans.',
    ],
    image: img7,
  },
  {
    badge: 'Data Governance Policies',
    title: 'Define Governance Standards',
    points: [
      'Boosts operational efficiency with a framework for efficient data management processes.',
      'Proactive measures to reduce potential data breach issues and financial costs.',
    ],
    image: img6,
  },
  {
    badge: 'Metadata Management',
    title: 'Improve Data Discoverability',
    points: [
      'Standards to establish consistent ways to describe and categorize your data.',
      'Integrates with your existing data infrastructure by making metadata easily accessible across your systems.',
      'Empower self-service analytics.',
    ],
    image: img9,
  },
  {
    badge: 'Training & Awareness',
    title: 'Build a Data-Driven Culture',
    points: [
      'Utilizes online training platforms and knowledge management systems for easy access and continuous learning.',
      'Certified professionals to develop and implement effective training programs.',
    ],
    image: img5,
  },
  {
    badge: 'Data Risk Management',
    title: 'Identify & Mitigate Risks',
    points: [
      'Demonstrates commitment to protecting valuable data, fostering trust and confidence.',
      'Ensures adherence to data privacy laws and reduces the risk of costly fines.',
    ],
    image: img8,
  },
  {
    badge: 'Audit & Monitoring',
    title: 'Continuous Governance Monitoring',
    points: [
      'Identifies areas of non-compliance and potential risks and focus on Data quality and consistency across the organization.',
      'Expertise on early detection and response to data issues before they cause significant harm to the business.',
    ],
    image: img1,
  },
];

// Border colors for each card
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

// ---------------- COMPONENT ----------------
export default function DataGovernanceSection() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Ensure refs are available before creating animations
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${cards.length * 100}vh`,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      });

      // Animate each card with stacking effect
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${cards.length * 100}vh`,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            if (!card) return; // Safety check during animation

            const progress = self.progress;
            const cardStart = index / cards.length;
            const cardEnd = (index + 1) / cards.length;

            // Update active index
            const newIndex = Math.min(cards.length - 1, Math.floor(progress * cards.length));
            setActiveIndex(newIndex);

            if (progress < cardStart) {
              // Card hasn't appeared yet - hide it below
              gsap.set(card, {
                y: 100,
                scale: 0.95,
                opacity: 0,
                zIndex: index,
              });
            } else if (progress >= cardStart && progress < cardEnd) {
              // Card is entering - animate it into position
              const cardProgress = (progress - cardStart) / (cardEnd - cardStart);
              const easeProgress =
                cardProgress < 0.5
                  ? 2 * cardProgress * cardProgress
                  : 1 - Math.pow(-2 * cardProgress + 2, 2) / 2;

              gsap.set(card, {
                y: index * 20 + (100 - 100 * easeProgress),
                scale: 0.95 + 0.05 * easeProgress,
                opacity: easeProgress,
                zIndex: index,
              });
            } else {
              // Card has settled into stack - keep it visible
              gsap.set(card, {
                y: index * 20,
                scale: 1,
                opacity: 1,
                zIndex: index,
              });
            }
          },
        });
      });
    }, sectionRef);

    return () => {
      // Proper cleanup: kill all ScrollTriggers first, then revert context
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger) trigger.kill();
      });
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className='relative min-h-screen bg-white py-20'>
      {/* TABS */}
      <div className='container mx-auto px-4 mb-12'>
        <div className='flex flex-wrap gap-3 justify-center'>
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                idx === activeIndex
                  ? 'bg-purple-100 border-purple-400 text-purple-700'
                  : 'bg-white border-gray-300 text-gray-700 hover:border-purple-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CARDS CONTAINER */}
      <div ref={cardsContainerRef} className='container mx-auto px-4'>
        <div className='relative' style={{ minHeight: '600px' }}>
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className='absolute inset-0 w-full'
              style={{
                transformOrigin: 'center center',
              }}
            >
              <div
                className={`bg-white rounded-3xl border-2 ${borderColors[index]} shadow-xl p-12 min-h-[500px]`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full'>
                  {/* LEFT */}
                  <div className='space-y-6'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200'>
                      <span className='text-purple-600 text-lg'>✦</span>
                      <span className='text-sm font-medium text-purple-700'>{card.badge}</span>
                    </div>

                    <h2 className='text-4xl font-bold text-gray-900 leading-tight'>{card.title}</h2>

                    <ul className='space-y-4'>
                      {card.points.map((point, i) => (
                        <li key={i} className='flex items-start gap-3'>
                          <span className='text-purple-600 mt-1 flex-shrink-0'>•</span>
                          <span className='text-gray-700 text-lg leading-relaxed'>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className='relative h-[400px] lg:h-full'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className='object-contain rounded-2xl'
                      priority={index === 0}
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
