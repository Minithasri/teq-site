'use client';

import Image from 'next/image';

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      image: '/images/AboutUs/section71.png',
      category: 'CEO Insights',
      tag: 'Top 10 CEO under 40',
      title: 'Naveen Kumar: Thinking Growth For The Society At Large (Work From Hometown)',
      description:
        'Over the last decade, the industry has evolved along a global pathway that was not predictable, becoming one of the world’s most coding-literate ecosystems. Amid the country’s progressive efforts to build an equitable and inclusive tech workforce, there remains a need to find effective ways to push harder and create sustainable success.',
    },
    {
      id: 2,
      image: '/images/AboutUs/section72.png',
      category: 'SiliconIndia Startup City Magazine',
      tag: '10 Best Data & AI Startups',
      title: 'GWC DATA.AI: Navigating the Road to Cloud Data Analytics, AI & Beyond',
      description:
        'The data analytics industry is driving the digital revolution, offering startups immense opportunities through actionable insights. Leveraging this potential, GWC DATA.AI is emerging as an innovative leader, strengthened by its partnership with Google Cloud and its DOMO APAC Certified Partner accreditation.',
    },
    {
      id: 3,
      image: '/images/AboutUs/section73.png',
      category: 'GCU Puraskar',
      tag: 'Award 2023',
      title: 'GCU Puraskar',
      description:
        'Honoured to receive the GCU Puraskar 2022 from Garden City University, Bangalore, for our contribution in the field of Analytics and Business Intelligence.',
    },
  ];

  return (
    <section className='w-full py-20 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-24'>
          {awards.map((item, index) => {
            const isImageLeft = index % 2 === 0; // True for 1st and 3rd items
            const isThirdItem = index === 2;

            // Common Content Component
            const ContentSection = () => (
              <div
                // LOGIC CHANGE:
                // If Image is Left (1st/3rd): Use negative margin (-ml-24) to overlap.
                // If Image is Right (2nd): Use NO negative margin to prevent intersection.
                className={`flex-1 relative z-10 w-full mt-8 lg:mt-0 ${
                  isImageLeft ? 'lg:-ml-24' : ''
                }`}
              >
                <div
                  // LOGIC CHANGE:
                  // If Image Left: Add padding (pl-32) so text doesn't hit image.
                  // If Image Right: NO extra padding needed since they don't overlap.
                  className={`${isImageLeft ? 'lg:pl-32' : ''}`}
                >
                  {/* --- HEADER --- */}
                  <div
                    className={`mb-6 flex flex-col gap-3 ${
                      !isImageLeft ? 'items-end text-right' : 'items-start'
                    }`}
                  >
                    <span className='text-[18px] font-semibold' style={{ color: '#6F2B8C' }}>
                      {item.category}
                    </span>

                    {item.tag && (
                      <span className='bg-[#F26B66] text-white text-[12px] font-medium px-4 py-2 rounded shadow-sm inline-block'>
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* --- CARD --- */}
                  <div
                    // LOGIC CHANGE:
                    // If Image Left: Pull card left (-ml-12) for style.
                    // If Image Right: No negative margins.
                    className={`rounded-3xl p-8 lg:p-10 shadow-sm w-full ${
                      isImageLeft ? 'lg:-ml-12' : ''
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #F1EBFE 0%, #FFFFFF 100%)',
                    }}
                  >
                    <h3
                      className={`text-[24px] lg:text-[28px] font-semibold mb-4 leading-tight ${
                        !isImageLeft ? 'text-right' : 'text-left'
                      }`}
                      style={{
                        background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-[14px] leading-relaxed ${
                        !isImageLeft ? 'text-right' : 'text-left'
                      }`}
                      style={{ color: '#525252' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );

            // Common Image Component
            const ImageSection = () => (
              <div
                // LOGIC CHANGE:
                // If Image Left: Use -mt-8 for overlap style.
                // If Image Right: Use lg:ml-12 to push image away from text (Gap).
                className={`relative z-20 shrink-0 rounded-2xl overflow-hidden shadow-xl ${
                  isImageLeft ? '-mt-8' : 'lg:ml-12'
                }`}
                style={{
                  width: isThirdItem ? '460px' : '280px',
                  height: isThirdItem ? '245px' : '340px',
                }}
              >
                <Image src={item.image} alt={item.title} fill className='object-cover' />
              </div>
            );

            return (
              <div
                key={item.id}
                // LOGIC CHANGE: Added justify-between to push elements apart when not overlapping
                className='flex flex-col lg:flex-row items-center lg:justify-between relative'
              >
                {isImageLeft ? (
                  <>
                    <ImageSection />
                    <ContentSection />
                  </>
                ) : (
                  <>
                    <ContentSection />
                    <ImageSection />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
