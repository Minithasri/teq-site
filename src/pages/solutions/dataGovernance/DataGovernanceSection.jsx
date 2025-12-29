'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import img1 from '../../../../public/images/solutions/datagoverance/imgi_4_Audit.png';
import img2 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Access.png';
import img3 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Classification.png';
import img5 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Governance_Training.png';
import img4 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Lifecycle.png';
import img7 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Privacy.png';
import img10 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Quality.png';
import img8 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Risk.png';
import img6 from '../../../../public/images/solutions/datagoverance/imgi_4_Governance.png';
import img9 from '../../../../public/images/solutions/datagoverance/imgi_4_Metadata.png';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA (UNCHANGED) ---------------- */

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
    title: 'Data Classification & Sensitivity',
    points: [
      'Secure your business and comply with regulations by implementing a robust data classification and sensitivity approach.',
      'Protect confidential information, prevent data breaches, and build trust with customers and stakeholders.',
    ],
    image: img3,
  },
  {
    badge: 'Data Quality Management',
    title: 'Data Quality Management',
    points: [
      'Ensure trusted data fuels informed decisions.',
      'Turn data chaos into clarity to empower your business.',
    ],
    image: img10,
  },
  {
    badge: 'Data Lineage',
    title: 'Data Lineage',
    points: [
      'Identifies potential downstream effects of data changes.',
      'Provides transparency into data origins and processing.',
    ],
    image: img4,
  },
  {
    badge: 'Data Access & Authorization',
    title: 'Data Access & Authorization',
    points: [
      'Protects sensitive information from unauthorized access and misuse.',
      'Sets clear data classification levels based on sensitivity.',
    ],
    image: img2,
  },
  {
    badge: 'Data Privacy Compliance',
    title: 'Data Privacy Compliance',
    points: [
      'Robust security measures in place to protect customer data from unauthorized access, disclosure, alteration, or destruction.',
      'Includes encryption, access controls, and incident response plans.',
    ],
    image: img7,
  },
  {
    badge: 'Data Governance Policies',
    title: 'Data Governance Policies',
    points: [
      'Boosts operational efficiency with a framework for efficient data management processes.',
      'Proactive measures to reduce potential data breach issues and financial costs.',
    ],
    image: img6,
  },
  {
    badge: 'Metadata Management',
    title: 'Metadata Management',
    points: [
      'Standards to establish consistent ways to describe and categorize your data.',
      'Integrates with your existing data infrastructure by making metadata easily accessible across your systems.',
    ],
    image: img9,
  },
  {
    badge: 'Training & Awareness',
    title: 'Training & Awareness',
    points: [
      'Utilizes online training platforms and knowledge management systems for easy access and continuous learning.',
      'Certified professionals to develop and implement effective training programs.',
    ],
    image: img5,
  },
  {
    badge: 'Data Risk Management',
    title: 'Data Risk Management',
    points: [
      'Demonstrates commitment to protecting valuable data, fostering trust and confidence.',
      'Ensures adherence to data privacy laws and reduces the risk of costly fines.',
    ],
    image: img8,
  },
  {
    badge: 'Audit & Monitoring',
    title: 'Audit & Monitoring',
    points: [
      'Identifies areas of non-compliance and potential risks and focus on Data quality and consistency across the organization.',
      'Expertise on early detection and response to data issues before they cause significant harm to the business.',
    ],
    image: img1,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function DataGovernanceSection() {
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
          start: 'top 20px', // Pause when section is 80px from top to show tabs
          end: `+=${cards.length * 80}%`, // Reduced from 100% to 80% for less scroll
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
              opacity: 50,
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
      aria-labelledby='data-governance-heading'
      className='relative min-h-screen bg-white pt-20 pb-12'
    >
      {/* TABS - VISIBLE ONLY ON LARGE SCREENS */}
      {/* Added 'hidden lg:block' to hide tabs on mobile and tablet */}
      <div className='hidden lg:block max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 mb-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => onTabClick(i)}
              className={`flex items-center justify-center px-4 py-4 rounded-full border text-xs font-medium transition text-center leading-tight min-h-[60px]
                ${
                  i === activeIndex
                    ? 'bg-purple-100 border-purple-400 text-purple-700'
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
                className={`bg-white rounded-3xl border-2 border-purple-400 shadow-xl p-6 md:p-8`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                  <div className='space-y-4'>
                    <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-purple-50 text-purple-700'>
                      <Image src='/images/Spark.svg' alt='' aria-hidden width={16} height={16} />
                      <span className='text-sm font-medium'>{card.badge}</span>
                    </span>

                    <h2
                      id={i === 0 ? 'data-governance-heading' : undefined}
                      className='text-2xl md:text-3xl font-bold'
                    >
                      {card.title}
                    </h2>

                    <ul className='space-y-2.5'>
                      {card.points.map((p, idx) => (
                        <li key={idx} className='flex gap-2 text-md leading-relaxed'>
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
