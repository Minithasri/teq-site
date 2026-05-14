'use client';

import { Sparkles, Layout, ShieldCheck, Users, Search } from 'lucide-react';

const KeyCapabilities = () => {
  const capabilities = [
    {
      icon: <Sparkles className='w-5 h-5 text-[#2EC2B3]' />,
      title: 'AI-Powered Insights',
      description:
        'Automated, AI-generated summaries that surface critical safety risks, compliance gaps, and operational anomalies enabling leadership to act on data in seconds, not hours.',
    },
    {
      icon: <Layout className='w-5 h-5 text-[#2EC2B3]' />,
      title: 'Custom Dashboard Experience',
      description:
        "Intuitive, publication-quality dashboards combining Domo's analytical power with custom-built React applications delivering clarity that generic tools cannot match.",
    },
    {
      icon: <ShieldCheck className='w-5 h-5 text-[#2EC2B3]' />,
      title: 'Automated Data Validation',
      description:
        'Intelligent validation logic that automatically highlights missing or incomplete form submissions, eliminating tedious manual reviews and ensuring data integrity at scale.',
    },
    {
      icon: <Users className='w-5 h-5 text-[#2EC2B3]' />,
      title: 'Personalized User Views',
      description:
        'Dynamic, role-based filtering and customizable dashboard components allow each user from field supervisors to executives to see exactly what matters most to them.',
    },
    {
      icon: <Search className='w-5 h-5 text-[#2EC2B3]' />,
      title: 'Drill-Down Analytics',
      description:
        'Multi-level drill-down capabilities empower users to move from executive summaries to granular field-level data with a single click, uncovering root causes and patterns.',
    },
  ];

  return (
    <section className='py-16 px-6 md:px-16 lg:px-24 bg-[#F0F1F5]'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Heading */}
        <h2 className='font-bold mb-16' style={{ color: '#151C28', fontSize: '36px' }}>
          Key Capabilities Delivered
        </h2>

        {/* Capabilities List */}
        <div className='flex flex-col gap-6'>
          {capabilities.map((item, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-xl shadow-sm border-l-4 flex items-start gap-8 transition-transform hover:-translate-y-1'
              style={{ borderLeftColor: '#2EC2B3' }}
            >
              {/* Icon Container */}
              <div
                className='w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0'
                style={{ backgroundColor: '#2EC2B31A' }}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div className='flex-1 pt-1'>
                <h3 className='font-bold mb-3' style={{ color: '#151C28', fontSize: '20px' }}>
                  {item.title}
                </h3>
                <p className='leading-relaxed' style={{ color: '#6A7181', fontSize: '16px' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
