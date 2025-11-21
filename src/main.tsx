import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

// Try to dynamically load ThemeContext and use its ThemeProvider (named or default).
// If anything fails, render App directly so the project still runs.
;(async () => {
  try {
    const mod = await import('./contexts/ThemeContext')
    const ThemeProvider =
      (mod as any).ThemeProvider ?? (mod as any).default

    if (ThemeProvider) {
      root.render(
        <React.StrictMode>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </React.StrictMode>,
      )
      return
    }
  } catch {
    // ignore and fallback to rendering App directly
  }

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})()
