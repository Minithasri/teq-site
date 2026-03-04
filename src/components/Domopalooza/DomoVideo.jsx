'use client';

const DomoVideo = () => {
  return (
    <div className='flex justify-center bg-gray-50 px-4 sm:px-6 py-4 md:py-8'>
      <div className='rounded-2xl overflow-hidden shadow-xl w-full max-w-7xl'>
        <video
          className='w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] object-cover'
          src='/images/domopalooza/Domopalooza Hero background.mp4'
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

export default DomoVideo;
