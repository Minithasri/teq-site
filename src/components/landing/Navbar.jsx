'use client';

import { useState, useEffect, useRef } from 'react';
import { LayoutGrid, Phone } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  // Helper: compute the absolute scroll position of an element inside the scroller.
  // This is stable regardless of GSAP pin/unpin state because it uses live DOM measurements.
  const getAbsoluteScrollTop = el => {
    const scroller = document.getElementById('main-scroll-container');
    if (!el || !scroller) return 0;
    const elRect = el.getBoundingClientRect();
    const scrollerRect = scroller.getBoundingClientRect();
    return scroller.scrollTop + (elRect.top - scrollerRect.top);
  };

  const scrollToTarget = (absoluteTop, withLoader = false) => {
    const loader = document.getElementById('gsap-transition-loader');
    const scroller = document.getElementById('main-scroll-container');

    if (withLoader && loader && window.lenis) {
      const tl = gsap.timeline();
      tl.set(loader, { transformOrigin: 'top', pointerEvents: 'auto' })
        .to(loader, { scaleY: 1, duration: 0.55, ease: 'power3.inOut' })
        .call(() => {
          window.lenis.scrollTo(absoluteTop, { immediate: true });
        })
        .set(loader, { transformOrigin: 'bottom' })
        .to(loader, { scaleY: 0, duration: 0.55, ease: 'power3.inOut', delay: 0.1 })
        .set(loader, { pointerEvents: 'none', transformOrigin: 'top' });
    } else if (window.lenis) {
      window.lenis.scrollTo(absoluteTop, {
        duration: 1.8,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (scroller) {
      scroller.scrollTo({ top: absoluteTop, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, href, label) => {
    e.preventDefault();

    // Disable onClick action for Blog and Testimonial (no scroll destination)
    if (
      label === 'Blog' ||
      label === 'Testimonial' ||
      href === '#blog' ||
      href === '#testimonial'
    ) {
      return;
    }

    if (label) setActiveLink(label);
    else if (activeLinkRef.current !== href.replace('#', '')) {
      setActiveLink(href.replace('#', ''));
    }

    // ── Home: always jump to absolute top ───────────────────────────────
    if (href === '#home') {
      scrollToTarget(0, true);
      return;
    }

    // ── Course: special handling — getBoundingClientRect is unreliable for ─
    // GSAP-pinned elements (returns 0 when section is currently pinned).    ─
    // Instead we use ScrollTrigger.getAll() to read the accurate st.start   ─
    // position, then scroll 2800px into the 3500px pin zone (≈80% progress). ─
    if (href === '#course') {
      // Snap the timeline to fully-revealed state first (no scrub lag)
      window.dispatchEvent(new CustomEvent('course:reveal'));

      const loader = document.getElementById('gsap-transition-loader');
      const scroller = document.getElementById('main-scroll-container');
      if (loader && window.lenis) {
        const loaderTl = gsap.timeline();
        loaderTl
          .set(loader, { transformOrigin: 'top', pointerEvents: 'auto' })
          .to(loader, { scaleY: 1, duration: 0.55, ease: 'power3.inOut' })
          .call(() => {
            // Find the course section's ScrollTrigger by its trigger element id
            const courseST = ScrollTrigger.getAll().find(st => st.trigger?.id === 'course');
            // st.start is the exact scroll position where the pin begins—always accurate
            const targetScroll = courseST
              ? courseST.start + 2800
              : scroller
                ? scroller.scrollTop
                : 0;
            window.lenis.scrollTo(targetScroll, { immediate: true });
          })
          .set(loader, { transformOrigin: 'bottom' })
          .to(loader, { scaleY: 0, duration: 0.55, ease: 'power3.inOut', delay: 0.1 })
          .set(loader, { pointerEvents: 'none', transformOrigin: 'top' });
      }
      return; // Course is fully handled above
    }

    // ── Features (About us) feature cards start hidden — signal them to reveal
    if (href === '#about') {
      window.dispatchEvent(new CustomEvent('about:reveal'));
    }

    // ── All other links: measure true position from DOM right now ────────
    const target = document.querySelector(href);
    if (!target) return;

    const absoluteTop = getAbsoluteScrollTop(target);
    scrollToTarget(absoluteTop, true);
  };

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll-container');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const courseSection = document.getElementById('course');
      const aboutSection = document.getElementById('about');
      const footerSection = document.getElementById('footer-cta');

      let nextActive = 'Home';

      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top <= 300) {
          nextActive = 'About us';
        }
      }

      // Check if we are near the bottom of the page (FooterCTA)
      if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();
        // If the footer is mostly visible
        if (footerRect.top <= window.innerHeight - 300) {
          nextActive = 'FooterCTA';
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
          backgroundColor: '#DE896A', // coral full screen loader
          zIndex: 99999, // extremely high to cover everything
          transform: 'scaleY(0)', // hidden initially
          pointerEvents: 'none',
        }}
      />

      {/* Dynamic sidebar background — transparent on Home/Course/About us/FooterCTA, white on other sections */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '200px',
          height: '100vh',
          backgroundColor: ['Home', 'Course', 'About us', 'FooterCTA'].includes(activeLink)
            ? 'transparent'
            : '#ffffff',
          borderRight: ['Home', 'Course', 'About us', 'FooterCTA'].includes(activeLink)
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
              backgroundColor: '#DE896A',
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
              e.currentTarget.style.backgroundColor = '#DE896A';
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
          opacity: activeLink === 'FooterCTA' ? 0 : 1,
          pointerEvents: activeLink === 'FooterCTA' ? 'none' : 'auto',
          transition: 'opacity 0.4s ease',
        }}
      >
        {navLinks.map(link => {
          const isActive = activeLink === link.label;

          // If activeLink is 'Home', Home uses the White Capsule styling
          if (isActive && activeLink === 'Home') {
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
                  fontWeight: '500',
                  color: '#2d2d2d',
                  textDecoration: 'none',
                  backgroundColor: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Home •</span>
              </a>
            );
          }

          // If any other link is active (Course, About us, etc.), it uses the underline styling
          if (isActive) {
            return (
              <div
                key={link.label}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <a
                  href={link.href}
                  onClick={e => handleLinkClick(e, link.href, link.label)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#2d2d2d',
                    textDecoration: 'none',
                    padding: '4px 8px',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>{link.label} •</span>
                </a>
                <div
                  style={{
                    width: '48px',
                    height: '1.5px',
                    backgroundColor: '#DE896A',
                    marginTop: '4px',
                    marginLeft: '8px',
                  }}
                />
              </div>
            );
          }

          // Inactive links
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
                fontWeight: '400',
                color: '#444444',
                textDecoration: 'none',
                padding: '4px 8px',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#111111';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#444444';
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
