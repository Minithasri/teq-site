import { domoData } from '@/data/partners/domo';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

// Generate static params for all dashboard IDs
export function generateStaticParams() {
  return [
    { id: 'JZLOy' }, // Warehouse Management
    { id: 'LgMj4' }, // Automotive Retail
    { id: 'lOKxr' }, // Custom App
    { id: 'KOMP8' }, // Service Monitoring
  ];
}

export default async function DomoProductPage({ params }) {
  const { id } = await params;

  // Map IDs to dashboard data
  const dashboardMap = {
    JZLOy: domoData.dashboardData[0], // Warehouse Management
    LgMj4: domoData.dashboardData[1], // Automotive Retail
    lOKxr: domoData.dashboardData[2], // Custom App
    KOMP8: domoData.dashboardData[3], // Service Monitoring
  };

  const dashboard = dashboardMap[id];

  if (!dashboard) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Dashboard Not Found</h1>
          <Link
            href='/partners/domo'
            className='inline-flex items-center gap-2 text-[#8B3DA8] hover:underline'
          >
            <FiArrowLeft />
            Back to Domo Dashboards
          </Link>
        </div>
      </div>
    );
  }

  // Domo embed URL - Replace with actual Domo dashboard embed URLs
  const domoEmbedUrls = {
    JZLOy: 'https://public.domo.com/embed/pages/JZLOy', // Replace with actual URL
    LgMj4: 'https://public.domo.com/embed/pages/LgMj4', // Replace with actual URL
    lOKxr: 'https://public.domo.com/embed/pages/lOKxr', // Replace with actual URL
    KOMP8: 'https://public.domo.com/embed/pages/KOMP8', // Replace with actual URL
  };

  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <Link
              href='/partners/domo'
              className='inline-flex items-center gap-2 text-[#8B3DA8] hover:underline font-medium'
            >
              <FiArrowLeft />
              Back to Domo Dashboards
            </Link>
            <h1 className='text-xl font-bold text-[#303030]'>{dashboard.title}</h1>
          </div>
        </div>
      </div>

      {/* Dashboard Embed */}
      <div className='w-full h-[calc(100vh-80px)]'>
        <iframe
          src={domoEmbedUrls[id]}
          width='100%'
          height='100%'
          frameBorder='0'
          className='w-full h-full'
          title={dashboard.title}
          allowFullScreen
        />
      </div>
    </main>
  );
}
