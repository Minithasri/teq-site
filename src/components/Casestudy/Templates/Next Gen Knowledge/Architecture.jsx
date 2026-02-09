import Image from 'next/image';

export default function Architecture() {
  const architectureSteps = [
    {
      title: 'Data Ingestion Layer',
      description:
        'Automated text and metadata extraction using Unstructured.io for PDFs, Word, Excel, and image files',
    },
    {
      title: 'Embedding Pipeline',
      description: 'Azure OpenAI generates vector embeddings capturing semantic meaning',
    },
    {
      title: 'Vector Indexing & Retrieval',
      description: 'Azure AI Search powers contextual search and vector-based retrieval',
    },
    {
      title: 'Generative Response Layer',
      description: 'Azure OpenAI GPT synthesizes human-readable, contextually relevant responses',
    },
    {
      title: 'Application Layer',
      description:
        'FastAPI backend containerized with Docker, deployed on AKS. React JS frontend with Azure AD integration',
    },
    {
      title: 'Security & Monitoring',
      description:
        'Azure Key Vault, Private Link, Defender for Cloud ensure secure operations with real-time monitoring',
    },
  ];

  const highlights = [
    'Automated Data Ingestion: Parsed PDFs, Word, Excel, images with Unstructured.io',
    'Contextual Semantic Search: Azure AI Search powered by OpenAI embeddings',
    'AI-Generated Answers: GPT-based synthesis from retrieved enterprise documents',
    'Scalable Infrastructure: Modular architecture via Docker and AKS',
    'Secure Enterprise Access: Azure AD–based authentication and SSO',
    'Continuous Monitoring: Azure Monitor dashboards for real-time visibility',
  ];

  return (
    <section
      className='w-full py-16 px-4 md:px-8 relative overflow-visible'
      style={{ backgroundColor: '#F6F6F6' }}
    >
      {/* Decorative Gear Image - Top Right */}
      <div className='absolute -top-20 right-44 w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-20 pointer-events-none z-20'>
        <Image
          src='/images/Templates/template10/set.png'
          alt='Gears'
          fill
          className='object-contain'
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <Image
              src='/images/Templates/template10/archicon.svg'
              alt='Architecture'
              width={32}
              height={32}
            />
            <h2 className='text-3xl font-bold text-gray-900'>Architecture Overview</h2>
          </div>
          <p className='text-gray-500 text-lg'>
            A comprehensive multi-layer architecture built on Azure-native services
          </p>
        </div>

        {/* Architecture Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {architectureSteps.map((step, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative'
            >
              <div className='absolute top-6 right-6'>
                <Image
                  src='/images/Templates/template10/archicon1.svg'
                  alt='Icon'
                  width={24}
                  height={24}
                />
              </div>
              <h3 className='font-bold text-gray-900 text-lg mb-3 pr-8'>{step.title}</h3>
              <p className='text-gray-500 text-sm leading-relaxed'>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Core Solution Highlights Card */}
        <div className='bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 relative'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>Core Solution Highlights</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10'>
            {highlights.map((highlight, idx) => (
              <div key={idx} className='flex items-start gap-3'>
                <div className='w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-1'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='3'
                      d='M5 13l4 4L19 7'
                    ></path>
                  </svg>
                </div>
                <p className='text-gray-700 text-sm leading-relaxed'>{highlight}</p>
              </div>
            ))}
          </div>

          {/* Decorative Tyre Image - Bottom Right overlapping */}
          <div className='absolute -right-40 bottom-10 w-[150px] h-[150px] md:w-[250px] md:h-[250px] pointer-events-none z-20'>
            <Image
              src='/images/Templates/template10/tyre.png'
              alt='Tyre'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
