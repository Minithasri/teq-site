import { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('March 24, 2026 09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-end text-purple-700 font-semibold gap-3 sm:gap-4 md:gap-6'>
      <div className='text-center'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl' style={{ color: '#2E94DB' }}>
          {timeLeft.days}
        </p>
        <p className='text-[10px] sm:text-xs uppercase tracking-wider' style={{ color: '#7030B1' }}>
          Days
        </p>
      </div>
      <div className='text-center'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl' style={{ color: '#2E94DB' }}>
          {timeLeft.hours}
        </p>
        <p className='text-[10px] sm:text-xs uppercase tracking-wider' style={{ color: '#7030B1' }}>
          Hours
        </p>
      </div>
      <div className='text-center'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl' style={{ color: '#2E94DB' }}>
          {timeLeft.minutes}
        </p>
        <p className='text-[10px] sm:text-xs uppercase tracking-wider' style={{ color: '#7030B1' }}>
          Minutes
        </p>
      </div>
      <div className='text-center'>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl' style={{ color: '#2E94DB' }}>
          {timeLeft.seconds}
        </p>
        <p className='text-[10px] sm:text-xs uppercase tracking-wider' style={{ color: '#7030B1' }}>
          Seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;
