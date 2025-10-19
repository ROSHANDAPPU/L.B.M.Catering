import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MenuPage } from './pages/MenuPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'menu') {
      setCurrentPage('menu');
      window.scrollTo(0, 0);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page as 'home' | 'menu');
    if (page === 'home') {
      window.scrollTo(0, 0);
    }
  };

  if (currentPage === 'menu') {
    return <MenuPage onNavigate={handleNavigation} />;
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
