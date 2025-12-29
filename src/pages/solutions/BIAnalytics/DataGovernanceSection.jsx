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

/* ---------------- COMPONENT ---------------- */

export default function BIAnalyticsSection() {
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
              opacity: 10,
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
      aria-labelledby='bi-analytics-heading'
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
                      id={i === 0 ? 'bi-analytics-heading' : undefined}
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
