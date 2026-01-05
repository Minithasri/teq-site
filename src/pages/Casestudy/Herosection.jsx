import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const Herosection = () => {
  return (
    <div
      className='relative w-full min-h-[500px] flex flex-col bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/Casestudy/Frame case.png')" }}
    >
      {/* Breadcrumbs - High z-index for visibility */}
      <div className='absolute top-6 left-6 md:top-8 md:left-20 text-white text-sm font-light flex items-center gap-2 z-50'>
        <Link href='/' className='hover:text-white/80 transition-colors'>
          Home
        </Link>
        <span>&gt;</span>
        <span>Case study</span>
      </div>

      {/* Content - Centered */}
      <div className='flex-1 flex flex-col justify-center items-center text-center px-4 md:px-20 py-16'>
        <div className='max-w-4xl mx-auto flex flex-col gap-6 items-center z-10'>
          {/* Heading - 42px */}
          <h1 className='text-[42px] font-bold text-white leading-tight'>
            Experience AI Agents at Work
          </h1>

          {/* Description - 18px */}
          <p className='text-white/90 text-[18px] font-light max-w-3xl leading-relaxed'>
            Move beyond manual analysis and inconsistent data. Our Agentic AI platform standardizes
            startup assessments, reduces bias, and enables faster, more confident investment
            decisions.
          </p>
        </div>
      </div>

      {/* Search Bar - At Bottom */}
      <div className='w-full px-4 md:px-20 pb-8 relative z-20'>
        <div className='max-w-2xl mx-auto'>
          <div className='relative'>
            <div className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
              <FiSearch size={20} />
            </div>
            <input
              type='text'
              placeholder='Search case study'
              className='w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
