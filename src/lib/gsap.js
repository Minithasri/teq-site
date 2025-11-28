'use client';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function getGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin);
    registered = true;
  }

  return gsap;
}

export { Draggable, gsap, MotionPathPlugin, ScrollToPlugin, ScrollTrigger };
