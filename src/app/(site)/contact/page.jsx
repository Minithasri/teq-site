import HeroSection from '@/pages/contact/HeroSection';
import LocationsSection from '@/pages/contact/LocationsSection';

export const metadata = {
  title: 'Contact Us - GWC Data.AI',
  description:
    'Get in touch with GWC Data.AI. Choose between business enquiries or career opportunities.',
};

export default function ContactPage() {
  return (
    <main className='min-h-screen'>
      <HeroSection />
      <LocationsSection />
    </main>
  );
}
