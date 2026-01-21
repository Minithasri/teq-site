'use client';

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
        <div className='hidden lg:flex justify-center items-center gap-8 xl:gap-12 2xl:gap-12'>
          {partners.map((partner, index) => {
            const isFirst = index === 0;
            const isLyzr = partner.name === 'Lyzr';
            const isDatabricks = partner.name === 'Databricks';
            const isBoomi = partner.name === 'Boomi';

            let height = '75px';
            if (isFirst) height = '45px';
            else if (isLyzr) height = '35px';
            else if (isDatabricks) height = '90px';
            else if (isBoomi) height = '40px';

            return (
              <img
                key={index}
                src={partner.image}
                alt={partner.name}
                className={`object-contain transition-transform duration-300 hover:scale-110 ${
                  isLyzr ? 'ml-4' : ''
                }`}
                style={{
                  height: height,
                  width: isFirst ? '120px' : 'auto',
                  maxWidth: '180px',
                }}
                onError={e => (e.currentTarget.src = '/images/placeholder.png')}
              />
            );
          })}
        </div>

        {/* ≡ MEDIUM SCREENS: 3 top, 3 bottom ≡ */}
        <div className='hidden md:block lg:hidden'>
          <div className='flex justify-center items-center gap-8 mb-10'>
            {partners.slice(0, 3).map((partner, index) => {
              const isDatabricks = partner.name === 'Databricks';
              return (
                <img
                  key={index}
                  src={partner.image}
                  alt={partner.name}
                  className='object-contain transition-transform duration-300 hover:scale-110'
                  style={{
                    height: index === 0 ? '45px' : isDatabricks ? '90px' : '75px',
                    width: index === 0 ? '120px' : 'auto',
                    maxWidth: '160px',
                  }}
                  onError={e => (e.currentTarget.src = '/images/placeholder.png')}
                />
              );
            })}
          </div>

          <div className='flex justify-center items-center gap-12'>
            {partners.slice(3).map((partner, index) => {
              const isLyzr = partner.name === 'Lyzr';
              const isBoomi = partner.name === 'Boomi';
              return (
                <img
                  key={index + 3}
                  src={partner.image}
                  alt={partner.name}
                  className={`object-contain transition-transform duration-300 hover:scale-110 ${
                    isLyzr ? 'ml-4' : ''
                  }`}
                  style={{
                    height: isLyzr ? '35px' : isBoomi ? '40px' : '75px',
                    width: 'auto',
                    maxWidth: '160px',
                  }}
                  onError={e => (e.currentTarget.src = '/images/placeholder.png')}
                />
              );
            })}
          </div>
        </div>

        {/* ≡ MOBILE: Grid 2 cols ≡ */}
        <div className='md:hidden grid grid-cols-2 gap-6 place-items-center'>
          {partners.map((partner, index) => {
            const isLyzr = partner.name === 'Lyzr';
            const isDatabricks = partner.name === 'Databricks';
            const isBoomi = partner.name === 'Boomi';

            let height = '75px';
            if (index === 0) height = '45px';
            else if (isLyzr) height = '35px';
            else if (isDatabricks) height = '90px';
            else if (isBoomi) height = '40px';

            return (
              <img
                key={index}
                src={partner.image}
                alt={partner.name}
                className='object-contain transition-transform duration-300 hover:scale-110'
                style={{
                  height: height,
                  width: index === 0 ? '120px' : 'auto',
                  maxWidth: '140px',
                }}
                onError={e => (e.currentTarget.src = '/images/placeholder.png')}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartner;
