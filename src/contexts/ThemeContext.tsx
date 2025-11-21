import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // On mount, decide initial theme
  useEffect(() => {
    if (typeof window === 'undefined') {
      setMounted(true)
      return
    }

    const saved = window.localStorage.getItem('theme') as Theme | null

    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }

    setMounted(true)
  }, [])

  // Sync <html> class and localStorage whenever theme changes
  useEffect(() => {
    if (typeof document === 'undefined') return

    const html = document.documentElement

    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* You can show a loading skeleton while theme is resolving if you want */}
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}