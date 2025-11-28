'use client';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const BuiltAIAgents = () => {
  const cards = [
    {
      icon: '/images/Search.svg',
      title: 'Discovery & Assessment',
      subtitle:
        'We begin by understanding your business goals, data landscape, and identifying the best opportunities for intelligent automation.',
    },
    {
      icon: '/images/Reason.svg',
      title: 'Design & Development',
      subtitle:
        'Our team selects the right logic, models, and workflows—crafting agent behavior, conversation flows, and trigger mechanisms tailored to your use case.',
    },
    {
      icon: '/images/Deploy.svg',
      title: 'Deployment & Integration',
      subtitle:
        "We integrate the agent directly into your existing environment—whether it's a dashboard, dataset, workflow, or API-driven system—ensuring a seamless experience.",
    },
    {
      icon: '/images/Refresh.svg',
      title: 'Optimization & Evolution',
      subtitle:
        'Once deployed, we continuously monitor agent performance, collect feedback, and iterate to ensure the solution evolves with your business needs.',
    },
  ];

  return (
    <section
      className="px-4 py-16 md:py-20 lg:py-24"
      style={{
        backgroundColor: '#f3edff',
        padding: '100px 20px',
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Spark + Button Row */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 lg:mb-16 w-full">

          <div className="z-10">
            <div
              className="flex items-center justify-center rounded-full shadow-md"
              style={{ backgroundColor: '#ffffff', width: '66px', height: '66px' }}
            >
              <Image
                src="/images/Spark.svg"
                alt="Spark"
                width={36}
                height={36}
              />
            </div>
          </div>

          <div className="hidden sm:flex border-t-2 border-dashed border-[#1F1F1F] absolute left-[100px] right-[300px] top-1/2 transform -translate-y-1/2 opacity-20" />

          <div className="z-10">
            <button
              className="flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg justify-center"
              style={{
                border: '2px solid #8c49bf',
                borderRadius: '30px',
                color: '#8c49bf',
                backgroundColor: 'transparent',
                width: '250px',
                height: '48px',
                fontSize: '16px',
              }}
            >
              Talk to our experts
              <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Title + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 mb-16 lg:mb-20">

          <div className="text-center lg:text-left">
            <h1
              className="leading-tight"
              style={{
                fontSize: '40px',
                fontWeight: 500,
                color: '#1f1f1f',
              }}
            >
              How We Develop Purpose-Built AI Agents
            </h1>
          </div>

          <div className="flex justify-center lg:justify-end">
            <p
              className="max-w-xl text-center lg:text-left font-medium leading-relaxed"
              style={{
                color: '#737373',
                fontSize: '14px',
                lineHeight: '1.6',
                fontWeight: '500',
              }}
            >
              We follow a streamlined, value-driven process to build agents that solve real business problems with precision and scalability.
            </p>
          </div>
        </div>

        {/* Feature Cards – Fully Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-start w-full"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '36px 24px',
                width: '100%',
                maxWidth: '570px',
                minHeight: '275px',
              }}
            >
              <div
                className="mb-4 flex items-center justify-center shadow-md rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #7030B1 0%, #B56DD3 100%)',
                  width: '72px',
                  height: '72px',
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={36}
                  height={36}
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>

              <h3
                className="font-semibold mb-4 leading-tight"
                style={{
                  color: '#1f1f1f',
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {card.title}
              </h3>

              <p
                className="leading-relaxed text-center"
                style={{
                  color: '#525252',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '1.6',
                }}
              >
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BuiltAIAgents;
