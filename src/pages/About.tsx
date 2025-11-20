import { useTheme } from '../contexts/ThemeContext'
import { CheckCircle, Globe, Zap, Heart } from 'lucide-react'

export const About = () => {
  const { theme } = useTheme()

  const highlights = [
    'Stunning hillside location with panoramic views',
    'Modern infrastructure and amenities',
    'Perfect blend of nature and development',
    'Year-round pleasant climate',
    'Close proximity to Mumbai and Pune',
    'World-class hospitality and services'
  ]

  const features = [
    { icon: Globe, title: 'World-Class Destination', desc: 'Recognized internationally for its unique design and hospitality' },
    { icon: Zap, title: 'Modern Amenities', desc: 'Latest infrastructure and technology for comfortable living' },
    { icon: Heart, title: 'Nature-Friendly', desc: 'Sustainable development with environmental consciousness' }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Hero */}
      <div className={`pt-20 pb-16 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center animate-slide-in-down">
          <h1 className={`text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About Lavasa
          </h1>
          <p className={`text-xl leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            A planned hill station representing the perfect harmony between modern development and natural beauty.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
              alt="Lavasa landscape"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="animate-slide-in-right">
            <h2 className={`text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose Lavasa?
            </h2>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                  <p className={`text-lg ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-t border-b transition-colors duration-300"
          style={{ borderColor: theme === 'dark' ? '#374151' : '#e5e7eb' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="text-blue-500 mx-auto mb-4" size={40} />
                <h3 className={`font-bold text-lg mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {[
            { number: '250+', label: 'Acres' },
            { number: '50+', label: 'Hotels & Resorts' },
            { number: '100+', label: 'Restaurants' },
            { number: '15+', label: 'Adventure Activities' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
