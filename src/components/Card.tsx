import { useTheme } from '../contexts/ThemeContext'
import { useState } from 'react'

interface CardProps {
  image: string
  title: string
  description: string
  onClick?: () => void
  badge?: string
}

export const Card = ({ image, title, description, onClick, badge }: CardProps) => {
  const { theme } = useTheme()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 transform hover:scale-105 ${
        theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } hover:shadow-2xl`}
    >
      <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse" />
        )}
        <img
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {badge && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className={`font-bold text-xl mb-2 line-clamp-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed line-clamp-3 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>
      </div>
    </div>
  )
}
