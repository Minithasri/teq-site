import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-100 p-8 mt-auto border-t'>
      <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <p className='text-gray-600 mb-4'>
          &copy; {new Date().getFullYear()} Teqcerty. All rights reserved.
        </p>
        <div className='flex gap-4'>
          <Link href='#' className='text-gray-500 hover:text-black'>
            Privacy Policy
          </Link>
          <Link href='#' className='text-gray-500 hover:text-black'>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
