import logo from '../assets/Clip path group.png';
import certifiedLogo from '../assets/Frame 79.png';
import { Instagram, Youtube, Linkedin, MapPin, Mail, Smartphone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#5B2687] to-[#3E184E] text-white'>
      {/* TOP SECTION */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-5 flex flex-col lg:flex-row items-center justify-between gap-6'>
        <img src={logo} alt='Logo' className='h-12 sm:h-14 md:h-16' />

        <div className='flex items-center gap-3 sm:gap-4'>
          <span className='text-xs sm:text-sm'>Follow us on</span>
          <Instagram className='text-xl sm:text-2xl cursor-pointer hover:text-gray-300 transition' />
          <Youtube className='text-xl sm:text-2xl cursor-pointer hover:text-gray-300 transition' />
          <Linkedin className='text-xl sm:text-2xl cursor-pointer hover:text-gray-300 transition' />
        </div>
      </div>

      <div className='h-px bg-gray-500 mx-auto w-[90%] sm:w-[95%] lg:max-w-7xl' />

      <div
        className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 
                grid grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6'
      >
        {/* CERTIFICATION */}
        <div className='col-span-2 lg:col-span-1 flex justify-center lg:justify-start'>
          <img src={certifiedLogo} alt='Certified' className='h-16 sm:h-20' />
        </div>

        {/* QUICK LINKS */}
        <div className='text-center lg:text-left'>
          <h3 className='mb-4 font-semibold text-sm sm:text-base'>QUICK LINKS</h3>
          <ul className='space-y-2 text-xs sm:text-sm text-gray-300'>
            <li className='cursor-pointer hover:text-white transition'>Home</li>
            <li className='cursor-pointer hover:text-white transition'>About Us</li>
            <li className='cursor-pointer hover:text-white transition'>Contact Us</li>
            <li className='cursor-pointer hover:text-white transition'>Blogs</li>
            <li className='cursor-pointer hover:text-white transition'>Case Studies</li>
          </ul>
        </div>

        {/* PARTNERS */}
        <div className='text-center lg:text-left'>
          <h3 className='mb-4 font-semibold text-sm sm:text-base'>PARTNERS</h3>
          <ul className='space-y-2 text-xs sm:text-sm text-gray-300'>
            <li>DOMO</li>
            <li>Snowflake</li>
            <li>Boomi</li>
            <li>Databricks</li>
            <li>Google Cloud</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div className='text-center lg:text-left'>
          <h3 className='mb-4 font-semibold text-sm sm:text-base'>SOLUTIONS</h3>
          <ul className='space-y-2 text-xs sm:text-sm text-gray-300'>
            <li>AI / Agentic AI</li>
            <li>Data Governance</li>
            <li>Data Strategy & Engineering</li>
            <li>Business Intelligence & Analytics</li>
            <li>BI Migration & Modernization</li>
            <li>Cloud Transformation</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className='text-center lg:text-left'>
          <h3 className='mb-4 font-semibold text-sm sm:text-base'>CONTACT US</h3>
          <ul className='space-y-3 text-xs sm:text-sm text-gray-300'>
            <li className='flex gap-2 justify-center lg:justify-start'>
              <MapPin className='text-base sm:text-lg flex-shrink-0 mt-1' />
              <span>
                #46/4 Novel Tech Park, Kudlu Gate,
                <br />
                Hosur Rd, HSR Extension,
                <br />
                Bangalore, Karnataka 560068
              </span>
            </li>
            <li className='flex gap-2 justify-center lg:justify-start'>
              <Mail className='text-base sm:text-lg flex-shrink-0' />
              <span className='break-all'>indiahr@gwcdata.ai</span>
            </li>
            <li className='flex gap-2 justify-center lg:justify-start'>
              <Smartphone className='text-base sm:text-lg flex-shrink-0' />
              <span>+91 95914 33122 | +91 99861 68512</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='h-px bg-gray-500 mx-auto w-[90%] sm:w-[95%] lg:max-w-7xl' />

      {/* BOTTOM BAR */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-gray-300 text-xs sm:text-sm gap-4'>
        <p className='text-center md:text-left'>
          © 2024 GLOBAL WE CONNECT TECHNOLOGIES PRIVATE LIMITED. All Rights Reserved.
        </p>
        <p className='flex gap-4'>
          <span className='cursor-pointer hover:text-white transition'>Privacy</span>
          <span>|</span>
          <span className='cursor-pointer hover:text-white transition'>Terms & Conditions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
