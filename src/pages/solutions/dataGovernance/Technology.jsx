'use client';

import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import {
  RiBookOpenLine,
  RiDatabase2Line,
  RiGitBranchLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import img1 from '../../../../public/images/solutions/Icons.png';

const cards = [
  {
    title: 'Data Lineage',
    description:
      'Prevent breaking changes & resolve data issues quickly with end-to-end Data Lineage implementation.',
    footer: 'Accelerate Impact & Root cause Analysis',
    icon: <RiGitBranchLine className='w-6 h-6 text-orange-500' />,
  },
  {
    title: 'Business Glossary',
    description:
      'We enable regulatory compliance and responsible data management by building transparency and a strong data-driven culture.',
    footer: 'Your Dictionary for Data Assets',
    icon: <RiBookOpenLine className='w-6 h-6 text-orange-500' />,
  },
  {
    title: 'Active Meta Data',
    description:
      'Our API-driven governance tools seamlessly connect with all data platforms to enable unified discovery, analysis, and collaboration.',
    footer: 'Dynamic map of your data landscape',
    icon: <RiDatabase2Line className='w-6 h-6 text-orange-500' />,
  },
  {
    title: 'Intelligent Automation',
    description:
      'Stop wasting hours on manual metadata entry. Automate enrichment across your data landscape and reclaim your day.',
    footer: 'Boosting Efficiency and Control',
    icon: <RiShieldCheckLine className='w-6 h-6 text-orange-500' />,
  },
];

const Technology = () => {
  return (
    <div className='mt-8 relative overflow-hidden'>
      <div
        className='bg-[linear-gradient(135deg,_#7030B14D_0%,_#CAB9F64D_25%,_#E6F2F64D_50%,_#DDA16C4D_65%,_#FFA5814D_80%,_#E5AA664D_100%)]'
        style={{
          backgroundColor: '#F9EAE1',
          clipPath: 'none',
        }}
      >
        <div className=' max-w-7xl ml-24 px-6 pt-20 pb-32'>
          {/* Header */}
          <div className='flex items-center mb-16 gap-6'>
            {/* LEFT ICON */}
            <div className='w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center shrink-0'>
              <Image src={img1} alt='Data Governance Expertise' width={30} height={30} />
            </div>

            {/* DOTTED CONNECTOR LINE */}
            <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,rgba(107,114,128,0.45)_12%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x' />

            {/* RIGHT CTA */}
            <button className='px-4 py-2 rounded-full border border-purple-400 text-purple-700 font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'>
              Talk to Our Experts
              <FiArrowRight className='w-4 h-4' />
            </button>
          </div>

          {/* Title + Subtitle BELOW */}
          <div className='flex flex-col mb-8 md:flex-row justify-between items-start md:items-center gap-6'>
            <h2 className='text-3xl md:text-4xl  font-medium text-gray-800'>
              Data Governance Expertise
            </h2>

            <p className='text-sm text-gray-500 mr-2 text-right'>
              Everything you need to build, deploy, and scale AI agents
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-md flex flex-col justify-between min-h-[280px]'
              >
                {/* Card Body */}
                <div className='p-10 flex flex-col items-center text-center'>
                  {/* Icon */}
                  <div className='w-14 h-14 rounded-xl bg-gray-50 shadow-xl border border-gray-300 flex items-center justify-center mb-5'>
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className='text-orange-500 font-medium mb-4'>{card.title}</h3>

                  {/* DOTTED DIVIDER */}
                  <div className='w-full h-[1px] my-4 bg-[linear-gradient(to_right,#E5E7EB_35%,rgba(0,0,0,0)_0%)] bg-[length:14px_2px] bg-repeat-x rounded-full' />

                  {/* Description */}
                  <p className='text-gray-600 text-sm leading-relaxed max-w-sm'>
                    {card.description}
                  </p>
                </div>

                {/* FOOTER GRADIENT STRIP */}
                <div className='bg-gradient-to-r from-[#FFE9D6] to-[#F7E6FF] text-gray-700 text-sm font-medium px-6 py-4 flex items-center justify-center gap-2 rounded-b-2xl'>
                  <span className='text-purple-600'>✦</span>
                  {card.footer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
