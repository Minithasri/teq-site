'use client';
import Image from 'next/image';
import { FiAward, FiGlobe, FiTrendingUp, FiUsers } from 'react-icons/fi';
import AINativeImg from '../../../public/images/AINative.jpg';
import { div } from 'three/src/nodes/math/OperatorNode';

const AINative = () => {
  const stats = [
    { icon: FiUsers, value: '40+', label: 'AI Engineers' },
    { icon: FiAward, value: '8+', label: 'Years of Experience' },
    { icon: FiGlobe, value: '5+', label: 'Countries Served' },
    { icon: FiTrendingUp, value: '200%', label: 'Avg. Client ROI' },
  ];

  return (
    <div className='bg-[#fafafa] shadow-lg'>
      <section className='py-16 md:py-24 bg-[#fafafa]'>
        <div className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20'>
          <div className='bg-white rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch'>
              {/* Left Column: Image */}
              <div className='w-full'>
                <Image
                  src={AINativeImg}
                  alt='AI Native Handshake'
                  className='w-full h-[250px] sm:h-[300px] lg:h-full rounded-[32px] object-cover shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                />
              </div>

              {/* Right Column: Content */}
              <div className='flex flex-col justify-center'>
                <h2 className='text-[30px] md:text-[38px] font-medium text-[#222222] leading-[1.2] mb-6'>
                  We're{' '}
                  <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent font-semibold inline-block'>
                    AI-Native
                  </span>{' '}
                  From
                  <br className='hidden md:block' /> Day One
                </h2>

                <p className='text-[#737373] text-[14px] lg:text-[12px] font-medium leading-[1.7] mb-5'>
                  Founded by a team of AI researchers and enterprise engineers, Agent Forge exists
                  to bridge the gap between cutting edge AI research and real world business impact.
                  We don't just build chatbots we architect autonomous systems that reason, learn,
                  and act.
                </p>

                <p className='text-[#737373] text-[14px] lg:text-[12px] font-medium leading-[1.7] mb-2'>
                  Our team includes former engineers from leading AI labs and Fortune 500 companies
                  who bring deep expertise in large language models, reinforcement learning, and
                  scalable system design. Every agent we build is production grade, secure, and
                  designed to evolve with your business.
                </p>

                {/* Stats Row */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
                  {stats.map((stat, index) => (
                    <div key={index} className='flex flex-col items-center text-center'>
                      <div className='w-[36px] h-[36px] md:w-10 md:h-10 rounded-full bg-[#f3ecf9] flex items-center justify-center text-[#914ec2] mb-2'>
                        <stat.icon className='text-[16px] md:text-[16px]' />
                      </div>
                      <h4 className='text-[#222222] font-bold text-[18px] lg:text-[18px] mb-1'>
                        {stat.value}
                      </h4>
                      <p className='text-[#888888] text-[13px] lg:text-[11px] font-normal'>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINative;
