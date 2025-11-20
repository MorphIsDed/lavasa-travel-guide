import { useTheme } from '../contexts/ThemeContext'

export const LoadingSpinner = () => {
  const { theme } = useTheme()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={`relative w-16 h-16 ${
        theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
      }`}>
        <div className="absolute inset-0 rounded-full border-4 border-current opacity-25" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-spin" />
      </div>
    </div>
  )
}
