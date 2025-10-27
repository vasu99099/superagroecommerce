import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Protected with Our Newsletter
            </h2>
            
            <p className="text-xl text-green-100 mb-8">
              Get the latest updates on pest control solutions, application tips, and exclusive offers on professional pesticides.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:bg-white/20"
              />
              <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-green-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}