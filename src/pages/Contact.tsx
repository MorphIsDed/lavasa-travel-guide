import { useTheme } from '../contexts/ThemeContext'
import { Button } from '../components/Button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsLoading(false)
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Header */}
      <div className={`pt-20 pb-16 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center animate-slide-in-down">
          <h1 className={`text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="p-4 bg-green-500/20 border border-green-500 text-green-600 rounded-lg animate-fade-in">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              <div>
                <label className={`block font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className={`block font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className={`block font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div>
                <label className={`block font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:scale-105 resize-none ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                      : 'bg-white border-gray-200 text-gray-900 focus:border-blue-500'
                  }`}
                  placeholder="Your message..."
                  required
                />
              </div>

              <Button type="submit" size="lg" isLoading={isLoading} className="w-full">
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className={`p-6 rounded-lg transition-colors duration-300 hover:scale-105 transform ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-start gap-4">
                <Phone className="text-blue-500 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className={`font-bold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Phone
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <a href="tel:+919876543210" className="hover:text-blue-500 transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 hover:scale-105 transform ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-start gap-4">
                <Mail className="text-blue-500 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className={`font-bold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <a href="mailto:info@lavasa.com" className="hover:text-blue-500 transition-colors">
                      info@lavasa.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg transition-colors duration-300 hover:scale-105 transform ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className={`font-bold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Lavasa, Mulshi Taluka<br />
                    Pune District, Maharashtra<br />
                    India 412115
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <h3 className={`font-bold text-lg mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Business Hours
              </h3>
              <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={`py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Our Location
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
            <p className={`text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Map integration can be added here (Google Maps, Mapbox, etc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
