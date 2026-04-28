'use client';

const PartnerLogo = ({ partner }) => {
  let imgHeight = '30px';
  if (partner.name === 'Domo') imgHeight = '32px';
  else if (partner.name === 'GCP') imgHeight = '42px';
  else if (partner.name === 'Databricks') imgHeight = '22px';
  else if (partner.name === 'Snowflake') imgHeight = '38px';
  else if (partner.name === 'Boomi') imgHeight = '30px';
  else if (partner.name === 'Lyzr') imgHeight = '34px';

  return (
    <div className='bg-white rounded-full flex items-center justify-center md:px-6 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] h-[50px] md:h-[56px]'>
      <img
        src={partner.image}
        alt={partner.name}
        className='object-contain'
        style={{ height: imgHeight, width: 'auto' }}
        onError={e => (e.currentTarget.src = '/images/placeholder.png')}
      />
    </div>
  );
};

const TechnologyPartner = () => {
  const partners = [
    { name: 'Domo', image: '/images/Domo.png' },
    { name: 'GCP', image: '/images/GCP.png' },
    { name: 'Databricks', image: '/images/Databricks.png' },
    { name: 'Snowflake', image: '/images/Snowflake.png' },
    { name: 'Boomi', image: '/images/Boomi.png' },
    { name: 'Lyzr', image: '/images/HomePage/Lyzr.png' },
  ];

  return (
    <section
      className='flex flex-col items-center justify-center px-4 bg-[#f8f4f9]'
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Title */}
      <div className='text-center mb-10 lg:mb-10'>
        <p className='text-[22px] font-medium text-gray-800'>
          Our Technology <span className='text-[#914DC1] '>Partners</span>
        </p>
      </div>

      {/* Responsive Layout */}
      <div className='w-full max-w-7xl mx-auto'>
        {/* ≡ LARGE SCREENS: Single Row ≡ */}
        <div className='hidden lg:flex justify-center items-center gap-4 xl:gap-8 flex-wrap'>
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} />
          ))}
        </div>

        {/* ≡ MEDIUM SCREENS: 3 top, 3 bottom ≡ */}
        <div className='hidden md:block lg:hidden'>
          <div className='flex justify-center items-center gap-6 mb-8'>
            {partners.slice(0, 3).map((partner, index) => (
              <PartnerLogo key={index} partner={partner} />
            ))}
          </div>
          <div className='flex justify-center items-center gap-6'>
            {partners.slice(3).map((partner, index) => (
              <PartnerLogo key={index + 3} partner={partner} />
            ))}
          </div>
        </div>

        {/* ≡ MOBILE: Grid 2 cols ≡ */}
        <div className='md:hidden grid grid-cols-2 gap-4 place-items-center'>
          {partners.map((partner, index) => (
            <PartnerLogo key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartner;
