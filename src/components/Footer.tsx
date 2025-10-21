import { Instagram, Facebook, Mail } from 'lucide-react';
const logoFooter = '/images/logo-dark.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-light-cream via-light-cream to-light-cream/95 text-ink-navy font-montserrat shadow-lg relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={logoFooter}
              alt="La Bella Mesa"
              className="w-[150px] h-auto mb-4 drop-shadow-sm transition-transform hover:scale-105"
            />
            <p className="text-body font-montserrat font-montserrat-400 text-ink-navy">
              Crafting unforgettable culinary experiences with elegance, warmth, and dedication to local artisans.
            </p>
            <div className="mt-4">
              <a href="https://www.labellamesa-events.com" className="text-small font-montserrat font-montserrat-400 text-reserved-burgundy hover:underline">
                www.labellamesa-events.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-h4 font-montserrat font-montserrat-700 text-reserved-burgundy mb-4">Quick Links</h4>
            <ul className="space-y-2 text-body">
              <li>
                <a href="#about" className="font-montserrat text-ink-navy hover:text-reserved-burgundy transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="font-montserrat text-ink-navy hover:text-reserved-burgundy transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="font-montserrat text-ink-navy hover:text-reserved-burgundy transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="font-montserrat text-ink-navy hover:text-reserved-burgundy transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-h4 font-montserrat font-montserrat-700 text-reserved-burgundy mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6 text-small">
              <a
                href="tel:+12147169201"
                className="flex items-center gap-2 font-montserrat text-ink-navy hover:text-reserved-burgundy transition-colors"
              >
                (214) 716-9201
              </a>
              <a
                href="mailto:contact@labellamesa-events.com"
                className="flex items-center gap-2 font-montserrat text-ink-navy hover:text-reserved-burgundy transition-colors"
              >
                contact@labellamesa-events.com
              </a>
            </div>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com/labellamesa_events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-stone/50 flex items-center justify-center text-ink-navy hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-stone/50 flex items-center justify-center text-ink-navy hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="mailto:contact@labellamesa-events.com"
                className="w-12 h-12 rounded-full border-2 border-stone/50 flex items-center justify-center text-ink-navy hover:bg-reserved-burgundy hover:text-white hover:border-reserved-burgundy hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone/30 pt-8 text-center relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone/20 to-transparent"></div>
          <p className="text-small font-montserrat font-montserrat-400 text-ink-navy/70">
            © {currentYear} La Bella Mesa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
