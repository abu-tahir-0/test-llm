const About = () => {
  const features = [
    {
      icon: '🏠',
      title: 'Safe Haven',
      description: 'Our shelter provides a warm, comfortable environment for all our dogs while they wait for their forever homes.'
    },
    {
      icon: '💊',
      title: 'Medical Care',
      description: 'Every dog receives complete veterinary care, vaccinations, and spay/neuter services before adoption.'
    },
    {
      icon: '🎓',
      title: 'Training',
      description: 'Our team provides basic training and socialization to help dogs transition smoothly to their new homes.'
    },
    {
      icon: '🤝',
      title: 'Support',
      description: 'We offer post-adoption support to ensure both you and your new companion thrive together.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
                alt="Dog at shelter"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop"
                alt="Dogs playing"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=400&h=400&fit=crop"
                alt="Happy dog"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=300&fit=crop"
                alt="Dog with owner"
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-tag section-tag-orange">
              <span className="text-xl">🏠</span>
              <span>About Our Shelter</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Believe Every Dog
              <span className="block bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">Deserves a Second Chance</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Since 2010, Pawsome Haven has been dedicated to rescuing, rehabilitating, 
              and rehoming dogs in need. Our passionate team of volunteers and staff work 
              tirelessly to ensure every dog receives the love and care they deserve while 
              finding their perfect forever family.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
