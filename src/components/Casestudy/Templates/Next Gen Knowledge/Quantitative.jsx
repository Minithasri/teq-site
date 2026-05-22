import Image from 'next/image';

export default function Quantitative() {
  const stats = [
    {
      value: '70%',
      title: 'Faster Information Retrieval',
      description: 'compared to traditional keyword searches',
    },
    {
      value: '50%',
      title: 'Reduction in Manual Review Time',
      description: 'for technical and business teams',
    },
    {
      value: '60%',
      title: 'Improvement in Accuracy',
      description: 'and relevance of search results',
    },
  ];

  const additionalAchievements = [
    'Real-time performance visibility through Azure Monitor dashboards',
    'Enhanced data security and compliance with Azure-native governance and access controls',
    'Scalable foundation supporting further AI-driven automation initiatives across the enterprise',
  ];

  return (
    <section className='w-full py-16 px-4 md:px-8' style={{ backgroundColor: '#f6f6f682' }}>
      <div className='max-w-7xl mx-auto'>
        {/* Header content with background Image overlay effect if needed, but styling seems to be just text on gray bg in prompt,
            though image shows a faint graph bg. I will stick to clean design requested. */}
        <div className='relative mb-12'>
          {/* Abstract Background graph/chart if needed, keeping it simple as per color request */}

          <div className='flex items-center gap-3 mb-4 justify-center text-center'>
            <Image
              src='/images/Templates/template10/quant.svg'
              alt='Quantitative Icon'
              width={32}
              height={32}
            />
            <h2 className='text-3xl font-bold text-gray-900'>Quantitative Outcomes</h2>
          </div>
          <p className='text-gray-500 text-lg text-center'>
            Significant, measurable improvements in enterprise knowledge management
          </p>
        </div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative z-10'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-8 py-10 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-center'
            >
              <div className='text-5xl font-bold mb-4 text-[#0F1729]/80'>{stat.value}</div>
              <h3 className='font-bold text-gray-900 text-lg mb-2'>{stat.title}</h3>
              <p className='text-gray-400 text-sm'>{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Key Achievements Banner */}
        <div
          className='rounded-xl p-8 md:p-12 text-white'
          style={{
            background: 'linear-gradient(90deg, #0073E6 0%, #13B6EC 100%)',
          }}
        >
          <h3 className='text-xl md:text-2xl font-bold mb-6 text-center'>
            Additional Key Achievements
          </h3>
          <div className='space-y-4'>
            {additionalAchievements.map((item, index) => (
              <div key={index} className='flex items-start gap-3'>
                <div className='mt-1 shrink-0'>
                  {/* Simple checkmark icon */}
                  <svg
                    className='w-5 h-5 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    ></path>
                  </svg>
                </div>
                <p className='text-white/90 text-sm md:text-base leading-relaxed'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
