import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { Footer } from '@/app/components/Footer';
import { AboutSection } from '@/app/components/AboutSection';
import { GallerySection } from '@/app/components/GallerySection';
import { ContactSection } from '@/app/components/ContactSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
