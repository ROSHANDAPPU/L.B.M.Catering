import { useEffect, useRef, useState } from 'react';
import { Phone, Instagram } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1560145725-8cbf9768b73a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdGFibGUlMjBzZXR0aW5nJTIwZGlubmVyfGVufDF8fHx8MTc1OTk5MDA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant table setting"
          className="w-full h-full object-cover transition-transform duration-[20000ms] ease-out"
          style={{
            transform: isVisible ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 
            className="text-white mb-6 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '200ms',
            }}
          >
            Elegancia sin esfuerzo · Effortless elegance
          </h1>

          <p 
            className="text-white/90 mb-8 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '500ms',
            }}
          >
            Elevated culinary experiences and seamless hosting
          </p>

          {/* Contact Info - Above Buttons */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 mb-6 transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '650ms',
            }}
          >
            <a 
              href="tel:+12147169201" 
              className="flex items-center gap-2 text-white/90 hover:text-[#C4A46A] transition-colors px-4 py-2 rounded-[12px] backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/15"
              style={{ fontSize: '15px' }}
            >
              <Phone size={16} />
              <span>(214) 716-9201</span>
            </a>
            <a 
              href="https://instagram.com/labellamesa_events" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-[#C4A46A] transition-colors px-4 py-2 rounded-[12px] backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/15"
              style={{ fontSize: '15px' }}
            >
              <Instagram size={16} />
              <span className="hidden sm:inline">@labellamesa_events</span>
              <span className="sm:hidden">@labellamesa</span>
            </a>
          </div>

          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '800ms',
            }}
          >
            <button
              onClick={() => onNavigate('contact')}
              className="relative bg-[#5B2E34] text-[#EFE3D7] px-8 py-4 rounded-[14px] border border-white/20 shadow-lg hover:bg-[#4F272C] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Book Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
            </button>
            
            <button
              onClick={() => onNavigate('services')}
              className="text-white/90 hover:text-[#C4A46A] transition-colors px-6 py-3 rounded-[14px] backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}