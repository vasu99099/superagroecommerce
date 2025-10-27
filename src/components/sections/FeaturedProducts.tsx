import { Button } from '../ui/button'
import { Card, CardContent, CardFooter } from '../ui/card'
import { Badge } from '../ui/badge'
import { Star, ShoppingCart } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'CyperMax Insecticide',
    price: 24.99,
    originalPrice: 29.99,
    image: '🐛',
    rating: 4.8,
    reviews: 124,
    category: 'Insecticides',
    isOrganic: false,
    discount: 17
  },
  {
    id: 2,
    name: 'FungiShield Pro',
    price: 32.49,
    originalPrice: 39.99,
    image: '🍄',
    rating: 4.9,
    reviews: 89,
    category: 'Fungicides',
    isOrganic: false,
    discount: 19
  },
  {
    id: 3,
    name: 'WeedKiller Ultra',
    price: 18.99,
    originalPrice: 22.99,
    image: '🌿',
    rating: 4.7,
    reviews: 156,
    category: 'Herbicides',
    isOrganic: false,
    discount: 17
  },
  {
    id: 4,
    name: 'RodentStop Bait',
    price: 15.99,
    originalPrice: 19.99,
    image: '🐁',
    rating: 4.6,
    reviews: 67,
    category: 'Rodenticides',
    isOrganic: false,
    discount: 20
  },
  {
    id: 5,
    name: 'NemaGuard Solution',
    price: 28.49,
    originalPrice: 34.99,
    image: '🪱',
    rating: 4.8,
    reviews: 98,
    category: 'Nematicides',
    isOrganic: false,
    discount: 19
  },
  {
    id: 6,
    name: 'BioDefend Organic',
    price: 21.99,
    originalPrice: 26.99,
    image: '🌱',
    rating: 4.5,
    reviews: 203,
    category: 'Bio-Pesticides',
    isOrganic: true,
    discount: 19
  }
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Pesticides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional-grade pest control solutions trusted by farmers. Effective, reliable, and proven to protect your crops from damage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-6xl rounded-t-xl">
                    {product.image}
                  </div>
                  {product.discount > 0 && (
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                      -{product.discount}%
                    </Badge>
                  )}
                  {product.isOrganic && (
                    <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                      Bio-Based
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-900">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-green-600">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Pesticides
          </Button>
        </div>
      </div>
    </section>
  )
}