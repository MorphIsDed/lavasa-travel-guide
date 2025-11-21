import { useTheme } from '../contexts/ThemeContext'
import { Card } from '../components/Card'
import { Camera } from 'lucide-react'
import { Suspense } from 'react'

const viewpoints = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    title: 'Sunrise Point',
    description: 'The perfect spot to witness breathtaking sunrise over the valley.',
    badge: 'Best Sunrise'
  },
  {
    image: 'https://images.unsplash.com/photo-1495514811223-4d71bcdd2d59?w=600&h=400&fit=crop',
    title: 'Sunset Terrace',
    description: 'Experience golden hour magic with stunning panoramic vistas.',
    badge: 'Best Sunset'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    title: 'Misty Mountain View',
    description: 'Enchanting views when the mountains are wrapped in morning mist.',
    badge: 'Atmospheric'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    title: 'Valley Overlook',
    description: 'A scenic vantage point overlooking the entire valley below.',
    badge: 'Panoramic'
  },
  {
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop',
    title: 'Night Sky Observatory',
    description: 'Clear skies perfect for stargazing and night photography.',
    badge: 'Nocturnal'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    title: 'Hidden Waterfall View',
    description: 'Secret spot with cascading waterfalls and lush greenery.',
    badge: 'Hidden Gem'
  }
]

export function Viewpoints() {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Header */}
      <div className={`pt-20 pb-16 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center animate-slide-in-down">
          <div className="flex justify-center mb-4">
            <Camera size={40} className="text-blue-500" />
          </div>
          <h1 className={`text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Photo Viewpoints
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Discover the most Instagram-worthy spots in Lavasa
          </p>
        </div>
      </div>

      {/* Viewpoints Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {viewpoints.map((point, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card {...point} badge={point.badge} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>

      {/* Photography Tips */}
      <div className={`py-20 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Photography Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Golden Hour', desc: 'Visit viewpoints during sunrise or sunset for the best lighting' },
              { title: 'Weather', desc: 'Misty mornings offer unique atmospheric photography opportunities' },
              { title: 'Timing', desc: 'Plan ahead and arrive early to secure the best spots' }
            ].map((tip, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg animate-fade-in ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`font-bold text-lg mb-2 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {tip.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewpoints
