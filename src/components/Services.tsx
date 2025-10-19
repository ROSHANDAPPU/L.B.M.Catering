const services = [
  {
    title: 'Private Events',
    description: 'Intimate gatherings crafted with personalized menus and refined service for your special moments.',
    image: 'https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRlcmluZyUyMGZvb2QlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU5OTI3NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Weddings',
    description: 'From rehearsal dinners to grand receptions, we create unforgettable culinary experiences for your celebration.',
    image: 'https://images.unsplash.com/photo-1655386068478-e8283085cac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdGFibGUlMjBkZWNvcnxlbnwxfHx8fDE3NTk5MTg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Corporate Events',
    description: 'Elevate your business gatherings with sophisticated cuisine and seamless professional service.',
    image: 'https://images.unsplash.com/photo-1731941465921-eb4285693713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NTk5MTYwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Chef Services',
    description: 'Personal chef experiences delivered to your home, featuring seasonal ingredients and artisan techniques.',
    image: 'https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzU5OTU3NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#EFE3D7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#36394C] mb-4">Our Services</h2>
          <p className="text-[#36394C]/70 max-w-2xl mx-auto">
            Every event is unique, and so is our approach. Discover how we bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C4A46A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-[#36394C] mb-3">{service.title}</h3>
                <p className="text-[#36394C]/70" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
