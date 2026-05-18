// NO 'use client' here — this must stay a server component
// so Next.js pre-renders children (including SeoBlock) to real HTML

import LayoutClient from './LayoutClient';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/favlogo1.svg' type='image/svg+xml' sizes='any' />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
