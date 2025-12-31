import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    image: '/images/partners/Snowflake/img5.png',
    title: 'Performance Optimization',
    description:
      'Our Snowflake services optimize complex queries, significantly improving query execution times and overall system performance.',
  },
  {
    image: '/images/partners/Snowflake/img4.png',
    title: 'Cost Optimization',
    description:
      "We implement cost-effective solutions by leveraging Snowflake's separation of storage & compute resources, resulting in optimized resource utilization & cost savings.",
  },
  {
    image: '/images/partners/Snowflake/img3.png',
    title: 'Data Modeling Excellence',
    description:
      'We design & implement highly efficient & scalable data models in Snowflake, enhancing data organization & accessibility for analytics & reporting.',
  },
  {
    image: '/images/partners/Snowflake/img2.png',
    title: 'Security Implementation',
    description:
      'We implement robust security measures, including role-based access control (RBAC), encryption, & data masking, ensuring data integrity & compliance with security standards.',
  },
  {
    image: '/images/partners/Snowflake/img1.png',
    title: 'ETL Process Enhancements',
    description:
      'Our services streamline ETL processes, reducing data processing times and improving the efficiency of data movement within the Snowflake platform.',
  },
  {
    image: '/images/partners/Snowflake/img6.png',
    title: 'BI Integration Success',
    description:
      'We integrate Snowflake with various Business Intelligence (BI) tools, enabling seamless data visualization & reporting capabilities for end-users.',
  },
];

export default function Success() {
  return (
    <section className='bg-white py-16 lg:py-24 relative overflow-hidden'>
      {/* Background decoration - optional based on "white colour" request but adding subtle if needed, sticking to white for now */}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12 lg:mb-16 relative'>
          <div className='relative z-10'>
            <div className='w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-4 md:mb-0'>
              <Image
                src='/images/partners/Snowflake/logo1.svg'
                alt='Snowflake Logo'
                width={32}
                height={32}
                className='w-8 h-8'
              />
            </div>
          </div>

          {/* Dotted Line - decorative */}
          <div className='hidden md:block absolute top-1/2 left-20 right-[200px] h-[2px] border-t-2 border-dotted border-gray-200 -translate-y-1/2 -z-0'></div>

          <Link
            href='/contact'
            className='relative z-10 px-6 py-2 rounded-full border border-[#9D5CFF] text-[#6c2bd9] font-medium text-sm hover:bg-[#F9F5FF] transition-colors flex items-center gap-2 group'
          >
            Talk to Our Experts
            <span className='group-hover:translate-x-0.5 transition-transform'>→</span>
          </Link>
        </div>

        <div className='mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'>What Sets Us Apart?</h2>
          <p className='text-gray-600 text-lg leading-relaxed max-w-3xl ml-auto text-right'>
            As a Snowflake partner, GWC combines certified expertise, proven delivery, and a client
            first approach to provide tailored, end to end Snowflake solutions that maximize value
            and drive competitive advantage in data and analytics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-[20px] p-6 border border-pink-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group'
            >
              <div className='aspect-[4/3] relative rounded-xl overflow-hidden mb-6 bg-gray-100'>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>{card.title}</h3>
              <p className='text-gray-600 leading-relaxed text-[15px]'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
