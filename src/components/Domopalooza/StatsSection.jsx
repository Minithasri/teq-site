// components/StatsSection.tsx
const stats = [
  { value: '250+', label: 'Major Domo Experts' },
  { value: '80+', label: 'Clients' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '100+', label: 'AI Agents' },
];

const StatsSection = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 px-2'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='bg-white/30 border border-white rounded-xl py-3 sm:py-4 md:py-6 px-2 text-center hover:shadow-lg transition'
        >
          <h3
            className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold'
            style={{
              background: 'linear-gradient(90deg, #2E94DB, #7030B1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {stat.value}
          </h3>
          <p className='text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 font-medium'>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
