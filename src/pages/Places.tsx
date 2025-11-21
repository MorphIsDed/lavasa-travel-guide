import { useTheme } from '../contexts/ThemeContext'
import { Card } from '../components/Card'
import { Suspense } from 'react'

const places = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    title: 'Mountain Peak',
    description: 'The highest point offering 360-degree views of the surrounding landscape.'
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    title: 'Convent Lake',
    description: 'A serene lake perfect for photography and peaceful contemplation.'
  },
  {
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop',
    title: 'Adventure Park',
    description: 'Thrilling activities for families and adventure enthusiasts.'
  },
  {
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&h=400&fit=crop',
    title: 'Art Gallery',
    description: 'Showcase of local artists and contemporary art installations.'
  },
  {
    image: 'https://images.unsplash.com/photo-1469022563149-aa64dbd37f50?w=600&h=400&fit=crop',
    title: 'Botanical Gardens',
    description: 'Lush green gardens with rare plant species and walking trails.'
  },
  {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    title: 'Sports Complex',
    description: 'State-of-the-art facilities for tennis, badminton, and cricket.'
  }
]

export function Places() {
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
          <h1 className={`text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Explore Places
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Discover the most beautiful and exciting destinations in Lavasa
          </p>
        </div>
      </div>

      {/* Places Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {places.map((place, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card {...place} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Places
