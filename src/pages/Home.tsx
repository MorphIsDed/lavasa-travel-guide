import { useTheme } from '../contexts/ThemeContext'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { ArrowRight, MapPin, Users, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

const FeaturedCard = ({ image, title, description, index }: any) => (
  <div
    className="animate-fade-in"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <Card image={image} title={title} description={description} />
  </div>
)

export const Home = () => {
  const { theme } = useTheme()

  const featured = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      title: 'Mountain Views',
      description: 'Experience breathtaking panoramic views of the Sahyadri mountains.',
      badge: 'Popular'
    },
    {
      image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37f50?w=600&h=400&fit=crop',
      title: 'Adventure Activities',
      description: 'Thrilling outdoor experiences for adventure seekers.',
      badge: 'Trending'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      title: 'Modern Architecture',
      description: 'Discover stunning contemporary design blended with nature.',
      badge: 'Featured'
    }
  ]

  const stats = [
    { number: '250+', label: 'Acres', icon: MapPin },
    { number: '50+', label: 'Hotels', icon: Star },
    { number: '100+', label: 'Restaurants', icon: Users },
    { number: '15+', label: 'Activities', icon: ArrowRight }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-down">
            <h1 className={`text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in`}>
              Welcome to Lavasa
            </h1>
          </div>

          <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
            <p className={`text-xl sm:text-2xl mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A modern hill station with stunning views and unforgettable experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Link to="/places">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Now <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="text-blue-500" size={32} />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-down">
            <h2 className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Featured Experiences
            </h2>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover the best of what Lavasa has to offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Suspense fallback={<div>Loading...</div>}>
              {featured.map((item, index) => (
                <FeaturedCard key={index} {...item} index={index} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Visit?</h2>
          <p className="text-xl text-white/80 mb-8">
            Start planning your Lavasa adventure today and create unforgettable memories
          </p>
          <Link to="/contact">
            <Button size="lg" variant={theme === 'dark' ? 'secondary' : 'primary'}>
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
