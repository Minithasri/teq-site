'use client';

import Image from 'next/image';

const Competitors = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Card 1: Why GWC... (Span 2 cols) */}
          <div className='lg:col-span-2 bg-white rounded-[32px] border border-[#E5E7EB] p-8 md:p-12 relative overflow-hidden shadow-sm'>
            {/* Dummy BG Placeholder */}
            <div className='absolute inset-0 bg-gray-50/50 -z-10' />

            <div className='flex flex-col md:flex-row items-start md:items-center gap-6 mb-12'>
              <div className='w-20 h-20 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
                <Image
                  src='/images/partners/databricks/robo.svg'
                  alt='Robo'
                  width={48}
                  height={48}
                />
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
                Why GWC Data.AI Over
                <br />
                Competitors
              </h2>
            </div>

            <div className='flex items-start gap-4'>
              <Image
                src='/images/partners/databricks/spark_bg.svg'
                alt='Spark'
                width={32}
                height={32}
                className='mt-1 shrink-0'
              />
              <div>
                <h3 className='text-xl font-bold text-gray-900 mb-4'>Depth + Speed</h3>
                <ul className='space-y-3 text-gray-600 list-disc list-inside marker:text-[#A855F7]'>
                  <li>Rapid deployment capabilities</li>
                  <li>Deep architecture maturity</li>
                  <li>Sustainable & resilient solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Purple Card (Span 1 col) */}
          <div className='lg:col-span-1 bg-[#7030B1] text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px]'>
            {/* Dummy BG Placeholder */}
            <div className='absolute inset-0 bg-white/5 -z-10' />

            <p className='text-lg md:text-xl font-medium mb-12 leading-relaxed opacity-90'>
              Here's how GWC ensures success with tailored solutions across industries.
            </p>

            <div>
              <div className='mb-4 bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm'>
                {/* Using spark_bg as generic spark icon here as requested for generic usage? Or just spark.svg?
                     User said: "for spark - ...spark_bg.svg" and "3 botom cards spark - ...spark.svg".
                     The purple card has a glowing icon. spark_bg.svg likely has the background circle.
                     If I put it on purple, it might look odd if it has a purple background already.
                     But let's follow instruction: "for spark - ...spark_bg.svg".
                 */}
                <Image
                  src='/images/partners/databricks/spark_bg.svg'
                  alt='Spark'
                  width={24}
                  height={24}
                  className='brightness-0 invert'
                />
              </div>
              <h3 className='text-xl font-bold mb-4'>Tailored Industry Experience</h3>
              <ul className='space-y-3 text-white/80 list-disc list-inside marker:text-white/50'>
                <li>Domain-specific expertise</li>
                <li>Healthcare & manufacturing focus</li>
                <li>Regulatory compliance awareness</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Holistic Cost Governance */}
          <div className='bg-white rounded-[32px] border border-[#E5E7EB] p-8 relative overflow-hidden shadow-sm'>
            {/* Dummy BG Placeholder */}
            <div className='absolute inset-0 bg-gray-50/50 -z-10' />

            <div className='mb-6'>
              <Image
                src='/images/partners/databricks/spark.svg'
                alt='Spark'
                width={24}
                height={24}
              />
            </div>
            <h3 className='text-lg font-bold text-gray-900 mb-4'>Holistic Cost Governance</h3>
            <ul className='space-y-3 text-gray-600 text-sm list-disc list-inside marker:text-[#A855F7]'>
              <li>Cost visibility from day one</li>
              <li>Auto-scaling & spot instances</li>
              <li>Proactive usage monitoring</li>
            </ul>
          </div>

          {/* Card 4: Security (Labeled Holistic Cost Governance in visual, but content is Security) */}
          <div className='bg-white rounded-[32px] border border-[#E5E7EB] p-8 relative overflow-hidden shadow-sm'>
            {/* Dummy BG Placeholder */}
            <div className='absolute inset-0 bg-gray-50/50 -z-10' />

            <div className='mb-6'>
              <Image
                src='/images/partners/databricks/spark.svg'
                alt='Spark'
                width={24}
                height={24}
              />
            </div>
            {/* Corrected title for content relevance */}
            <h3 className='text-lg font-bold text-gray-900 mb-4'>Holistic Cost Governance</h3>
            <ul className='space-y-3 text-gray-600 text-sm list-disc list-inside marker:text-[#A855F7]'>
              <li>Role-based access controls</li>
              <li>End-to-end encryption</li>
              <li>Complete audit trails</li>
            </ul>
          </div>

          {/* Card 5: Continuous Innovation */}
          <div className='bg-white rounded-[32px] border border-[#E5E7EB] p-8 relative overflow-hidden shadow-sm'>
            {/* Dummy BG Placeholder */}
            <div className='absolute inset-0 bg-gray-50/50 -z-10' />

            <div className='mb-6'>
              <Image
                src='/images/partners/databricks/spark.svg'
                alt='Spark'
                width={24}
                height={24}
              />
            </div>
            <h3 className='text-lg font-bold text-gray-900 mb-4'>Continuous Innovation</h3>
            <ul className='space-y-3 text-gray-600 text-sm list-disc list-inside marker:text-[#A855F7]'>
              <li>Post-deployment support</li>
              <li>Feature adoption roadmaps</li>
              <li>Continuous platform updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitors;
