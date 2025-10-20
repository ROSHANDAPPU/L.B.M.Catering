import businessCardCream from 'figma:asset/6b400490cc61dbc71522459ab83bafbe29d05aea.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#EFE3D7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1631724739232-d1f1403e6879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB0YWJsZSUyMHNldHRpbmd8ZW58MXx8fHwxNzU5OTkwMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Table setting"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-[#36394C] mb-6">Our Story</h2>
            <p className="text-ink-navy/80">
              La Bella Mesa was born from a simple belief: every gathering deserves to feel effortless and extraordinary. We curate culinary experiences that honor tradition while embracing modern sensibilities.
            </p>
            <p className="text-[#36394C]/80 mb-8">
              With meticulous attention to detail and a deep appreciation for local artisans, we transform your vision into a seamless reality. From intimate dinners to grand celebrations, we bring warmth, elegance, and unmatched quality to every table.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-[#5B2E34] mb-2" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, fontFamily: 'var(--font-headline)' }}>500+</div>
                <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Events Curated</p>
              </div>
              <div>
                <div className="text-[#5B2E34] mb-2" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, fontFamily: 'var(--font-headline)' }}>12</div>
                <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Years Excellence</p>
              </div>
              <div>
                <div className="text-[#5B2E34] mb-2" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, fontFamily: 'var(--font-headline)' }}>100%</div>
                <p className="text-[#36394C]/70" style={{ fontSize: '14px' }}>Satisfaction</p>
              </div>
            </div>

            {/* Business Card Visual Element */}
            <div className="mt-8 p-6 bg-white rounded-lg border border-[#C9C3BA] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <img 
                  src={businessCardCream} 
                  alt="La Bella Mesa Business Card" 
                  className="w-48 h-auto rounded shadow-sm"
                />
                <div className="flex-1">
                  <p className="text-[#36394C]/70 mb-2" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                    Let's connect and create something beautiful together
                  </p>
                  <a 
                    href="tel:+12147169201" 
                    className="text-[#5B2E34] hover:text-[#4F272C] transition-colors block" 
                    style={{ fontWeight: 600 }}
                  >
                    (214) 716-9201
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}