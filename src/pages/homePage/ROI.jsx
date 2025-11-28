'use client';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const ROI = () => {
  const features = [
    { number: '30%', text: 'higher success rate', color: '#fa7516' },
    { number: '5x', text: 'faster decision making', color: '#fa7516' },
    { number: '24/7', text: 'continuous operation', color: '#fa7516' },
    { number: '8 weeks', text: 'average deployment', color: '#fa7516' },
  ];

  const cards = [
    {
      title: 'From Insight to Action',
      subtitle: "Our AI Agents don't stop at analysis — they act.",
      icon: '/images/idea.svg'
    },
    {
      title: 'Solve First, Then Build',
      subtitle: 'We start with your business challenge — not the code.',
      icon: '/images/plan.svg'
    },
    {
      title: 'Ready in Weeks, Not Months',
      subtitle: 'Our proven frameworks speed up deployment effortlessly.',
      icon: '/images/Grow.svg'
    },
    {
      title: 'Always On, Always Scalable',
      subtitle: 'Agentic AI runs nonstop, managing complex tasks day and night.',
      icon: '/images/deploy.svg'
    },
  ];

  return (
    <section
      className='flex items-center justify-center'
      style={{
        backgroundColor: '#ffffff',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* EXACT SAME CONTAINER STRUCTURE AS HOMEBANNER */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        {/* Title */}
        <div className='max-w-4xl mx-auto text-center mb-8 md:mb-12'>
          <h1
            className='font-medium leading-tight px-4'
            style={{
              fontSize: 'clamp(24px, 5vw, 32px)',
              color: '#333333',
              lineHeight: '55px'
            }}
          >
            Increase your ROI with <span style={{ color: '#914ec2' }}>Agentic AI</span> that
            <img
              src="/images/Spark.svg"
              alt="Spark"
              className='inline-block align-middle mx-2'
              style={{
                width: 'clamp(32px, 8vw, 40px)',
                height: 'clamp(32px, 8vw, 40px)',
              }}
            />
            <br />
            turns data into decisions and fuels smarter growth.
          </h1>
        </div>

        {/* GRID — perfectly aligned start/end like HomeBanner */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.07fr_0.93fr] gap-8 md:gap-12 items-start'>

          {/* LEFT COLUMN */}
          <div
            className='p-4 md:p-6 rounded-[20px] md:rounded-[25px] w-full'
            style={{ backgroundColor: '#f7f2f6' }}
          >
            <div className='flex flex-col gap-4 md:gap-6'>
              {cards.map((card, index) => (
                <div key={index} className='flex gap-3 md:gap-4 items-center'>

                  <div
                    className='flex-shrink-0 rounded-full p-3 md:p-4 flex items-center justify-center'
                    style={{ backgroundColor: '#eee4f5' }}
                  >
                    <img
                      src={card.icon}
                      alt={`${card.title} icon`}
                      className='w-5 h-5 md:w-6 md:h-6'
                    />
                  </div>

                  <div
                    className='rounded-[12px] md:rounded-[15px] bg-white p-4 md:p-6 flex-1 min-w-0 flex items-center'
                    style={{ height: '90px' }}
                  >
                    <div>
                      <h3
                        style={{
                          color: '#404040',
                          fontSize: '16px',
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className='leading-relaxed break-words'
                        style={{
                          color: '#737373',
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — aligned perfectly */}
          <div className='flex flex-col justify-center h-full w-full lg:pl-8'>
            <div className='w-full'>

              {features.map((feature, index) => (
                <div
                  key={index}
                  className='border-b flex items-center'
                  style={{
                    borderBottomColor: '#d2d2d6',
                    borderBottomWidth: '1px',
                    height: '95px'
                  }}
                >
                  <div className='py-6 w-full flex items-center'>
                    <span
                      style={{
                        color: feature.color,
                        fontSize: '30px',
                        fontWeight: 500
                      }}
                    >
                      {feature.number}
                    </span>

                    <span
                      className='ml-3'
                      style={{
                        color: '#737373',
                        fontSize: '16px',
                        fontWeight: 400
                      }}
                    >
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}

            </div>

            <div className='mt-8 lg:mt-12 flex justify-center lg:justify-start'>
              <button
                className='flex items-center justify-center gap-2 text-white transition-all duration-300 hover:scale-105'
                style={{
                  background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                  borderRadius: '25px',
                  width: '150px',
                  height: '45px',
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                Contact Us
                <FiArrowRight className='text-lg' />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;
