'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin } from 'react-icons/fi';

export default function LocationsSection() {
  const locations = [
    {
      id: 1,
      name: 'USA',
      address: '6575 W Loop S, Ste 500, Bellaire, Houston, TX 77401, USA',
      image: '/images/ContactUs/usa.webp',
      mapLink: 'https://maps.app.goo.gl/FApGDXKGjCYnKtCg6',
    },
    {
      id: 2,
      name: 'United Kingdom',
      address: '11 Grove Cl Road, Essex SS6 8QU, United Kingdom',
      image: '/images/ContactUs/uk.webp',
      mapLink: 'https://maps.app.goo.gl/YQNcdTEhAL9FqenFA',
    },
    {
      id: 3,
      name: 'Bengaluru',
      address: 'Novel Tech Park, HSR Extension, Bengaluru - 560068',
      image: '/images/ContactUs/bangalore.webp',
      mapLink: 'https://maps.app.goo.gl/Y8NyM98y44uSHLM3A',
    },
    {
      id: 4,
      name: 'Chennai',
      address: 'Siddharth Building, Industrial Estate, Guindy, Chennai - 600032',
      image: '/images/ContactUs/chennai.webp',
      mapLink: 'https://maps.app.goo.gl/Eqw2EKWqsez1kuct9',
    },
    {
      id: 5,
      name: 'Coimbatore',
      address: '22JF+Q67, ELCOT SEZ, Coimbatore - 641014',
      image: '/images/ContactUs/Coimbatore.webp',
      mapLink: 'https://maps.app.goo.gl/d1nGywiWSMTHJk7k9',
    },
    {
      id: 6,
      name: 'Hosur',
      address: 'Kumudepalli, Moranapalli, Hosur, Tamil Nadu 635130',
      image: '/images/ContactUs/hosur.webp',
      mapLink: 'https://maps.app.goo.gl/i57obphBQjxg4FiXA?g_st=aw',
    },
    {
      id: 7,
      name: 'Dharmapuri',
      address:
        '116/3, First Floor, Salem Main Rd, Bharathipuram, Lakkiampatty, Dharmapuri, Tamil Nadu 636705',
      image: '/images/ContactUs/dharmapuri.webp',
      mapLink: 'https://maps.app.goo.gl/NRdwsJMYACUxuJpp8',
    },
    {
      id: 8,
      name: 'Salem',
      address: 'Kandasamy Pudur, Kamarajar Nagar Colony, Ammapet, Salem, Tamil Nadu 636014',
      image: '/images/ContactUs/salem.webp',
      mapLink: 'https://maps.app.goo.gl/7uyNo1a6wddMhMHN6',
    },
    {
      id: 9,
      name: 'Tirupathur',
      address: '3/6, CKC Road, Jaibheem Nagar, CKC Nagar, Tirupattur, Tamil Nadu 635601',
      image: '/images/ContactUs/tirupattur.webp',
      mapLink: 'https://maps.app.goo.gl/1os8Q2QZyW6CtS939',
    },
    {
      id: 10,
      name: 'Kolkata',
      address: 'Level 3, Godrej Waterside, Sector V, Salt Lake, Kolkata, WB 700091',
      image: '/images/ContactUs/kolkata.webp',
      mapLink: 'https://maps.app.goo.gl/pZjuorFijiDqXioE7',
    },
  ];

  return (
    <section className='w-full py-16 lg:py-20 bg-white'>
      <div className='w-full px-4'>
        {/* Section Title */}
        <div className='text-center mb-12 flex flex-col items-center'>
          <h2 className='text-[#333333] text-[32px] lg:text-[40px] font-bold'>Our Locations</h2>
          <div className='w-24 h-1 bg-[#7030B1] mt-3 rounded-full'></div>
        </div>

        {/* Locations Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {locations.map(location => (
            <Link
              key={location.id}
              href={location.mapLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white rounded-2xl overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_32px_rgba(0,0,0,0.12)] transform hover:scale-105 transition-all duration-300 flex flex-col border border-gray-100 group pointer-events-auto'
            >
              {/* Location Image */}
              <div className='relative w-full h-[200px]'>
                <Image src={location.image} alt={location.name} fill className='object-cover' />
              </div>

              {/* Location Info */}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-[#6f2b8c] text-[20px] font-bold mb-3'>{location.name}</h3>
                <p className='text-[#666666] text-[14px] leading-relaxed mb-6 flex-grow'>
                  {location.address}
                </p>

                {/* Footer: View on Map + Icon */}
                <div className='flex items-center justify-between mt-auto'>
                  <span className='text-[#6f2b8c] text-[14px] font-medium group-hover:underline'>
                    View on Map
                  </span>
                  <div className='w-10 h-10 rounded-full bg-[#E8EBF0] group-hover:bg-[#6f2b8c] transition-colors duration-300 flex items-center justify-center shrink-0'>
                    <FiMapPin className='text-[#6f2b8c] group-hover:text-white transition-colors duration-300 w-5 h-5 opacity-80 group-hover:opacity-100' />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
