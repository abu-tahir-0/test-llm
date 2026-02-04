const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Dog Adoption',
      description: 'Find your perfect furry companion from our selection of rescued dogs ready for their forever homes.',
      features: ['Home compatibility check', 'Meet & greet sessions', 'Adoption counseling']
    },
    {
      icon: '🐕‍🦺',
      title: 'Foster Program',
      description: 'Provide temporary care for dogs in need while they wait for their permanent families.',
      features: ['Full support provided', 'Supplies included', 'Veterinary care covered']
    },
    {
      icon: '💉',
      title: 'Veterinary Care',
      description: 'Complete medical services including vaccinations, spay/neuter, and health check-ups.',
      features: ['Full vaccination', 'Microchipping', 'Health certificates']
    },
    {
      icon: '🎓',
      title: 'Training Classes',
      description: 'Professional training programs to help your new dog adjust and learn good behaviors.',
      features: ['Basic obedience', 'Socialization', 'Behavioral support']
    },
    {
      icon: '🚗',
      title: 'Transport Services',
      description: 'Safe transportation for dogs from rescue situations or to their new homes.',
      features: ['Local pickups', 'Safe transport', 'Comfort guaranteed']
    },
    {
      icon: '💝',
      title: 'Volunteer Program',
      description: 'Join our team of dedicated volunteers and make a difference in dogs\' lives.',
      features: ['Dog walking', 'Event support', 'Administrative help']
    }
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-50 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl mr-2">⭐</span>
            <span className="text-orange-700 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Help Dogs
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent"> & Families</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From adoption to ongoing support, we provide comprehensive services 
            to ensure every dog finds happiness and every family finds their perfect match.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-green-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt, foster, volunteer, or donate, 
            there are many ways to help our furry friends find their forever homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Involved Today
            </a>
            <a
              href="#dogs"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              View Available Dogs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
