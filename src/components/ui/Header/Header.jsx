/* eslint-disable indent */
'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { headerData } from './headerData';
export default function Header({
  animate = false,
  onAnimationStart,
  onAnimationComplete,
  isBannerVisible,
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [openMobileItems, setOpenMobileItems] = useState([]);
  const headerRef = useRef(null);
  const { navItems, ctaButton } = headerData;
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (animate && headerRef.current) {
      onAnimationStart?.();
      headerRef.current.style.opacity = '1';
      onAnimationComplete?.();
    }
  }, [animate, onAnimationStart, onAnimationComplete]);
  const toggleMobileItem = (label, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMobileItems(prev =>
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  const handleLinkClick = () => {
    setOpen(false);
    setOpenMobileItems([]);
  };

  return (
    <>
      {open && (
        <div
          className='fixed inset-0 bg-black z-[9998] transition-opacity duration-300'
          style={{ opacity: open ? 0.4 : 0 }}
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      <header
        ref={headerRef}
        className='fixed left-0 right-0 z-[9999] transition-all duration-300'
        style={{
          top: '0px',
          opacity: animate ? 0 : 1,
        }}
      >
        <div className='relative backdrop-blur-sm border-b border-neutral-200/40 bg-white'>
          <div className='mx-auto flex h-14 items-center justify-between px-6 lg:px-4 xl:px-6'>
            <Link
              href='/'
              className='flex items-center z-50 flex-shrink-0'
              onClick={handleLinkClick}
            >
              <img
                src='/images/logo.svg'
                alt='GWC Data.Ai'
                className='w-[140px] lg:w-[130px] xl:w-[160px] h-auto'
              />
            </Link>
            <nav className='hidden lg:flex items-center lg:gap-2 xl:gap-8 flex-1 justify-center'>
              {navItems.map(item => {
                // Flatten all links from all columns into a single list
                const allLinks = item.megaMenuColumns?.flatMap(column => column.links) || [];
                // Check if this is Solutions or Partners section
                const shouldOpenInNewTab = item.label === 'Solutions' || item.label === 'Partners';

                return (
                  <div key={item.label} className='relative'>
                    {item.megaMenu ? (
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                          <button
                            className={`flex items-center gap-1 text-[13px] xl:text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap ${
                              pathname === item.href
                                ? 'underline underline-offset-4'
                                : 'hover:opacity-80'
                            }`}
                          >
                            {item.label}
                            <ChevronDown size={14} className='transition-transform duration-200' />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align='center'
                          sideOffset={15}
                          className='bg-white shadow-lg border border-gray-100 min-w-[280px] p-0 overflow-hidden'
                        >
                          {allLinks.map((link, index) => (
                            <DropdownMenuItem key={link.href} asChild className='p-0 rounded-none'>
                              <Link
                                href={link.href}
                                className={`block px-6 py-3 text-left text-[15px] font-medium text-gray-700 hover:bg-purple-100 transition-colors cursor-pointer ${
                                  index === 0 ? 'rounded-t-2xl' : ''
                                } ${index === allLinks.length - 1 ? 'rounded-b-2xl' : ''}`}
                                onClick={handleLinkClick}
                                {...(shouldOpenInNewTab && {
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                })}
                              >
                                {link.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-[13px] xl:text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap ${
                          pathname === item.href
                            ? 'underline underline-offset-4'
                            : 'hover:opacity-80'
                        }`}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className='flex lg:hidden items-center gap-3'>
              <button
                onClick={() => setOpen(!open)}
                className='w-8 h-8 flex flex-col justify-center items-center'
              >
                <span className='w-4 h-0.5 mb-1 bg-gray-800' />
                <span className='w-4 h-0.5 bg-gray-800' />
              </button>
            </div>
            <div className='hidden lg:flex items-center flex-shrink-0'>
              <Link
                href={ctaButton.href}
                className='flex items-center justify-center gap-1 text-[12px] xl:text-[13px] font-medium lg:w-[125px] xl:w-[155px] h-[45px] text-white rounded-[25px] transition-all duration-300 hover:opacity-90 flex-shrink-0'
                style={{ background: 'linear-gradient(to right, #7030B1, #B56DD3)' }}
                onClick={handleLinkClick}
              >
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='mr-1'
                >
                  <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                </svg>
                {ctaButton.text}
              </Link>
            </div>
          </div>
        </div>
        {open && (
          <div className='lg:hidden border-b border-gray-200 bg-white'>
            <div className='px-5 pb-5'>
              {navItems.map(item => {
                const allLinks = item.megaMenuColumns?.flatMap(column => column.links) || [];
                const shouldOpenInNewTab = item.label === 'Solutions' || item.label === 'Partners';
                const hasDropdown = allLinks.length > 0;

                return (
                  <div key={item.href} className='border-b border-gray-200 py-2'>
                    <div className='flex items-center justify-between'>
                      {item.megaMenu ? (
                        <button
                          onClick={e => toggleMobileItem(item.label, e)}
                          className='block py-2.5 text-[14px] font-medium flex-1 text-left text-gray-800 whitespace-nowrap'
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className='block py-2.5 text-[14px] font-medium flex-1 text-gray-800 whitespace-nowrap'
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </Link>
                      )}
                      {hasDropdown && (
                        <button onClick={e => toggleMobileItem(item.label, e)} className='p-1.5'>
                          {openMobileItems.includes(item.label) ? (
                            <FiMinus size={14} className='text-gray-800' />
                          ) : (
                            <FiPlus size={14} className='text-gray-800' />
                          )}
                        </button>
                      )}
                    </div>
                    {hasDropdown && openMobileItems.includes(item.label) && (
                      <div className='pl-6 border-l-2 border-gray-200 ml-2.5 mb-2.5'>
                        {allLinks.map(link => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className='block py-1.5 text-[13px] font-medium text-gray-700 whitespace-nowrap'
                            onClick={handleLinkClick}
                            {...(shouldOpenInNewTab && {
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            })}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className='mt-4 pt-4 border-t border-gray-200'>
                <Link
                  href={ctaButton.href}
                  className='flex items-center justify-center gap-1 text-[14px] font-medium w-full h-[45px] text-white rounded-[25px] transition-all duration-300 hover:opacity-90'
                  style={{ background: 'linear-gradient(to right, #7030B1, #B56DD3)' }}
                  onClick={handleLinkClick}
                >
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='mr-1'
                  >
                    <path d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
                  </svg>
                  {ctaButton.text}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
