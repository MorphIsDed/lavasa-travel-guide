import { useTheme } from '../contexts/ThemeContext'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const { theme } = useTheme()

  const currentYear = new Date().getFullYear()

  return (
    <footer className={`transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="animate-fade-in">
            <h3 className="font-bold text-lg mb-4 text-blue-500">Lavasa</h3>
            <p className="text-sm leading-relaxed">
              Discover the beauty of Lavasa, a stunning hill station with breathtaking views and modern amenities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {/*
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Places', path: '/places' },
                { name: 'Contact', path: '/contact' }
              */}
              {/*
                .map(link => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="hover:text-blue-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                <Phone size={16} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                <Mail size={16} />
                <a href="mailto:info@lavasa.com">info@lavasa.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Lavasa, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-fade-in">
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/*
                { icon: Facebook, link: '#', label: 'Facebook' },
                { icon: Twitter, link: '#', label: 'Twitter' },
                { icon: Instagram, link: '#', label: 'Instagram' },
                { icon: Linkedin, link: '#', label: 'LinkedIn' }
              */}
            </div>
          </div>
        </div>

        <div className={`border-t pt-8 text-center text-sm ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-300'
        }`}>
          <p>&copy; {currentYear} Lavasa Travel Guide. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-75">
            Designed with ❤️ | Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
