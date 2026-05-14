import Image from 'next/image';
import Brain from '../assert/Brain.png';
import Database from '../assert/Database.png';
import Workflow from '../assert/Workflow.png';
import Safety from '../assert/Safety.png';
import Message from '../assert/Message.png';
import Lightning from '../assert/Lightning.png';

const FullStackAgent = () => {
  const expertises = [
    {
      title: 'Cognitive Agents',
      description:
        'Agents that reason, plan, and make complex decisions using advanced LLM architectures and chain-of-thought processing.',
      icon: Brain,
    },
    {
      title: 'Conversational AI',
      description:
        'Natural-language agents that handle customer inquiries, support tickets, and sales conversations with human-like understanding.',
      icon: Message,
    },
    {
      title: 'Workflow Automation',
      description:
        'Multi-step agents that orchestrate business processes, integrate with APIs, and execute tasks autonomously across systems.',
      icon: Workflow,
    },
    {
      title: 'Safety & Guardrails',
      description:
        'Built-in safety layers, content filtering, and compliance controls so your agents operate within defined boundaries.',
      icon: Safety,
    },
    {
      title: 'Real-Time Processing',
      description:
        'Low-latency agent architectures optimized for streaming responses, live data analysis, and instant decision-making.',
      icon: Lightning,
    },
    {
      title: 'Knowledge Integration',
      description:
        'RAG pipelines and vector search to ground your agents in proprietary data, documents, and institutional knowledge.',
      icon: Database,
    },
  ];

  return (
    <section className='py-14 md:py-20 bg-[#fafafa]'>
      <div className='max-w-9xl mx-auto px-6 md:px-12 lg:px-20'>
        {/* Title */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-[28px] md:text-[32px] font-bold text-[#222222]'>
            Full-Stack Agent Expertise
          </h2>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2'>
          {expertises.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.0)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300'
            >
              {/* Icon Container */}

              <Image
                src={item.icon}
                alt={item.title}
                className='w-[70px] h-[70px] object-contain mb-3'
              />

              {/* Card Content */}
              <h3 className='text-[#333333] font-semibold text-[14px] md:text-[16px] mb-3'>
                {item.title}
              </h3>
              <p className='text-[#737373] text-[14px] leading-[1.6]'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullStackAgent;
