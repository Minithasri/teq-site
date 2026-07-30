import { Zap, Shield, BarChart } from 'lucide-react';

export default function Features() {
  return (
    <section id='features' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Everything you need to succeed
          </h2>
          <p className='text-slate-600 max-w-2xl mx-auto text-lg'>
            Powerful features designed to help you build, launch, and grow your business without the
            friction.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {/* Feature 1 */}
          <div className='p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow'>
            <div className='w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6'>
              <Zap className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold mb-3 text-slate-900'>Lightning Fast</h3>
            <p className='text-slate-600 leading-relaxed'>
              Experience uncompromised speed with our optimized global infrastructure network.
            </p>
          </div>

          {/* Feature 2 */}
          <div className='p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow'>
            <div className='w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6'>
              <Shield className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold mb-3 text-slate-900'>Bank-grade Security</h3>
            <p className='text-slate-600 leading-relaxed'>
              Your data is protected by enterprise-level encryption and continuous security
              monitoring.
            </p>
          </div>

          {/* Feature 3 */}
          <div className='p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow'>
            <div className='w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6'>
              <BarChart className='w-6 h-6' />
            </div>
            <h3 className='text-xl font-bold mb-3 text-slate-900'>Advanced Analytics</h3>
            <p className='text-slate-600 leading-relaxed'>
              Gain powerful insights with our built-in real-time analytics and reporting dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
