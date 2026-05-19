'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';

const solutionSteps = [
  {
    step: 'STEP 01',
    title: 'Data Integration',
    description:
      'Integrated Shopify, POS systems, and Google Sheets into a centralized data model with unified schemas.',
  },
  {
    step: 'STEP 02',
    title: 'ETL Pipeline Development',
    description:
      'Built structured ETL pipelines to standardize KPI definitions and eliminate inconsistencies across reports.',
  },
  {
    step: 'STEP 03',
    title: 'Real-Time Dashboards',
    description:
      'Developed interactive dashboards in Domo with drill-down capabilities across products, regions, and customer segments.',
  },
  {
    step: 'STEP 04',
    title: 'Automated Reporting',
    description:
      'Replaced manual Excel reporting with automated refresh cycles and executive-level summary dashboards. Integration Architecture',
  },
];

export default function SolutionSection() {
  return (
    <section className="relative w-full font-['Poppins'] bg-[#F8FAFF] overflow-hidden py-20">
      {/* --- HEADER SECTION --- */}
      <div className='max-w-7xl mx-auto px-4 text-center mb-16 relative z-30'>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 600,
            letterSpacing: '1.4px',
            color: '#002471',
            textTransform: 'uppercase',
            transform: 'rotate(-0.32deg)',
            marginBottom: '10px',
          }}
        >
          THE SOLUTION
        </h2>

        <h3
          style={{
            fontSize: '30px',
            fontWeight: 500,
            color: '#1D2530',
            letterSpacing: '-0.75px',
            marginBottom: '15px',
          }}
        >
          From Fragmented Spreadsheets to a Unified Analytics Engine
        </h3>

        <p
          className='mx-auto'
          style={{
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '26px',
            color: '#575757',
            maxWidth: '1108px',
          }}
        >
          GWC designed a modern sales analytics framework by integrating multiple data sources into
          a centralized model with structured ETL pipelines, standardized KPIs, and interactive
          real-time dashboards built in Domo.
        </p>
      </div>

      {/* --- MAIN CONTENT AREA WITH BACKGROUND --- */}
      <div className='relative w-full flex justify-center min-h-[700px]'>
        {/* Background Image Container - Updated to cover and absolute positioning */}
        <div
          className='absolute inset-0 z-0'
          style={{
            opacity: 0.44,
          }}
        >
          <Image
            src='/images/Templates/templatez/csperformance/cspsol.jpg'
            alt='Dashboard Background'
            fill
            className='object-cover' // Changed from object-contain to cover to match the full background requirement
            priority
          />
        </div>

        {/* Steps List - Adjusted positioning */}
        <div className='relative z-20 flex flex-col items-start gap-8 w-full max-w-[1100px] mt-10 px-4 md:pl-20'>
          {solutionSteps.map((step, index) => (
            <div key={index} className='relative flex items-center w-full'>
              {/* Vertical Connector Line */}
              {index !== solutionSteps.length - 1 && (
                <div
                  className='absolute left-[20px] top-[48px] w-[2px]'
                  style={{
                    height: 'calc(100% + 24px)',
                    backgroundColor: '#E5E7EB', // Very light silver/gray line
                    opacity: 0.8,
                  }}
                />
              )}

              {/* Blue Circle Icon with Inner Ring - Replicated from image */}
              <div
                className='flex-shrink-0 z-10 flex items-center justify-center'
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  background: '#1147BB', // Deep blue background
                }}
              >
                {/* The white border/ring around the checkmark */}
                <div className='flex items-center justify-center w-6 h-6 border-[1.5px] border-white rounded-full'>
                  <Check
                    size={8}
                    className='text-white'
                    strokeWidth={6} // Bold checkmark
                  />
                </div>
              </div>

              {/* Card Container - Adjusted width and spacing to match requirement */}
              <div
                className='ml-8 bg-white/95 backdrop-blur-sm flex-grow lg:flex-grow-0'
                style={{
                  width: '100%',
                  maxWidth: '850px',
                  minHeight: '124.75px',
                  borderRadius: '12px',
                  border: '1.5px solid #0935E4',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
                  padding: '16px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: '#1147BB',
                    letterSpacing: '1px',
                    marginBottom: '4px',
                  }}
                >
                  {step.step}
                </span>
                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1D2530',
                    marginBottom: '6px',
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#4B5563',
                    lineHeight: '1.5',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
