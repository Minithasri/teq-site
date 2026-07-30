import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart } from 'lucide-react';

export const metadata = {
  metadataBase: new URL('https://teqcerty.com'),
  title: 'Teqcerty | Modern Solutions for Modern Problems',
  description:
    'Teqcerty provides cutting edge solutions for your business needs. Connect with us to elevate your workflow.',
  openGraph: {
    title: 'Teqcerty | Modern Solutions',
    description: 'Elevate your business workflow with Teqcerty.',
    url: 'https://teqcerty.com',
    siteName: 'Teqcerty',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teqcerty | Modern Solutions',
    description: 'Elevate your business workflow with Teqcerty.',
    images: [],
  },
  keywords: 'teqcerty, project, app, modern solutions, saas',
  alternates: {
    canonical: 'https://teqcerty.com/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Teqcerty',
    description: 'Teqcerty provides cutting edge solutions for your business needs.',
    url: 'https://www.teqcerty.com',
  };

  return (
    <>
      {/* SEO JSON-LD Script */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className='min-h-screen bg-slate-50 font-sans text-slate-900'>
        {/* Navigation Bar */}
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

        {/* Hero Section */}
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

        {/* Features Section */}
        <section id='features' className='py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
                Everything you need to succeed
              </h2>
              <p className='text-slate-600 max-w-2xl mx-auto text-lg'>
                Powerful features designed to help you build, launch, and grow your business without
                the friction.
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
                  Gain powerful insights with our built-in real-time analytics and reporting
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='bg-slate-900 py-12 text-center text-slate-400'>
          <p>© {new Date().getFullYear()} Teqcerty Inc. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
