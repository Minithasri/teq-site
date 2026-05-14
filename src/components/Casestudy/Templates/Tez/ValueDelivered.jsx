'use client';

const ValueDelivered = () => {
  return (
    <section className='relative w-full bg-[#173958] py-24 px-6 md:px-16 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <h2 className='font-bold mb-10' style={{ color: '#FCFBF8', fontSize: '36px' }}>
          Value Delivered
        </h2>

        {/* Content */}
        <div
          className='space-y-10 max-w-6xl leading-relaxed'
          style={{ color: '#FAFAFABF', fontSize: '18px' }}
        >
          <p>
            This engagement transformed a fragmented, manually-driven data environment into a
            centralized, AI-powered analytics platform enabling our client to move from reactive
            reporting to proactive, insight-driven operations.
          </p>
          <p>
            The platform is built for scale. As the client expands into new markets and service
            lines, the architecture is ready to absorb new data sources, support additional user
            roles, and deliver increasingly sophisticated predictive capabilities ensuring long-term
            competitive advantage in the rapidly evolving smart mobility landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueDelivered;
