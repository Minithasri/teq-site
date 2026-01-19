import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      icon: '/images/Templates/template8/bi1.svg',
      value: '30%',
      label: 'Increase in Productivity',
    },
    {
      icon: '/images/Templates/template8/bi2.svg',
      value: '1:4',
      label: 'Workforce Efficiency Improvement',
    },
    {
      icon: '/images/Templates/template8/bi3.svg',
      value: '100%',
      label: 'Digital Tool Tracking',
    },
    {
      icon: '/images/Templates/template8/bi4.svg',
      value: 'Real-time',
      label: 'Operational Insights',
    },
  ];

  const comparisons = [
    {
      metric: 'Tool Tracking',
      before: 'Manual, paper-based logs',
      after: '100% digital and real-time tracking',
    },
    {
      metric: 'Maintenance Scheduling',
      before: 'Reactive',
      after: 'Automated alerts and proactive scheduling',
    },
    {
      metric: 'Data Accuracy',
      before: 'Prone to manual errors',
      after: 'OCR-enabled, high accuracy',
    },
    {
      metric: 'Productivity',
      before: 'Frequent delays and downtime',
      after: '30% improvement through automation',
    },
    {
      metric: 'Workforce Efficiency',
      before: '1:1 manual dependency',
      after: '1:4 ratio improvement via digitization',
    },
  ];

  return (
    <section className='w-full py-20 relative'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template8/nbg.png'
          alt='Background'
          fill
          className='object-cover'
        />
      </div>

      {/* Top Left Decorative Image */}
      <div className='absolute -top-10 left-0 w-64 h-48 hidden lg:block z-10'>
        <Image
          src='/images/Templates/template8/limg.png'
          alt='Dashboard Left'
          fill
          className='object-contain object-left-top'
        />
      </div>

      {/* Top Right Decorative Image */}
      <div className='absolute -top-20 right-0 w-96 h-56 hidden lg:block z-10'>
        <Image
          src='/images/Templates/template8/rimg.png'
          alt='Dashboard Right'
          fill
          className='object-contain object-right-top'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20'>
        {/* Header */}
        <div className='text-center mb-16 text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Business Impact</h2>
          <p className='text-gray-200 text-lg'>Measurable improvements across operations</p>
        </div>

        {/* Impact Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center'
            >
              <div
                className='w-12 h-12 rounded-full mb-4 flex items-center justify-center'
                style={{ backgroundColor: '#ECECEC' }}
              >
                <Image src={item.icon} alt={item.label} width={24} height={24} />
              </div>
              <div className='text-3xl font-bold text-gray-900 mb-2'>
                {item.value} <span className='text-green-500 text-sm align-top'>↑</span>
              </div>
              <p className='text-gray-600 text-sm font-medium'>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Before and After Table */}
        <div className='bg-white rounded-2xl shadow-xl p-8 overflow-hidden'>
          <h3 className='text-2xl font-bold text-center text-gray-900 mb-8'>Before and After</h3>

          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='text-gray-900 font-bold border-b border-gray-100'>
                  <th className='py-4 pl-4 w-1/4'>Metric</th>
                  <th className='py-4 w-1/3'>Before</th>
                  <th className='py-4 w-1/3'>After</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className='border-b border-gray-50 last:border-0'>
                    <td className='py-6 pl-4 font-medium text-gray-800'>{row.metric}</td>
                    <td className='py-6 text-gray-500'>{row.before}</td>
                    <td className='py-6'>
                      <span
                        className='px-4 py-2 rounded-full text-sm font-semibold inline-block'
                        style={{
                          backgroundColor: '#25B15F1A',
                          color: '#25B15F',
                        }}
                      >
                        {row.after}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
