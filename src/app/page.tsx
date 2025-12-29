import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InstagramShowcase from '@/components/InstagramShowcase';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <Hero />
        <InstagramShowcase />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}