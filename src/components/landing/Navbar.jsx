export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8 py-6 max-w-7xl mx-auto'>
      <div className='text-2xl font-bold tracking-tight text-indigo-900'>
        Teqcerty<span className='text-indigo-500'>.</span>
      </div>
      <div className='hidden md:flex space-x-8 text-sm font-medium text-slate-600'>
        <a href='#features' className='hover:text-indigo-600 transition-colors'>
          Features
        </a>
        <a href='#about' className='hover:text-indigo-600 transition-colors'>
          About
        </a>
        <a href='#pricing' className='hover:text-indigo-600 transition-colors'>
          Pricing
        </a>
      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow'>
        Get Started
      </button>
    </nav>
  );
}
