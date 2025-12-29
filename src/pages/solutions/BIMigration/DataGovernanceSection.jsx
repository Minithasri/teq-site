'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import imgAssessmentPlanning from '../../../../public/images/solutions/bimigration/Assessment_and_Planning.png';
import imgDataInventory from '../../../../public/images/solutions/bimigration/Data_Inventry_and_Analysis.png';
import imgDataMigration from '../../../../public/images/solutions/bimigration/Data_Migration.png';
import imgDeployment from '../../../../public/images/solutions/bimigration/Deployment.png';
import imgIntegration from '../../../../public/images/solutions/bimigration/Integration_with_Existing_Systems.png';
import imgPostMigration from '../../../../public/images/solutions/bimigration/Post-Migration_Optimization.png';
import imgReportDashboard from '../../../../public/images/solutions/bimigration/Report_and_Dashboard_Migration.png';
import imgSecurity from '../../../../public/images/solutions/bimigration/Security_and_Access_Control.png';
import imgTesting from '../../../../public/images/solutions/bimigration/Testing_and_Quality_Assurance.png';
import imgTraining from '../../../../public/images/solutions/bimigration/Training_and_Change_Management.png';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const tabs = [
  'Assessment & Planning',
  'Data Inventory & Analysis',
  'Data Migration',
  'Report & Dashboard Migration',
  'Integration with Existing Systems',
  'Security & Access Control',
  'Training & Change Management',
  'Testing & Quality Assurance',
  'Deployment',
  'Post-Migration Optimization',
];

const cards = [
  {
    badge: 'Assessment & Planning',
    title: 'A Baseline for Understanding Current Challenges and Opportunities',
    points: [
      'Conduct a comprehensive assessment of the existing BI infrastructure.',
      'Align BI migration goals with organizational objectives.',
    ],
    image: imgAssessmentPlanning,
  },
  {
    badge: 'Data Inventory & Analysis',
    title:
      'Ensure that the Migrated BI Solution is Built on Accurate, Reliable & Consistent Information',
    points: [
      'Cleanse and transform data as needed.',
      'Identify dependencies between data sources, reports, and dashboards.',
    ],
    image: imgDataInventory,
  },
  {
    badge: 'Data Migration',
    title: 'Seamless & Efficient Transfer of Data to the New BI Platform',
    points: [
      'Implement an incremental migration approach.',
      'Monitor the data migration process in real-time and validate the integrity of transferred data.',
    ],
    image: imgDataMigration,
  },
  {
    badge: 'Report & Dashboard Migration',
    title: 'Prioritize Migration Efforts',
    points: [
      'Optimize visualizations, layouts, and interactions.',
      'Gather feedback from stakeholders.',
    ],
    image: imgReportDashboard,
  },
  {
    badge: 'Integration with Existing Systems',
    title: 'Seamless Data Flow & Interoperability',
    points: [
      'Integrate the new BI solution with existing systems, databases, and applications.',
      "Ensure a clean transition and minimize redundancy in the organization's IT landscape.",
    ],
    image: imgIntegration,
  },
  {
    badge: 'Security & Access Control',
    title: 'Address Any Aecurity Gaps & Maintain a Robust Security Posture',
    points: [
      'Define and manage user access rights based on roles and responsibilities.',
      'Apply encryption to sensitive data during transmission and storage.',
    ],
    image: imgSecurity,
  },
  {
    badge: 'Training & Change Management',
    title: 'Leverage the Full Potential of the Modernized Solution',
    points: [
      'Develop and deliver training programs to educate users.',
      'Implement a communication plan to inform stakeholders about the upcoming changes.',
    ],
    image: imgTraining,
  },
  {
    badge: 'Testing & Quality Assurance',
    title: 'Identify & Address Potential Issues',
    points: [
      'Develop a testing strategy that covers data integrity, functionality, performance, and security.',
      'Optimize performance based on testing results to ensure a seamless user experience.',
    ],
    image: imgTesting,
  },
  {
    badge: 'Deployment',
    title: 'Phased Deployment Approach to Minimize Disruptions',
    points: [
      'Provide adequate support during the go-live phase.',
      'Establish a support mechanism to assist users with the transition.',
    ],
    image: imgDeployment,
  },
  {
    badge: 'Post-Migration Optimization',
    title: 'Identify & Address Any Performance Bottlenecks',
    points: [
      'Continuously monitor the performance of the new BI platform in the post-migration phase.',
      'Collect ongoing feedback from users and stakeholders.',
    ],
    image: imgPostMigration,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function BIMigrationSection() {
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
      aria-labelledby='bi-migration-heading'
      className='relative min-h-screen bg-white pt-20 pb-12'
    >
      {/* TABS - VISIBLE ONLY ON LARGE SCREENS */}
      {/* Added 'hidden lg:block' to hide tabs on mobile and tablet */}
      <div className='hidden lg:block max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 mb-4'>
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
                      id={i === 0 ? 'bi-migration-heading' : undefined}
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
