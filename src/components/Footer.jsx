const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Available Dogs', href: '#dogs' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'Adoption Process', href: '#' },
      { name: 'Foster Program', href: '#' },
      { name: 'Dog Care Tips', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    'Support': [
      { name: 'Donate', href: '#' },
      { name: 'Volunteer', href: '#' },
      { name: 'Corporate Partners', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Wishlist', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-orange-100">
                Subscribe to our newsletter for adoption stories, events, and more!
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <span className="text-4xl">🐕</span>
              <span className="text-2xl font-bold">
              <span className="text-orange-400">Pawsome</span>
              <span className="text-green-400"> Haven</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Dedicated to finding loving homes for dogs in need since 2010. 
              Every dog deserves a second chance at happiness.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  {social === 'facebook' && '📘'}
                  {social === 'instagram' && '📷'}
                  {social === 'twitter' && '🐦'}
                  {social === 'youtube' && '📺'}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Pawsome Haven Dog Shelter. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
