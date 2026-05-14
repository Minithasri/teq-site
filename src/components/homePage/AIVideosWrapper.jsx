'use client';
import dynamic from 'next/dynamic';

const AIVideos = dynamic(() => import('./AIVideos'), {
  ssr: false,
});

export default function AIVideosWrapper() {
  return <AIVideos />;
}
