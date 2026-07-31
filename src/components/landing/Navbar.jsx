'use client';

import { useState, useEffect, useRef } from 'react';
import { LayoutGrid, Phone } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Course', href: '#course' },
  { label: 'About us', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Testimonial', href: '#testimonial' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Home');
  const activeLinkRef = useRef('Home');
  activeLinkRef.current = activeLink;

  const handleLinkClick = (e, href, label) => {
    e.preventDefault();
    if (label) setActiveLink(label);
    else if (activeLinkRef.current !== href.replace('#', '')) {
      setActiveLink(href.replace('#', ''));
    }

    const target = document.querySelector(href);

    // GSAP Loader animation for all main sections
    if (href === '#course' || href === '#about' || href === '#blog' || href === '#testimonial') {
      const loader = document.getElementById('gsap-transition-loader');
      if (loader && target && window.lenis) {
        const tl = gsap.timeline();

        // 1. Slide loader down from top
        tl.set(loader, { transformOrigin: 'top', pointerEvents: 'auto' })
          .to(loader, {
            scaleY: 1,
            duration: 0.7,
            ease: 'power3.inOut',
          })
          .call(() => {
            // 2. Scroll instantly while screen is fully covered
            let scrollOffset = 0;
            if (href === '#course') scrollOffset = 3000;
            if (href === '#about') scrollOffset = 2000;
            if (href === '#blog') scrollOffset = 2400 + 2000; // It's after about
            // Actually, we can just use the target's offsetTop or let lenis handle it if we just don't pass an offset?
            // Wait, for pinned sections earlier in the page, the offsetTop might be shifted.
            // The original logic had:
            if (href === '#blog') scrollOffset = 2400;
            if (href === '#testimonial') scrollOffset = 1500;

            window.lenis.scrollTo(target, { offset: scrollOffset, immediate: true });
          })
          // 3. Slide loader down to bottom to reveal
          .set(loader, { transformOrigin: 'bottom' })
          .to(loader, {
            scaleY: 0,
            duration: 0.7,
            ease: 'power3.inOut',
            delay: 0.1, // tiny pause
          })
          // Reset
          .set(loader, { pointerEvents: 'none', transformOrigin: 'top' });

        return; // Skip standard scroll
      }
    }

    if (target && window.lenis) {
      // For pinned sections, scroll past them to reveal all content
      let offset = 0;
      if (href === '#about') offset = 2000;
      if (href === '#blog') offset = 2400; // ReasonsSection is pinned for 2400px
      if (href === '#testimonial') offset = 1500; // TestimonialSection is pinned for 1500px

      window.lenis.scrollTo(target, {
        offset,
        duration: 2.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const courseSection = document.getElementById('course');
      const aboutSection = document.getElementById('about');

      let nextActive = 'Home';

      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top <= 300) {
          nextActive = 'About us';
        }
      }

      if (courseSection && nextActive === 'Home') {
        const courseRect = courseSection.getBoundingClientRect();
        if (courseRect.top <= 300 && courseRect.bottom >= 300) {
          nextActive = 'Course';
        }
      }

      if (activeLinkRef.current !== nextActive) {
        setActiveLink(nextActive);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* GSAP Transition Loader */}
      <div
        id='gsap-transition-loader'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#de8263', // coral full screen loader
          zIndex: 99999, // extremely high to cover everything
          transform: 'scaleY(0)', // hidden initially
          pointerEvents: 'none',
        }}
      />

      {/* Dynamic sidebar background — transparent on Home/Course/About us, white on other sections */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '200px',
          height: '100vh',
          backgroundColor: ['Home', 'Course', 'About us'].includes(activeLink)
            ? 'transparent'
            : '#ffffff',
          borderRight: ['Home', 'Course', 'About us'].includes(activeLink)
            ? 'none'
            : '1px solid rgba(0,0,0,0.04)',
          transition: 'background-color 0.4s ease',
          zIndex: 49,
          pointerEvents: 'none',
        }}
      />
      {/* Top Header Bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 60px',
          zIndex: 60,
          pointerEvents: 'none',
          // Hide top navbar when not on Home
          opacity: activeLink === 'Home' ? 1 : 0,
          transform: activeLink === 'Home' ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Top Left Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            pointerEvents: activeLink === 'Home' ? 'auto' : 'none',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <Image
              src='/images/landing_logo.png'
              alt='TeqCertify Logo'
              width={44}
              height={44}
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              TeqCertify
            </span>
            <span
              style={{
                fontSize: '9.5px',
                fontWeight: 500,
                color: '#666666',
                letterSpacing: '0.01em',
                fontFamily: "'Outfit', sans-serif",
                marginTop: '1px',
              }}
            >
              Elevate Your Data Journey
            </span>
          </div>
        </div>

        {/* Top Right Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            pointerEvents: activeLink === 'Home' ? 'auto' : 'none',
          }}
        >
          <a
            href='#course'
            onClick={e => handleLinkClick(e, '#course', 'Course')}
            style={{
              backgroundColor: '#ffffff',
              color: '#333333',
              padding: '9px 24px',
              borderRadius: '999px',
              fontSize: '13.5px',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f8f8f8';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#ffffff';
            }}
          >
            Claude Course
          </a>
          <a
            href='#contact'
            onClick={e => handleLinkClick(e, '#contact', null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#de8263',
              color: '#ffffff',
              padding: '9px 24px',
              borderRadius: '999px',
              fontSize: '13.5px',
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(222, 130, 99, 0.3)',
              transition: 'all 0.2s ease',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#cd7355';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#de8263';
            }}
          >
            <Phone size={14} />
            Contact us
          </a>
        </div>
      </header>

      {/* Left Vertical Sidebar Navigation */}
      <nav
        style={{
          position: 'fixed',
          left: 0,
          top: '200px',
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: '60px',
          zIndex: 50,
          gap: '20px',
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {navLinks.map(link => {
          const isActive = activeLink === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleLinkClick(e, link.href, link.label)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: isActive ? '500' : '400',
                color: isActive ? '#2d2d2d' : '#444444',
                textDecoration: 'none',
                backgroundColor: isActive ? '#F9EAE1' : 'transparent',
                backgroundImage: isActive
                  ? 'linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%)'
                  : 'none',
                padding: isActive ? '12px 24px' : '4px 8px',
                borderRadius: '14px',
                boxShadow: isActive ? '0 4px 18px rgba(0, 0, 0, 0.03)' : 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.color = '#111111';
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = '#444444';
              }}
            >
              <span>{link.label}</span>
            </a>
          );
        })}

        {/* Bottom Grid / Dots Icon */}
        <div
          style={{
            marginTop: '20px',
            paddingLeft: '8px',
            color: '#555555',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
          onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
        >
          <LayoutGrid size={18} strokeWidth={2.2} />
        </div>
      </nav>
    </>
  );
}
