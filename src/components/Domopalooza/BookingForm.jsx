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

  // Reset Form
  const handleCancel = () => {
    setFormData(initialState);
    setErrors({});
  };

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

    if (!formData.explore.trim()) newErrors.explore = 'This field is required';

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
      handleCancel();
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 md:p-8'>
      <h3 className='text-xl font-semibold mb-6 text-gray-800'>Book your 1:1 Meeting</h3>

      {isSubmitted && (
        <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4'>
          <div className='bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full text-center relative'>
            {/* Success Icon */}
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
      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {/* First Name */}
          <div className='space-y-1'>
            <label className='text-sm font-medium'>First Name *</label>
            <input
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.firstName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.firstName && <p className='text-xs text-red-500'>{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className='space-y-1'>
            <label className='text-sm font-medium'>Last Name *</label>
            <input
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.lastName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.lastName && <p className='text-xs text-red-500'>{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className='space-y-1 md:col-span-2'>
            <label className='text-sm font-medium'>Email *</label>
            <input
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.email && <p className='text-xs text-red-500'>{errors.email}</p>}
          </div>

          {/* Job Title */}
          <div className='space-y-1'>
            <label className='text-sm font-medium'>Job Title *</label>
            <input
              name='jobTitle'
              value={formData.jobTitle}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.jobTitle ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.jobTitle && <p className='text-xs text-red-500'>{errors.jobTitle}</p>}
          </div>

          {/* Company Name */}
          <div className='space-y-1'>
            <label className='text-sm font-medium'>Company Name *</label>
            <input
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.companyName ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.companyName && <p className='text-xs text-red-500'>{errors.companyName}</p>}
          </div>

          {/* Explore */}
          <div className='space-y-1 md:col-span-2'>
            <label className='text-sm font-medium'>What would you like to explore? *</label>
            <input
              name='explore'
              value={formData.explore}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.explore ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.explore && <p className='text-xs text-red-500'>{errors.explore}</p>}
          </div>

          {/* Date */}
          <div className='space-y-1 md:col-span-2'>
            <label className='text-sm font-medium'>Preferred Date/Time Slot *</label>
            <input
              type='datetime-local'
              name='preferredDateTime'
              value={formData.preferredDateTime}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg ${
                errors.preferredDateTime ? 'border-red-500' : 'border-gray-200'
              }`}
            />
            {errors.preferredDateTime && (
              <p className='text-xs text-red-500'>{errors.preferredDateTime}</p>
            )}
          </div>
        </div>

        <div className='flex gap-3 pt-4'>
          <button
            type='submit'
            disabled={loading}
            className='flex-1 bg-[#7030B1] text-white py-3 rounded-lg font-semibold'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

          <button
            type='button'
            onClick={handleCancel}
            className='flex-1 border border-gray-300 py-3 rounded-lg'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
