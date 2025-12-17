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
    title: 'Strategic Data Assessment',
    description:
      'Embark on your data transformation journey with a comprehensive assessment of your existing data landscape. Our experts analyze data sources, quality, and accessibility to lay the groundwork for a robust data strategy.',
    footer: 'Foundation for Data Excellence',
    icon: <RiGitBranchLine className='w-6 h-6 text-orange-500' />,
  },
  {
    title: 'Customized Data Roadmaps',
    description:
      "Every business is unique. That's why we tailor data roadmaps to align with your specific goals. Whether it's optimizing existing processes or adopting advanced analytics, our strategies are designed to meet your organization's evolving needs.",
    footer: 'Tailored Strategies for Success',
    icon: <RiDatabase2Line className='w-6 h-6 text-orange-500' />,
  },
  {
    title: 'Data Governance & Compliance',
    description:
      'Navigate the complex landscape of data governance effortlessly. We help you establish frameworks that ensure data integrity, security, and compliance with industry regulations.',
    footer: 'Secure and Compliant Data',
    icon: <RiShieldCheckLine className='w-6 h-6 text-orange-500' />,
  },
  {
    title: 'Advanced Analytics & AI Integration',
    description:
      'Uncover the power of your data with advanced analytics and AI. Our solutions integrate seamlessly with your existing systems, providing actionable insights that drive informed decision-making.',
    footer: 'AI-Powered Insights',
    icon: <RiBookOpenLine className='w-6 h-6 text-orange-500' />,
  },
];

const Technology = () => {
  return (
    <div className='relative overflow-hidden w-full'>
      <div
        className='bg-[linear-gradient(135deg,_#7030B14D_0%,_#CAB9F64D_25%,_#E6F2F64D_50%,_#DDA16C4D_65%,_#FFA5814D_80%,_#E5AA664D_100%)]'
        style={{
          backgroundColor: '#F9EAE1',
          clipPath: 'none',
        }}
      >
        <div className='w-full px-4 md:px-6 lg:px-12 xl:px-24 pt-20 pb-16'>
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
              Data Strategy Expertise
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
                  <p className='text-gray-600 text-sm leading-relaxed max-w-2xl'>
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
