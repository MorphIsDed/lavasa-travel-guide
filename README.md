# Lavasa Travel Guide

A modern, responsive travel guide website for Lavasa hill station built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design**
- Apple-inspired smooth animations
- Dark/Light theme support
- Responsive layout for all devices
- Modern gradient backgrounds

🎨 **Animation Effects**
- Smooth fade-in animations
- Slide-in effects
- Scale and hover animations
- Staggered animation delays

📱 **Pages**
- Home - Hero section with featured experiences
- About - Information about Lavasa
- Places - Tourist attractions
- Stays - Accommodation options
- Viewpoints - Photography spots
- Restaurants - Dining options
- Contact - Contact form and information

⚡ **Performance**
- Code splitting for faster loading
- Image lazy loading
- Optimized bundle size
- Smooth transitions and animations

🌗 **Theme Support**
- Light mode
- Dark mode
- Persistent theme preference
- Smooth theme transitions

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lavasa-travel-guide
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable components
├── contexts/        # Theme context
├── pages/          # Page components
├── utils/          # Utility functions
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router v6

## Components

### Header
- Navigation menu
- Theme toggle
- Mobile responsive menu
- Active link indicators

### Footer
- Quick links
- Contact information
- Social media links
- Copyright information

### Card
- Image with lazy loading
- Hover animations
- Badge support
- Responsive design

### Button
- Multiple variants (primary, secondary, ghost)
- Multiple sizes (sm, md, lg)
- Loading state
- Smooth transitions

### LoadingSpinner
- Animated spinner
- Theme aware
- Centered layout

## Animation Classes

- `animate-fade-in` - Fade in effect
- `animate-slide-in-down` - Slide in from top
- `animate-slide-in-up` - Slide in from bottom
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-scale-in` - Scale in effect

## Theme Customization

Edit `tailwind.config.js` to customize:
- Colors
- Animations
- Breakpoints
- Typography

## Performance Optimizations

- Code splitting by route
- Image lazy loading
- CSS minification
- JavaScript minification
- Tree shaking
- Unused CSS removal

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Blog section
- [ ] Booking system
- [ ] User reviews
- [ ] Search functionality
- [ ] Filter options
- [ ] Real-time notifications
- [ ] Social sharing
- [ ] Newsletter signup

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For support, email info@lavasa.com or open an issue on the repository.
