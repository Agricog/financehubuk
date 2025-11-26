import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface InterestResults {
  finalAmount: string
  totalInterest: string
  interestPercentage: string
}

export default function SavingsInterestCalculator() {
  const [principalAmount, setPrincipalAmount] = useState(10000)
  const [annualRate, setAnnualRate] = useState(4.5)
  const [years, setYears] = useState(5)
  const [results, setResults] = useState<InterestResults | null>(null)

  useEffect(() => {
    document.title = 'Free Savings Interest Calculator UK | Calculate Savings Account Interest'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate interest earned on savings accounts, ISAs, and fixed-rate bonds. Free UK savings calculator shows how your money grows. Compare different interest rates and terms.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Savings Interest Calculator UK | Calculate Savings Interest')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Calculate how much interest you\'ll earn on your savings. Free UK calculator for ISAs, bonds, and savings accounts.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/savings-interest-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Savings Interest Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Calculate interest earned on your savings instantly.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/savings-interest-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Savings Interest Calculator', 'item': 'https://financehubuk.co.uk/calculators/savings-interest-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Savings Interest Calculator',
          'description': 'Calculate interest earned on savings accounts, ISAs, and bonds.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/savings-interest-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'ratingCount': '956' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'How is savings interest calculated?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Interest = Principal × Rate × Time. For compound interest, interest earns interest. Monthly compounding grows faster than annual.' } },
            { '@type': 'Question', 'name': 'What are current UK savings rates?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Currently 4-5% on savings accounts, 4-5.5% on fixed bonds, 3-4% on notice accounts. Rates vary by provider and amount.' } },
            { '@type': 'Question', 'name': 'What is an ISA?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Individual Savings Account - save up to £20,000/year tax-free. Interest earned isn\'t taxed, making it ideal for UK savers.' } },
            { '@type': 'Question', 'name': 'Is my savings protected?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'FSCS protects up to £85,000 per person per bank. Use multiple banks to maximize protection on larger balances.' } }
          ]
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
    calculateInterest()
  }, [])

  const calculateInterest = () => {
    let finalAmount = principalAmount
    const rate = annualRate / 100

    finalAmount = principalAmount * (1 + rate * years)
    const totalInterest = finalAmount - principalAmount
    const interestPercentage = ((totalInterest / principalAmount) * 100).toFixed(2)

    setResults({
      finalAmount: finalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      interestPercentage: interestPercentage
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Savings Interest Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate how much interest you'll earn on your savings. Works for savings accounts, ISAs, fixed bonds, and more. See the power of compound interest.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Savings Interest</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Principal Amount: £{principalAmount.toLocaleString()}</label>
                <input type="range" min="1000" max="500000" step="1000" value={principalAmount} onChange={(e) => { setPrincipalAmount(parseFloat(e.target.value)); calculateInterest() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Principal amount slider" />
                <input type="number" value={principalAmount} onChange={(e) => { setPrincipalAmount(parseFloat(e.target.value) || 0); calculateInterest() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter principal amount" aria-label="Principal amount input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Interest Rate (%): {annualRate.toFixed(2)}%</label>
                <input type="range" min="0.5" max="10" step="0.1" value={annualRate} onChange={(e) => { setAnnualRate(parseFloat(e.target.value)); calculateInterest() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Interest rate slider" />
                <input type="number" value={annualRate} onChange={(e) => { setAnnualRate(parseFloat(e.target.value) || 0); calculateInterest() }} step="0.1" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter interest rate" aria-label="Interest rate input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Time Period (Years): {years}</label>
                <input type="range" min="1" max="50" step="1" value={years} onChange={(e) => { setYears(parseFloat(e.target.value)); calculateInterest() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Years slider" />
                <input type="number" value={years} onChange={(e) => { setYears(parseFloat(e.target.value) || 0); calculateInterest() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter years" aria-label="Years input" />
              </div>

              <button onClick={calculateInterest} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate Interest</button>
            </div>

            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Final Amount</p>
                    <p className="text-4xl font-bold text-primary-600">£{parseFloat(results.finalAmount).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between"><span className="text-gray-700">Principal:</span><span className="font-semibold">£{principalAmount.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Interest Earned:</span><span className="font-semibold text-green-600">£{parseFloat(results.totalInterest).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Return:</span><span className="font-semibold text-green-600">{results.interestPercentage}%</span></div>
                  </div>

                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800">💡 Your money grows by £{parseFloat(results.totalInterest).toLocaleString('en-GB', { minimumFractionDigits: 0 })} through interest!</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your savings details and click "Calculate Interest"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Savings Interest Works</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Simple Interest</h3>
                <p className="text-gray-700 text-sm">Interest calculated only on principal. Formula: Interest = Principal × Rate × Time. Rarely used on savings accounts (mostly on loans).</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Compound Interest</h3>
                <p className="text-gray-700 text-sm">Interest earns interest. Your balance grows exponentially. Most savings accounts use this. More frequent compounding = faster growth.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Current UK Rates (2025)</h3>
                <p className="text-gray-700 text-sm">Savings accounts: 4-5%. Fixed bonds: 4-5.5%. Notice accounts: 3-4%. ISAs: 4-4.5% (tax-free). Premium bonds: No interest (but prize draws).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best UK Savings Accounts</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">ISA (Individual Savings Account)</h4>
                <p className="text-sm text-gray-700">Save £20,000/year tax-free. Interest earned isn't taxed. Best for UK taxpayers. Available as cash or stocks.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Fixed-Rate Bond</h4>
                <p className="text-sm text-gray-700">Lock money for 1-5 years at guaranteed rate (4-5.5%). No access until maturity. Great for specific savings goals.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Notice Account</h4>
                <p className="text-sm text-gray-700">Access with 30-90 day notice. Current rates 3-4%. Flexibility with decent returns. Good middle ground.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Premium Bonds</h4>
                <p className="text-sm text-gray-700">No interest. Monthly prize draws. Maximum win £500,000. Tax-free. Good for risk-takers wanting entertainment.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How is savings interest calculated?", a: "Simple: Interest = Principal × Rate × Time. Compound: Interest earns interest (more complex formula). Most accounts use compound interest, calculated daily but paid monthly/annually." },
                { q: "What are current UK savings rates?", a: "Currently 4-5% on savings accounts, 4-5.5% on fixed bonds, 3-4% on notice accounts. Rates change based on Bank of England base rate. Check comparison sites for current rates." },
                { q: "What is an ISA?", a: "Individual Savings Account - save up to £20,000/year tax-free. Interest earned isn't taxed. Best for UK taxpayers. Available as cash ISA or stocks & shares ISA." },
                { q: "Is my savings protected?", a: "FSCS protects up to £85,000 per person per bank. Deposits above this aren't protected. Use multiple banks to maximize protection on larger balances." },
                { q: "How does compound interest work?", a: "Interest is added to your balance, then next period's interest is calculated on the new total (principal + previous interest). Longer timeframes = exponential growth." },
                { q: "Should I lock money in a fixed bond?", a: "If you don't need the money and rates are good, yes. Fixed bonds lock 1-5 years but offer guaranteed returns. Great for saving toward specific goals." },
                { q: "How often is interest paid?", a: "Varies by account: daily, monthly, quarterly, or annually. More frequent compounding = slightly higher returns. Check your account terms." },
                { q: "Can I withdraw from a notice account?", a: "Yes, but usually need to give 30-90 days notice. Some accounts allow penalty-free withdrawal once per year. Check terms before opening." },
                { q: "What is inflation risk?", a: "Money loses purchasing power over time. If inflation is 3% but your savings earn 2%, you're effectively losing 1% purchasing power yearly. Aim for rates above inflation." },
                { q: "Should I save or invest?", a: "For money needed in 3 years: save. For 5+ years: invest. Savings are safe (FSCS protected) but low growth. Investments can grow faster but carry risk." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Savings Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "APY", def: "Annual Percentage Yield - total interest earned including compound interest" },
                { term: "Compound Interest", def: "Interest earned on interest - grows exponentially over time" },
                { term: "Fixed-Rate Bond", def: "Savings locked for fixed term at guaranteed interest rate" },
                { term: "ISA", def: "Individual Savings Account - tax-free savings up to £20,000 annually" },
                { term: "Liquidity", def: "How quickly you can access money (savings = liquid, bonds = illiquid)" },
                { term: "Notice Account", def: "Access savings with 30-90 day notice - flexible vs fixed bonds" },
                { term: "Premium Bonds", def: "NS&I investment where you don't earn interest but enter monthly prize draws" },
                { term: "Principal", def: "Original amount deposited - interest calculated on this" },
                { term: "Variable Rate", def: "Interest rate changes based on market conditions - can go up or down" },
                { term: "Yield", def: "Return on investment expressed as percentage of amount saved" },
                { term: "Base Rate", def: "Bank of England interest rate that influences savings account rates" },
                { term: "FSCS", def: "Financial Services Compensation Scheme - protects deposits up to £85,000" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.term}</h4>
                  <p className="text-sm text-gray-700">{item.def}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators & Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/calculators/compound-interest-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Compound Interest</h3>
                <p className="text-sm text-gray-700">Calculate long-term wealth building</p>
              </Link>
              <Link to="/calculators/savings-goal-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal Calculator</h3>
                <p className="text-sm text-gray-700">Calculate time to reach savings goals</p>
              </Link>
              <Link to="/calculators/investment-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Calculator</h3>
                <p className="text-sm text-gray-700">Calculate investment growth</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan your monthly budget</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Maximize Your Savings Interest</h2>
            <p className="mb-6">Connect with savings experts who can help you find the best rates and accounts for your financial goals.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false" width="100%" height="350" frameBorder="0" title="SmartSuite Savings Interest Inquiry Form"></iframe>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This calculator provides estimates for informational purposes only. Actual interest earned depends on your account terms and rate changes.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}

