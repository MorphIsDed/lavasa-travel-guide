import { useTheme } from '../contexts/ThemeContext'
import { Card } from '../components/Card'
import { Utensils } from 'lucide-react'
import { Suspense } from 'react'

const restaurants = [
	{
		image: 'https://images.unsplash.com/photo-1504674900947-ab21a51c7a3f?w=600&h=400&fit=crop',
		title: 'Fine Dining Elegance',
		description: 'Upscale restaurant offering international and Indian cuisine.',
		badge: 'Premium'
	},
	{
		image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
		title: 'Café & Bistro',
		description: 'Cozy café perfect for breakfast, coffee, and light meals.',
		badge: 'Casual'
	},
	{
		image: 'https://images.unsplash.com/photo-1517248135467-4d71bcdd2d59?w=600&h=400&fit=crop',
		title: 'Traditional Indian',
		description: 'Authentic Indian flavors with traditional recipes and spices.',
		badge: 'Indian'
	},
	{
		image: 'https://images.unsplash.com/photo-1555939594-58d7cb561621?w=600&h=400&fit=crop',
		title: 'Rooftop Lounge',
		description: 'Stunning views with craft cocktails and modern cuisine.',
		badge: 'Bar & Grill'
	},
	{
		image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop',
		title: 'Vegetarian Paradise',
		description: 'Dedicated vegetarian restaurant with innovative plant-based dishes.',
		badge: 'Vegan'
	},
	{
		image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600&h=400&fit=crop',
		title: 'Street Food Market',
		description: 'Authentic local street food and popular regional delicacies.',
		badge: 'Street Food'
	}
]

export function Restaurants() {
	const { theme } = useTheme()

	return (
		<div className={`min-h-screen transition-colors duration-300 ${
			theme === 'dark' ? 'bg-gray-900' : 'bg-white'
		}`}>
			{/* Header */}
			<div className={`pt-20 pb-16 px-4 transition-colors duration-300 ${
				theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'
			}`}>
				<div className="max-w-4xl mx-auto text-center animate-slide-in-down">
					<div className="flex justify-center mb-4">
						<Utensils size={40} className="text-blue-500" />
					</div>
					<h1 className={`text-5xl font-bold mb-4 ${
						theme === 'dark' ? 'text-white' : 'text-gray-900'
					}`}>
						Dining Options
					</h1>
					<p className={`text-xl ${
						theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
					}`}>
						Explore the best restaurants and dining experiences in Lavasa
					</p>
				</div>
			</div>

			{/* Restaurants Grid */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<Suspense fallback={<div>Loading...</div>}>
						{restaurants.map((restaurant, index) => (
							<div
								key={index}
								className="animate-fade-in"
								style={{ animationDelay: `${index * 50}ms` }}
							>
								<Card {...restaurant} badge={restaurant.badge} />
							</div>
						))}
					</Suspense>
				</div>
			</div>

			{/* Cuisine Types */}
			<div className={`py-20 px-4 transition-colors duration-300 ${
				theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
			}`}>
				<div className="max-w-6xl mx-auto">
					<h2 className={`text-3xl font-bold mb-12 text-center ${
						theme === 'dark' ? 'text-white' : 'text-gray-900'
					}`}>
						Cuisine Types Available
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{['Indian', 'Continental', 'Asian Fusion', 'Mediterranean', 'Italian', 'Chinese', 'Multi-Cuisine', 'Vegan'].map((cuisine, index) => (
							<div
								key={index}
								className={`p-4 rounded-lg text-center font-semibold transition-all duration-300 hover:scale-105 animate-fade-in ${
									theme === 'dark'
										? 'bg-gray-700 text-blue-400 hover:bg-gray-600'
										: 'bg-white text-blue-600 hover:bg-blue-50'
								}`}
								style={{ animationDelay: `${index * 50}ms` }}
							>
								{cuisine}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Restaurants
