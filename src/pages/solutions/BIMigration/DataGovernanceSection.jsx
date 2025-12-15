/* eslint-disable indent */
'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Sensitivity from '../../../../public/images/solutions/datagoverance/Data Classification.png';

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
    badge: 'Customized Data Roadmaps',
    title: 'Craft Your Customized Data Roadmap With GWC',
    points: [
      'Our customized data roadmap ensures strategic alignment with your business objectives.',
      'Crafted with scalability in mind, the roadmap evolves alongside your business.',
    ],
    image: Sensitivity,
  },
  {
    badge: 'Data Quality Management',
    title: 'Ensure Reliable & Trusted Data',
    points: [
      'Detect and eliminate data inconsistencies early.',
      'Enable analytics-ready datasets for decision-making.',
    ],
    image: Sensitivity,
  },
  {
    badge: 'Data Lineage',
    title: 'Gain End-to-End Data Visibility',
    points: ['Track data from source to consumption.', 'Improve governance and impact analysis.'],
    image: Sensitivity,
  },
  {
    badge: 'Data Access & Authorization',
    title: 'Secure Role-Based Data Access',
    points: [
      'Protect sensitive data with fine-grained controls.',
      'Ensure authorized access across platforms.',
    ],
    image: Sensitivity,
  },
  {
    badge: 'Data Privacy Compliance',
    title: 'Meet Global Privacy Standards',
    points: [
      'Support GDPR, HIPAA, and regional regulations.',
      'Embed privacy into data workflows.',
    ],
    image: Sensitivity,
  },
  {
    badge: 'Data Governance Policies',
    title: 'Define Governance Standards',
    points: ['Create unified governance frameworks.', 'Maintain consistency enterprise-wide.'],
    image: Sensitivity,
  },
  {
    badge: 'Metadata Management',
    title: 'Improve Data Discoverability',
    points: ['Add business context to data assets.', 'Empower self-service analytics.'],
    image: Sensitivity,
  },
  {
    badge: 'Training & Awareness',
    title: 'Build a Data-Driven Culture',
    points: ['Educate teams on governance best practices.', 'Increase adoption across teams.'],
    image: Sensitivity,
  },
  {
    badge: 'Data Risk Management',
    title: 'Identify & Mitigate Risks',
    points: ['Detect vulnerabilities early.', 'Protect enterprise data assets.'],
    image: Sensitivity,
  },
  {
    badge: 'Audit & Monitoring',
    title: 'Continuous Governance Monitoring',
    points: ['Track policy adherence.', 'Ensure ongoing compliance.'],
    image: Sensitivity,
  },
];

// ---------------- COMPONENT ----------------
export default function DataGovernanceSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: self => {
          const index = Math.min(cards.length - 1, Math.floor(self.progress * cards.length));
          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const card = cards[activeIndex];

  return (
    <section ref={sectionRef} className='w-full bg-white py-24'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* TABS */}
        <div className='flex flex-wrap justify-center gap-3 mb-16'>
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full border text-sm transition
                ${
                  idx === activeIndex
                    ? 'border-purple-600 text-purple-700 font-medium'
                    : 'border-gray-300 text-gray-600'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* MAIN CONTAINER (EXACT SCREENSHOT STYLE) */}
        <div className='border-2 border-yellow-400 rounded-3xl p-8 md:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* LEFT */}
            <div>
              <span className='inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-purple-400 text-purple-700 text-sm font-medium'>
                ✦ {card.badge}
              </span>

              <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>{card.title}</h2>

              <ul className='mt-6 space-y-4 text-gray-700'>
                {card.points.map((point, i) => (
                  <li key={i} className='flex gap-3'>
                    <span className='text-purple-600 mt-1'>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className='relative w-full h-[240px] sm:h-[300px] md:h-[360px]'>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className='object-cover rounded-2xl'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
