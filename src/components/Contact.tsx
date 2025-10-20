import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setShowSuccess(true);
    setFormData({ name: '', email: '', eventDate: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#EFE3D7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#36394C] mb-4 font-libre-baskerville">Let's Create Something Beautiful</h2>
          <p className="text-[#36394C]/70 max-w-2xl mx-auto font-montserrat">
            Ready to elevate your next event? Get in touch and let's start planning.
          </p>
        </div>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center transition-opacity duration-300">
            Thank you! We'll be in touch soon to discuss your event.
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form
            onSubmit={handleSubmit}
            className=""
          >
            <div className="mb-6">
              <label className="block text-[#36394C] mb-2 font-montserrat font-semibold tracking-[0.02em]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] rounded-md focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#36394C] mb-2 font-montserrat font-semibold tracking-[0.02em]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] rounded-md focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#36394C] mb-2 font-montserrat font-semibold tracking-[0.02em]">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] rounded-md focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#36394C] mb-2 font-montserrat font-semibold tracking-[0.02em]">Tell us about your event</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#EFE3D7] border border-[#C9C3BA] rounded-md focus:border-[#5B2E34] focus:outline-none focus:ring-2 focus:ring-[#5B2E34] transition-colors resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative w-full bg-[#5B2E34] text-white py-3 px-8 rounded-[12px] border border-white/20 shadow-lg hover:bg-[#4F272C] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group text-center focus:ring-2 focus:ring-[#5B2E34] focus:outline-none"
            >
              <span className="relative z-10 block w-full text-center">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
            </button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-[#36394C] mb-3 font-libre-baskerville">Contact Information</h3>
              <div className="space-y-3 font-montserrat">
                <div className="flex items-start">
                  <div className="w-[2px] h-6 bg-[#C4A46A] mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-[#36394C]" style={{ fontWeight: 600 }}>Email</p>
                    <a href="mailto:contact@labellamesa­events.com" className="text-[#5B2E34] hover:text-[#4F272C] transition-colors">
                      contact@labellamesa­events.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-[2px] h-6 bg-[#C4A46A] mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-[#36394C]" style={{ fontWeight: 600 }}>Phone</p>
                    <a href="tel:+12147169201" className="text-[#5B2E34] hover:text-[#4F272C] transition-colors">
                      (214) 716-9201
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-[2px] h-6 bg-[#C4A46A] mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-[#36394C]" style={{ fontWeight: 600 }}>Instagram</p>
                    <a href="https://instagram.com/labellamesa_events" target="_blank" rel="noopener noreferrer" className="text-[#5B2E34] hover:text-[#4F272C] transition-colors">
                      @labellamesa_events
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-[2px] h-6 bg-[#C4A46A] mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-[#36394C]" style={{ fontWeight: 600 }}>Website</p>
                    <a href="https://www.labellamesa­events.com" target="_blank" rel="noopener noreferrer" className="text-[#5B2E34] hover:text-[#4F272C] transition-colors">
                      www.labellamesa­events.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#36394C] mb-3 font-libre-baskerville">Office Hours</h3>
              <div className="space-y-2 font-montserrat">
                <div className="flex justify-between">
                  <span className="text-[#36394C]" style={{ fontWeight: 600 }}>Monday - Friday</span>
                  <span className="text-[#36394C]/70">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#36394C]" style={{ fontWeight: 600 }}>Saturday</span>
                  <span className="text-[#36394C]/70">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#36394C]" style={{ fontWeight: 600 }}>Sunday</span>
                  <span className="text-[#36394C]/70">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}