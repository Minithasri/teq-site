import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className='relative pt-20 pb-32 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8 flex flex-col items-center text-center'>
        <div className='inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8'>
          <span className='flex h-2 w-2 rounded-full bg-indigo-600'></span>
          <span>v2.0 is now live</span>
        </div>
        <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-4xl text-balance'>
          Build your next big idea with{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600'>
            Teqcerty
          </span>
        </h1>
        <p className='text-lg md:text-xl text-slate-600 mb-10 max-w-2xl text-balance leading-relaxed'>
          We provide the tools and infrastructure you need to launch faster, scale smarter, and
          focus on what matters most—your product.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group'>
            Start for free
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
          <button className='bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-sm flex items-center justify-center'>
            Book a demo
          </button>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10'></div>
    </section>
  );
}
