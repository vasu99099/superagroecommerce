import { Button } from '../ui/button'
import { ArrowRight, Leaf, Truck, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600">Protect</span> Your Crops
                <br />
                <span className="text-green-600">Eliminate</span> Pests
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional-grade pesticides and crop protection solutions. Safeguard your harvest with proven, effective pest control products trusted by farmers worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Proven Effective</h3>
                <p className="text-sm text-gray-600">Laboratory tested formulas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Fast Action</h3>
                <p className="text-sm text-gray-600">Quick pest elimination</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Safe & Reliable</h3>
                <p className="text-sm text-gray-600">Approved formulations</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-100 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                      🐛
                    </div>
                    <h4 className="font-semibold text-gray-900">Insecticides</h4>
                  </div>
                  <div className="bg-red-100 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                      🍄
                    </div>
                    <h4 className="font-semibold text-gray-900">Fungicides</h4>
                  </div>
                  <div className="bg-yellow-100 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-yellow-200 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                      🌿
                    </div>
                    <h4 className="font-semibold text-gray-900">Herbicides</h4>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                      🛡️
                    </div>
                    <h4 className="font-semibold text-gray-900">Crop Protection</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 rounded-2xl transform -rotate-3 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}