import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Integrated Pest Management: A Comprehensive Guide',
    excerpt: 'Learn how to combine biological, cultural, and chemical pest control methods for maximum crop protection while minimizing environmental impact.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'Pest Management',
    readTime: '5 min read',
    image: '🐛'
  },
  {
    id: 2,
    title: 'Choosing the Right Pesticide for Your Crop',
    excerpt: 'A detailed guide on selecting appropriate pesticides based on crop type, pest species, and application timing for optimal results.',
    author: 'Mark Thompson',
    date: '2024-01-12',
    category: 'Product Guide',
    readTime: '7 min read',
    image: '🌾'
  },
  {
    id: 3,
    title: 'Safe Pesticide Application Techniques',
    excerpt: 'Essential safety protocols and best practices for pesticide application to protect yourself, your crops, and the environment.',
    author: 'Emily Chen',
    date: '2024-01-10',
    category: 'Safety',
    readTime: '6 min read',
    image: '🛡️'
  },
  {
    id: 4,
    title: 'Understanding Pesticide Resistance Management',
    excerpt: 'Strategies to prevent and manage pesticide resistance in pest populations to maintain long-term crop protection effectiveness.',
    author: 'James Wilson',
    date: '2024-01-08',
    category: 'Resistance Management',
    readTime: '4 min read',
    image: '🔄'
  }
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Crop Protection Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert advice on pest management, safe pesticide application, and effective crop protection strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-4xl rounded-t-xl">
                  {post.image}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 p-0">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}