/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { RiDatabase2Line } from 'react-icons/ri';

// Images
import img1 from '../../../../public/images/solutions/Frame 1566662963.jpg';
import img2 from '../../../../public/images/solutions/Frame 1566662964.jpg';
import img3 from '../../../../public/images/solutions/Frame 1566662965.jpg';
import img4 from '../../../../public/images/solutions/Frame 1566662966.jpg';

// JSON-driven content + layout config
const cardsData = [
  {
    id: 1,
    title: 'From to',
    image: img4,
    content: [{ from: 'Data Deluge', to: 'Data Delight' }],
    layout: {
      width: '268.6px',
      height: '230.37px',
      radius: '29.49px',
      padding: '20px',
      rounded: 'rounded-tl-[29.49px] rounded-tr-[29.49px] rounded-br-[29.49px]',
    },
  },
  {
    id: 2,
    title: 'Data Based Decision Confidence',
    image: img1,
    bgColor: 'bg-teal-700',
    showIcon: true,
    layout: {
      width: '175.7px',
      height: '175.7px',
      padding: '24px',
      rounded: 'rounded-[29.49px] rounded-bl-none',
      position: 'mt-14',
    },
  },
  {
    id: 3,
    title: 'Frictionless Collaboration with Business Data',
    image: img2,
    layout: {
      width: '175.7px',
      height: '175.7px',
      padding: '20px',
      rounded: 'rounded-tl-[29.49px] rounded-bl-[29.49px] rounded-br-[29.49px]',
      position: 'justify-self-end',
    },
  },
  {
    id: 4,
    title: 'Compliance Management',
    image: img3,
    layout: {
      width: '232.23px',
      height: '181.85px',
      padding: '20px',
      rounded: 'rounded-tr-[29.49px] rounded-br-[29.49px] rounded-bl-[29.49px]',
    },
  },
];

export default function Cards() {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-6'>
        {/* LEFT – IMAGE CARDS */}
        <div className='grid grid-cols-2 gap-3 relative'>
          {cardsData.map(card => (
            <div
              key={card.id}
              style={{
                width: card.layout.width,
                height: card.layout.height,
                borderRadius: card.layout.radius,
              }}
              className={`relative overflow-hidden ${
                card.layout.rounded || ''
              } ${card.layout.position || ''}`}
            >
              <Image src={card.image} alt={card.title} fill className='object-cover' />

              <div
                className='absolute inset-0 flex flex-col justify-center text-white'
                style={{ padding: card.layout.padding }}
              >
                {/* Database Icon for card 2 */}
                {card.showIcon && (
                  <div className='mb-4'>
                    <RiDatabase2Line className='w-10 h-10' />
                  </div>
                )}

                <h3 className='text-lg font-semibold mb-3 leading-snug'>{card.title}</h3>

                {card.content && (
                  <div className='space-y-2 text-sm'>
                    {card.content.map((item, idx) => (
                      <div key={idx} className='flex items-center gap-2'>
                        <span className='px-3 py-1 bg-white/20 rounded-full'>{item.from}</span>
                        <FiArrowRight className='w-5 h-5' />
                        <span className='px-3 py-1 bg-white text-purple-700 rounded-full'>
                          {item.to}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – CONTENT */}
        <div className='max-w-lg'>
          <h2 className='text-4xl font-semibold text-purple-800 mb-6'>
            Why This Works Better with GWC
          </h2>

          <p className='text-gray-600 leading-relaxed text-md mb-8'>
            By collaborating with trusted data governance solution providers, our certified experts
            offer a full spectrum of data governance services, including data classification, access
            control, lineage tracking, quality assurance, and reporting.
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
