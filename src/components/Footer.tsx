import { Instagram, Facebook, Mail } from 'lucide-react';
import logoFooter from 'figma:asset/52859160954b1ee67ba6840d61c406ba9681560a.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5B2E34] text-[#EFE3D7] relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4A46A]" />
      
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img 
              src={logoFooter} 
              alt="La Bella Mesa" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-[#EFE3D7]/80" style={{ fontSize: '14px', lineHeight: 1.6 }}>
              Crafting unforgettable culinary experiences with elegance, warmth, and dedication to local artisans.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-[#C4A46A]" style={{ fontSize: '14px', fontWeight: 500 }}>
                www.labellamesa­events.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2" style={{ fontSize: '14px' }}>
              <li>
                <a href="#about" className="text-[#EFE3D7]/80 hover:text-[#C4A46A] transition-colors" style={{ fontWeight: 400 }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#EFE3D7]/80 hover:text-[#C4A46A] transition-colors" style={{ fontWeight: 400 }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#EFE3D7]/80 hover:text-[#C4A46A] transition-colors" style={{ fontWeight: 400 }}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#EFE3D7]/80 hover:text-[#C4A46A] transition-colors" style={{ fontWeight: 400 }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+12147169201"
                className="flex items-center gap-2 text-[#EFE3D7]/90 hover:text-[#C4A46A] transition-colors"
                style={{ fontSize: '14px' }}
              >
                <div className="w-[2px] h-5 bg-[#C4A46A]" />
                (214) 716-9201
              </a>
              <a
                href="mailto:contact@labellamesa­events.com"
                className="flex items-center gap-2 text-[#EFE3D7]/90 hover:text-[#C4A46A] transition-colors"
                style={{ fontSize: '14px' }}
              >
                <div className="w-[2px] h-5 bg-[#C4A46A]" />
                contact@labellamesa­events.com
              </a>
            </div>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com/labellamesa_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EFE3D7]/10 flex items-center justify-center hover:bg-[#C4A46A] hover:scale-110 active:scale-95 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#EFE3D7]/10 flex items-center justify-center hover:bg-[#C4A46A] hover:scale-110 active:scale-95 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:contact@labellamesa­events.com"
                className="w-10 h-10 rounded-full bg-[#EFE3D7]/10 flex items-center justify-center hover:bg-[#C4A46A] hover:scale-110 active:scale-95 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-[#EFE3D7]/60 italic" style={{ fontSize: '14px' }}>
              @labellamesa_events
            </p>
          </div>
        </div>

        <div className="border-t border-[#EFE3D7]/20 pt-8 text-center">
          <p className="text-[#EFE3D7]/60" style={{ fontSize: '14px' }}>
            © {currentYear} La Bella Mesa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}