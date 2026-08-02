'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
const RIGHT_IMAGE_SRC = encodeURI('/images/ContactUs/Frame 1566663879.png');
const LEFT_IMAGE_SRC = encodeURI('/images/ContactUs/image.png');

const checklist = [
  {
    title: 'Practical Assessment',
    desc: 'Complete a short, instructor-led session using Claude on a real world task. No written test or preparation required.',
  },
  {
    title: 'Skill Based Evaluation',
    desc: 'We assess your problem solving approach and practical thinking, not memorized concepts or AI terminology.',
  },
  {
    title: 'Clear Learning Path',
    desc: 'Receive a recommended course level with personalized feedback. The assessment is free with no obligation to enroll.',
  },
];

export default function BeforeYouEnrol() {
  const sectionRef = useRef(null);
  const sweepRef = useRef(null);
  const invertedImgRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 450,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Left→right wipe (same technique as the coral reveal on the landing
  // page's CourseSection: scaleX 0→1, transform-origin left). The
  // illustration crossfades to its white/inverted version in sync.
  // Scrubbed directly to scroll position (not an instant triggered play)
  // so the orange cover and the white reveal track the user's scroll
  // smoothly instead of snapping in.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(sweepRef.current, { scaleX: 0 });
    gsap.set(invertedImgRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        end: 'top 30%',
        scrub: 1.2,
      },
    });

    tl.to(sweepRef.current, { scaleX: 1, ease: 'none' }, 0).to(
      invertedImgRef.current,
      { opacity: 1, ease: 'none' },
      0.15
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className='bye-section'>
      <div className='bye-container'>
        <div className='bye-image-col'>
          <div ref={sweepRef} className='bye-image-sweep' />
          <div className='bye-image-stack'>
            <img
              src={LEFT_IMAGE_SRC}
              alt='Before you enrol illustration'
              className='bye-illustration'
            />
            <img
              ref={invertedImgRef}
              src={LEFT_IMAGE_SRC}
              alt=''
              aria-hidden='true'
              className='bye-illustration bye-illustration-inverted'
            />
          </div>
        </div>

        <div className='bye-content-col'>
          <p className='bye-eyebrow'>BEFORE YOU ENROL</p>
          <h2 className='bye-heading'>
            You do not pick your level.
            <br />
            <span className='bye-heading-accent'>We place you.</span>
          </h2>

          <div className='bye-checklist' data-aos='fade-up'>
            <img src={RIGHT_IMAGE_SRC} alt='Check' style={{ width: '80%', height: 'auto' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bye-section {
          width: 100%;
          background-color: #ffffff;
          font-family: Outfit, sans-serif;
          padding: 96px 72px;
          overflow: hidden;
        }

        .bye-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 64px;
        }

        .bye-image-col {
          position: relative;
          flex: 0 0 45%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
        }

        .bye-image-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100vw;
          z-index: 0;
          background-color: #de896a;
          transform-origin: left center;
        }

        .bye-image-stack {
          position: relative;
          z-index: 1;
          display: grid;
          width: 100%;
          max-width: 420px;
        }

        .bye-illustration {
          grid-column: 1;
          grid-row: 1;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .bye-illustration-inverted {
          filter: brightness(0) invert(1);
        }

        .bye-content-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .bye-eyebrow {
          color: #a8a8a8;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin: 0 0 16px 0;
        }

        .bye-heading {
          font-size: 56px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -1.5px;
          color: #1a1a1a;
          margin: 0;
        }

        .bye-heading-accent {
          color: #de896a;
        }

        .bye-checklist {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 32px;
        }

        .bye-check-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .bye-check-icon {
          width: 32px;
          height: 32px;
          border: 1.5px solid #de896a;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bye-check-title {
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .bye-check-desc {
          color: #525252;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          max-width: 380px;
        }

        @media (max-width: 900px) {
          .bye-section {
            padding: 64px 24px;
          }

          .bye-container {
            flex-direction: column;
            align-items: stretch;
            gap: 40px;
          }

          .bye-image-col {
            flex: none;
            padding: 32px;
          }

          .bye-heading {
            font-size: 36px;
            letter-spacing: -1px;
          }
        }
      `}</style>
    </section>
  );
}
