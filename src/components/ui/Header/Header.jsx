'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiChevronDown, FiMinus, FiPlus } from 'react-icons/fi';
import { headerData } from './headerData';
export default function Header({ animate = false, onAnimationStart, onAnimationComplete, isBannerVisible }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openMobileItems, setOpenMobileItems] = useState([]);
  const headerRef = useRef(null);
  const dropdownRef = useRef(null);
  const { navItems, ctaButton } = headerData;
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
      if (scrolled) setActiveDropdown(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = event => {
      if (activeDropdown && !headerRef.current?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);
  useEffect(() => {
    if (animate && headerRef.current) {
      onAnimationStart?.();
      headerRef.current.style.opacity = '1';
      onAnimationComplete?.();
    }
  }, [animate, onAnimationStart, onAnimationComplete]);
  const toggleDropdown = (label, e) => {
    if (label && e?.target?.tagName !== 'A') {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === label ? null : label);
    }
  };
  const toggleMobileItem = (label, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMobileItems(prev =>
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };
  const handleNavItemClick = (item, e) => {
    if (item.megaMenu) {
      e.preventDefault();
      toggleDropdown(item.label, e);
    }
  };
  const handleLinkClick = () => {
    setActiveDropdown(null);
    setOpen(false);
    setOpenMobileItems([]);
  };
  const renderMegaMenu = item => {
    if (!item.megaMenuColumns) return null;
    const columnCount = item.megaMenuColumns.length;
    return (
      <div className="pt-12 pb-8 px-8">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="flex gap-12 items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3 text-black">{item.label}</h2>
              <p className="text-base mb-6 max-w-md text-gray-600">{item.subtitle || ''}</p>
              {item.cta && (
                <Link
                  href={item.cta.href}
                  className="inline-flex items-center gap-2 px-5 py-3 text-white font-medium text-sm whitespace-nowrap w-fit bg-black rounded-[25px]"
                  onClick={handleLinkClick}
                >
                  {item.cta.text}
                  <FiArrowUpRight size={18} />
                </Link>
              )}
            </div>
            <div className={`grid gap-8 ${columnCount === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {item.megaMenuColumns.map((column, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-800">
                    {column.title}
                  </h3>
                  <div className="space-y-3">
                    {column.links.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-[15px] font-medium text-gray-700 hover:opacity-70 transition-opacity"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {(activeDropdown || open) && (
        <div
          className="fixed inset-0 bg-black z-[9998] transition-opacity duration-300"
          style={{ opacity: activeDropdown || open ? 0.4 : 0 }}
          onClick={() => {
            setActiveDropdown(null);
            setOpen(false);
          }}
        />
      )}
      <header
        ref={headerRef}
        className="fixed left-0 right-0 z-[9999] transition-all duration-300"
        style={{
          top: isBannerVisible ? '40px' : '0px',
          opacity: animate ? 0 : 1,
        }}
      >
        <div className="relative backdrop-blur-sm border-b border-neutral-200/40 bg-white">
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
            <Link href="/" className="flex items-center z-50 flex-shrink-0" onClick={handleLinkClick}>
              <img src="/images/logo.svg" alt="GWC Data.Ai" className="w-[160px] h-[55px]" />
            </Link>
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navItems.map(item => (
                <div key={item.label} className="relative group">
                  <div className="flex items-center gap-1">
                    {item.megaMenu ? (
                      <button
                        onClick={e => handleNavItemClick(item, e)}
                        className={`text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap ${
                          pathname === item.href
                            ? 'underline underline-offset-4'
                            : 'hover:opacity-80'
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-[14px] font-medium py-2 px-1 transition text-gray-800 whitespace-nowrap ${
                          pathname === item.href
                            ? 'underline underline-offset-4'
                            : 'hover:opacity-80'
                        }`}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.megaMenu && (
                      <button
                        onClick={e => toggleDropdown(item.label, e)}
                        className="p-1"
                        aria-label="Toggle menu"
                      >
                        <FiChevronDown
                          size={14}
                          className={`transition-transform duration-200 text-gray-800 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </nav>
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setOpen(!open)}
                className="w-8 h-8 flex flex-col justify-center items-center"
              >
                <span className="w-4 h-0.5 mb-1 bg-gray-800" />
                <span className="w-4 h-0.5 bg-gray-800" />
              </button>
            </div>
            <div className="hidden lg:flex items-center flex-shrink-0">
              <Link
                href={ctaButton.href}
                className="flex items-center justify-center gap-1 text-[13px] font-medium w-[155px] h-[45px] text-white rounded-[25px] transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(to right, #7030B1, #B56DD3)' }}
                onClick={handleLinkClick}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {ctaButton.text}
              </Link>
            </div>
          </div>
          {activeDropdown && (
            <div className="absolute left-0 right-0 top-full z-[10000] w-full">
              <div className="w-full">
                <div
                  ref={dropdownRef}
                  className="bg-white/95 backdrop-blur-xl border border-t-0 border-neutral-200/60 shadow-2xl overflow-hidden origin-top w-full"
                  style={{ minHeight: '300px' }}
                >
                  {navItems.filter(i => i.label === activeDropdown).map(renderMegaMenu)}
                </div>
              </div>
            </div>
          )}
        </div>
        {open && (
          <div className="lg:hidden border-b border-gray-200 bg-white">
            <div className="px-5 pb-5">
              {navItems.map(item => (
                <div key={item.href} className="border-b border-gray-200 py-1">
                  <div className="flex items-center justify-between">
                    {item.megaMenu ? (
                      <button
                        onClick={e => handleNavItemClick(item, e)}
                        className="block py-2.5 text-[14px] font-medium flex-1 text-left text-gray-800 whitespace-nowrap"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2.5 text-[14px] font-medium flex-1 text-gray-800 whitespace-nowrap"
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.children && item.children.length > 0 && (
                      <button onClick={e => toggleMobileItem(item.label, e)} className="p-1.5">
                        {openMobileItems.includes(item.label) ? (
                          <FiMinus size={14} className="text-gray-800" />
                        ) : (
                          <FiPlus size={14} className="text-gray-800" />
                        )}
                      </button>
                    )}
                  </div>
                  {item.children &&
                    item.children.length > 0 &&
                    openMobileItems.includes(item.label) && (
                      <div className="pl-6 border-l-2 border-gray-200 ml-2.5 mb-2.5">
                        {item.children.map(child => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-1.5 text-[13px] font-medium text-gray-700 whitespace-nowrap"
                            onClick={handleLinkClick}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href={ctaButton.href}
                  className="flex items-center justify-center gap-1 text-[14px] font-medium w-full h-[45px] text-white rounded-[25px] transition-all duration-300 hover:opacity-90"
                  style={{ background: 'linear-gradient(to right, #7030B1, #B56DD3)' }}
                  onClick={handleLinkClick}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
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
