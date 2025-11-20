import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { LoadingSpinner } from './components/LoadingSpinner'
import { useTheme } from './contexts/ThemeContext'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Places = lazy(() => import('./pages/Places').then(m => ({ default: m.Places })))
const Stays = lazy(() => import('./pages/Stays').then(m => ({ default: m.Stays })))
const Viewpoints = lazy(() => import('./pages/Viewpoints').then(m => ({ default: m.Viewpoints })))
const Restaurants = lazy(() => import('./pages/Restaurants').then(m => ({ default: m.Restaurants })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))

function App() {
  const { theme } = useTheme()

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/places" element={<Places />} />
              <Route path="/stays" element={<Stays />} />
              <Route path="/viewpoints" element={<Viewpoints />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
