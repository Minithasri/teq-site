'use client';

import Image from 'next/image';

const challenges = [
  'Manual review of large specbook PDFs — hundreds of pages per project',
  'Time-consuming and resource-intensive submittal identification process',
  'High risk of human errors and missed critical details',
  'Lack of scalability across multiple ongoing projects',
  'No automated system to extract and structure submittal data',
];

const solutionCards = [
  {
    icon: '/images/Templates/gcon/trigger.svg',
    title: 'Trigger-Based Workflow',
    desc: 'Automated initiation of specbook analysis upon document upload, eliminating manual kickoffs.',
  },

  {
    icon: '/images/Templates/gcon/fileset.svg',
    title: 'Fileset Organizer Agent',
    desc: 'Structures and prepares PDF documents for downstream processing, ensuring consistency.',
  },

  {
    icon: '/images/Templates/gcon/section.svg',
    title: 'Section Identification Agent',
    desc: 'Accurately classifies specification sections using AI-powered document understanding.',
  },

  {
    icon: '/images/Templates/gcon/submittal.svg',
    title: 'Submittal Extraction Agent',
    desc: 'Captures relevant submittal data fields and stores them in a centralized database for access.',
  },

  {
    icon: '/images/Templates/gcon/validation.svg',
    title: 'Validation & Re-Analysis',
    desc: 'Built-in approval/rejection workflow with a Re-analysis Agent that reprocesses rejected items for improved accuracy.',
  },

  {
    icon: '/images/Templates/gcon/download.svg',
    title: 'Structured Data Export',
    desc: 'Final approved data exported as structured CSV, ready for downstream systems and reporting.',
  },
];

const OverviewSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* LEFT IMAGE */}
      <div className='absolute left-0 top-[240px] z-0 hidden md:block'>
        <Image
          src='/images/Templates/gcon/construction-concept.png'
          alt='Construction'
          width={280}
          height={340}
          priority
          className='h-[340px] w-[440px] object-cover'
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className='absolute right-[50px] top-[360px] z-0 hidden md:block'>
        <Image
          src='/images/Templates/gcon/challenges.png'
          alt='Construction'
          width={500}
          height={360}
          priority
          className='h-[400px] w-full object-contain'
        />
      </div>

      {/* MAIN CONTENT */}
      <div className='relative z-10 mx-auto max-w-7xl py-10 md:py-14'>
        {/* ================= CLIENT OVERVIEW ================= */}
        <div className='text-center'>
          {/* LABEL */}
          <h2 className='text-3xl md:text-6xl leading-none font-semibold uppercase tracking-[1px] text-[#35CDBD]'>
            CLIENT OVERVIEW
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-5 text-sm md:text-lg leading-[1.8] text-[#565D6A]'>
            A leading construction company in North America managing multiple large-scale projects,
            requiring efficient handling of project documentation and compliance processes. With
            hundreds of pages of specification books per project and a growing portfolio, the
            organization needed a modern approach to keep pace with operational demands.
          </p>
        </div>

        {/* ================= CHALLENGE SECTION ================= */}
        <div className='relative mt-10 md:mt-12'>
          {/* CENTER CONTENT */}
          <div className='mx-auto max-w-[720px] text-center'>
            {/* LABEL */}
            <h2 className='text-3xl md:text-5xl leading-none font-semibold uppercase tracking-[1px] text-[#FF3131]'>
              THE CHALLENGE
            </h2>

            {/* HEADING */}
            <h3 className='mt-5 text-xl md:text-3xl leading-[1.25] tracking-[-1px] text-[#171C26]'>
              Manual Processes Were Holding Back Growth
            </h3>
          </div>

          {/* CHALLENGE BOX */}
          <div className='relative z-10 mx-auto mt-8 w-full max-w-[680px] md:max-w-[800px] rounded-[10px] border-2 border-[#FF3B3B] bg-white px-5 md:px-7 py-5 md:py-6'>
            <div className='space-y-5'>
              {challenges.map((item, index) => (
                <div key={index} className='flex items-start gap-3'>
                  {/* ICON */}
                  <div className='pt-[2px]'>
                    <Image
                      src='/images/Templates/gcon/warning.svg'
                      alt='Error'
                      width={20}
                      height={20}
                      className='h-[20px] w-[20px] object-contain'
                    />
                  </div>

                  {/* TEXT */}
                  <p className='text-[14px] md:text-[16px] leading-[1.7] text-[#505763]'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SOLUTION SECTION ================= */}
        <div className='mt-16 md:mt-24 text-center'>
          {/* LABEL */}
          <h2 className='text-3xl md:text-5xl leading-none font-semibold uppercase tracking-[1px] text-[#6A4DFF]'>
            OUR SOLUTION
          </h2>

          {/* HEADING */}
          <h3 className='mt-5 text-2xl md:text-4xl leading-[1.3] tracking-[-1px] text-[#171C26]'>
            An Intelligent Multi-Agent AI Workflow
          </h3>

          {/* DESCRIPTION */}
          <p className='mx-auto mt-5 max-w-5xl text-[14px] md:text-[18px] leading-[1.8] text-[#6C7380]'>
            We designed and implemented an end-to-end AI-driven document processing pipeline,
            orchestrated through a multi-agent architecture with human-in-the-loop validation.
          </p>
        </div>

        {/* ================= SOLUTION CARDS ================= */}
        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-3'>
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className='min-h-[220px] rounded-[12px] border border-[#6A4DFF] bg-white px-6 py-6'
            >
              {/* TOP */}
              <div className='flex items-center gap-4'>
                {/* ICON */}
                <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[10px] border border-[#6A4DFF]'>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={22}
                    height={22}
                    className='h-[22px] w-[22px] object-contain'
                  />
                </div>

                {/* TITLE */}
                <h4 className='text-md md:text-xl font-medium leading-[1.5] text-[#6A4DFF]'>
                  {card.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-8 text-[14px] md:text-[15px] leading-[1.9] text-[#7A8190]'>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
