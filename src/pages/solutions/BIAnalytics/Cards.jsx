/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import { FiArrowRight } from 'react-icons/fi';

const cardsData = [
  {
    id: 1,
    title: 'From',
    items: ['Data to Insights', 'Insights to Actions'],
    bgColor: 'bg-purple-700',
  },
  {
    id: 2,
    title: 'Not Just Graphs & Charts, But Storytelling Dashboards',
    bgColor: 'bg-teal-700',
    icon: '📊',
  },
  {
    id: 3,
    title: 'Data to Insights, Insights to Actions',
    bgColor: 'bg-orange-500',
  },
  {
    id: 4,
    title: 'Self-Service BI Enablement',
    bgColor: 'bg-cyan-500',
  },
];

export default function Cards() {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-4 md:px-6 lg:px-12 xl:px-24'>
        {/* LEFT – CARD GRID */}
        <div className='grid grid-cols-2 gap-6'>
          {cardsData.map(card => (
            <div
              key={card.id}
              className={`${card.bgColor} rounded-3xl p-6 flex flex-col justify-center min-h-[180px] text-white`}
            >
              {card.icon && <div className='text-4xl mb-3'>{card.icon}</div>}
              <h3 className='text-lg font-semibold leading-snug'>{card.title}</h3>
              {card.items && (
                <div className='mt-4 space-y-2'>
                  {card.items.map((item, idx) => (
                    <div
                      key={idx}
                      className='bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-sm'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT – CONTENT */}
        <div className='max-w-lg'>
          <h2 className='text-4xl font-semibold text-purple-800 mb-6'>What GWC does?</h2>

          <p className='text-gray-600 leading-relaxed text-md mb-8'>
            Leveraging our end-to-end BI and analytics solutions, we uncover insights into how
            historical and current data can shape the future of your organization.
          </p>

          <button className='inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white rounded-full shadow-md hover:bg-purple-700 transition'>
            Contact Us
            <FiArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
}
