'use client';
import {
  RiBookOpenLine,
  RiDatabase2Line,
  RiGitBranchLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

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
    <div className='relative overflow-hidden'>
      <div
        className='bg-[linear-gradient(135deg,_#7030B14D_0%,_#CAB9F64D_25%,_#E6F2F64D_50%,_#DDA16C4D_65%,_#FFA5814D_80%,_#E5AA664D_100%)]'
        style={{
          backgroundColor: '#F9EAE1',
          clipPath: 'none',
        }}
      >
        <div className='relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32'>
          {/* Header */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6'>
            <div>
              <div className='w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center mb-12'>
                ✨
              </div>
              <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>
                Data Governance Expertise
              </h2>
            </div>

            <div className='flex flex-col items-end gap-3'>
              <button className='px-6 mb-12 py-3 rounded-full border border-purple-400 text-purple-700 font-medium hover:bg-purple-50 transition'>
                Talk to Our Experts →
              </button>
              <p className='text-sm mb-4 text-gray-500'>
                Everything you need to build, deploy, and scale AI agents
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cards.map((card, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between'
              >
                <div className='flex flex-col items-center text-center'>
                  <div className='w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center mb-4'>
                    {card.icon}
                  </div>

                  <h3 className='text-orange-500 font-semibold mb-3'>{card.title}</h3>

                  <p className='text-gray-600 text-sm leading-relaxed'>{card.description}</p>
                </div>

                <div className='mt-6 text-center text-sm text-purple-600 font-medium bg-purple-50 py-3 rounded-xl'>
                  ✦ {card.footer}
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
