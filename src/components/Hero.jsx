const Hero = () => {
  return (
    <section id="home" className="hero-gradient paw-pattern min-h-screen pt-20 overflow-hidden">
      <div className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {/* Text Content */}
          <div className="fade-in flex items-center px-6 sm:px-12 lg:px-16 xl:px-24 py-12 lg:py-20">
            <div className="max-w-xl">
              <div className="tag mb-6">
                <span className="text-xl">🐾</span>
                <span>Find Your Perfect Companion</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                Every Dog
                <span className="block bg-gradient-to-r from-orange-500 via-orange-600 to-green-500 bg-clip-text text-transparent">Deserves a</span>
                <span className="block">Loving Home</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Open your heart and home to a furry friend. Our shelter is filled with amazing dogs 
                waiting to bring joy, love, and endless tail wags to your family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#dogs" className="btn-primary">
                  <span>Meet Our Dogs</span>
                  <span>🐕</span>
                </a>
                <a href="#about" className="btn-secondary">
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-12 border-t border-gray-200/60">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Dogs Adopted</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number green">15+</div>
                  <div className="stat-label">Years of Care</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Love Given</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration - Bleeds to right edge */}
          <div className="relative flex items-center justify-end lg:pr-0">
            <div className="relative floating-image w-full lg:w-[120%] lg:-mr-[10%] xl:w-[130%] xl:-mr-[15%]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-green-400 rounded-l-3xl lg:rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=900&fit=crop"
                alt="Happy dog"
                className="relative rounded-l-3xl lg:rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="floating-badge absolute bottom-8 left-8 z-10">
                <div className="flex items-center gap-3">
                  <div className="icon-circle">
                    <span>❤️</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Ready for Love</div>
                    <div className="text-sm text-gray-500">45+ dogs waiting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
