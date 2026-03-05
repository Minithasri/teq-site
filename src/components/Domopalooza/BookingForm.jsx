'use client';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

const BookingForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    explore: '',
    preferredDateTime: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';

    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';

    if (!formData.explore.trim()) newErrors.explore = 'Please tell us what you want to explore';

    if (!formData.preferredDateTime.trim())
      newErrors.preferredDateTime = 'Preferred date/time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Controlled Input Handler
  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error dynamically
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Submit
  const handleSubmit = async e => {
    e.preventDefault(); // VERY IMPORTANT

    if (!validateForm()) return;

    setLoading(true);

    const { data, error } = await supabase.from('users').insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        job_title: formData.jobTitle,
        company_name: formData.companyName,
        explore: formData.explore,
        preferred_date_time: formData.preferredDateTime
          ? new Date(formData.preferredDateTime).toISOString()
          : null,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error('Insert error:', error.message);
    } else {
      setIsSubmitted(true);
      setFormData(initialState);
    }
  };

  return (
    <div className='bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-[32px] p-6 md:p-8 max-w-[85rem] mx-auto'>
      <div className='mb-6'>
        <h3 className='text-3xl font-bold text-[#1A1A1A] mb-2'>Book your 1:1 Meeting</h3>
        <div className='h-1 w-32 bg-gradient-to-r from-[#2E94DB] to-transparent rounded-full' />
      </div>

      {isSubmitted && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4'>
          <div className='bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center relative'>
            <div className='flex justify-center mb-6'>
              <CheckCircle className='w-20 h-20 text-green-500' />
            </div>
            <h1 className='text-3xl font-bold text-gray-800 mb-3'>Registration Successful!</h1>
            <p className='text-gray-600 mb-8'>
              Thank you for submitting your details. We will get back to you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className='w-full bg-[#7030B1] hover:bg-purple-700 text-white py-3 rounded-xl font-semibold'
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* First Name */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>First Name*</label>
            <input
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder=' '
              className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                errors.firstName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
          </div>

          {/* Last Name */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>Last Name*</label>
            <input
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                errors.lastName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
          </div>

          {/* Email */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>Email*</label>
            <input
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Job Title */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>Job Title*</label>
            <input
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                errors.jobTitle ? 'border-red-500' : 'border-gray-200'
              }`}
            />
          </div>

          {/* Company Name */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>Company Name*</label>
            <input
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                errors.companyName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-left'>
          {/* Explore Input */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>
              What would you like to explore?*
            </label>
            <div className='relative'>
              <input
                name='explore'
                value={formData.explore}
                onChange={handleChange}
                placeholder='Data strategy, AI agents, analytics, etc.'
                required
                className={`w-full px-4 py-2.5 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                  errors.explore ? 'border-red-500' : 'border-gray-200'
                }`}
              />
            </div>
          </div>

          {/* Preferred Date/Time Slot */}
          <div className='space-y-2'>
            <label className='text-[15px] font-semibold text-gray-700'>
              Preferred Date/Time Slot*
            </label>
            <div className='relative'>
              <input
                type='datetime-local'
                name='preferredDateTime'
                value={formData.preferredDateTime}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 border rounded-xl bg-white text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-100 transition-all ${
                  errors.preferredDateTime ? 'border-red-500' : 'border-gray-200'
                }`}
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center md:justify-end pt-4'>
          <button
            type='submit'
            disabled={loading}
            style={{ background: 'linear-gradient(180deg, #7030B1, #B56DD3)' }}
            className='group w-full md:w-auto flex items-center justify-center gap-2 text-white px-10 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-purple-200 active:scale-95 hover:brightness-110 '
          >
            <span>{loading ? 'Submitting...' : 'Submit'}</span>
            <svg
              className='w-5 h-5 group-hover:translate-x-1 transition-transform'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
