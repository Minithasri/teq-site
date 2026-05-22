import Image from 'next/image';

export default function Technology() {
  const coreTechnologies = [
    {
      title: 'Azure OpenAI',
      description: 'Embedding generation and generative response',
    },
    {
      title: 'LangChain',
      description: 'RAG orchestration and prompt flow management',
    },
    {
      title: 'Python (FastAPI)',
      description: 'Backend API and workflow management',
    },
    {
      title: 'React JS',
      description: 'User interface for natural language interaction',
    },
    {
      title: 'Docker & AKS',
      description: 'Scalable microservice deployment',
    },
    {
      title: 'Unstructured.io',
      description: 'Document parsing and text extraction',
    },
  ];

  const azureServices = [
    {
      category: 'Compute & Containers',
      technologies: ['Azure Kubernetes Service (AKS)', 'Azure Container Registry'],
      description: 'Host and manage containerized services',
    },
    {
      category: 'AI & Cognitive',
      technologies: ['Azure OpenAI', 'Azure AI Search'],
      description: 'Enable embeddings, semantic retrieval, and generative AI',
    },
    {
      category: 'Storage & Data',
      technologies: ['Azure Storage Account', 'Azure Cosmos DB', 'Azure SQL Database'],
      description: 'Store data, vector indices, and metadata securely',
    },
    {
      category: 'Security & Compliance',
      technologies: ['Azure Key Vault', 'Microsoft Defender for Cloud', 'Azure Policy'],
      description: 'Protect secrets and enforce compliance',
    },
    {
      category: 'Networking & Access',
      technologies: ['Azure Private Link', 'Azure AD'],
      description: 'Secure communication and SSO-based authentication',
    },
    {
      category: 'Monitoring & Management',
      technologies: ['Azure Monitor', 'Azure Backup'],
      description: 'System observability and disaster recovery',
    },
    {
      category: 'Integration & Messaging',
      technologies: ['Azure Service Bus', 'API Management'],
      description: 'Event management and API orchestration',
    },
  ];

  const topIcons = [
    '/images/Templates/technologyicons/pythonimg.png',
    '/images/Templates/technologyicons/Power automate.png',
    '/images/Templates/technologyicons/reactimg.png',
    '/images/Templates/technologyicons/dockerimg.png',
  ];

  return (
    <section className='w-full py-8 px-4 pb-12 md:px-8' style={{ backgroundColor: '#F6F6F6' }}>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-[#1D2530] mb-2'>Technology Stack</h2>
          <p className='text-gray-500'>Enterprise-grade technologies and Azure-native services</p>
        </div>
        {/* Header */}
        <div className='mt-6 flex flex-col md:flex-row items-center justify-center mb-12 gap-16'>
          <div className='flex items-center gap-12'>
            {topIcons.map((icon, index) => (
              <div key={index} className='w-12 h-12 relative flex items-center justify-center'>
                <Image
                  src={icon}
                  alt={`Technology ${index}`}
                  width={48}
                  height={48}
                  className='object-contain drop-shadow-[0_4px_10px_#00000036]'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Core Technologies Grid */}
        <div className='mb-16'>
          <h3 className='text-xl font-bold text-[#1D2530] mb-6'>Core Technologies</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {coreTechnologies.map((tech, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 sborder-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
              >
                <h4 className='font-bold text-[#0F1729]/80 text-lg mb-2'>{tech.title}</h4>
                <p className='text-gray-500 text-sm leading-relaxed'>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Azure Services Integrated List */}
        <div>
          <h3 className='text-xl font-bold text-[#1D2530] mb-6'>Azure Services Integrated</h3>
          <div className='space-y-4'>
            {azureServices.map((service, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-4 md:p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center'
              >
                {/* Category Badge */}
                <div className='md:col-span-3'>
                  <div
                    className='inline-block px-4 py-2 rounded-full text-sm font-semibold text-center'
                    style={{ backgroundColor: '#EBF5FF', color: '#004D99' }}
                  >
                    {service.category}
                  </div>
                </div>

                {/* Technologies List */}
                <div className='md:col-span-6 flex flex-wrap gap-3 '>
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1.5 rounded-xl text-sm font-medium'
                      style={{ backgroundColor: '#0073E61A', color: '#0073E6' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className='md:col-span-3 text-gray-500 text-sm'>{service.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
