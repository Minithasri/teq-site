'use client';

const DomoVideo = () => {
  return (
    <div className='flex justify-center bg-gray-50 pt-2'>
      <div className='rounded-2xl overflow-hidden shadow-xl w-full max-w-7xl'>
        <video
          className='w-full h-[95vh] object-cover'
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
