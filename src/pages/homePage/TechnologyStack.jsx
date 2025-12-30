'use client';
import { useState } from 'react';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiBarChartBoxFill,
  RiCloudFill,
  RiDatabase2Fill,
  RiFlashlightFill,
  RiGitBranchFill,
  RiLayoutMasonryFill,
  RiPlugFill,
  RiRobot2Fill,
  RiShieldCheckFill,
  RiStackFill,
} from 'react-icons/ri';

const badgeData = [
  { label: 'Enterprise Scale', icon: <RiStackFill className='w-5 h-5' /> },
  { label: 'Secure & Compliant', icon: <RiShieldCheckFill className='w-5 h-5' /> },
  { label: 'Cloud Native', icon: <RiCloudFill className='w-5 h-5' /> },
  { label: 'High Performance', icon: <RiFlashlightFill className='w-5 h-5' /> },
];

const cardData = [
  {
    title: 'AI + Machine Learning',
    description:
      'Cutting-edge AI models and machine learning frameworks powering intelligent solutions.',
    count: '11+ Models',
    icon: <RiRobot2Fill className='w-7 h-7 text-orange-500' />,
    images: [
      'AIML/Claude.jpg',
      'AIML/Container.jpg',
      'AIML/Container-1.jpg',
      'AIML/Gemini.jpg',
      'AIML/Haystack.jpg',
      'AIML/LangChain.jpg',
      'AIML/LLaMA (Ollama).jpg',
      'AIML/LlamaIndex.jpg',
      'AIML/OpenAI.jpg',
      'AIML/scikit-learn.jpg',
      'AIML/XGBoost.jpg',
    ],
  },
  {
    title: 'Agent Frameworks',
    description: 'Frameworks enabling autonomous agents for workflow automation and orchestration.',
    count: '7+ Frameworks',
    icon: <RiGitBranchFill className='w-7 h-7 text-orange-500' />,
    images: [
      'AgentFrameworks/AutoGen.jpg',
      'AgentFrameworks/CrewAI.jpg',
      'AgentFrameworks/LangGraph.jpg',
      'AgentFrameworks/Open Agents.jpg',
      'AgentFrameworks/React.jpg',
      'AgentFrameworks/Reflexion.jpg',
      'AgentFrameworks/TaskWeaver.jpg',
    ],
  },
  {
    title: 'Vector Stores & Retrieval',
    description: 'High-performance vector databases and retrieval pipelines for RAG.',
    count: '7+ Databases',
    icon: <RiDatabase2Fill className='w-7 h-7 text-orange-500' />,
    images: [
      'VectorRetrieval/Chroma.jpg',
      'VectorRetrieval/Document Loaders.jpg',
      'VectorRetrieval/FAISS.jpg',
      'VectorRetrieval/Pinecone.jpg',
      'VectorRetrieval/RAG pipelines.jpg',
      'VectorRetrieval/Redis VectorDB.jpg',
      'VectorRetrieval/Weaviate.jpg',
    ],
  },
  {
    title: 'Integrations',
    description: 'Seamless connectivity with APIs, workflows, and cloud services.',
    count: '9+ Services',
    icon: <RiPlugFill className='w-7 h-7 text-orange-500' />,
    images: [
      'Integrations/Airflow.jpg',
      'Integrations/AWS.jpg',
      'Integrations/Azure Functions.jpg',
      'Integrations/GCP.jpg',
      'Integrations/GraphQL.jpg',
      'Integrations/Make.jpg',
      'Integrations/Prefect.jpg',
      'Integrations/Webhooks.jpg',
      'Integrations/Zapier.jpg',
    ],
  },
  {
    title: 'Front-End & Interfaces',
    description: 'Engaging user interfaces and dashboards for insights and interactions.',
    count: '8+ Platforms',
    icon: <RiLayoutMasonryFill className='w-7 h-7 text-orange-500' />,
    images: [
      'FrontEndInterfaces/Domo.jpg',
      'FrontEndInterfaces/Forms.jpg',
      'FrontEndInterfaces/Gradio.jpg',
      'FrontEndInterfaces/Looker.jpg',
      'FrontEndInterfaces/Power BI.jpg',
      'FrontEndInterfaces/Slack.jpg',
      'FrontEndInterfaces/Streamlit.jpg',
      'FrontEndInterfaces/WhatsApp.jpg',
    ],
  },
  {
    title: 'Governance & Monitoring',
    description: 'Robust governance frameworks and observability tools for compliance.',
    count: '3+ Tools',
    icon: <RiBarChartBoxFill className='w-7 h-7 text-orange-500' />,
    images: [
      'GovernanceMonitoring/Approval layers.jpg',
      'GovernanceMonitoring/Audit trails.jpg',
      'GovernanceMonitoring/Observability dashboards.jpg',
    ],
  },
];

const TechnologyStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex(prev => (prev === 0 ? 5 : prev - 1));
  const handleNext = () => setActiveIndex(prev => (prev === 5 ? 0 : prev + 1));
  const handleDotClick = index => setActiveIndex(index);

  const getCardPositions = () => {
    const positions = [];
    const total = cardData.length;

    for (let i = 0; i < total; i++) {
      let diff = i - activeIndex;
      if (diff < -2) diff += total;
      if (diff > 2) diff -= total;

      let translateX = 0;
      let scale = 0.85;
      let opacity = 0.5;
      let zIndex = 1;
      let height = '420px';

      if (diff === -1) {
        translateX = -240;
        scale = 0.94;
        opacity = 0.5;
        zIndex = 2;
      } else if (diff === 0) {
        translateX = 0;
        scale = 1;
        opacity = 1;
        zIndex = 3;
        height = '460px'; // Highlighted card taller
      } else if (diff === 1) {
        translateX = 240;
        scale = 0.94;
        opacity = 0.5;
        zIndex = 2;
      } else if (Math.abs(diff) === 2) {
        translateX = diff === -2 ? -480 : 480;
        scale = 0.8;
        opacity = 0;
        zIndex = 1;
      }

      positions.push({ index: i, translateX, scale, opacity, zIndex, height });
    }
    return positions;
  };

  const cardPositions = getCardPositions();

  return (
    <div className='relative overflow-hidden'>
      {/* Background Gradient */}
      <div
        className='absolute inset-0 z-0 bg-[linear-gradient(135deg,_#7030B14D_0%,_#CAB9F64D_25%,_#E6F2F64D_50%,_#DDA16C4D_65%,_#FFA5814D_80%,_#E5AA664D_100%)]'
        style={{
          backgroundColor: '#F9EAE1',
        }}
      >
        {/* Clip Path Overlay for Desktop - Applied via CSS if possible or inline style responsive logic */}
        <div className='hidden lg:block absolute inset-0 bg-[#F9EAE1] opacity-0 mix-blend-overlay' />
        {/* Note: Original clip-path logic removed to avoid hydration errors. Standard full bg is safer and cleaner on all devices. */}
      </div>
      {/* Use valid clip path via inline style that is safe? Or just a div with border radius?
           This creates the "curved bottom" look?
           Let's just use a border-radius bottom on the container itself if needed.
       */}

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 lg:pt-24 pb-20 md:pb-32 lg:pb-60'>
        {/* Title Section */}
        <h1 className='text-3xl md:text-5xl text-gray-700 mb-6 text-center font-semibold leading-tight max-w-4xl mx-auto'>
          Our Technology <span className='text-purple-600 font-bold'>Stack</span>
        </h1>

        <p className='text-base md:text-xl text-gray-500 text-center font-normal leading-relaxed mb-8 max-w-3xl mx-auto'>
          Blending cloud, AI, and modern frameworks to drive innovation.
        </p>

        {/* Badges */}
        <div className='flex gap-3 md:gap-4 mt-1 mb-12 flex-wrap justify-center'>
          {badgeData.map((badge, i) => (
            <span
              key={i}
              className='px-4 py-2 md:px-5 md:py-3 rounded-full flex items-center gap-2 whitespace-nowrap bg-white border border-[#D4D4D4] text-[#404040] text-sm md:text-base font-normal'
            >
              {badge.icon} {badge.label}
            </span>
          ))}
        </div>

        {/* =======================
            DESKTOP CAROUSEL
           ======================= */}
        <div className='hidden lg:block relative w-full'>
          <button
            className='bg-white rounded-full w-14 h-14 flex items-center justify-center border border-gray-300 transition-all duration-300 z-20 shadow-xl absolute left-4 top-1/2 -translate-y-1/2 hover:scale-105'
            onClick={handlePrev}
          >
            <RiArrowLeftSLine size={26} />
          </button>
          <button
            className='bg-white rounded-full w-14 h-14 flex items-center justify-center border border-gray-300 transition-all duration-300 z-20 shadow-xl absolute right-4 top-1/2 -translate-y-1/2 hover:scale-105'
            onClick={handleNext}
          >
            <RiArrowRightSLine size={26} />
          </button>

          <div className='flex justify-center items-center relative h-[560px] w-full overflow-hidden'>
            {cardData.map((card, index) => {
              const pos = cardPositions.find(p => p.index === index);
              if (!pos) return null;
              const isActive = index === activeIndex;

              return (
                <div
                  key={card.title}
                  className='bg-white rounded-2xl p-4 shadow-xl flex flex-col gap-4 absolute w-[380px] transition-all duration-500 ease-out cursor-pointer'
                  style={{
                    transform: `translateX(${pos.translateX}px) scale(${pos.scale})`,
                    opacity: pos.opacity,
                    zIndex: pos.zIndex,
                    height: pos.height,
                  }}
                  onClick={() => index !== activeIndex && handleDotClick(index)}
                >
                  <div className='p-2 flex flex-col h-full'>
                    <div
                      className='bg-gray-50 rounded-[5px] p-5 flex flex-col gap-3 flex-1'
                      style={{ border: '1px solid #E5E5E5' }}
                    >
                      <div className='flex gap-2 items-center'>
                        <div className='bg-white p-3 rounded-xl flex items-center justify-center w-14 h-14 min-w-14 shadow-sm'>
                          {card.icon}
                        </div>
                        <div className='flex-1 bg-white p-3 rounded-xl font-semibold text-base text-orange-500 shadow-sm'>
                          {card.title}
                        </div>
                      </div>
                      <div className='mt-4 flex-1 text-base leading-relaxed text-[#70707B]'>
                        {card.description}
                      </div>
                      <div
                        className='text-sm px-4 py-2 w-36 h-8 flex items-center justify-center rounded-[5px] mt-4 bg-white font-medium'
                        style={{
                          border: '1px solid #E5E5E5',
                          color: isActive ? '#404040' : '#70707B',
                        }}
                      >
                        {card.count}
                      </div>
                    </div>

                    <div className='p-3 flex flex-col gap-4 mt-auto'>
                      <div className='grid grid-cols-6 gap-3 justify-center items-center w-full'>
                        {card.images.slice(0, 6).map((img, i) => (
                          <div key={i}>
                            <img
                              src={`/images/${img}`}
                              className='w-full h-9 object-contain p-0.5'
                            />
                          </div>
                        ))}
                      </div>
                      <div className='grid grid-cols-6 gap-3 justify-center items-center w-full'>
                        {card.images.slice(6).map((img, i) => (
                          <div key={i + 6}>
                            <img
                              src={`/images/${img}`}
                              className='w-full h-9 object-contain p-0.5'
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =======================
            MOBILE STACKED VIEW
           ======================= */}
        <div className='lg:hidden flex flex-col gap-6 w-full'>
          {cardData.map(card => (
            <div
              key={card.title}
              className='bg-white rounded-2xl p-4 shadow-lg flex flex-col gap-4 w-full'
            >
              <div className='p-2 flex flex-col h-full'>
                <div
                  className='bg-gray-50 rounded-[5px] p-5 flex flex-col gap-3 min-h-[220px]'
                  style={{ border: '1px solid #E5E5E5' }}
                >
                  <div className='flex gap-2 items-center'>
                    <div className='bg-white p-3 rounded-xl flex items-center justify-center w-14 h-14 min-w-14 shadow-sm'>
                      {card.icon}
                    </div>
                    <div className='flex-1 bg-white p-3 rounded-xl font-semibold text-base text-orange-500 shadow-sm'>
                      {card.title}
                    </div>
                  </div>

                  <div className='mt-4 flex-1 text-sm text-[#70707B] leading-relaxed'>
                    {card.description}
                  </div>

                  <div
                    className='text-sm px-4 py-2 w-36 h-8 flex items-center justify-center rounded-[5px] mt-4 bg-white font-medium text-[#404040]'
                    style={{ border: '1px solid #E5E5E5' }}
                  >
                    {card.count}
                  </div>
                </div>

                <div className='p-3 flex flex-col gap-4 mt-auto'>
                  <div className='grid grid-cols-4 gap-4 justify-center items-center w-full'>
                    {card.images.map((img, i) => (
                      <div key={i}>
                        <img src={`/images/${img}`} className='w-full h-10 object-contain p-0.5' />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
