// components/StatsSection.tsx
const stats = [
  { value: '250+', label: 'Major Domo Experts' },
  { value: '80+', label: 'Clients' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '100+', label: 'AI Agents' },
];

const StatsSection = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 mt-6 sm:mt-8'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='bg-blue-50/20 backdrop-blur-sm border border-white/80 rounded-2xl py-3 sm:py-4 px-2 text-center shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-white/60'
          >
            <h3 className='text-xl sm:text-2xl font-bold text-[#2E94DB] tracking-tight'>
              {stat.value}
            </h3>
            <p className='text-[10px] sm:text-[11px] md:text-xs text-gray-700 mt-1 font-semibold leading-tight max-w-[90px] mx-auto'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
