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
                    <span className='inline-flex px-4 py-2 rounded-full border bg-purple-50 text-purple-700'>
                      ✦ {card.badge}
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
