'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { submitSupportRequest } from './supportApi.js';

// Confetti Party Popper
const FireworkPopper = () => {
  const [rockets, setRockets] = React.useState([]);
  const [bursts, setBursts] = React.useState([]);

  React.useEffect(() => {
    const colors = [
      '#ff595e',
      '#ffca3a',
      '#8ac926',
      '#1982c4',
      '#6a4c93',
      '#FFD700',
      '#FF6B6B',
      '#4ECDC4',
      '#FF69B4',
      '#00CED1',
    ];

    // Define 10 rockets with staggered launch times and different positions
    const rocketConfigs = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      launchDelay: i * 300, // each rocket launches 300ms after the previous
      startX: 10 + i * 8, // spread across 10% to 90% of screen
      burstY: 20 + Math.random() * 35, // burst at different heights (20%–55% from bottom)
      color: colors[i % colors.length],
    }));

    setRockets(rocketConfigs);

    // Schedule bursts for each rocket
    rocketConfigs.forEach(rocket => {
      setTimeout(() => {
        const particles = [];
        for (let j = 0; j < 80; j++) {
          const angle = (j / 80) * 360;
          const speed = Math.random() * 160 + 60;
          const rad = (angle * Math.PI) / 180;
          particles.push({
            id: j,
            color: rocket.color,
            tx: Math.cos(rad) * speed,
            ty: Math.sin(rad) * speed,
            size: Math.random() * 6 + 3,
            duration: Math.random() * 0.8 + 0.8,
            delay: Math.random() * 0.12,
          });
        }

        setBursts(prev => [
          ...prev,
          {
            id: rocket.id,
            x: rocket.startX,
            y: rocket.burstY,
            color: rocket.color,
            particles,
          },
        ]);

        // Remove this burst after animation completes
        setTimeout(() => {
          setBursts(prev => prev.filter(b => b.id !== rocket.id));
        }, 2000);
      }, rocket.launchDelay + 1200); // burst after rocket travel time (1200ms)
    });

    // Remove all rockets after last one bursts
    setTimeout(() => setRockets([]), 10 * 300 + 1200);

    // Full cleanup
    const cleanup = setTimeout(
      () => {
        setRockets([]);
        setBursts([]);
      },
      10 * 300 + 3500
    );

    return () => clearTimeout(cleanup);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes rocketLaunch {
          0%   { transform: translateY(0)     scaleY(1);   opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateY(-80vh) scaleY(0.6); opacity: 0; }
        }
        @keyframes trailFlicker {
          0%, 100% { opacity: 0.9; transform: scaleY(1); }
          50%       { opacity: 0.4; transform: scaleY(0.6); }
        }
        @keyframes flashPop {
          0%   { transform: translate(-50%, -50%) scale(0);   opacity: 1; }
          40%  { transform: translate(-50%, -50%) scale(1.5); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        @keyframes burstParticle {
          0%   { transform: translate(0, 0) scale(1); opacity: 1; }
          60%  { opacity: 0.8; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
        }
      `}</style>

      {/* ── ROCKETS ── */}
      {rockets.map(rocket => (
        <div
          key={rocket.id}
          style={{
            position: 'absolute',
            bottom: '3%',
            left: `${rocket.startX}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animationDelay: `${rocket.launchDelay}ms`,
            animation: `rocketLaunch 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${rocket.launchDelay}ms forwards`,
            opacity: 0,
          }}
        >
          {/* Tip */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: `10px solid ${rocket.color}`,
            }}
          />
          {/* Body */}
          <div
            style={{
              width: '5px',
              height: '16px',
              background: `linear-gradient(to bottom, ${rocket.color}, #888)`,
            }}
          />
          {/* Trail */}
          <div
            style={{
              width: '3px',
              height: '28px',
              background:
                'linear-gradient(to bottom, rgba(255,200,50,1), rgba(255,80,0,0.6), transparent)',
              animation: 'trailFlicker 0.1s infinite',
            }}
          />
        </div>
      ))}

      {/* ── BURSTS ── */}
      {bursts.map(burst => (
        <div
          key={burst.id}
          style={{
            position: 'absolute',
            left: `${burst.x}%`,
            bottom: `${burst.y}%`,
            width: 0,
            height: 0,
          }}
        >
          {/* Flash */}
          <div
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: `radial-gradient(circle, white 0%, ${burst.color}cc 40%, transparent 70%)`,
              animation: 'flashPop 0.45s ease-out forwards',
            }}
          />

          {/* Particles */}
          {burst.particles.map(p => (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: '50%',
                backgroundColor: p.color,
                boxShadow: `0 0 5px ${p.color}`,
                transform: 'translate(-50%, -50%)',
                animation: `burstParticle ${p.duration}s cubic-bezier(0.2, 0.8, 0.4, 1) ${p.delay}s forwards`,
                '--tx': `${p.tx}px`,
                '--ty': `${p.ty}px`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

function SupportForm() {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [usecase, setUsecase] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState('');

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [workflowStatus, setWorkflowStatus] = useState(null);

  useEffect(() => {
    if (workflowStatus === 'COMPLETED' && !loading) {
      const timer = setTimeout(() => setWorkflowStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [workflowStatus, loading]);

  const validateForm = () => {
    const newErrors = {};
    if (!customerName.trim()) newErrors.customerName = 'Please enter your full name';
    if (!email.trim()) newErrors.email = 'Please enter your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address';
    if (!companyName.trim()) newErrors.companyName = 'Please enter your company name';
    if (!businessType.trim()) newErrors.businessType = 'Please select a business type';
    if (!usecase.trim()) newErrors.usecase = 'Please describe your use case';
    else if (usecase.trim().length < 10)
      newErrors.usecase = 'Please describe your use case in detail';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitRequest = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setWorkflowStatus('IN_PROGRESS');

    try {
      const res = await submitSupportRequest({
        customerName,
        email,
        companyName,
        businessType,
        usecase,
      });

      const submittedData = { name: customerName, email, companyName, businessType, usecase };

      setCustomerName('');
      setEmail('');
      setUsecase('');
      setCompanyName('');
      setBusinessType('');
      setErrors({});
      setWorkflowStatus('COMPLETED');

      setResult({
        ...submittedData,
        status: 'COMPLETED',
        agentResult: res.agentResult,
        message:
          'Thank you for your submission. The AI analysis has been sent to your email. Our team will review it and contact you soon.',
      });
      setShowPopup(true);
    } catch (err) {
      console.error(err);
      setWorkflowStatus('FAILED');
      setResult({
        name: customerName,
        email,
        usecase,
        status: 'FAILED',
        agentResult: 'AI analysis failed.',
        message: 'Something went wrong. Please try again.',
      });
      setShowPopup(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setWorkflowStatus(null);
    setResult(null);
  };

  const getStatusMessage = () => {
    switch (workflowStatus) {
      case 'IN_PROGRESS':
        return 'AI agent analyzing your request...';
      case 'COMPLETED':
        return 'Analysis complete! Resetting in 5 seconds...';
      case 'FAILED':
        return 'Processing issue detected. Please wait...';
      default:
        return 'Starting workflow...';
    }
  };

  const inputClass = field =>
    `w-full px-3 sm:px-4 py-3 bg-white border-2 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-4 ${
      errors[field]
        ? 'border-red-200 bg-red-50 focus:ring-red-100'
        : 'border-gray-100 hover:border-[#D8B4FE] focus:border-[#A855F7] focus:ring-[#F3E8FF]'
    }`;

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
      `}</style>

      {/* ── FORM CARD ── */}
      <div className='bg-white rounded-2xl sm:rounded-3xl shadow-[0_16px_32px_-8px_rgba(0,0,0,0.1)] border border-gray-100 p-4 sm:p-6 h-full overflow-y-auto'>
        {/* Header bar */}
        <div className='bg-[#F3F5FB] rounded-2xl p-4 mb-5 flex items-center gap-3 border border-[#F5F0FF]'>
          <div className='w-10 h-10 bg-gradient-to-br from-[#2E94DB] to-[#7030B1] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0'>
            <span className='text-white text-lg'>🤖</span>
          </div>
          <div>
            <h2 className='text-lg font-bold bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent'>
              AI Support Portal
            </h2>
            <p className='text-xs text-gray-500 font-medium'>Get expert help for your use case</p>
          </div>
        </div>

        {/* Fields */}
        <div className='space-y-4'>
          {/* Name & Email */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='space-y-1'>
              <label className='block text-xs font-medium text-gray-700 ml-1'>Full Name*</label>
              <input
                placeholder='Enter your full name'
                value={customerName}
                onChange={e => setCustomerName(e.target.value)}
                disabled={loading}
                className={inputClass('customerName')}
              />
              {errors.customerName && (
                <p className='text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1'>
                  <span>⚠️</span> {errors.customerName}
                </p>
              )}
            </div>
            <div className='space-y-1'>
              <label className='block text-xs font-medium text-gray-700 ml-1'>Email*</label>
              <input
                placeholder='Enter your email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={loading}
                className={inputClass('email')}
              />
              {errors.email && (
                <p className='text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1'>
                  <span>⚠️</span> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Company & Business Type */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='space-y-1'>
              <label className='block text-xs font-medium text-gray-700 ml-1'>Company Name*</label>
              <input
                placeholder='Enter company name'
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                disabled={loading}
                className={inputClass('companyName')}
              />
              {errors.companyName && (
                <p className='text-xs text-red-500 font-medium mt-1 ml-1'>
                  ⚠️ {errors.companyName}
                </p>
              )}
            </div>
            <div className='space-y-1'>
              <label className='block text-xs font-medium text-gray-700 ml-1'>Business Type*</label>
              <input
                placeholder='Enter business type'
                value={businessType}
                onChange={e => setBusinessType(e.target.value)}
                disabled={loading}
                className={inputClass('businessType')}
              />
              {errors.businessType && (
                <p className='text-xs text-red-500 font-medium mt-1 ml-1'>
                  ⚠️ {errors.businessType}
                </p>
              )}
            </div>
          </div>

          {/* Use Case */}
          <div className='space-y-1'>
            <label className='block text-xs font-medium text-gray-700 ml-1'>Your Use Case*</label>
            <textarea
              placeholder='Tell us about the AI agent you want to build...'
              value={usecase}
              onChange={e => setUsecase(e.target.value)}
              disabled={loading}
              rows={4}
              className={`${inputClass('usecase')} resize-none`}
            />
            {errors.usecase && (
              <p className='text-xs text-red-500 font-medium mt-1 ml-1 flex items-center gap-1'>
                <span>⚠️</span> {errors.usecase}
              </p>
            )}
            <p className='text-xs text-orange-500 font-medium mt-1 ml-1'>
              Minimum 10 characters. Be specific about your requirements.
            </p>
          </div>

          {/* Submit Button */}
          <button
            onClick={submitRequest}
            disabled={loading || workflowStatus === 'COMPLETED'}
            className='group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#2E94DB] to-[#7030B1] px-6 py-3 text-base font-bold text-white shadow-[0_5px_15px_-5px_rgba(139,92,246,0.5)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed'
          >
            {loading ? (
              <span className='flex items-center justify-center gap-2'>
                <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24'>
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                    fill='none'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                Processing Data...
              </span>
            ) : workflowStatus === 'COMPLETED' ? (
              'Submission Recorded ✓'
            ) : (
              <span className='flex items-center justify-center gap-2'>
                Submit
                <ArrowRight size={16} className='transition-transform group-hover:translate-x-1' />
              </span>
            )}
          </button>

          {/* Security Badge */}
          <div className='flex items-center justify-center gap-2 text-xs text-gray-400 font-medium'>
            <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                clipRule='evenodd'
              />
            </svg>
            Your information is secure. We'll never share your details.
          </div>

          {/* Progress Indicator */}
          {loading && (
            <div className='pt-1 animate-pulse'>
              <div className='h-1.5 w-full bg-gray-100 rounded-full overflow-hidden'>
                <div className='h-full bg-gradient-to-r from-purple-400 to-pink-400 w-3/4 transition-all' />
              </div>
              <p className='text-center text-xs text-purple-600 mt-2 font-semibold uppercase tracking-widest'>
                {getStatusMessage()}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── SUCCESS POPUP ── */}
      {showPopup && result && (
        <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          {/* Outer — fixed height, no overflow */}
          <div className='bg-white rounded-2xl max-w-2xl w-full mx-auto shadow-2xl transform animate-slideUp border border-gray-100 max-h-[70vh] flex flex-col relative overflow-hidden'>
            {/* Confetti sits outside scroll */}
            {result.status === 'COMPLETED' && <FireworkPopper />}

            {/* Header — sticky, never scrolls */}
            <div className='flex-shrink-0 bg-white rounded-t-2xl relative z-10'>
              <div className='absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2E94DB] to-[#7030B1] rounded-t-2xl'></div>
              <div className='p-4 pb-2 pt-5'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-xl font-bold text-[#0A1E3C]'>
                    {result.status === 'COMPLETED' ? 'Analysis Completed!' : 'Request Received!'}
                  </h2>
                  <button
                    onClick={handleClosePopup}
                    className='text-gray-400 hover:text-gray-600 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center'
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable content — only this part scrolls */}
            <div className='overflow-y-auto flex-1 relative z-10'>
              <div className='px-4 pb-5 pt-1'>
                {/* Submission Details */}
                <div className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 mb-3 border border-gray-200 shadow-sm'>
                  <h3 className='text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center'>
                    <span className='w-1 h-3 bg-[#FBBF24] rounded-full mr-1.5'></span>
                    Submission Details
                  </h3>
                  <div className='space-y-2'>
                    {[
                      { icon: '👤', label: 'Name', value: result.name },
                      { icon: '📧', label: 'Email', value: result.email },
                      { icon: '🏢', label: 'Company', value: result.companyName },
                      { icon: '💼', label: 'Business', value: result.businessType },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className='flex items-start gap-2 text-sm'>
                        <span className='w-24 flex items-center text-gray-500 font-medium text-xs flex-shrink-0'>
                          <span className='mr-1.5'>{icon}</span>
                          {label}:
                        </span>
                        <div className='flex-1 bg-white rounded-lg px-3 py-1.5 border border-gray-100 text-gray-900 text-xs break-all'>
                          {value}
                        </div>
                      </div>
                    ))}
                    {/* Use Case */}
                    <div className='flex items-start gap-2 text-sm'>
                      <span className='w-24 flex items-center text-gray-500 font-medium text-xs flex-shrink-0'>
                        <span className='mr-1.5'>📋</span>Use Case:
                      </span>
                      <div className='flex-1 bg-white rounded-lg px-3 py-2 border border-gray-100 text-gray-800 text-xs max-h-24 overflow-y-auto'>
                        {result.usecase}
                      </div>
                    </div>
                    {/* Status */}
                    <div className='flex items-center gap-2'>
                      <span className='w-24 flex items-center text-gray-500 font-medium text-xs flex-shrink-0'>
                        <span className='mr-1.5'>⚡</span>Status:
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                          result.status === 'COMPLETED'
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-[#FBBF24]/20 text-[#0A1E3C] border border-[#FBBF24]/30'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            result.status === 'COMPLETED'
                              ? 'bg-green-500 animate-pulse'
                              : 'bg-[#FBBF24]'
                          }`}
                        ></span>
                        OPEN
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Agent Result */}
                {result.agentResult && (
                  <div className='bg-gradient-to-br from-[#1E3A8A]/5 to-[#0A1E3C]/5 rounded-xl p-4 mb-3 border-l-4 border-[#FBBF24]'>
                    <div className='flex items-start gap-3'>
                      <div className='w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0'>
                        <span className='text-white text-sm'>🤖</span>
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-semibold text-[#0A1E3C] text-sm mb-2 flex items-center gap-2'>
                          AI Agent Analysis
                          <span
                            className={`px-2 py-0.5 text-[10px] rounded-full border ${
                              result.status === 'COMPLETED'
                                ? 'bg-green-100 text-green-800 border-green-200'
                                : 'bg-[#FBBF24]/20 text-[#0A1E3C] border-[#FBBF24]/30'
                            }`}
                          >
                            {result.status === 'COMPLETED' ? 'COMPLETED' : 'PROCESSING'}
                          </span>
                        </h4>
                        <div className='bg-white rounded-lg p-3 border border-[#FBBF24]/20 shadow-sm text-xs text-gray-700'>
                          {Array.isArray(result.agentResult) ? (
                            <ul className='list-disc pl-4 space-y-1'>
                              {result.agentResult.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          ) : typeof result.agentResult === 'object' ? (
                            <div className='space-y-2'>
                              {Object.entries(result.agentResult).map(([key, value]) => (
                                <div
                                  key={key}
                                  className='border-b border-gray-100 pb-1 last:border-0'
                                >
                                  <span className='font-medium text-[#1E3A8A] capitalize'>
                                    {key}:{' '}
                                  </span>
                                  <span>
                                    {typeof value === 'object' ? JSON.stringify(value) : value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className='whitespace-pre-wrap'>{result.agentResult}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div className='bg-gradient-to-br from-[#1E3A8A]/5 to-[#0A1E3C]/5 rounded-xl p-4 border-l-4 border-[#FBBF24]'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0'>
                      <span className='text-white text-sm'>📧</span>
                    </div>
                    <p className='text-xs text-gray-700 leading-relaxed'>{result.message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SupportForm;
