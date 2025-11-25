import { useEffect } from 'react'
import { Home as HomeIcon, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  useEffect(() => {
    document.title = 'Finance Hub UK - Free Financial Calculators & Quote Comparison'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Free UK financial calculators for mortgages, insurance, loans & more. Compare quotes from top providers instantly. No signup required.'
      )
    }
  }, [])

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compare Quotes & Calculate Costs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Make Smarter Money Decisions with Free UK Financial Tools
          </p>
          <a
            href="#calculators"
            className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Explore Calculators
          </a>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600">No signup, no hidden fees</p>
            </div>
            <div className="p-6">
              <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">Get answers in seconds</p>
            </div>
            <div className="p-6">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section id="calculators" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Financial Calculators
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Choose a calculator to get started
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mortgage Calculator */}
            <a
              href="/calculators/mortgage-calculator"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition group"
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mortgage Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">
                Calculate how much you can borrow and compare mortgage rates from top UK lenders.
              </p>
              <div className="text-primary-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Calculate Now <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Home Insurance */}
            <a
              href="/calculators/home-insurance-quote"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition group"
            >
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Insurance Quote</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get instant home insurance quotes from multiple providers and compare coverage.
              </p>
              <div className="text-primary-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Quote <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Car Insurance */}
            <a
              href="/calculators/car-insurance-quote"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition group"
            >
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Car Insurance Quote</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compare car insurance rates instantly and find the best coverage for your needs.
              </p>
              <div className="text-primary-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Quote <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Life Insurance */}
            <a
              href="/calculators/life-insurance-quote"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition group"
            >
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life Insurance Quote</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get life insurance quotes tailored to your circumstances and budget.
              </p>
              <div className="text-primary-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Quote <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Pet Insurance */}
            <a
              href="/calculators/pet-insurance-quote"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition group"
            >
              <div className="text-4xl mb-4">🐾</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pet Insurance Quote</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compare pet insurance plans and get quotes for your beloved pets.
              </p>
              <div className="text-primary-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Quote <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            {/* Loan Calculator */}
            <a
              href="/calculators/loan-calculator"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition group"
            >
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Loan Calculator</h3>
              <p className="text-gray-600 text-sm mb-4">
                Calculate loan payments and compare personal loan offers from UK providers.
              </p>
              <div className="text-primary-500 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Calculate <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enter Your Details</h3>
              <p className="text-gray-600">
                Answer a few quick questions about your situation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Instant Results</h3>
              <p className="text-gray-600">
                Receive calculated results and recommendations instantly
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compare & Save</h3>
              <p className="text-gray-600">
                Compare quotes from top UK providers and save money
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Save Money?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Choose a calculator and start comparing quotes today
          </p>
          <a
            href="#calculators"
            className="inline-block bg-white text-primary-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Browse Calculators
          </a>
        </div>
      </section>
    </div>
  )
}
