import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    {/* ThemeProvider is now USED, so no error */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)