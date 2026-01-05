'use client';

const TechnologyPartner = () => {
  const partners = [
    { name: 'Domo', image: '/images/Domo.png' },
    { name: 'GCP', image: '/images/GCP.png' },
    { name: 'Databricks', image: '/images/Databricks.png' },
    { name: 'Snowflake', image: '/images/Snowflake.png' },
    { name: 'Boomi', image: '/images/Boomi.png' },
  ];

  return (
    <section
      className='flex flex-col items-center justify-center px-4'
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF, #F7F0FF)',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Title */}
      <div className='text-center mb-12 lg:mb-16'>
        <p className='text-[32px] font-medium text-gray-800'>
          Our Technology <span className='text-[#914ec2]'>Partners</span>
        </p>
      </div>

      {/* Responsive Layout */}
      <div className='w-full max-w-7xl mx-auto'>
        {/* ≡ LARGE SCREENS: Single Row ≡ */}
        <div className='hidden lg:flex justify-center items-center gap-12 xl:gap-16 2xl:gap-20'>
          {partners.map((partner, index) => {
            const isFirstOrLast = index === 0 || index === partners.length - 1;
            return (
              <img
                key={index}
                src={partner.image}
                alt={partner.name}
                className='object-contain transition-transform duration-300 hover:scale-110'
                style={{
                  height: isFirstOrLast ? '60px' : '75px',
                  width: isFirstOrLast ? '140px' : '180px',
                }}
                onError={e => (e.currentTarget.src = '/images/placeholder.png')}
              />
            );
          })}
        </div>

        {/* ≡ MEDIUM SCREENS: 3 top, 2 bottom ≡ */}
        <div className='hidden md:block lg:hidden'>
          <div className='flex justify-center items-center gap-10 mb-10'>
            {partners.slice(0, 3).map((partner, index) => (
              <img
                key={index}
                src={partner.image}
                alt={partner.name}
                className='object-contain transition-transform duration-300 hover:scale-110'
                style={{ height: '75px', width: '160px' }}
                onError={e => (e.currentTarget.src = '/images/placeholder.png')}
              />
            ))}
          </div>

          <div className='flex justify-center items-center gap-16'>
            {partners.slice(3, 5).map((partner, index) => (
              <img
                key={index + 3}
                src={partner.image}
                alt={partner.name}
                className='object-contain transition-transform duration-300 hover:scale-110'
                style={{ height: '75px', width: '160px' }}
                onError={e => (e.currentTarget.src = '/images/placeholder.png')}
              />
            ))}
          </div>
        </div>

        {/* ≡ MOBILE: 2 + 2 + 1 ≡ */}
        <div className='md:hidden grid grid-cols-2 gap-8 place-items-center'>
          {partners.slice(0, 2).map((partner, index) => (
            <img
              key={index}
              src={partner.image}
              alt={partner.name}
              className='object-contain transition-transform duration-300 hover:scale-110'
              style={{ height: '75px', width: '140px' }}
              onError={e => (e.currentTarget.src = '/images/placeholder.png')}
            />
          ))}

          {partners.slice(2, 4).map((partner, index) => (
            <img
              key={index + 2}
              src={partner.image}
              alt={partner.name}
              className='object-contain transition-transform duration-300 hover:scale-110'
              style={{ height: '75px', width: '140px' }}
              onError={e => (e.currentTarget.src = '/images/placeholder.png')}
            />
          ))}

          <img
            src={partners[4].image}
            alt={partners[4].name}
            className='col-span-2 object-contain transition-transform duration-300 hover:scale-110'
            style={{ height: '75px', width: '140px' }}
            onError={e => (e.currentTarget.src = '/images/placeholder.png')}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartner;
