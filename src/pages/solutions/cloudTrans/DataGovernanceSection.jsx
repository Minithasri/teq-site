'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import imgApplicationMigration from '../../../../public/images/solutions/cloudtransformation/imgi_4_Application Migration.png';
import imgCompliance from '../../../../public/images/solutions/cloudtransformation/imgi_4_Compliance Management.png';
import imgCustomAI from '../../../../public/images/solutions/cloudtransformation/imgi_4_Custom AI Solutions.png';
import imgDataGovernance from '../../../../public/images/solutions/cloudtransformation/imgi_4_Data Governance.png';
import imgDataMigration from '../../../../public/images/solutions/cloudtransformation/imgi_4_Data Migration.png';
import imgDataAnalytics from '../../../../public/images/solutions/cloudtransformation/imgi_4_Data _ Analytics Solutions.png';
import imgIntegrateHybrid from '../../../../public/images/solutions/cloudtransformation/imgi_4_Integrate Hybrid Solutions.png';
import imgOperateOptimize from '../../../../public/images/solutions/cloudtransformation/imgi_4_Operate _ Optimize Dev Capabilities.png';
import imgSetupSecurity from '../../../../public/images/solutions/cloudtransformation/imgi_4_Setup _ Optimize Security Operations.png';
import imgTransformCloud from '../../../../public/images/solutions/cloudtransformation/imgi_4_Transform Cloud Operations.png';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const tabs = [
  'Operate & Optimize Dev Capabilities',
  'Transform Cloud Operations',
  'Application Migration',
  'Integrate Hybrid Solutions',
  'Setup & Optimize Security Operations',
  'Compliance Management',
  'Data Governance',
  'Data Migration',
  'Data & Analytics Solutions',
  'Custom AI Solutions',
];

const cards = [
  {
    badge: 'Operate & Optimize Dev Capabilities',
    title: 'Operate & Optimize Dev Capabilities',
    points: [
      'Apply DevOps best practices to custom solutions, integrations, and managed services.',
      'Leverage cloud-based IDEs and collaboration tools for seamless development across teams and locations.',
    ],
    image: imgOperateOptimize,
  },
  {
    badge: 'Transform Cloud Operations',
    title: 'Transform Cloud Operations',
    points: [
      'Set up and implement service management, operations monitoring and talent development.',
      'Regularly review and assess your cloud operations to identify areas for improvement and iterate on your strategy.',
    ],
    image: imgTransformCloud,
  },
  {
    badge: 'Application Migration',
    title: 'Application Migration',
    points: [
      'Establish the essentials for cloud-native application development and modernizing legacy applications.',
      'Utilize cloud platform services like AI/ML, data analytics, and APIs to unlock new functionalities and data-driven insights.',
    ],
    image: imgApplicationMigration,
  },
  {
    badge: 'Integrate Hybrid Solutions',
    title: 'Integrate Hybrid Solutions',
    points: [
      'Harness the agility and reach of the cloud while preserving the security and control of on-premises systems.',
      'Implement comprehensive disaster recovery and backup strategies that encompass both on-premises and cloud components.',
    ],
    image: imgIntegrateHybrid,
  },
  {
    badge: 'Setup & Optimize Security Operations',
    title: 'Setup & Optimize Security Operations',
    points: [
      'Security monitoring, investigations and response coupled with security posture with a zero trust model.',
      'Integrate security into the DevOps pipeline and foster collaboration between security, development, and operations teams.',
    ],
    image: imgSetupSecurity,
  },
  {
    badge: 'Compliance Management',
    title: 'Compliance Management',
    points: [
      'Streamline compliance processes and optimize resource allocation with best-in-class tools and expertise.',
      'Regularly review your compliance posture and adapt your strategies as regulations and cloud environments evolve.',
    ],
    image: imgCompliance,
  },
  {
    badge: 'Data Governance',
    title: 'Data Governance',
    points: [
      'Optimizing data utilization and aligning with business goals using data governance practices.',
      'Implement a comprehensive data catalog across all environments to locate, understand, and track data lineage.',
    ],
    image: imgDataGovernance,
  },
  {
    badge: 'Data Migration',
    title: 'Data Migration',
    points: [
      'Assess, develop, transform and modernize Enterprise Data Warehouses and Databases.',
      'Leverage cloud tools for data enrichment and transformation to unlock greater value.',
    ],
    image: imgDataMigration,
  },
  {
    badge: 'Data & Analytics Solutions',
    title: 'Data & Analytics Solutions',
    points: [
      'Tailored to your needs, our solutions aim to make your organization data-aware and transform it into a data-driven one.',
      'Implement cloud-based BI platforms for interactive dashboards and data exploration.',
    ],
    image: imgDataAnalytics,
  },
  {
    badge: 'Custom AI Solutions',
    title: 'Custom AI Solutions',
    points: [
      'Assess feasibility, build and train the model, and develop Machine Learning solutions.',
      'Ensure smooth integration of your custom AI solution with existing IT infrastructure and applications.',
    ],
    image: imgCustomAI,
  },
];

/* ---------------- COMPONENT ---------------- */

export default function CloudTransformationSection() {
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
      aria-labelledby='cloud-transformation-heading'
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
                      id={i === 0 ? 'cloud-transformation-heading' : undefined}
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
