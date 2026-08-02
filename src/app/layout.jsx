import Providers from '../components/ui/Providers';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/landing_logo.png' type='image/png' />
      </head>
      <body className='flex flex-col min-h-screen'>
        <Providers>
          {/* <Header /> */}
          <main className='flex-grow pt-0'>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
