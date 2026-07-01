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
import { FiMinus, FiPlus, FiArrowUpRight } from 'react-icons/fi';
import { headerData } from './headerData';
export default function Header({ animate = false, onAnimationStart, onAnimationComplete }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [openMobileItems, setOpenMobileItems] = useState([]);
  const headerRef = useRef(null);
  const { navItems, ctaButton } = headerData;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [forceCloseAgentic, setForceCloseAgentic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we should show or hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up or at the top - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        className={`fixed left-0 right-0 z-[9999] transition-transform duration-500 ${
          isVisible || open ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          top: '0px',
          opacity: animate ? 0 : 1,
        }}
      >
        <div
          className='relative backdrop-blur-sm h-16 border-b border-neutral-200/40 bg-white rounded-full mt-6 max-w-[95%] lg:max-w-[90%] xl:max-w-[1250px] mx-auto'
          style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}
        >
          <div className='mx-auto flex h-full items-center justify-between gap-4 xl:gap-10 px-6 lg:px-10 xl:px-12'>
            <Link
              href='/'
              className='flex items-center z-50 flex-shrink-0'
              onClick={handleLinkClick}
            >
              <img
                src='/images/logo.svg'
                alt='GWC Data.Ai'
                className='w-[130px] lg:w-[120px] xl:w-[150px] h-auto'
              />
            </Link>
            <nav className='hidden lg:flex items-center gap-4 xl:gap-10'>
              {navItems.map(item => {
                // Flatten all links from all columns into a single list
                const allLinks = item.megaMenuColumns?.flatMap(column => column.links) || [];
                // Check if this is Solutions or Partners section
                const shouldOpenInNewTab = item.label === 'Solutions' || item.label === 'Partners';
                const isClaudePath = pathname.startsWith('/partners/claude');
                let isActive = false;
                if (item.label === 'Claude') {
                  isActive = isClaudePath;
                } else if (item.label === 'Partners') {
                  isActive = pathname.startsWith('/partners') && !isClaudePath;
                } else {
                  isActive =
                    pathname === item.href ||
                    (item.href !== '/' && pathname.startsWith('/' + item.href.split('/')[1]));
                }

                const indicatorBase =
                  "after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-[3px] after:bg-[#6F2B8B] after:rounded-full";
                const indicatorOpen =
                  "data-[state=open]:after:content-[''] data-[state=open]:after:absolute data-[state=open]:after:bottom-1 data-[state=open]:after:left-1/2 data-[state=open]:after:-translate-x-1/2 data-[state=open]:after:w-6 data-[state=open]:after:h-[3px] data-[state=open]:after:bg-[#6F2B8B] data-[state=open]:after:rounded-full";

                return (
                  <div
                    key={item.label}
                    className='relative group/nav'
                    onMouseLeave={() => {
                      if (item.agenticMegaMenu) setForceCloseAgentic(false);
                    }}
                  >
                    {item.agenticMegaMenu ? (
                      /* ── Agentic Domo: Wide multi-column mega panel ── */
                      <>
                        <button
                          onClick={e => {
                            e.preventDefault();
                            setForceCloseAgentic(!forceCloseAgentic);
                          }}
                          className={`relative flex items-center gap-0.5 text-[10px] xl:text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap focus:outline-none ${
                            isActive ? indicatorBase : 'hover:opacity-80'
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className='transition-transform duration-200 group-hover/nav:rotate-180'
                          />
                        </button>

                        {/* Mega Panel */}
                        <div
                          className={`transition-all duration-200 fixed left-0 right-0 z-[9999] pt-2 ${
                            forceCloseAgentic
                              ? 'hidden'
                              : 'invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100'
                          }`}
                          style={{ top: '60px' }}
                        >
                          <div className='mx-auto max-w-[1400px] px-4'>
                            <div className='bg-white rounded-[24px] shadow-2xl border border-gray-100 pt-4 lg:pt-5 px-3 lg:px-3 pb-3 lg:pb-3 max-h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar'>
                              {/* Panel Header */}
                              <div className='flex items-center justify-between mb-3'>
                                <div className='flex items-center gap-3'>
                                  <span className='w-6 h-[2px] bg-[#7030B1] inline-block rounded-full' />
                                  <h3 className='text-[16px] font-bold text-[#7030B1]'>
                                    Agentic AI
                                  </h3>
                                </div>
                              </div>

                              {/* Categories Grid */}
                              <div className='flex flex-col gap-3 lg:gap-4 w-full'>
                                {(() => {
                                  const cats = item.agenticCategories || [];
                                  const getCat = id => cats.find(c => c.id === id);

                                  const retail = getCat('retail-merchandising');
                                  const marketing = getCat('marketing');
                                  const manufacturing = getCat('manufacturing-maintenance');
                                  const customerSupport = getCat('customer-support');
                                  const procurement = getCat('procurement');
                                  const hr = getCat('human-resources');
                                  const operations = getCat('operations');
                                  const sales = getCat('sales');
                                  const finance = getCat('finance-risk');
                                  const realEstate = getCat('real-estate');

                                  // Helper to render a single category block
                                  const renderCard = (cat, extraClass = '', isRow1 = false) => {
                                    if (!cat) return null;
                                    const isTwoCol =
                                      cat.id === 'retail-merchandising' || cat.id === 'marketing';

                                    const catIconMap = {
                                      'manufacturing-maintenance': 'aasvg1.svg',
                                      'customer-support': 'aasvg2.svg',
                                      procurement: 'aasvg3.svg',
                                      operations: 'aasvg4.svg',
                                      'human-resources': 'aasvg5.svg',
                                      'retail-merchandising': 'aasvg6.svg',
                                      marketing: 'aasvg7.svg',
                                      sales: 'aasvg8.svg',
                                      'real-estate': 'aasvg9.svg',
                                      'finance-risk': 'aasvg9.svg',
                                      others: 'aasvg9.svg',
                                    };
                                    const iconFile = catIconMap[cat.id] || 'aasvg1.svg';
                                    const bgClass = isTwoCol ? 'bg-[#FAF8FC]' : 'bg-white';

                                    const displayLabel =
                                      {
                                        'manufacturing-maintenance': 'MANUFACTURING',
                                        'customer-support': 'CUSTOMER SUPPORT',
                                        procurement: 'PROCUREMENT',
                                        operations: 'OPERATION',
                                        'human-resources': 'HR',
                                        'retail-merchandising': 'RETAIL',
                                        marketing: 'MARKETING',
                                        sales: 'SALES',
                                        others: 'OTHERS',
                                      }[cat.id] || cat.label;

                                    return (
                                      <div
                                        key={cat.id}
                                        className={
                                          isRow1
                                            ? `w-full h-full flex flex-col ${extraClass}`
                                            : `${bgClass} rounded-[16px] p-3 lg:p-4 border border-[#E5E5E5] transition-colors w-full h-full flex flex-col ${
                                                isTwoCol ? 'md:col-span-2 lg:col-span-2' : ''
                                              } ${extraClass}`
                                        }
                                      >
                                        <h4
                                          className='text-[12px] xl:text-[13px] font-bold text-[#262626] uppercase tracking-wider mb-2 flex items-center gap-2.5 leading-tight'
                                          style={{ fontFamily: '"Poppins", sans-serif' }}
                                        >
                                          <img
                                            src={`/images/${iconFile}`}
                                            alt={displayLabel}
                                            className='w-[18px] h-[18px] object-contain flex-shrink-0'
                                          />
                                          <span>{displayLabel}</span>
                                        </h4>
                                        <ul
                                          className={
                                            isTwoCol
                                              ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1'
                                              : 'flex flex-col gap-y-1'
                                          }
                                        >
                                          {cat.agents.map(agent => (
                                            <li key={agent.href} className='min-w-0'>
                                              <Link
                                                href={agent.href}
                                                onClick={handleLinkClick}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='group flex items-center justify-between text-[11px] xl:text-[12px] text-[#525252] hover:bg-gray-50/80 font-regular leading-tight transition-all rounded px-1.5 py-1 -mx-1.5 truncate'
                                                style={{ fontFamily: '"Poppins", sans-serif' }}
                                              >
                                                <span className='truncate group-hover:bg-gradient-to-b group-hover:from-[#7030B1] group-hover:to-[#B56DD3] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200'>
                                                  {agent.label}
                                                </span>
                                                <FiArrowUpRight
                                                  className='opacity-0 group-hover:opacity-100 flex-shrink-0 text-[#7030B1] transition-opacity ml-1'
                                                  size={14}
                                                />
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    );
                                  };

                                  return (
                                    <>
                                      {/* Row 1 (Single wrapper card) */}
                                      <div className='bg-white rounded-[16px] border border-[#E5E5E5] p-4 lg:p-5 w-full'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 lg:gap-2 w-full'>
                                          {renderCard(manufacturing, '', true)}
                                          {renderCard(customerSupport, '', true)}
                                          {renderCard(procurement, '', true)}
                                          {renderCard(operations, '', true)}
                                          {renderCard(hr, '', true)}
                                        </div>
                                      </div>

                                      {/* Row 2 (6 columns) */}
                                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-3 w-full'>
                                        {renderCard(retail)}
                                        {renderCard(marketing)}
                                        {renderCard(sales)}
                                        {renderCard({
                                          id: 'others',
                                          label: 'OTHERS',
                                          agents: [
                                            ...(realEstate?.agents || []),
                                            ...(finance?.agents || []),
                                          ],
                                        })}
                                      </div>
                                    </>
                                  );
                                })()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : item.megaMenu ? (
                      <DropdownMenu modal={false}>
                        <DropdownMenuTrigger
                          className={`relative flex items-center gap-0 text-[10px] xl:text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap focus:outline-none ${indicatorOpen} ${
                            isActive ? indicatorBase : 'hover:opacity-80'
                          }`}
                        >
                          {item.label}
                          <ChevronDown size={14} className='transition-transform duration-200' />
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
                        className={`relative text-[10px] xl:text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap focus:outline-none ${
                          isActive ? indicatorBase : 'hover:opacity-80'
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
                className='flex items-center justify-center gap-1 text-[12px] xl:text-[13px] font-medium lg:w-[115px] xl:w-[135px] h-[40px] text-white rounded-[25px] transition-all duration-300 hover:opacity-90 flex-shrink-0'
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
                const hasDropdown = allLinks.length > 0 || item.agenticMegaMenu;

                return (
                  <div key={item.href} className='border-b border-gray-200 py-2'>
                    <div className='flex items-center justify-between'>
                      {item.megaMenu || item.agenticMegaMenu ? (
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
                    {/* Standard megaMenu mobile links */}
                    {hasDropdown &&
                      !item.agenticMegaMenu &&
                      openMobileItems.includes(item.label) && (
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
                    {/* Agentic Domo mobile: categories with nested agents */}
                    {item.agenticMegaMenu && openMobileItems.includes(item.label) && (
                      <div className='ml-2.5 mb-2.5 space-y-3'>
                        {item.agenticCategories?.map(cat => (
                          <div key={cat.id}>
                            <p className='text-[10px] font-bold text-[#7030B1] uppercase tracking-wider px-2 py-1'>
                              {cat.label}
                            </p>
                            <div className='pl-4 border-l-2 border-purple-100'>
                              {cat.agents.map(agent => (
                                <Link
                                  key={agent.href}
                                  href={agent.href}
                                  className='block py-1 text-[12px] text-gray-700 hover:text-[#7030B1]'
                                  onClick={handleLinkClick}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  {agent.label}
                                </Link>
                              ))}
                            </div>
                          </div>
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
