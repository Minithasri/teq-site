// 'use client';

// import { Play } from 'lucide-react';
// import Image from 'next/image';
// import { useState } from 'react';

// const videoCards = [
//   {
//     title: 'The Future of Retail is Autonomous',
//     subtitle: 'Optimizing Retail Operations with 15 Autonomous AI Agents',
//     image: 'https://img.youtube.com/vi/C3q0SFpHo4c/maxresdefault.jpg',
//     videoUrl: 'https://youtu.be/C3q0SFpHo4c?si=K1ZtbslXeVSU2bDv',
//   },
//   {
//     title: 'Introducing the Agent Hub',
//     subtitle: 'Centralized Intelligence Platform for Collaborative AI Agents',
//     image: 'https://img.youtube.com/vi/IkPFwxKLgVE/maxresdefault.jpg',
//     videoUrl: 'https://youtu.be/IkPFwxKLgVE?si=PtZ2luux6cc--qv4',
//   },
//   {
//     title: 'Automating Booking Amendments',
//     subtitle: 'Streamlining Logistics and Smart Booking Processes with AI',
//     image: 'https://img.youtube.com/vi/Wiru_U36CFk/maxresdefault.jpg',
//     videoUrl: 'https://youtu.be/Wiru_U36CFk?si=1jSv9-xW5EihAkGH',
//   },
//   {
//     title: 'Logistics at Machine Speed',
//     subtitle: 'High-Speed Logistics Automation and Supply Chain Intelligence',
//     image: 'https://img.youtube.com/vi/KEJiPfx3F4o/maxresdefault.jpg',
//     videoUrl: 'https://youtu.be/KEJiPfx3F4o?si=Opgf3Dn_krPMdmvN',
//   },
//   {
//     title: 'Rostering Agentic AI Clarity',
//     subtitle: 'Clarity and Efficiency in Workforce Rostering through AI',
//     image: 'https://img.youtube.com/vi/emuomQTY-pY/maxresdefault.jpg',
//     videoUrl: 'https://youtu.be/emuomQTY-pY?si=wy35XDRiRxGwokJT',
//   },
// ];

// const Videos = () => {
//   return (
//     <section className='px-6 md:px-16 lg:px-24 bg-white pb-32'>
//       <div className='max-w-7xl mx-auto'>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {videoCards.map((card, index) => (
//             <div
//               key={index}
//               className='bg-white rounded-[40px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group cursor-pointer flex flex-col h-full'
//               onClick={() => window.open(card.videoUrl, '_blank')}
//             >
//               {/* Thumbnail Container with Padding */}
//               <div className='p-4 pb-0'>
//                 <div className='relative aspect-video w-full overflow-hidden rounded-[30px]'>
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className='object-cover transition-transform duration-500 group-hover:scale-105'
//                     unoptimized={true}
//                   />
//                   {/* Purple Overlay */}
//                   <div className='absolute inset-0 bg-[#9F55C7]/10 transition-opacity group-hover:bg-[#9F55C7]/25' />

//                   {/* Watch Button Pill */}
//                   <div className='absolute inset-0 flex items-center justify-center transition-all duration-300'>
//                     <div className='flex items-center gap-3 bg-white px-6 py-2.5 rounded-full shadow-lg transform transition-transform group-hover:scale-110'>
//                       <div className='bg-[#9F55C7] rounded-full p-1.5'>
//                         <Play className='w-4 h-4 text-white fill-white' />
//                       </div>
//                       <span className='font-bold text-[#151C28] text-sm tracking-wide'>Watch</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Container */}
//               <div className='p-8 pt-6 flex flex-col flex-grow'>
//                 <h3
//                   className='text-xl font-bold mb-3 tracking-tight leading-tight'
//                   style={{ color: '#9F55C7' }}
//                 >
//                   {card.title}
//                 </h3>
//                 <p className='text-[#6C7993] text-sm leading-relaxed'>{card.subtitle}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Videos;
