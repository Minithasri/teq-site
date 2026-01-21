'use client';

import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const SERVICEID = 'service_52ras9h';
const TEMPLATEID = 'template_ivl46tu';
const PUBLICID = 'mPEoxk7E9_GZ0ooHP';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const notify = () => {
    toast.success(
      'Thank You, Got your message! Our team is on standby, and you can expect a response in 24 hours',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      }
    );
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Should contain only letters')
      .required('First Name is required'),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Should contain only letters')
      .required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .test('business-email', 'Please, enter the Business Email Address', function (value) {
        if (value && value.includes('@gmail.com')) {
          return false;
        }
        return true;
      })
      .required('Business Email Address is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Must be only 10 digits')
      .required('Mobile Number is required'),
    message: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    setIsSending(true);
    const formData = {
      applicant_name: values.firstName,
      last_name: values.lastName,
      applicant_email: values.email,
      applicant_phone: values.phone,
      message: values.message,
    };

    emailjs.send(SERVICEID, TEMPLATEID, formData, PUBLICID).then(
      response => {
        notify();
        resetForm();
        setIsSending(false);
        setIsModalOpen(false);
      },
      err => {
        console.error('Error:', err);
        toast.error(
          'Hello! There is some network issue. Please check your internet connection and re-submit the request.'
        );
        setIsSending(false);
      }
    );
  };

  return (
    <section
      className='relative w-full overflow-hidden min-h-[700px]'
      style={{ background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
    >
      <ToastContainer />
      {/* Top Image Section */}
      <div className='absolute top-0 left-0 w-full h-[400px]'>
        <Image
          src='/images/ContactUs/contactUsBanneer.webp'
          alt='Contact Background'
          fill
          className='object-cover'
          priority
        />
        {/* Dark Overlay for text readability on image */}
        <div className='absolute inset-0 bg-black/40' />
      </div>

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[700px]'>
          {/* Left Side */}
          <div className='flex flex-col justify-between py-12 lg:py-20'>
            {/* Breadcrumb - Positioned on the Image Area */}
            <nav aria-label='Breadcrumb' className='pt-8'>
              <ol className='inline-flex items-center gap-2 text-[15px] text-white font-medium'>
                <li className='flex items-center gap-2'>
                  <Link href='/' className='hover:opacity-80 transition-opacity'>
                    Home
                  </Link>
                </li>
                <li>
                  <Image
                    src='/images/next_arrow.svg'
                    alt=''
                    width={6}
                    height={6}
                    aria-hidden
                    className='opacity-80'
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </li>
                <li>
                  <span className=''>Contact Us</span>
                </li>
              </ol>
            </nav>

            {/* Main Text - Positioned on the Purple Area */}
            <div className=''>
              <h1 className='text-white text-[32px] lg:text-[40px] font-bold leading-tight mb-6'>
                Get In Touch With Us
              </h1>
              <div className='space-y-2'>
                <p className='text-white text-[18px] lg:text-[20px] leading-relaxed'>
                  Have an inquiry or some feedback for us?
                </p>
                <p className='text-white text-[18px] lg:text-[20px] leading-relaxed'>
                  Fill out this form to contact our team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Floating White Card */}
          <div className='flex items-center justify-center lg:justify-end py-12 lg:py-20'>
            <div className='bg-white rounded-[32px] shadow-2xl p-10 lg:p-14 w-full max-w-[600px]'>
              <h2 className='text-[#333333] text-[28px] lg:text-[32px] font-semibold text-center mb-4'>
                How would you like to connect?
              </h2>
              <p className='text-[#666666] text-[16px] text-center mb-10 leading-relaxed max-w-md mx-auto'>
                Choose the option that best fits your needs. We're here to help with both career
                opportunities and general inquiries.
              </p>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className='flex items-center justify-center gap-2 bg-[#7030B1] text-white px-6 py-4 rounded-full font-medium text-[15px] hover:bg-[#5f2896] transition-colors shadow-lg flex-1 whitespace-nowrap'
                >
                  For Business Enquiry
                  <div className='bg-white/20 rounded-full p-0.5'>
                    <FiArrowRight size={16} />
                  </div>
                </button>
                <Link
                  href='/careers'
                  className='flex items-center justify-center gap-2 bg-[#7030B1] text-white px-6 py-4 rounded-full font-medium text-[15px] hover:bg-[#5f2896] transition-colors shadow-lg flex-1 whitespace-nowrap'
                >
                  Apply for Job
                  <div className='bg-white/20 rounded-full p-0.5'>
                    <FiArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-end bg-black/50 p-4'>
          <div className='bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] mt-24 overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200'>
            <div className='p-6 md:p-8'>
              {/* Back Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className='flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors'
              >
                <FiArrowLeft size={20} />
                <span className='font-medium'>Back</span>
              </button>

              <h2 className='text-3xl font-bold text-gray-900 mb-8'>Request a Demo</h2>

              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {/* First Name */}
                      <div className='space-y-2'>
                        <label
                          htmlFor='firstName'
                          className='block text-sm font-bold text-gray-900'
                        >
                          First Name<span className='text-red-500'>*</span>
                        </label>
                        <Field
                          type='text'
                          id='firstName'
                          name='firstName'
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.firstName && touched.firstName
                              ? 'border-red-500'
                              : 'border-gray-300'
                          } focus:ring-2 focus:ring-[#7030B1] focus:border-transparent outline-none transition-all resize-none`}
                        />
                        <ErrorMessage
                          name='firstName'
                          component='span'
                          className='text-red-500 text-sm'
                        />
                      </div>
                      {/* Last Name */}
                      <div className='space-y-2'>
                        <label htmlFor='lastName' className='block text-sm font-bold text-gray-900'>
                          Last Name<span className='text-red-500'>*</span>
                        </label>
                        <Field
                          type='text'
                          id='lastName'
                          name='lastName'
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.lastName && touched.lastName
                              ? 'border-red-500'
                              : 'border-gray-300'
                          } focus:ring-2 focus:ring-[#7030B1] focus:border-transparent outline-none transition-all`}
                        />
                        <ErrorMessage
                          name='lastName'
                          component='span'
                          className='text-red-500 text-sm'
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      {/* Business Email */}
                      <div className='space-y-2'>
                        <label htmlFor='email' className='block text-sm font-bold text-gray-900'>
                          Business Email Address<span className='text-red-500'>*</span>
                        </label>
                        <Field
                          type='email'
                          id='email'
                          name='email'
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-[#7030B1] focus:border-transparent outline-none transition-all`}
                        />
                        <ErrorMessage
                          name='email'
                          component='span'
                          className='text-red-500 text-sm'
                        />
                      </div>
                      {/* Phone */}
                      <div className='space-y-2'>
                        <label htmlFor='phone' className='block text-sm font-bold text-gray-900'>
                          Phone<span className='text-red-500'>*</span>
                        </label>
                        <Field
                          type='tel'
                          id='phone'
                          name='phone'
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
                          } focus:ring-2 focus:ring-[#7030B1] focus:border-transparent outline-none transition-all`}
                        />
                        <ErrorMessage
                          name='phone'
                          component='span'
                          className='text-red-500 text-sm'
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className='space-y-2'>
                      <label htmlFor='message' className='block text-sm font-bold text-gray-900'>
                        Message
                      </label>
                      <Field
                        as='textarea'
                        id='message'
                        name='message'
                        placeholder='Enter your message'
                        rows={2}
                        className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7030B1] focus:border-transparent outline-none transition-all resize-none'
                      />
                      <ErrorMessage
                        name='message'
                        component='span'
                        className='text-red-500 text-sm'
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type='submit'
                      disabled={isSending}
                      className={`w-full py-4 bg-[#6B2C91] hover:bg-[#5a247a] text-white font-medium rounded-lg transition-colors shadow-md text-lg ${
                        isSending ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSending ? 'Sending...' : 'Submit'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
