import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'adoption',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: 'adoption', message: '' })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      content: '123 Pawsome Lane, Pet City, PC 12345',
      link: '#'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '(555) 123-PAWS',
      link: 'tel:+5551237297'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      content: 'hello@pawsomehaven.org',
      link: 'mailto:hello@pawsomehaven.org'
    },
    {
      icon: '🕐',
      title: 'Opening Hours',
      content: 'Mon-Sat: 10AM - 6PM, Sun: 12PM - 5PM',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white paw-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-50 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl mr-2">📬</span>
            <span className="text-orange-700 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Meet Your
            <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent"> New Best Friend?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about adoption or want to learn more? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none bg-white"
                  >
                    <option value="adoption">Dog Adoption</option>
                    <option value="foster">Foster Program</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate">Donation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none resize-none"
                  placeholder="Tell us about yourself and what you're looking for..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Send Message 🐾
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                  <p className="text-gray-600 text-sm">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-3xl h-64 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <span className="text-6xl">🗺️</span>
                <p className="text-gray-700 mt-4 font-medium">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm">123 Pawsome Lane, Pet City</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-orange-100 hover:text-orange-600 transition-colors"
                  >
                    {social === 'facebook' && '📘'}
                    {social === 'instagram' && '📷'}
                    {social === 'twitter' && '🐦'}
                    {social === 'youtube' && '📺'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
