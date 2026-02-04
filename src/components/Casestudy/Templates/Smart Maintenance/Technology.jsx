import Image from 'next/image';

const technologies = [
  {
    icon: '/images/Templates/template9/tech1.svg',
    bgIcon: '/images/Templates/technologyicons/power apps.png',
    name: 'Power Apps',
    description: 'User interface for maintenance tracking and operations',
  },
  {
    icon: '/images/Templates/template9/tech2.svg',
    bgIcon: '/images/Templates/technologyicons/Power automate.png',
    name: 'Power Automate',
    description: 'Workflow automation for maintenance alerts and approvals',
  },
  {
    icon: '/images/Templates/template9/tech3.svg',
    bgIcon: '/images/Templates/technologyicons/SQL server.png',
    name: 'SQL Server',
    description: 'Centralized and structured data repository',
  },
  {
    icon: '/images/Templates/template9/tech4.svg',
    bgIcon: '/images/Templates/technologyicons/Azure Data Factory1.png',
    name: 'Azure Data Factory',
    description: 'Integration of data from external systems for unified analytics',
  },
  {
    icon: '/images/Templates/template9/tech5.svg',
    bgIcon: '/images/Templates/technologyicons/power BI.png',
    name: 'Power BI',
    description: 'Predictive & preventive maintenance dashboards & KPI visualizations',
  },
  {
    icon: '/images/Templates/template9/tech6.svg',
    bgIcon: '/images/Templates/technologyicons/Share point.png',
    name: 'SharePoint',
    description: 'Document & attachment management for maintenance records',
  },
];

const architectureSteps = [
  {
    id: 1,
    title: 'Power Apps',
    description: 'Users log breakdowns, preventive schedules, and maintenance activities',
  },
  {
    id: 2,
    title: 'SQL Server / Dataverse',
    description: 'Acts as a centralized data layer for all maintenance records',
  },
  {
    id: 3,
    title: 'ADF',
    description: 'Connects and consolidates data from external systems such as ERP or IoT sensors',
  },
  {
    id: 4,
    title: 'Power Automate',
    description: 'Manages notifications, escalations, and approval workflows',
  },
  {
    id: 5,
    title: 'Power BI',
    description: 'Delivers predictive insights and real-time performance dashboards',
  },
];

const Technology = () => {
  return (
    <section
      className='w-full py-16 md:py-20 px-4 md:px-12 relative overflow-visible'
      style={{
        background: 'linear-gradient(135deg, #103C7D 0%, #7F7F7F 100%)',
      }}
    >
      {/* Decorative Top Right Images */}
      <div className='absolute -top-40 -right-20 z-[60] w-[400px] md:w-[400px] overflow-visible'>
        <Image
          src='/images/Templates/template9/right1.png'
          alt='Decoration 1'
          width={400}
          height={300}
          className='object-contain rounded-xl'
        />
      </div>
      <div className='absolute -top-20 right-48 z-50 w-[200px] md:w-[300px]'>
        <Image
          src='/images/Templates/template9/right2.png'
          alt='Decoration 2'
          width={300}
          height={200}
          className='object-contain rounded-xl'
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-20'>
        {/* Technology Stack Header */}
        <div className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Technology Stack</h2>
          <div className='h-1 w-24 rounded-full bg-[#F97415]'></div>
        </div>

        {/* Tech Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg'
            >
              <div className='flex items-start justify-between w-full'>
                <div className='w-12 h-12 rounded-xl bg-[#0A37761A] flex items-center justify-center shrink-0'>
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                {/* Visual placeholder for the corner graphic in the cards shown in image */}
                <div className='w-12 h-12 relative'>
                  {/* We can use the same icon or a specific decoration if provided, using a generic shape/icon for now as per image style */}
                  <Image
                    src={tech.bgIcon}
                    alt=''
                    fill
                    className='object-contain drop-shadow-[0_10px_20px_#00000054]'
                  />
                </div>
              </div>

              <div>
                <h3 className='text-xl font-bold text-[#1F1F1F] mb-2'>{tech.name}</h3>
                <p className='text-[#505050] text-sm leading-relaxed'>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Section */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Architecture</h2>
          <div className='h-1 w-24 rounded-full bg-[#F97415] mx-auto'></div>
        </div>

        {/* Architecture Content Card */}
        <div className='bg-white rounded-3xl p-8 md:p-12 relative overflow-hidden'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Steps List */}
            <div className='space-y-8'>
              {architectureSteps.map(step => (
                <div key={step.id} className='flex gap-4 items-start'>
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg'
                    style={{
                      background: 'linear-gradient(135deg, #0A3776 0%, #164E9C 100%)',
                    }}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h4 className='text-lg font-bold text-[#1F1F1F] mb-1'>{step.title}</h4>
                    <p className='text-[#505050] text-sm'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Settings/Gear Graphic */}
            <div className='relative w-full h-[400px] flex items-center justify-center '>
              <div className='absolute top-1 right-16 w-62 h-62 z-20 animate-spin-slow'>
                <Image
                  src='/images/Templates/template9/settings1.svg'
                  alt='Gear 1'
                  width={200}
                  height={200}
                  className='object-contain drop-shadow-xl'
                />
              </div>
              <div className='absolute top-36 right-2 w-64 h-64 md:w-80 md:h-80 z-10 animate-spin-reverse-slow'>
                <Image
                  src='/images/Templates/template9/settings3.svg'
                  alt='Gear 2'
                  width={320}
                  height={320}
                  className='object-contain opacity-90'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
