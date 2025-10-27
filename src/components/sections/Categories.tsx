import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

const categories = [
  {
    id: 1,
    name: 'Insecticides',
    description: 'Eliminate harmful insects and pests',
    icon: '🐛',
    itemCount: 45,
    color: 'from-orange-100 to-orange-200'
  },
  {
    id: 2,
    name: 'Fungicides',
    description: 'Prevent and control fungal diseases',
    icon: '🍄',
    itemCount: 32,
    color: 'from-red-100 to-red-200'
  },
  {
    id: 3,
    name: 'Herbicides',
    description: 'Control weeds and unwanted plants',
    icon: '🌿',
    itemCount: 28,
    color: 'from-yellow-100 to-yellow-200'
  },
  {
    id: 4,
    name: 'Rodenticides',
    description: 'Effective rodent control solutions',
    icon: '🐁',
    itemCount: 15,
    color: 'from-green-100 to-green-200'
  },
  {
    id: 5,
    name: 'Nematicides',
    description: 'Control soil-dwelling nematodes',
    icon: '🪱',
    itemCount: 12,
    color: 'from-blue-100 to-blue-200'
  },
  {
    id: 6,
    name: 'Bio-Pesticides',
    description: 'Eco-friendly biological solutions',
    icon: '🌱',
    itemCount: 22,
    color: 'from-emerald-100 to-emerald-200'
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pesticide Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of pest control solutions designed to protect your crops from various threats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${category.color} p-8 text-center relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className="text-sm font-medium text-gray-700">
                        {category.itemCount} items
                      </span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-white/80 hover:bg-white border-gray-300 group-hover:border-green-500 group-hover:text-green-600"
                    >
                      Shop Now
                    </Button>
                  </div>
                  
                  <div className="absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}