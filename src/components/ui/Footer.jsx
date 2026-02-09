'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Business from '../../components/homePage/Business';

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/company/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Case Studies', href: '/casestudy' },
  ];

  const partners = [
    { name: 'DOMO', href: '/partners/domo' },
    { name: 'Snowflake', href: '/partners/snowflake' },
    { name: 'Boomi', href: '/partners/boomi' },
    { name: 'Databricks', href: '/partners/databricks' },
    { name: 'Google Cloud', href: '/partners/google-cloud' },
  ];

  const solutions = [
    { name: 'AI / Agentic AI', href: '/domo-agentic-ai' },
    { name: 'Data Governance', href: '/solutions/data-governance' },
    { name: 'Data Strategy & Engineering', href: '/solutions/data-strategy-engineering' },
    {
      name: 'Business Intelligence & Analytics',
      href: '/solutions/business-intelligence-analytics',
    },
    { name: 'BI Migration & Modernization', href: '/solutions/bi-migration-modernization' },
    { name: 'Cloud Transformation', href: '/solutions/cloud-transformation' },
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
              <a
                href='https://www.instagram.com/gwcdata.ai'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <img src='/images/instagram_icon.svg' alt='Instagram' className='w-8 h-8' />
              </a>
              <a
                href='https://www.youtube.com/@gwcdataai'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <img src='/images/youtube_icon.svg' alt='YouTube' className='w-8 h-8' />
              </a>
              <a
                href='https://www.linkedin.com/company/gwcdataai'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition-opacity'
              >
                <img src='/images/linkedin_icon.svg' alt='LinkedIn' className='w-8 h-8' />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-[1px] bg-white opacity-20 mb-12'></div>

        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-0 mb-12'>
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
          <div className='lg:-ml-12'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>QUICK LINKS</h3>
            <ul className='space-y-3'>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className='text-sm opacity-90 hover:opacity-100 transition-opacity'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Partners */}
          <div className='lg:-ml-20'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>PARTNERS</h3>
            <ul className='space-y-3'>
              {partners.map(partner => (
                <li key={partner.name}>
                  <Link
                    href={partner.href}
                    className='text-sm opacity-90 hover:opacity-100 transition-opacity'
                  >
                    {partner.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className='lg:-ml-24'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>SOLUTIONS</h3>
            <ul className='space-y-3'>
              {solutions.map(solution => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className='text-sm opacity-90 hover:opacity-100 transition-opacity'
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className='lg:col-span-1 lg:-ml-12'>
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
                <a
                  href='https://www.google.com/maps/search/?api=1&query=46%2F4+Novel+Tech+Park%2C+Kudlu+Gate%2C+Hosur+Rd%2C+HSR+Extension%2C+Bangalore%2C+Karnataka%2C+India+560068'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm opacity-90 leading-relaxed hover:opacity-100 transition-opacity'
                >
                  #46/4 Novel Tech Park, Kudlu Gate, Hosur Rd, HSR Extension, Bangalore, Karnataka,
                  India 560068
                </a>
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
