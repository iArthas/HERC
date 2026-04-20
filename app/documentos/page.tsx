import { Navbar } from '@/app/components/Navbar';
import { DocumentsSection } from '@/app/components/DocumentsSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function DocumentosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <div className="pt-20">
        <DocumentsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
