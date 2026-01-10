'use client';
import { FiBox, FiCopy, FiUsers } from 'react-icons/fi';

export default function StatsSection() {
  // Triangle Icon Component
  const TriangleIcon = ({ icon: Icon, color }) => (
    <div className='relative flex items-center justify-center'>
      {/* Triangle Shape - using SVG for the rounded inverted triangle */}
      <svg
        width='80'
        height='80'
        viewBox='0 0 100 100'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='relative z-0 drop-shadow-md'
      >
        <path
          d='M 10 15 Q 10 5, 20 5 L 80 5 Q 90 5, 90 15 L 90 20 Q 90 25, 85 35 L 55 85 Q 50 95, 45 85 L 15 35 Q 10 25, 10 20 Z'
          fill={color}
          style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))' }}
        />
      </svg>
      {/* Center Icon */}
      <div className='absolute z-10 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Icon className='w-8 h-8 text-white' strokeWidth={2} />
      </div>
    </div>
  );

  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
      {/* Background Animated Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='floating-element absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#662B8C]/10 to-[#4988BF]/10 rounded-full blur-xl'></div>
        <div className='floating-element absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-[#F28963]/10 to-[#F27166]/10 rounded-full blur-2xl'></div>
        <div className='floating-element absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#4988BF]/10 to-[#662B8C]/10 rounded-full blur-lg'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* Card 1: ROI */}
          <div className='group text-center p-8 bg-white text-[#525252] shadow-xl rounded-2xl relative overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2'>
            <div className='relative z-10 flex flex-col items-center'>
              <div className='mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                <TriangleIcon icon={FiBox} color='#7030B1' />
              </div>

              <h3 className='text-4xl font-bold mb-2 text-[#7030B1]'>345 %</h3>
              <p className='text-md text-[#7030B1] font-medium'>ROI over 3 years</p>
            </div>
          </div>

          {/* Card 2: Revenue */}
          <div className='group text-center p-8 bg-white text-[#525252] shadow-xl rounded-2xl relative overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2'>
            <div className='relative z-10 flex flex-col items-center'>
              <div className='mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                <TriangleIcon icon={FiCopy} color='#4988BF' />
              </div>

              <h3 className='text-4xl font-bold mb-2 text-[#4988BF]'>Over $ 1M</h3>
              <p className='text-md text-[#4988BF] font-medium'>in increased revenue</p>
            </div>
          </div>

          {/* Card 3: Payback */}
          <div className='group text-center p-8 bg-white text-[#525252] shadow-xl rounded-2xl relative overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2'>
            <div className='relative z-10 flex flex-col items-center'>
              <div className='mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                <TriangleIcon icon={FiUsers} color='#F27166' />
              </div>

              <h3 className='text-4xl font-bold mb-2 text-[#F27166]'>&lt; 6 Month</h3>
              <p className='text-md text-[#F27166] font-medium'>payback period</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
