import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { LoadingSpinner } from './components/LoadingSpinner'
import { useTheme } from './contexts/ThemeContext'
import { Home } from './pages/Home'

// Lazy load pages for code splitting
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Places = lazy(() => import('./pages/Places').then(m => ({ default: m.Places })))
const Stays = lazy(() => import('./pages/Stays').then(m => ({ default: m.Stays })))
const Viewpoints = lazy(() => import('./pages/Viewpoints').then(m => ({ default: m.Viewpoints })))
const Restaurants = lazy(() => import('./pages/Restaurants').then(m => ({ default: m.Restaurants })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('Error caught:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-8">Please refresh the page or try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  const { theme } = useTheme()

  return (
    <ErrorBoundary>
      <Router>
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        }`}>
          <Header />
          <main className="flex-grow">
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
    </ErrorBoundary>
  )
}

export default App