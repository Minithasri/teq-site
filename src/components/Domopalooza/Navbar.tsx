import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

type NavItem = {
  label: string;
  href: string;
  internal?: boolean; // true = react-router, false = external URL
  hasDropdown?: boolean;
  dropdown?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/', internal: true },
  { label: 'Company', href: 'https://gwcdata.ai/company/about/', internal: false },
  {
    label: 'Solutions',
    href: '#',
    hasDropdown: true,
    dropdown: [
      {
        label: 'Data Strategy & Engineering',
        href: 'https://gwcdata.ai/solutions/data-strategy-engineering/',
      },
      { label: 'Data Governance', href: 'https://gwcdata.ai/solutions/data-governance/' },
      {
        label: 'Business Intelligence & Analytics',
        href: 'https://gwcdata.ai/solutions/business-intelligence-analytics/',
      },
      {
        label: 'BI Migration & Modernization',
        href: 'https://gwcdata.ai/solutions/bi-migration-modernization/',
      },
      { label: 'Cloud Transformation', href: 'https://gwcdata.ai/solutions/cloud-transformation/' },
    ],
  },
  {
    label: 'Partners',
    href: '#',
    hasDropdown: true,
    dropdown: [
      { label: 'Domo', href: 'https://gwcdata.ai/partners/domo/' },
      { label: 'Snowflake', href: 'https://gwcdata.ai/partners/snowflake/' },
      { label: 'Databricks', href: 'https://gwcdata.ai/partners/databricks/' },
      { label: 'Google Cloud', href: 'https://gwcdata.ai/partners/google-cloud/' },
      { label: 'Boomi', href: 'https://gwcdata.ai/partners/boomi/' },
    ],
  },
  { label: 'Domo', href: 'https://gwcdata.ai/domo-consulting/', internal: false },
  { label: 'Agentic AI', href: 'https://gwcdata.ai/boomi-integration/', internal: false },
  { label: 'Careers', href: 'https://gwcdata.ai/careers/', internal: false },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const handleNavClick = (item: NavItem) => {
    if (item.internal) {
      navigate(item.href);
    } else if (!item.hasDropdown) {
      window.location.href = item.href;
    }
  };

  return (
    <nav
      className='flex items-center justify-between bg-white shadow-sm relative z-50'
      style={{ padding: '13px 100px' }}
    >
      {/* Logo → goes to home page (internal) */}
      <button
        onClick={() => navigate('/')}
        className='border-none bg-transparent cursor-pointer p-0'
      >
        <img
          src={logo}
          alt='GWC DATA.AI'
          style={{ width: '161.87px', height: '56px', objectFit: 'contain' }}
        />
      </button>

      {/* Nav links */}
      <ul className='hidden md:flex items-center list-none m-0 p-0' style={{ gap: '24px' }}>
        {navItems.map(item => (
          <li
            key={item.label}
            className='relative'
            onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
            onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
          >
            {item.hasDropdown ? (
              // Dropdown trigger button
              <button
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                className='flex items-center bg-transparent border-none cursor-pointer text-gray-700 hover:text-purple-600 transition-colors duration-150 whitespace-nowrap p-0'
                style={{ fontSize: '14px', fontWeight: 500, lineHeight: '24px' }}
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className='ml-0.5 text-gray-500 mt-px transition-transform duration-200'
                  style={{
                    transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
            ) : (
              // Regular nav item
              <button
                onClick={() => handleNavClick(item)}
                className='flex items-center bg-transparent border-none cursor-pointer text-gray-700 hover:text-purple-600 transition-colors duration-150 whitespace-nowrap p-0'
                style={{ fontSize: '14px', fontWeight: 500, lineHeight: '24px' }}
              >
                {item.label}
              </button>
            )}

            {/* Dropdown panel */}
            {item.hasDropdown && openDropdown === item.label && (
              <div
                className='absolute top-full left-0 bg-white rounded-lg shadow-lg py-2 z-50'
                style={{ minWidth: '280px', marginTop: '8px', border: '1px solid #f0f0f0' }}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown?.map(sub => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className='block px-5 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-150 no-underline whitespace-nowrap'
                    style={{ fontSize: '14px', fontWeight: 400, textDecoration: 'none' }}
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Contact Us */}
      <a
        href='https://gwcdata.ai/contact/'
        className='flex items-center justify-center transition-opacity duration-150 hover:opacity-90 no-underline'
        style={{
          width: '154px',
          height: '45px',
          borderRadius: '24px',
          gap: '10px',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '14px',
          color: '#FFFFFF',
          textDecoration: 'none',
          background: 'linear-gradient(135deg, #7030B1 0%, #B56DD3 100%)',
          flexShrink: 0,
        }}
      >
        <svg
          width='18'
          height='18'
          viewBox='0 0 24 24'
          fill='white'
          xmlns='http://www.w3.org/2000/svg'
          style={{ flexShrink: 0 }}
        >
          <path d='M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z' />
        </svg>
        Contact Us
      </a>
    </nav>
  );
};

export default Navbar;
