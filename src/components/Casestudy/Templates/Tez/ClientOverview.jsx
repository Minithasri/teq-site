'use client';

const ClientOverview = () => {
  return (
    <section className='relative w-full bg-white pt-32 pb-20 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <h2
          className='font-bold uppercase tracking-wider mb-10'
          style={{ color: '#288A82', fontSize: '32px' }}
        >
          CLIENT OVERVIEW
        </h2>

        {/* Content */}
        <div
          className='space-y-8 max-w-6xl'
          style={{ color: '#6C7993', fontSize: '18px', lineHeight: '1.6' }}
        >
          <p>
            Our client is a leading smart parking and mobility SaaS provider operating at the
            intersection of IoT, payments, and urban infrastructure. Their platform powers valet
            services, sensor-enabled parking systems, integrated payment gateways, and
            consumer-facing mobile applications.
          </p>
          <p>
            As their business scaled across multiple service lines and markets, the volume and
            complexity of their data grew exponentially creating an urgent need for a unified,
            intelligent data platform that could serve as a single source of truth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientOverview;
