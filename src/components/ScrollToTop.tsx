import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full z-40 transition-all duration-300 hover:scale-110 animate-fade-in ${
            theme === 'dark'
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white shadow-lg`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}
