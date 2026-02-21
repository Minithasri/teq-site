import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const cards = [
  {
    image: '/images/partners/snowflake/newimage1.svg',
    title: 'Performance Optimization',
    description:
      'Our Snowflake services optimize complex queries, significantly improving query execution times and overall system performance.',
  },
  {
    image: '/images/partners/snowflake/newimage2.svg',
    title: 'Cost Optimization',
    description:
      "We implement cost-effective solutions by leveraging Snowflake's separation of storage & compute resources, resulting in optimized resource utilization & cost savings.",
  },
  {
    image: '/images/partners/snowflake/img3.webp',
    title: 'Data Modeling Excellence',
    description:
      'We design & implement highly efficient & scalable data models in Snowflake, enhancing data organization & accessibility for analytics & reporting.',
  },
  {
    image: '/images/partners/snowflake/newimage4.svg',
    title: 'Security Implementation',
    description:
      'We implement robust security measures, including role-based access control (RBAC), encryption, & data masking, ensuring data integrity & compliance with security standards.',
  },
  {
    image: '/images/partners/snowflake/newimage6.svg',
    title: 'ETL Process Enhancements',
    description:
      'Our services streamline ETL processes, reducing data processing times and improving the efficiency of data movement within the Snowflake platform.',
  },
  {
    image: '/images/partners/snowflake/newimage5.svg',
    title: 'BI Integration Success',
    description:
      'We integrate Snowflake with various Business Intelligence (BI) tools, enabling seamless data visualization & reporting capabilities for end-users.',
  },
];

export default function Success() {
  return (
    <section className='bg-white py-16 lg:py-24 relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full flex items-center justify-start z-0'>
        <div className='relative w-[1000px] h-[1000px] -translate-x-1/4'>
          <Image
            src='/images/HomePage/circle_bg.svg'
            alt='Background'
            fill
            className='object-contain opacity-100'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Section */}
        <header className='hidden md:flex md:flex-row items-center justify-between w-full gap-4 md:gap-4 lg:gap-4 mb-16'>
          {/* Left Icon (decorative) */}
          <div className='w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center shrink-0'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={30} height={30} />
          </div>

          {/* Connector */}
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
          />

          {/* CTA */}
          <Link
            href='/contact'
            className='px-8 py-3 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to our experts
            <FiArrowRight className='w-4 h-4' aria-hidden />
          </Link>
        </header>

        {/* Title & Description */}
        <div className='flex flex-col md:flex-row justify-between items-start mb-12 gap-8'>
          <h2 className='text-[40px] text-[#404040] font-medium'>What sets us apart?</h2>
          <p
            className='text-[15px] max-w-xl text-left leading-relaxed'
            style={{ color: '#525252' }}
          >
            As a Snowflake partner, GWC combines certified expertise and proven delivery with a
            client first approach to provide tailored end to end Snowflake solutions that maximize
            value and drive competitive advantage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cards.map((card, index) => (
            <div key={index}>
              {/* Gradient Border Wrapper */}
              <div
                className='rounded-[20px] p-[2px]'
                style={{
                  background: 'linear-gradient(135deg, #D9B8FF 0%, #FAE0FA 100%)',
                }}
              >
                <div className='bg-white rounded-[20px] p-6 h-full hover:shadow-lg transition-shadow duration-300 group'>
                  <div className='aspect-[4/3] relative rounded-xl overflow-hidden mb-6 bg-gray-100'>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                  </div>
                  <h3 className='text-[18px] font-semibold text-[#404040] mb-3'>{card.title}</h3>
                  <p className='text-[14px] leading-relaxed text-[#525252]'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
