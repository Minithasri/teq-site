'use client';
import { usePathname } from 'next/navigation';
import Business from '../../pages/homePage/Business';

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const quickLinks = ['Home', 'About Us', 'Contact Us', 'Blogs', 'Case Studies'];
  const partners = ['DOMO', 'Snowflake', 'Boomi', 'Databricks', 'Google Cloud'];
  const solutions = [
    'AI / Agentic AI',
    'Data Governance',
    'Data Strategy & Engineering',
    'Business Intelligence & Analytics',
    'BI Migration & Modernization',
    'Cloud Transformation',
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #5B2687 0%, #3E184E 100%)', // Updated Gradient
        color: '#ffffff',
        borderTopLeftRadius: '0px',
      }}
    >
      {isHomePage && (
        <div className='w-full'>
          <Business />
        </div>
      )}

      <div className='max-w-7xl mx-auto px-8 lg:px-12 py-12'>
        {/* TOP SECTION: Logo + Socials */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          {/* Logo */}
          <div className='mb-6 md:mb-0'>
            <img
              src='/images/Footer.png'
              alt='GWC DATA.AI SOLUTION MATTERS'
              className='w-[200px] md:w-[240px] h-auto object-contain'
            />
          </div>

          {/* Social Media */}
          <div className='flex items-center gap-4'>
            <span className='text-sm font-medium'>Follow us on</span>
            <div className='flex gap-3'>
              <a href='#' className='hover:opacity-80 transition-opacity'>
                <img src='/images/instagram_icon.svg' alt='Instagram' className='w-8 h-8' />
              </a>
              <a href='#' className='hover:opacity-80 transition-opacity'>
                <img src='/images/youtube_icon.svg' alt='YouTube' className='w-8 h-8' />
              </a>
              <a href='#' className='hover:opacity-80 transition-opacity'>
                <img src='/images/linkedin_icon.svg' alt='LinkedIn' className='w-8 h-8' />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-white opacity-20 mb-12'></div>

        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  mb-12'>
          {/* Col 1: Certifications */}
          <div className='flex flex-col gap-4'>
            <img
              src='/images/GreatPlaceToWork.png'
              alt='Great Place to Work'
              className='w-[80px] h-[120px] object-contain p-1 rounded-sm'
            />
            <img src='/images/NASSCOM.png' alt='NASSCOM' className='w-[140px] object-contain' />
          </div>

          {/* Col 2: Quick Links */}
          <div className='-ml-12'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>QUICK LINKS</h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link}>
                  <a href='#' className='text-sm opacity-90 hover:opacity-100 transition-opacity'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Partners */}
          <div className='-ml-20'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>PARTNERS</h3>
            <ul className='space-y-3'>
              {partners.map(partner => (
                <li key={partner}>
                  <a href='#' className='text-sm opacity-90 hover:opacity-100 transition-opacity'>
                    {partner}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className='-ml-24'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>SOLUTIONS</h3>
            <ul className='space-y-3'>
              {solutions.map(solution => (
                <li key={solution}>
                  <a href='#' className='text-sm opacity-90 hover:opacity-100 transition-opacity'>
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className='lg:col-span-1 -ml-12'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>CONTACT US</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 flex-shrink-0 mt-0.5 opacity-80'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-sm opacity-90 leading-relaxed'>
                  #46/4 Novel Tech Park, Kudlu Gate, Hosur Rd, HSR Extension, Bangalore, Karnataka,
                  India 560068
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <svg
                  className='w-5 h-5 flex-shrink-0 opacity-80'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <a
                  href='mailto:indiahr@gwcdata.ai'
                  className='text-sm opacity-90 hover:opacity-100'
                >
                  indiahr@gwcdata.ai
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-5 h-5 flex-shrink-0 mt-0.5 opacity-80'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
                <span className='text-sm opacity-90'>+91 95914 33122 | +91 99861 68512</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-white opacity-20 mb-8'></div>

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs lg:text-sm opacity-70'>
          <div>© 2024 GLOBAL WE CONNECT TECHNOLOGIES PRIVATE LIMITED . All Rights Reserved.</div>
          <div className='flex gap-4'>
            <a href='#' className='hover:opacity-100 transition-opacity'>
              Privacy
            </a>
            <span>|</span>
            <a href='#' className='hover:opacity-100 transition-opacity'>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
