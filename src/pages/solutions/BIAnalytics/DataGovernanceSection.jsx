'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import imgCollaboration from '../../../../public/images/solutions/biandanalytics/Collaboration and Knowledge Sharing.png';
import imgDashboardReportDesign from '../../../../public/images/solutions/biandanalytics/Dashboard and Report Design.png';
import imgDataAnalysis from '../../../../public/images/solutions/biandanalytics/Data Analysis.png';
import imgDataCollection from '../../../../public/images/solutions/biandanalytics/Data Collection.png';
import imgDataExploration from '../../../../public/images/solutions/biandanalytics/Data Exploration.png';
import imgDataInterpretation from '../../../../public/images/solutions/biandanalytics/Data Interpretation and Insight Generation.png';
import imgDataPresentation from '../../../../public/images/solutions/biandanalytics/Data Presentation.png';
import imgIntegration from '../../../../public/images/solutions/biandanalytics/Integration with Business Processes.png';
import imgIterativeAnalysis from '../../../../public/images/solutions/biandanalytics/Iterative Analysis and Refinement.png';
import imgPerformanceMonitoring from '../../../../public/images/solutions/biandanalytics/Performance Monitoring.png';

gsap.registerPlugin(ScrollTrigger);

/* ---------------- DATA ---------------- */

const tabs = [
  'Data Collection',
  'Data Exploration',
  'Dashboard & Report Design',
  'Data Analysis',
  'Data Presentation',
  'Performance Monitoring',
  'Data Interpretation & Insight Generation',
  'Collaboration & Knowledge Sharing',
  'Iterative Analysis & Refinement',
  'Integration with Business Processes',
];

const cards = [
  {
    badge: 'Data Collection',
    title: 'Streamline Your Data Collection Process',
    points: [
      'Gather data from multiple sources efficiently, ensuring comprehensive coverage of all relevant information.',
      'Implement automated data collection methods to reduce manual effort and improve accuracy.',
    ],
    image: imgDataCollection,
  },
  {
    badge: 'Data Exploration',
    title: 'Explore Your Data to Uncover Hidden Patterns',
    points: [
      'Use advanced exploration techniques to discover trends and anomalies in your data.',
      'Enable your team to interact with data visually, making complex datasets more accessible.',
    ],
    image: imgDataExploration,
  },
  {
    badge: 'Dashboard & Report Design',
    title: 'Create Compelling Dashboards and Reports',
    points: [
      'Design intuitive dashboards that provide real-time insights at a glance.',
      'Build customized reports that align with your business objectives and stakeholder needs.',
    ],
    image: imgDashboardReportDesign,
  },
  {
    badge: 'Data Analysis',
    title: 'Perform In-Depth Data Analysis',
    points: [
      'Apply statistical and analytical methods to extract meaningful insights from your data.',
      'Leverage advanced analytics to support data-driven decision-making across your organization.',
    ],
    image: imgDataAnalysis,
  },
  {
    badge: 'Data Presentation',
    title: 'Present Data in a Clear and Impactful Way',
    points: [
      'Transform complex data into easy-to-understand visualizations and narratives.',
      'Communicate insights effectively to stakeholders at all levels of your organization.',
    ],
    image: imgDataPresentation,
  },
  {
    badge: 'Performance Monitoring',
    title: 'Monitor Performance with Real-Time Metrics',
    points: [
      'Track key performance indicators (KPIs) continuously to stay on top of business performance.',
      'Set up alerts and notifications to respond quickly to changes in critical metrics.',
    ],
    image: imgPerformanceMonitoring,
  },
  {
    badge: 'Data Interpretation & Insight Generation',
    title: 'Generate Actionable Insights from Your Data',
    points: [
      'Interpret data findings to uncover actionable business insights.',
      'Enable strategic decision-making by translating data into clear recommendations.',
    ],
    image: imgDataInterpretation,
  },
  {
    badge: 'Collaboration & Knowledge Sharing',
    title: 'Foster Collaboration Through Data Sharing',
    points: [
      'Create a collaborative environment where teams can share insights and findings.',
      'Enable knowledge sharing across departments to drive organizational alignment.',
    ],
    image: imgCollaboration,
  },
  {
    badge: 'Iterative Analysis & Refinement',
    title: 'Refine Your Analysis Through Iteration',
    points: [
      'Continuously improve your analytical models and approaches based on feedback.',
      'Adapt your analysis to changing business needs and evolving data landscapes.',
    ],
    image: imgIterativeAnalysis,
  },
  {
    badge: 'Integration with Business Processes',
    title: 'Integrate Analytics into Your Business Workflows',
    points: [
      'Embed analytics seamlessly into existing business processes for maximum impact.',
      'Ensure that insights are accessible where and when they are needed most.',
    ],
    image: imgIntegration,
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
