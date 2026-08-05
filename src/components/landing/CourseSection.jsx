'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutGrid } from 'lucide-react';
import { useEffect, useRef } from 'react';

const courseDetails = [
  { label: 'Program', value: 'The Claude Professional Program' },
  { label: 'Levels', value: 'Foundation, Applied, Architect' },
  { label: 'Format', value: 'In person, cohort based' },
  { label: 'Location', value: 'Kumudepalli, Moranapalli, TN 635130' },
];

export default function CourseSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scroller = document.getElementById('main-scroll-container');
    if (!sectionRef.current || !scroller) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      });
      tl.from(contentRef.current, { autoAlpha: 0, y: 26, duration: 0.65, ease: 'power3.out' }).from(
        cardRefs.current,
        { autoAlpha: 0, y: 18, scale: 0.98, stagger: 0.09, duration: 0.45, ease: 'power3.out' },
        '-=0.35'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='course'
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#F8F7F6',
        overflow: 'hidden',
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(360px, 1fr) minmax(560px, 1.35fr)',
          minHeight: '100vh',
          marginLeft: '200px',
        }}
      >
        <div
          ref={contentRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '100px 80px',
            background: '#F8F7F6',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#454545',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
            }}
          >
            <LayoutGrid size={15} color='#DE896A' /> What is TeqCertify
          </div>
          <div
            style={{ width: '60px', height: '3px', margin: '22px 0 50px', background: '#DE896A' }}
          />
          <h2
            style={{
              maxWidth: '490px',
              margin: 0,
              color: '#DE896A',
              fontSize: 'clamp(48px, 4.2vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-.045em',
            }}
          >
            A training institute that teaches one thing, properly.
          </h2>
          <p
            style={{
              maxWidth: '470px',
              margin: '34px 0 0',
              color: '#6c6c6c',
              fontSize: '18px',
              lineHeight: 1.7,
            }}
          >
            TeqCertify is a professional training institute in Tamil Nadu. Since 2022, we have
            trained more than 1,200 people in data and cloud roles, and placed them in real jobs.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '90px 0',
            background: '#DE896A',
          }}
        >
          {courseDetails.map((item, index) => {
            const even = index % 2 === 0;
            return (
              <div
                key={item.label}
                ref={element => {
                  cardRefs.current[index] = element;
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: even ? '35% 65%' : '43% 57%',
                  minHeight: '100px',
                  borderBottom: '1px solid rgba(255,255,255,.8)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '24px 40px',
                    background: even ? '#fff' : '#DE896A',
                    color: even ? '#DE896A' : '#161616',
                    fontSize: '17px',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '24px 40px',
                    background: even ? '#DE896A' : '#fff',
                    color: '#151515',
                    fontSize: '17px',
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>
        {
          '@media (max-width: 900px) { section > div { margin-left: 0 !important; grid-template-columns: 1fr !important; } section > div > div { padding: 80px 28px !important; } }'
        }
      </style>
    </section>
  );
}
