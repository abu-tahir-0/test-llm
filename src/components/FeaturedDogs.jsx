import { useState } from 'react'

const FeaturedDogs = () => {
  const [filter, setFilter] = useState('all')

  const dogs = [
    {
      id: 1,
      name: 'Max',
      breed: 'Golden Retriever',
      age: '2 years',
      size: 'large',
      gender: 'Male',
      image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=400&fit=crop',
      personality: 'Friendly, Energetic',
      description: 'Max is a lovable Golden who enjoys fetch and cuddles.'
    },
    {
      id: 2,
      name: 'Bella',
      breed: 'Beagle Mix',
      age: '1 year',
      size: 'medium',
      gender: 'Female',
      image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop',
      personality: 'Curious, Playful',
      description: 'Bella loves exploring and makes friends everywhere she goes.'
    },
    {
      id: 3,
      name: 'Charlie',
      breed: 'French Bulldog',
      age: '3 years',
      size: 'small',
      gender: 'Male',
      image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=400&fit=crop',
      personality: 'Calm, Affectionate',
      description: 'Charlie is perfect for apartment living and loves lazy Sundays.'
    },
    {
      id: 4,
      name: 'Luna',
      breed: 'Husky',
      age: '1.5 years',
      size: 'large',
      gender: 'Female',
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop',
      personality: 'Adventurous, Vocal',
      description: 'Luna needs an active family who loves outdoor adventures.'
    },
    {
      id: 5,
      name: 'Cooper',
      breed: 'Labrador',
      age: '4 years',
      size: 'large',
      gender: 'Male',
      image: 'https://images.unsplash.com/photo-1579213838058-8bde7cdba1e8?w=400&h=400&fit=crop',
      personality: 'Gentle, Patient',
      description: 'Cooper is great with kids and other pets. A true family dog!'
    },
    {
      id: 6,
      name: 'Daisy',
      breed: 'Corgi',
      age: '2 years',
      size: 'small',
      gender: 'Female',
      image: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?w=400&h=400&fit=crop',
      personality: 'Smart, Cheerful',
      description: 'Daisy brings smiles wherever she goes with her adorable personality.'
    }
  ]

  const filters = [
    { label: 'All Dogs', value: 'all' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ]

  const filteredDogs = filter === 'all' 
    ? dogs 
    : dogs.filter(dog => dog.size === filter)

  return (
    <section id="dogs" className="py-24 bg-gradient-to-b from-gray-50 to-white paw-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl mr-2">🐾</span>
            <span className="text-green-700 font-medium">Meet Our Dogs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your New
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent"> Best Friend</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each of our dogs has a unique personality and story. Browse through our 
            available dogs and find the perfect companion for your family.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                filter === f.value
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Dog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDogs.map((dog) => (
            <div
              key={dog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {dog.gender}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{dog.name}</h3>
                    <p className="text-orange-600 font-medium">{dog.breed}</p>
                  </div>
                  <span className="text-3xl">🐕</span>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {dog.age}
                  </span>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm capitalize">
                    {dog.size}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{dog.description}</p>
                
                <div className="flex gap-2 mb-6">
                  {dog.personality.split(', ').map((trait, i) => (
                    <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold transition-all">
                  Meet {dog.name} 💕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
          >
            View All Available Dogs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDogs
