'use client';
import Image from 'next/image';
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
    // { name: 'AI Assessment', href: '/ai-readiness-assessment' },
  ];

  const partners = [
    { name: 'Claude', href: '/partners/claude' },
    { name: 'DOMO', href: '/partners/domo' },
    { name: 'Snowflake', href: '/partners/snowflake' },
    { name: 'Boomi', href: '/partners/boomi' },
    { name: 'Databricks', href: '/partners/databricks' },
    { name: 'Google Cloud', href: '/partners/google-cloud' },
  ];

  const solutions = [
    { name: 'AI / Agentic AI', href: '/domo-consulting' },
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
        background: 'linear-gradient(180deg, #5B2687 0%, #3E184E 100%)', // Updated Gradient
        color: '#ffffff',
        borderTopLeftRadius: '0px',
      }}
    >
      {isHomePage && (
        <div className='w-full'>
          <Business />
        </div>
      )}

      <div className='max-w-[1440px] mx-auto px-8 lg:px-12 pt-16 pb-8'>
        {/* Main Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12'>
          {/* Col 1: Logo & Social Media */}
          <div className='flex flex-col justify-between lg:col-span-2'>
            <div>
              <Image
                src='/images/Footer.png'
                alt='GWC DATA.AI SOLUTION MATTERS'
                width={240}
                height={80}
                className='w-[200px] md:w-[240px] h-auto object-contain'
              />
            </div>
            <div className='flex flex-col gap-3 mt-8 lg:mt-0'>
              <span className='text-sm font-semibold opacity-90'>Follow us on</span>
              <div className='flex gap-3'>
                <a
                  href='https://www.instagram.com/gwcdata.ai'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity'
                >
                  <Image
                    src='/images/instagram_icon.svg'
                    alt='Instagram'
                    width={20}
                    height={20}
                    className='w-5 h-5 brightness-0'
                  />
                </a>
                <a
                  href='https://www.youtube.com/@gwcdataai'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity'
                >
                  <Image
                    src='/images/youtube_icon.svg'
                    alt='YouTube'
                    width={20}
                    height={20}
                    className='w-5 h-5 brightness-0'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/company/gwcdataai'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity'
                >
                  <Image
                    src='/images/linkedin_icon.svg'
                    alt='LinkedIn'
                    width={20}
                    height={20}
                    className='w-5 h-5 brightness-0'
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className='lg:col-span-2 lg:ml-8'>
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
          <div className='lg:col-span-2 lg:ml-6'>
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
          <div className='lg:col-span-3 lg:ml-6'>
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
          <div className='lg:col-span-3'>
            <h3 className='font-bold mb-6 text-sm uppercase tracking-wider'>CONTACT US</h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <Image
                  src='/images/footer1.svg'
                  alt='Location'
                  width={20}
                  height={20}
                  className='w-5 h-5 flex-shrink-0 mt-0.5'
                />
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
                <Image
                  src='/images/footer2.svg'
                  alt='Email'
                  width={20}
                  height={20}
                  className='w-5 h-5 flex-shrink-0'
                />
                <a
                  href='mailto:indiahr@gwcdata.ai'
                  className='text-sm opacity-90 hover:opacity-100'
                >
                  indiahr@gwcdata.ai
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <Image
                  src='/images/footer3.svg'
                  alt='Phone'
                  width={20}
                  height={20}
                  className='w-5 h-5 flex-shrink-0 mt-0.5'
                />
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
