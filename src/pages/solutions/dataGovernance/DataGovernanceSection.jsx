// /* eslint-disable indent */
// 'use client';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';
// import img1 from '../../../../public/images/solutions/datagoverance/imgi_4_Audit.png';
// import img2 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Access.png';
// import img3 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Classification.png';
// import img5 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Governance_Training.png';
// import img4 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Lifecycle.png';
// import img7 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Privacy.png';
// import img10 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Quality.png';
// import img8 from '../../../../public/images/solutions/datagoverance/imgi_4_Data_Risk.png';
// import img6 from '../../../../public/images/solutions/datagoverance/imgi_4_Governance.png';
// import img9 from '../../../../public/images/solutions/datagoverance/imgi_4_Metadata.png';

// gsap.registerPlugin(ScrollTrigger);

// // ---------------- CONTENT ----------------
// const tabs = [
//   'Data Classification & Sensitivity',
//   'Data Quality Management',
//   'Data Lineage',
//   'Data Access & Authorization',
//   'Data Privacy Compliance',
//   'Data Governance Policies',
//   'Metadata Management',
//   'Training & Awareness',
//   'Data Risk Management',
//   'Audit & Monitoring',
// ];

// const cards = [
//   {
//     badge: 'Data Classification & Sensitivity',
//     title: 'Craft Your Customized Data Roadmap With GWC',
//     points: [
//       'Secure your business and comply with regulations by implementing a robust data classification and sensitivity approach.',
//       'Protect confidential information, prevent data breaches, and build trust with customers and stakeholders.',
//     ],
//     image: img3,
//   },
//   {
//     badge: 'Data Quality Management',
//     title: 'Ensure Reliable & Trusted Data',
//     points: [
//       'Ensure trusted data fuels informed decisions.',
//       'Turn data chaos into clarity to empower your business.',
//     ],
//     image: img10,
//   },
//   {
//     badge: 'Data Lineage',
//     title: 'Gain End-to-End Data Visibility',
//     points: [
//       'Identifies potential downstream effects of data changes.',
//       'Provides transparency into data origins and processing.',
//     ],
//     image: img4,
//   },
//   {
//     badge: 'Data Access & Authorization',
//     title: 'Secure Role-Based Data Access',
//     points: [
//       'Protects sensitive information from unauthorized access and misuse.',
//       'Sets clear data classification levels based on sensitivity.',
//     ],
//     image: img2,
//   },
//   {
//     badge: 'Data Privacy Compliance',
//     title: 'Meet Global Privacy Standards',
//     points: [
//       'Robust security measures in place to protect customer data from unauthorized access, disclosure, alteration, or destruction.',
//       'Includes encryption, access controls, and incident response plans.',
//     ],
//     image: img7,
//   },
//   {
//     badge: 'Data Governance Policies',
//     title: 'Define Governance Standards',
//     points: [
//       'Boosts operational efficiency with a framework for efficient data management processes.',
//       'Proactive measures to reduce potential data breach issues and financial costs.',
//     ],
//     image: img6,
//   },
//   {
//     badge: 'Metadata Management',
//     title: 'Improve Data Discoverability',
//     points: [
//       'Standards to establish consistent ways to describe and categorize your data.',
//       'Integrates with your existing data infrastructure by making metadata easily accessible across your systems.',
//       'Empower self-service analytics.',
//     ],
//     image: img9,
//   },
//   {
//     badge: 'Training & Awareness',
//     title: 'Build a Data-Driven Culture',
//     points: [
//       'Utilizes online training platforms and knowledge management systems for easy access and continuous learning.',
//       'Certified professionals to develop and implement effective training programs.',
//     ],
//     image: img5,
//   },
//   {
//     badge: 'Data Risk Management',
//     title: 'Identify & Mitigate Risks',
//     points: [
//       'Demonstrates commitment to protecting valuable data, fostering trust and confidence.',
//       'Ensures adherence to data privacy laws and reduces the risk of costly fines.',
//     ],
//     image: img8,
//   },
//   {
//     badge: 'Audit & Monitoring',
//     title: 'Continuous Governance Monitoring',
//     points: [
//       'Identifies areas of non-compliance and potential risks and focus on Data quality and consistency across the organization.',
//       'Expertise on early detection and response to data issues before they cause significant harm to the business.',
//     ],
//     image: img1,
//   },
// ];

// // Border colors for each card
// const borderColors = [
//   'border-purple-400',
//   'border-blue-400',
//   'border-indigo-400',
//   'border-violet-400',
//   'border-fuchsia-400',
//   'border-pink-400',
//   'border-rose-400',
//   'border-orange-400',
//   'border-amber-400',
//   'border-emerald-400',
// ];

// // ---------------- COMPONENT ----------------
// export default function DataGovernanceSection() {
//   const sectionRef = useRef(null);
//   const cardsContainerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//   if (!sectionRef.current) return;

//   let currentIndex = 0;

//   const ctx = gsap.context(() => {
//     // Initial state
//     cardRefs.current.forEach((card, i) => {
//       gsap.set(card, {
//         opacity: i === 0 ? 1 : 0,
//         scale: i === 0 ? 1 : 0.97,
//         y: i === 0 ? 0 : 40, // keep inside
//         pointerEvents: i === 0 ? 'auto' : 'none',
//       });
//     });

//     ScrollTrigger.create({
//       trigger: sectionRef.current,
//       start: 'top top',
//       end: `+=${cards.length * 120}vh`,
//       pin: true,
//       scrub: false,
//       onUpdate: self => {
//         const nextIndex = Math.min(
//           cards.length - 1,
//           Math.floor(self.progress * cards.length)
//         );

//         if (nextIndex === currentIndex) return;

//         const prevCard = cardRefs.current[currentIndex];
//         const nextCard = cardRefs.current[nextIndex];

//         setActiveIndex(nextIndex);

//         // 🔹 OUTGOING CARD (soft disappear)
//         gsap.to(prevCard, {
//           opacity: 0,
//           scale: 0.97,
//           y: -20, // tiny move up (inside)
//           duration: 0.6,
//           ease: 'power2.inOut',
//           pointerEvents: 'none',
//         });

//         // 🔹 INCOMING CARD (bottom → place)
//         gsap.fromTo(
//           nextCard,
//           {
//             opacity: 0,
//             scale: 0.97,
//             y: 50, // comes from bottom INSIDE
//           },
//           {
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             duration: 1.2, // smooth & visible
//             ease: 'power3.out',
//             pointerEvents: 'auto',
//           }
//         );

//         currentIndex = nextIndex;
//       },
//     });
//   }, sectionRef);

//   return () => ctx.revert();
// }, []);

//   return (
//     <div ref={sectionRef} className='relative min-h-screen bg-white py-20'>
//       {/* TABS */}
//       <div className='container mx-auto px-4 mb-12'>
//         <div className='flex flex-wrap gap-3 justify-center'>
//           {tabs.map((tab, idx) => (
//             <button
//               key={idx}
//               className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
//                 idx === activeIndex
//                   ? 'bg-purple-100 border-purple-400 text-purple-700'
//                   : 'bg-white border-gray-300 text-gray-700 hover:border-purple-300'
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* CARDS CONTAINER */}
//       <div ref={cardsContainerRef} className='container mx-auto px-4'>
//         <div className='relative' style={{ minHeight: '600px' }}>
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               ref={el => (cardRefs.current[index] = el)}
//               className='absolute inset-0 w-full'
//               style={{
//                 transformOrigin: 'center center',
//               }}
//             >
//               <div
//                 className={`bg-white rounded-3xl border-2 ${borderColors[index]} shadow-xl p-12 min-h-[500px]`}
//               >
//                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full'>
//                   {/* LEFT */}
//                   <div className='space-y-6'>
//                     <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200'>
//                       <span className='text-purple-600 text-lg'>✦</span>
//                       <span className='text-sm font-medium text-purple-700'>{card.badge}</span>
//                     </div>

//                     <h2 className='text-4xl font-bold text-gray-900 leading-tight'>{card.title}</h2>

//                     <ul className='space-y-4'>
//                       {card.points.map((point, i) => (
//                         <li key={i} className='flex items-start gap-3'>
//                           <span className='text-purple-600 mt-1 flex-shrink-0'>•</span>
//                           <span className='text-gray-700 text-lg leading-relaxed'>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* RIGHT IMAGE */}
//                   <div className='relative h-[400px] lg:h-full'>
//                     <Image
//                       src={card.image}
//                       alt={card.title}
//                       fill
//                       className='object-contain rounded-2xl'
//                       priority={index === 0}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
/* eslint-disable indent */
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

/* ---------------- DATA ---------------- */

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
      'Secure your business and comply with regulations.',
      'Protect confidential information and build trust.',
    ],
    image: img3,
  },
  {
    badge: 'Data Quality Management',
    title: 'Ensure Reliable & Trusted Data',
    points: ['Ensure trusted data fuels decisions.', 'Turn chaos into clarity.'],
    image: img10,
  },
  {
    badge: 'Data Lineage',
    title: 'Gain End-to-End Data Visibility',
    points: ['Identify downstream impacts.', 'Track data origins and flow.'],
    image: img4,
  },
  {
    badge: 'Data Access & Authorization',
    title: 'Secure Role-Based Data Access',
    points: ['Prevent unauthorized access.', 'Define sensitivity levels.'],
    image: img2,
  },
  {
    badge: 'Data Privacy Compliance',
    title: 'Meet Global Privacy Standards',
    points: ['Protect customer data.', 'Strong encryption and controls.'],
    image: img7,
  },
  {
    badge: 'Data Governance Policies',
    title: 'Define Governance Standards',
    points: ['Efficient data processes.', 'Reduce compliance risks.'],
    image: img6,
  },
  {
    badge: 'Metadata Management',
    title: 'Improve Data Discoverability',
    points: ['Consistent metadata standards.', 'Enable self-service analytics.'],
    image: img9,
  },
  {
    badge: 'Training & Awareness',
    title: 'Build a Data-Driven Culture',
    points: ['Continuous learning platforms.', 'Certified training programs.'],
    image: img5,
  },
  {
    badge: 'Data Risk Management',
    title: 'Identify & Mitigate Risks',
    points: ['Reduce fines and exposure.', 'Build stakeholder confidence.'],
    image: img8,
  },
  {
    badge: 'Audit & Monitoring',
    title: 'Continuous Governance Monitoring',
    points: ['Detect issues early.', 'Maintain data consistency.'],
    image: img1,
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
    <div ref={sectionRef} className='relative min-h-screen bg-white py-20'>
      {/* TABS */}
      <div className='container mx-auto px-4 mb-12'>
        <div className='grid grid-cols-5 gap-4 max-w-9xl mx-auto'>
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => onTabClick(i)}
              className={`px-3 py-3 rounded-full border text-sm font-medium transition text-center leading-tight break-words ${
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
      <div className='container mx-auto px-4'>
        <div className='relative min-h-[600px]'>
          {cards.map((card, i) => (
            <div key={i} ref={el => (cardRefs.current[i] = el)} className='absolute inset-0 w-full'>
              <div
                className={`bg-white rounded-3xl border-2 ${borderColors[i]} shadow-xl p-8 min-h-[500px]`}
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                  <div className='space-y-6'>
                    <span className='inline-flex px-4 py-2 rounded-full border bg-purple-50 text-purple-700'>
                      ✦ {card.badge}
                    </span>
                    <h2 className='text-4xl font-bold'>{card.title}</h2>
                    <ul className='space-y-3'>
                      {card.points.map((p, idx) => (
                        <li key={idx} className='flex gap-2'>
                          <span className='text-purple-600'>•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='relative rounded-xl h-[400px]'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className='object-contain rounded-2xl'
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
