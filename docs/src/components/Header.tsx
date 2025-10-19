import { useState, useEffect } from 'react';
import logoLight from 'figma:asset/d6a7c683620c32417b447b6d2db494a4d28b09c3.png';
import logoDark from 'figma:asset/52859160954b1ee67ba6840d61c406ba9681560a.png';

interface HeaderProps {
  onNavigate: (section: string) => void;
  alwaysLight?: boolean;
}

export function Header({ onNavigate, alwaysLight = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  const isLight = alwaysLight || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLight ? 'bg-[#EFE3D7] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-2 md:gap-4">
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo(0, 0);
          }}
          className="transition-all duration-300 hover:opacity-70 group flex-shrink-0"
        >
          <div className={`transition-all duration-300 rounded-[12px] ${
            isLight 
              ? 'p-0' 
              : 'p-2 md:p-3 backdrop-blur-md bg-white/5 border border-white/10'
          } group-hover:scale-105`}
            style={{
              boxShadow: isLight 
                ? 'none' 
                : '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            <img 
              src={isLight ? logoLight : logoDark} 
              alt="La Bella Mesa" 
              className="h-8 md:h-12 w-auto"
              style={{
                filter: isLight ? 'none' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))'
              }}
            />
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`transition-colors ${
                isLight 
                  ? 'text-[#36394C] hover:text-[#5B2E34]' 
                  : 'text-[#EFE3D7] hover:text-[#C4A46A]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact')}
          className="relative bg-[#5B2E34] text-[#EFE3D7] px-3 py-2 md:px-6 md:py-3 rounded-[14px] border border-white/20 shadow-lg hover:bg-[#4F272C] hover:shadow-xl transition-all duration-300 overflow-hidden group flex-shrink-0"
          style={{ fontSize: '14px' }}
        >
          <span className="relative z-10 whitespace-nowrap hidden sm:inline">Book Your Event</span>
          <span className="relative z-10 sm:hidden">Book</span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
        </button>
      </div>
    </header>
  );
}