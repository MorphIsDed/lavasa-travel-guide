import { useTheme } from '../contexts/ThemeContext'
import { Card } from '../components/Card'
import { Star } from 'lucide-react'
import { Suspense } from 'react'

const stays = [
  {
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    title: 'Luxury Resort',
    description: 'Five-star accommodation with spa, fine dining, and panoramic views.',
    badge: '★★★★★'
  },
  {
    image: 'https://images.unsplash.com/photo-1566665556112-652b56e88b84?w=600&h=400&fit=crop',
    title: 'Heritage Hotel',
    description: 'Charming colonial-style hotel with traditional hospitality.',
    badge: '★★★★'
  },
  {
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
    title: 'Boutique Villas',
    description: 'Private villas with modern amenities and exclusive services.',
    badge: '★★★★★'
  },
  {
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
    title: 'Budget Hotels',
    description: 'Comfortable and affordable accommodation for budget travelers.',
    badge: '★★★'
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45433003f293?w=600&h=400&fit=crop',
    title: 'Adventure Lodges',
    description: 'Eco-friendly lodges perfect for nature and adventure lovers.',
    badge: '★★★★'
  },
  {
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop',
    title: 'Family Apartments',
    description: 'Spacious apartments ideal for families and groups.',
    badge: '★★★★'
  }
]

export const Stays = () => {
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
            Where to Stay
          </h1>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Find the perfect accommodation for your Lavasa experience
          </p>
        </div>
      </div>

      {/* Stays Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<div>Loading...</div>}>
            {stays.map((stay, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card {...stay} badge={stay.badge} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>

      {/* Filter Info */}
      <div className={`py-16 px-4 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            All Price Ranges
          </h3>
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            From budget-friendly options to luxury resorts, we have something for everyone
          </p>
        </div>
      </div>
    </div>
  )
}
