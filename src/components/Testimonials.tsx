const testimonials = [
  {
    quote: "La Bella Mesa transformed our wedding into a magical experience. Every detail was perfect, from the exquisite cuisine to the impeccable service.",
    author: "Sofia & Marco",
    event: "Wedding Reception",
  },
  {
    quote: "Their attention to detail and commitment to quality is unmatched. Our corporate event was seamless and our clients were thoroughly impressed.",
    author: "James Patterson",
    event: "Corporate Gala",
  },
  {
    quote: "From the first consultation to the final dessert course, the team exceeded every expectation. They made our anniversary celebration truly unforgettable.",
    author: "Elena Rodriguez",
    event: "Anniversary Dinner",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#C9C3BA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#36394C] mb-4">What Our Clients Say</h2>
          <p className="text-[#36394C]/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brass" />
              <div className="pl-6">
                <p className="text-[#36394C] italic mb-6" style={{ fontSize: '18px', lineHeight: 1.6 }}>
                  "{testimonial.quote}"
                </p>
                <p className="text-[#5B2E34] mb-1" style={{ fontWeight: 600 }}>{testimonial.author}</p>
                <p className="text-[#36394C]/60" style={{ fontSize: '14px' }}>{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
