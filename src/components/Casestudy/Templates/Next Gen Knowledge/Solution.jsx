import Image from 'next/image';

export default function Solution() {
  const requirements = [
    {
      title: 'Knowledge Accessibility',
      points: [
        'Build a secure, scalable, AI-driven RAG system on Microsoft Azure',
        'Enable context-aware, natural language querying across all document types',
      ],
    },
    {
      title: 'Automation & Intelligence',
      points: [
        'Automate document ingestion, embedding generation and vector indexing',
        'Deliver accurate, contextually relevant answers through generative AI',
      ],
    },
    {
      title: 'Security & Compliance',
      points: [
        'Ensure enterprise-grade security using Azure AD, Private Link, and Key Vault',
        'Maintain compliance via Microsoft Defender for Cloud and Azure Policy',
      ],
    },
    {
      title: 'Scalability & Monitoring',
      points: [
        'Deploy modular, containerized microservices for scalability',
        'Enable real-time system monitoring and proactive alerting through Azure Monitor',
      ],
    },
  ];

  return (
    <section className='w-full py-8 px-4 md:px-8' style={{ backgroundColor: '#F6F6F6' }}>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section with Blue Banner and Bulb Image */}
        <div className='relative mb-16 pt-8'>
          {/* Section Title */}
          <div className='flex items-center gap-3 mb-8'>
            <div className='w-8 h-8 relative'>
              <Image
                src='/images/Templates/template10/solu1.svg'
                alt='Solution Icon'
                fill
                className='object-contain'
              />
            </div>
            <h2 className='text-3xl font-bold text-gray-900'>The Solution</h2>
          </div>

          {/* Blue Gradient Banner */}
          <div
            className='rounded-3xl p-8 md:p-12 pr-0 md:pr-32 relative overflow-visible text-white'
            style={{
              background: 'linear-gradient(90deg, #0073E6 0%, #13B6EC 100%)',
            }}
          >
            <div className='relative z-10 max-w-4xl'>
              <h3 className='text-2xl md:text-3xl font-bold mb-4'>
                Azure-Powered RAG Knowledge Retrieval Framework
              </h3>
              <p className='text-lg leading-relaxed opacity-90'>
                We deployed a Retrieval-Augmented Generation (RAG) framework leveraging Azure
                OpenAI, Azure AI Search, and Azure-native services to transform enterprise knowledge
                management. The solution delivers precise, context-driven answers while ensuring
                data security, compliance, and scalability.
              </p>
            </div>

            {/* Decorative Bulb Image - Absolute positioned overlapping top right */}
            <div className='absolute -top-40 right-32 w-[250px] h-[250px] z-20 pointer-events-none'>
              <Image
                src='/images/Templates/template10/bulb.webp'
                alt='Idea Bulb'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Strategic Requirements Grid */}
        <div>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>Strategic Requirements</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {requirements.map((req, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100'
              >
                <h4 className='text-xl font-bold mb-6 text-[#0073E6]'>{req.title}</h4>
                <div className='space-y-4'>
                  {req.points.map((point, idx) => (
                    <div key={idx} className='flex items-start gap-3'>
                      <div className='w-5 h-5 relative flex-shrink-0 mt-1'>
                        <Image
                          src='/images/Templates/template10/greentick.svg'
                          alt='Check'
                          fill
                          className='object-contain'
                        />
                      </div>
                      <p className='text-gray-600 leading-relaxed'>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
