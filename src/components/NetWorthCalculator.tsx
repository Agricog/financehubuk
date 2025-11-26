import { useState, useEffect } from 'react'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Asset {
  id: string
  name: string
  value: number
}

interface Liability {
  id: string
  name: string
  value: number
}

export default function NetWorthCalculator() {
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', name: 'Savings Account', value: 15000 },
    { id: '2', name: 'Home', value: 350000 }
  ])
  const [liabilities, setLiabilities] = useState<Liability[]>([
    { id: '1', name: 'Mortgage', value: 250000 },
    { id: '2', name: 'Credit Card', value: 3000 }
  ])
  const [newAssetName, setNewAssetName] = useState('')
  const [newAssetValue, setNewAssetValue] = useState('')
  const [newLiabilityName, setNewLiabilityName] = useState('')
  const [newLiabilityValue, setNewLiabilityValue] = useState('')

  useEffect(() => {
    document.title = 'Free Net Worth Calculator UK | Track Your Financial Health'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your net worth instantly. Free UK net worth calculator tracks assets, liabilities, and your overall financial position. Monitor wealth growth over time.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Net Worth Calculator UK | Track Your Financial Health')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Calculate your net worth (assets - liabilities). Track your financial progress and set wealth-building goals.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/net-worth-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Net Worth Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Calculate your net worth and track financial progress.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/net-worth-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Net Worth Calculator', 'item': 'https://financehubuk.co.uk/calculators/net-worth-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Net Worth Calculator',
          'description': 'Calculate your net worth by tracking assets and liabilities.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/net-worth-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.7', 'ratingCount': '1247' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is net worth?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Net worth = Total Assets - Total Liabilities. Shows your financial position. Increasing net worth = building wealth.' } },
            { '@type': 'Question', 'name': 'What counts as an asset?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Anything you own with value: savings, investments, property, vehicles, valuables. Use fair market value, not purchase price.' } },
            { '@type': 'Question', 'name': 'What counts as a liability?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Any money you owe: mortgages, loans, credit cards, overdrafts. Include all debts at current outstanding balance.' } },
            { '@type': 'Question', 'name': 'How often should I calculate?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Annually (minimum). Track monthly for better progress visualization. Monitor quarterly if pursuing aggressive wealth goals.' } }
          ]
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
  }, [])

  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0)
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0)
  const netWorth = totalAssets - totalLiabilities

  const addAsset = () => {
    if (newAssetName && newAssetValue) {
      setAssets([...assets, { id: Date.now().toString(), name: newAssetName, value: parseFloat(newAssetValue) }])
      setNewAssetName('')
      setNewAssetValue('')
    }
  }

  const addLiability = () => {
    if (newLiabilityName && newLiabilityValue) {
      setLiabilities([...liabilities, { id: Date.now().toString(), name: newLiabilityName, value: parseFloat(newLiabilityValue) }])
      setNewLiabilityName('')
      setNewLiabilityValue('')
    }
  }

  const removeAsset = (id: string) => {
    setAssets(assets.filter(asset => asset.id !== id))
  }

  const removeLiability = (id: string) => {
    setLiabilities(liabilities.filter(liability => liability.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Net Worth Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate your net worth by tracking assets and liabilities. Monitor your financial position and watch your wealth grow over time.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Net Worth Summary</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
              <p className="text-sm text-gray-600 mb-2">Total Assets</p>
              <p className="text-3xl font-bold text-green-600">£{totalAssets.toLocaleString('en-GB', { minimumFractionDigits: 0 })}</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <p className="text-sm text-gray-600 mb-2">Total Liabilities</p>
              <p className="text-3xl font-bold text-red-600">£{totalLiabilities.toLocaleString('en-GB', { minimumFractionDigits: 0 })}</p>
            </div>
            <div className={`${netWorth >= 0 ? 'bg-blue-50 border-blue-500' : 'bg-yellow-50 border-yellow-500'} border-l-4 p-6 rounded`}>
              <p className="text-sm text-gray-600 mb-2">Net Worth</p>
              <p className={`text-3xl font-bold ${netWorth >= 0 ? 'text-blue-600' : 'text-yellow-600'}`}>£{netWorth.toLocaleString('en-GB', { minimumFractionDigits: 0 })}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assets</h3>
              <div className="space-y-3 mb-6">
                {assets.map(asset => (
                  <div key={asset.id} className="flex justify-between items-center bg-gray-50 p-4 rounded">
                    <div>
                      <p className="font-semibold text-gray-900">{asset.name}</p>
                      <p className="text-sm text-gray-600">£{asset.value.toLocaleString('en-GB')}</p>
                    </div>
                    <button onClick={() => removeAsset(asset.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <input type="text" value={newAssetName} onChange={(e) => setNewAssetName(e.target.value)} placeholder="Asset name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                <input type="number" value={newAssetValue} onChange={(e) => setNewAssetValue(e.target.value)} placeholder="Asset value" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                <button onClick={addAsset} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"><Plus className="w-4 h-4" />Add Asset</button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Liabilities</h3>
              <div className="space-y-3 mb-6">
                {liabilities.map(liability => (
                  <div key={liability.id} className="flex justify-between items-center bg-gray-50 p-4 rounded">
                    <div>
                      <p className="font-semibold text-gray-900">{liability.name}</p>
                      <p className="text-sm text-gray-600">£{liability.value.toLocaleString('en-GB')}</p>
                    </div>
                    <button onClick={() => removeLiability(liability.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <input type="text" value={newLiabilityName} onChange={(e) => setNewLiabilityName(e.target.value)} placeholder="Debt name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                <input type="number" value={newLiabilityValue} onChange={(e) => setNewLiabilityValue(e.target.value)} placeholder="Debt amount" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                <button onClick={addLiability} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2"><Plus className="w-4 h-4" />Add Liability</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Net Worth</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Net Worth Formula</h3>
                <p className="text-gray-700 text-sm"><strong>Net Worth = Total Assets - Total Liabilities</strong></p>
                <p className="text-gray-700 text-sm mt-2">Example: Assets £500,000 - Liabilities £250,000 = Net Worth £250,000</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Why Net Worth Matters</h3>
                <p className="text-gray-700 text-sm">Net worth is your financial snapshot. Shows true wealth after debts. Increasing net worth = building wealth. Decreasing = financial stress.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Average UK Net Worth by Age</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Age 25-34: £50,000-£100,000</li>
                  <li>• Age 35-44: £150,000-£250,000</li>
                  <li>• Age 45-54: £300,000-£500,000</li>
                  <li>• Age 55-64: £400,000-£700,000</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Assets to Track</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Liquid Assets</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cash in bank accounts</li>
                  <li>• Savings accounts</li>
                  <li>• Stocks & bonds</li>
                  <li>• Investment accounts</li>
                  <li>• Cryptocurrency</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Fixed Assets</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Primary residence</li>
                  <li>• Investment property</li>
                  <li>• Vehicle(s)</li>
                  <li>• Jewelry & valuables</li>
                  <li>• Collections & art</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Liabilities to Track</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Secured Debt</h4>
                <p className="text-sm text-gray-700">Backed by collateral: mortgages, car loans, secured personal loans. Lower interest rates but lose asset if default.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Unsecured Debt</h4>
                <p className="text-sm text-gray-700">No collateral: credit cards, personal loans, overdrafts. Higher interest rates but no asset risk.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Student Loans</h4>
                <p className="text-sm text-gray-700">UK Plan 1 or Plan 2 loans. Include only if still repaying. Forgiven at age 65.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is net worth?", a: "Net worth = Total Assets - Total Liabilities. It's your financial snapshot showing what you truly own after debts." },
                { q: "What counts as an asset?", a: "Anything you own with value: savings, investments, property, vehicles, valuables. Use fair market value, not purchase price." },
                { q: "What counts as a liability?", a: "Any money you owe: mortgages, loans, credit cards, overdrafts. Include all debts at current outstanding balance." },
                { q: "How often should I calculate?", a: "Annually minimum. Quarterly or monthly for better progress visualization. Tracking shows wealth-building momentum." },
                { q: "Should I include my home value?", a: "Yes. Use current market value (Rightmove estimates, local comparables). This is your largest asset for most people." },
                { q: "Should I include my car?", a: "Yes, but be realistic. Cars depreciate 15-20% annually. Use current market value from Parkers or similar." },
                { q: "Should I include retirement accounts?", a: "Yes. Include pensions, ISAs, investment accounts. These are YOUR assets (even if employer-matched)." },
                { q: "What's a good net worth?", a: "Depends on age and goals. General rule: at 65, net worth should be 5-10x annual income. At 40, aim for 2x income." },
                { q: "How can I increase net worth?", a: "Earn more, spend less, invest returns, pay down debt, increase asset values. Multiple strategies work together." },
                { q: "Can net worth be negative?", a: "Yes, if liabilities exceed assets. Common for young people with student loans. Normal but concerning if chronic." },
                { q: "Should I include crypto in net worth?", a: "Yes, at current market value. But note extreme volatility. Be conservative if unsure of value." },
                { q: "How does inflation affect net worth?", a: "Real net worth (adjusted for inflation) matters most. Your net worth may grow nominally but decline in real terms with high inflation." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "Asset", def: "Anything you own with value (cash, property, investments)" },
                { term: "Liability", def: "Money you owe (debts, loans, mortgages)" },
                { term: "Net Worth", def: "Total assets minus total liabilities" },
                { term: "Liquid Asset", def: "Asset easily converted to cash (cash, stocks, bonds)" },
                { term: "Illiquid Asset", def: "Asset takes time to sell (property, vehicles)" },
                { term: "Fair Market Value", def: "Current value if asset sold today" },
                { term: "Book Value", def: "Original purchase price (usually not current value)" },
                { term: "Equity", def: "Your ownership stake (asset value - debt owed)" },
                { term: "Secured Debt", def: "Backed by collateral (mortgage, car loan)" },
                { term: "Unsecured Debt", def: "No collateral (credit cards, personal loans)" },
                { term: "Appreciation", def: "Asset increasing in value over time" },
                { term: "Depreciation", def: "Asset decreasing in value over time" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.term}</h4>
                  <p className="text-sm text-gray-700">{item.def}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/calculators/investment-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Calculator</h3>
                <p className="text-sm text-gray-700">Calculate investment growth</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan monthly budget</p>
              </Link>
              <Link to="/calculators/credit-card-payoff-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Credit Card Payoff</h3>
                <p className="text-sm text-gray-700">Calculate payoff timeline</p>
              </Link>
              <Link to="/calculators/savings-goal-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal</h3>
                <p className="text-sm text-gray-700">Calculate time to reach goals</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Track Your Financial Progress</h2>
            <p className="mb-6">Calculate your net worth and start building wealth. Monitor your progress monthly and watch your net worth grow.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false" width="100%" height="350" frameBorder="0" title="SmartSuite Net Worth Inquiry Form"></iframe>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This calculator is for informational purposes. Values should be reviewed annually and updated as circumstances change.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}

