import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full bg-white shadow-sm p-4 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold text-gray-800'>
          Teqcerty
        </Link>
        <nav className='flex gap-4'>
          <Link href='/' className='text-gray-600 hover:text-black'>
            Home
          </Link>
          <Link href='#' className='text-gray-600 hover:text-black'>
            About
          </Link>
          <Link href='#' className='text-gray-600 hover:text-black'>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
