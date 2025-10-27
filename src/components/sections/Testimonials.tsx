import { Card, CardContent } from '../ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Crop Farmer',
    content: 'SuperAgro pesticides saved my entire tomato crop from aphid infestation. Fast-acting and highly effective. My yields increased by 40% this season!',
    rating: 5,
    avatar: '👩🌾'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Agricultural Consultant',
    content: 'I recommend SuperAgro products to all my clients. Their pest control solutions are reliable, effective, and provide excellent crop protection.',
    rating: 5,
    avatar: '👨💼'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Greenhouse Manager',
    content: 'The fungicide range from SuperAgro is outstanding. We have eliminated powdery mildew completely and our plants are healthier than ever.',
    rating: 5,
    avatar: '👩🔬'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Orchard Owner',
    content: 'SuperAgro integrated pest management solutions helped us reduce pesticide use by 30% while maintaining excellent fruit quality and yields.',
    rating: 5,
    avatar: '👨🌾'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what farmers and agricultural professionals say about SuperAgro pest control solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-green-200">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-lg mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}