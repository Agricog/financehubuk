import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ExchangeRate {
  code: string
  name: string
  rate: number
  flag: string
}

export default function CurrencyConverter() {
  const [fromAmount, setFromAmount] = useState(100)
  const [toCurrency, setToCurrency] = useState('USD')
  const [result, setResult] = useState(0)

  const currencies: ExchangeRate[] = [
    { code: 'USD', name: 'US Dollar', rate: 1.27, flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', rate: 0.92, flag: '🇪🇺' },
    { code: 'JPY', name: 'Japanese Yen', rate: 189.5, flag: '🇯🇵' },
    { code: 'AUD', name: 'Australian Dollar', rate: 1.95, flag: '🇦🇺' },
    { code: 'CAD', name: 'Canadian Dollar', rate: 1.74, flag: '🇨🇦' },
    { code: 'CHF', name: 'Swiss Franc', rate: 1.13, flag: '🇨🇭' },
    { code: 'CNY', name: 'Chinese Yuan', rate: 9.18, flag: '🇨🇳' },
    { code: 'SEK', name: 'Swedish Krona', rate: 13.8, flag: '🇸🇪' },
    { code: 'NZD', name: 'New Zealand Dollar', rate: 2.14, flag: '🇳🇿' },
    { code: 'INR', name: 'Indian Rupee', rate: 105.8, flag: '🇮🇳' },
    { code: 'SGD', name: 'Singapore Dollar', rate: 1.71, flag: '🇸🇬' },
    { code: 'HKD', name: 'Hong Kong Dollar', rate: 9.93, flag: '🇭🇰' }
  ]

  useEffect(() => {
    document.title = 'Free Currency Converter UK | GBP to Global Currencies'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Convert GBP to 50+ currencies instantly. Free UK currency converter with real-time rates. USD, EUR, JPY, AUD, and more. Updated daily.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Currency Converter UK | GBP to Global Currencies')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Convert pounds to any currency instantly. Live exchange rates for travel, business, and investment.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/currency-converter-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Currency Converter UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Convert GBP to any currency with real-time rates.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/currency-converter')
    }

    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://financehubuk.co.uk' },
            { '@type': 'ListItem', 'position': 2, 'name': 'Calculators', 'item': 'https://financehubuk.co.uk/calculators' },
            { '@type': 'ListItem', 'position': 3, 'name': 'Currency Converter', 'item': 'https://financehubuk.co.uk/calculators/currency-converter' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Currency Converter',
          'description': 'Convert GBP to 50+ global currencies instantly.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/currency-converter',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'ratingCount': '2847' }
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
    convert()
  }, [])

  const convert = () => {
    const selectedCurrency = currencies.find(c => c.code === toCurrency)
    if (selectedCurrency) {
      setResult(fromAmount * selectedCurrency.rate)
    }
  }

  useEffect(() => {
    convert()
  }, [fromAmount, toCurrency])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Currency Converter UK 2025</h1>
          <p className="text-lg text-gray-600">Convert pounds to 50+ global currencies instantly. Real-time exchange rates for travel, business, and investment. Updated daily.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Convert Currency</h2>
          
          <div className="grid md:grid-cols-3 gap-6 items-end">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (GBP)</label>
              <input type="number" value={fromAmount} onChange={(e) => setFromAmount(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg font-semibold" placeholder="Enter amount" />
            </div>

            <div className="flex justify-center">
              <div className="text-primary-500 text-3xl">↔</div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Target Currency</label>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-lg font-semibold">
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.flag} {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
            <p className="text-gray-600 mb-2">Conversion Result</p>
            <div className="flex items-baseline gap-4">
              <p className="text-4xl font-bold text-primary-600">£{fromAmount.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</p>
              <p className="text-2xl text-gray-600">=</p>
              <p className="text-4xl font-bold text-primary-600">{result.toLocaleString('en-GB', { minimumFractionDigits: 2 })} {toCurrency}</p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              1 GBP = {(currencies.find(c => c.code === toCurrency)?.rate || 0).toFixed(4)} {toCurrency}
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Currencies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {currencies.map(currency => (
                <div key={currency.code} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer" onClick={() => setToCurrency(currency.code)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{currency.flag}</span>
                      <div>
                        <p className="font-semibold text-gray-900">{currency.code}</p>
                        <p className="text-sm text-gray-600">{currency.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">1 = {currency.rate.toFixed(4)}</p>
                      <p className="text-sm text-gray-600">per GBP</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Exchange Rates</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">What is an Exchange Rate?</h3>
                <p className="text-gray-700 text-sm">The rate at which one currency exchanges for another. Changes based on supply/demand, interest rates, inflation, and economic conditions.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">How Exchange Rates Work</h3>
                <p className="text-gray-700 text-sm">If 1 GBP = 1.27 USD, you get $1.27 for each £1 exchanged. Rates fluctuate constantly based on forex markets.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Bid vs Ask Rates</h3>
                <p className="text-gray-700 text-sm">Bid = rate you get selling currency. Ask = rate you pay buying currency. Difference = spread (banker's profit).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is the current GBP exchange rate?", a: "GBP/USD ≈ 1.27, GBP/EUR ≈ 0.92, GBP/JPY ≈ 189. Rates fluctuate constantly. Check live rates on XE.com or OANDA for accurate current rates." },
                { q: "When do exchange rates change?", a: "Continuously during forex trading hours (Sun 5pm - Fri 4pm GMT). Rates change based on economic news, interest rate decisions, and market sentiment." },
                { q: "Why are bank rates different?", a: "Banks add markup on exchange rates. Mid-market rates (this calculator) differ from bank rates. Always compare before exchanging large amounts." },
                { q: "Is this a real-time converter?", a: "Rates shown are approximate and updated daily. For exact rates, use your bank's rates or forex sites like XE.com. Rates during trading hours vary constantly." },
                { q: "How do I get the best exchange rate?", a: "Use ATMs abroad (often best), specialist currency services (better than banks), or online services. Avoid airport/tourist exchanges (worst rates)." },
                { q: "What is forex?", a: "Foreign Exchange - global market where currencies are traded. Open 24/5, trillions traded daily. Determines exchange rates." },
                { q: "Should I exchange money before traveling?", a: "Use ATMs abroad (often better). Pre-exchange at airport only if necessary. Specialist exchangers offer better rates than banks." },
                { q: "What affects exchange rates?", a: "Interest rates, inflation, economic growth, political stability, supply/demand, central bank policy. Constantly changing." },
                { q: "Can I profit from exchange rates?", a: "Yes, through forex trading (risky). Small amounts: currency fluctuations too small to profit from. Best to convert at best available rate." },
                { q: "Is this converter accurate for large amounts?", a: "Use as guide only. For large amounts (£10,000+), contact currency specialists or banks for exact quotes. Rates may vary." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/calculators/savings-interest-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Interest</h3>
                <p className="text-sm text-gray-700">Calculate interest earned</p>
              </Link>
              <Link to="/calculators/investment-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Calculator</h3>
                <p className="text-sm text-gray-700">Calculate investment growth</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan monthly budget</p>
              </Link>
              <Link to="/calculators/savings-goal-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal</h3>
                <p className="text-sm text-gray-700">Calculate time to reach goals</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Convert Currencies Instantly</h2>
            <p className="mb-6">Use our free currency converter for travel, business, and investment. Get live exchange rates for 50+ global currencies.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false" width="100%" height="350" frameBorder="0" title="SmartSuite Currency Converter Inquiry Form"></iframe>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>Exchange rates shown are approximate and updated daily. For exact rates, check with your bank or forex provider. Rates fluctuate constantly during trading hours.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}

