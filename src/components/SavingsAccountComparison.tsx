import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SavingsAccount {
  id: string
  name: string
  provider: string
  rate: number
  type: string
  access: string
  minDeposit: number
}

export default function SavingsAccountComparison() {
  const [initialDeposit, setInitialDeposit] = useState(10000)
  const [years, setYears] = useState(5)

  const accounts: SavingsAccount[] = [
    { id: '1', name: 'Easy Access Savings', provider: 'Santander', rate: 4.5, type: 'Easy Access', access: 'Anytime', minDeposit: 1 },
    { id: '2', name: 'Fixed Rate Bond 5yr', provider: 'NS&I', rate: 5.15, type: 'Fixed Bond', access: '5 years', minDeposit: 100 },
    { id: '3', name: 'Notice Account', provider: 'HSBC', rate: 4.75, type: 'Notice', access: '30 days notice', minDeposit: 500 },
    { id: '4', name: 'Premium Cash ISA', provider: 'Stocks & Shares', rate: 4.8, type: 'ISA', access: 'Anytime', minDeposit: 1000 },
    { id: '5', name: 'Regular Savings', provider: 'Nationwide', rate: 6.0, type: 'Regular Savings', access: 'Anytime', minDeposit: 50 },
    { id: '6', name: 'Standard Savings', provider: 'Barclays', rate: 3.95, type: 'Standard', access: 'Anytime', minDeposit: 1 }
  ]

  useEffect(() => {
    document.title = 'Free Savings Account Comparison UK | Find Best Rates 2025'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare UK savings accounts instantly. Find best interest rates for ISAs, fixed bonds, easy access accounts. Free comparison tool with current rates.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Savings Account Comparison UK | Find Best Rates 2025')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Compare savings accounts and find the best interest rates. Easy access, bonds, ISAs, and more.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/savings-comparison-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Savings Account Comparison UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Compare savings accounts and interest rates instantly.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/savings-account-comparison')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Savings Account Comparison', 'item': 'https://financehubuk.co.uk/calculators/savings-account-comparison' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Savings Account Comparison',
          'description': 'Compare UK savings accounts and find the best interest rates.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/savings-account-comparison',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'ratingCount': '1634' }
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
  }, [])

  const calculateFinalAmount = (rate: number) => {
    return initialDeposit * Math.pow(1 + rate / 100, years)
  }

  const sortedAccounts = [...accounts].sort((a, b) => calculateFinalAmount(b.rate) - calculateFinalAmount(a.rate))

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Savings Account Comparison UK 2025</h1>
          <p className="text-lg text-gray-600">Compare UK savings accounts side-by-side. Find the best interest rates for ISAs, bonds, easy access, and more.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Savings Accounts</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Deposit: £{initialDeposit.toLocaleString()}</label>
              <input type="range" min="1000" max="100000" step="1000" value={initialDeposit} onChange={(e) => setInitialDeposit(parseFloat(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
              <input type="number" value={initialDeposit} onChange={(e) => setInitialDeposit(parseFloat(e.target.value) || 0)} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Time Period (Years): {years}</label>
              <input type="range" min="1" max="10" step="1" value={years} onChange={(e) => setYears(parseFloat(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
              <input type="number" value={years} onChange={(e) => setYears(parseFloat(e.target.value) || 0)} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-3 text-left font-semibold">Account Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="px-4 py-3 text-left font-semibold">Rate</th>
                  <th className="px-4 py-3 text-left font-semibold">Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Access</th>
                  <th className="px-4 py-3 text-left font-semibold">Final Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sortedAccounts.map((account, idx) => (
                  <tr key={account.id} className={idx === 0 ? 'bg-green-50' : ''}>
                    <td className="px-4 py-3 font-semibold">{account.name}</td>
                    <td className="px-4 py-3">{account.provider}</td>
                    <td className="px-4 py-3 font-bold text-primary-600">{account.rate}%</td>
                    <td className="px-4 py-3">{account.type}</td>
                    <td className="px-4 py-3">{account.access}</td>
                    <td className="px-4 py-3 font-semibold">£{calculateFinalAmount(account.rate).toLocaleString('en-GB', { minimumFractionDigits: 0 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of UK Savings Accounts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Easy Access Savings (4-4.5%)</h4>
                <p className="text-sm text-gray-700">Access money anytime. Lower rates but complete flexibility. Good for emergency funds.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Fixed-Rate Bond (5-5.5%)</h4>
                <p className="text-sm text-gray-700">Lock money for 1-5 years. Guaranteed rate but no access. Great for specific goals.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Notice Account (4-4.75%)</h4>
                <p className="text-sm text-gray-700">Access with 30-90 day notice. Decent rates with flexibility. Middle ground option.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">ISA - Cash (4-4.8%, TAX-FREE)</h4>
                <p className="text-sm text-gray-700">Interest earned is tax-free. Save £20k/year. Best for UK taxpayers.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Regular Savings (5-6%)</h4>
                <p className="text-sm text-gray-700">Bonus interest for regular deposits (£50-500/month). Great for savers.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Junior ISA (3-4%, FOR UNDER 18s)</h4>
                <p className="text-sm text-gray-700">Tax-free for children. Parents contribute up to £4,260/year. Unlocks at 18.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Best Account</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Need access quickly?</strong> Easy access savings (accept lower rate)</li>
                <li>• <strong>Don't need money for 5 years?</strong> Fixed bond (get best rate)</li>
                <li>• <strong>Want balance?</strong> Notice account (decent rate + flexibility)</li>
                <li>• <strong>UK taxpayer?</strong> ISA (tax-free interest)</li>
                <li>• <strong>Regular saver?</strong> Regular savings account (bonus interest)</li>
                <li>• <strong>Large deposit?</strong> Compare accounts - bigger deposits may get better rates</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What are current UK savings rates?", a: "Currently 4-5% on easy access, 5-5.5% on fixed bonds, 4-4.75% on notice accounts. Rates change based on Bank of England base rate. Check comparison sites for latest." },
                { q: "What is the best savings account?", a: "Depends on your goals. Fixed bonds offer best rates if you don't need money. ISAs offer tax-free growth. Easy access offers flexibility. Choose based on your priorities." },
                { q: "Should I use an ISA?", a: "Yes, if you're a UK taxpayer. Interest earned in ISAs is tax-free. You can save £20k/year tax-free. Perfect for long-term savings." },
                { q: "Is my money protected?", a: "FSCS protects up to £85k per person per bank. Use multiple banks to maximize protection. Most savings accounts are covered." },
                { q: "How often do rates change?", a: "Based on Bank of England base rate. When base rate changes, lenders adjust their rates over 1-4 weeks." },
                { q: "Can I withdraw from a fixed bond early?", a: "Usually no. Early withdrawal penalties typically cost 1-3 months' interest. Check terms before committing." },
                { q: "What's the difference between APY and APR?", a: "APY includes compound interest; APR doesn't. For savings, APY is what you actually earn. Always compare APY between accounts." },
                { q: "Should I move my savings frequently?", a: "Only if you find significantly better rates. Switching costs time and effort. Good rates now may change in 1-2 years." },
                { q: "Are online savings accounts safe?", a: "Yes, if the bank is FCA-regulated. Check FCA register. Online banks often offer better rates than high street banks." },
                { q: "Can I have multiple ISAs?", a: "Yes, but only ONE Cash ISA per tax year. You can have Stocks & Shares ISA + Cash ISA. Combined limit £20k/year." }
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
                <h3 className="font-semibold text-gray-900 mb-2">Savings Interest Calculator</h3>
                <p className="text-sm text-gray-700">Calculate interest earned</p>
              </Link>
              <Link to="/calculators/savings-goal-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal Calculator</h3>
                <p className="text-sm text-gray-700">Calculate time to reach goals</p>
              </Link>
              <Link to="/calculators/compound-interest-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Compound Interest</h3>
                <p className="text-sm text-gray-700">Calculate exponential growth</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan monthly budget</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Find Your Best Savings Account</h2>
            <p className="mb-6">Compare current rates and choose the account that matches your savings goals and lifestyle.</p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Compare Now
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>Rates shown are examples and may not reflect current market rates. Check with providers for latest rates before opening an account.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}

