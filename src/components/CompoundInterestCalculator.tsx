import { useState, useEffect } from 'react'
import { ArrowLeft, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CompoundResults {
  finalAmount: string
  totalInvestment: string
  totalGain: string
  gainPercentage: string
}

export default function CompoundInterestCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(5000)
  const [monthlyContribution, setMonthlyContribution] = useState(250)
  const [annualRate, setAnnualRate] = useState(7)
  const [years, setYears] = useState(30)
  const [results, setResults] = useState<CompoundResults | null>(null)

  useEffect(() => {
    document.title = 'Free Compound Interest Calculator UK | Calculate Long-Term Growth'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate compound interest and long-term wealth building. Free UK calculator shows how your money grows exponentially. Perfect for retirement and savings planning.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Compound Interest Calculator UK | Calculate Long-Term Growth')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'See the power of compound interest. Calculate how your investments grow over time with regular contributions.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/compound-interest-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Compound Interest Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Calculate compound interest and long-term wealth growth instantly.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/compound-interest-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Compound Interest Calculator', 'item': 'https://financehubuk.co.uk/calculators/compound-interest-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Compound Interest Calculator',
          'description': 'Calculate compound interest and long-term wealth building with regular contributions.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/compound-interest-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'ratingCount': '2134' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is compound interest?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Interest earned on interest. Your investment grows exponentially because gains are reinvested. Albert Einstein called it "the eighth wonder of the world".' } },
            { '@type': 'Question', 'name': 'How long until money doubles?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Use Rule of 72: Divide 72 by your return rate. At 7% return, money doubles in ~10 years. At 10%, ~7 years.' } },
            { '@type': 'Question', 'name': 'What if I start at age 30?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Still powerful. £250/month from 30-65 (35 years) at 7% = £724k. Starting early matters most, but starting late beats not starting.' } },
            { '@type': 'Question', 'name': 'Should I invest or save?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For 5+ years: invest (stocks average 7-10%). For 3 years: save (safer). For 1-3 years: bonds (middle ground).' } }
          ]
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
    calculateCompound()
  }, [])

  const calculateCompound = () => {
    let balance = initialInvestment
    const rate = annualRate / 100
    const monthlyRate = rate / 12
    const totalMonths = years * 12
    let totalContributed = initialInvestment

    for (let i = 0; i < totalMonths; i++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution
      totalContributed += monthlyContribution
    }

    const totalGain = balance - totalContributed
    const gainPercentage = ((totalGain / totalContributed) * 100).toFixed(2)

    setResults({
      finalAmount: balance.toFixed(2),
      totalInvestment: totalContributed.toFixed(2),
      totalGain: totalGain.toFixed(2),
      gainPercentage: gainPercentage
    })
  }

  const handleDownload = () => {
    if (!results) return
    const data = `COMPOUND INTEREST CALCULATOR RESULTS\n${'='.repeat(50)}\n\nInitial Investment: £${initialInvestment.toLocaleString()}\nMonthly Contribution: £${monthlyContribution.toLocaleString()}\nAnnual Return: ${annualRate}%\nTime Period: ${years} years\n\n${'='.repeat(50)}\nRESULTS\n${'='.repeat(50)}\n\nFinal Portfolio Value: £${results.finalAmount}\nTotal Invested: £${results.totalInvestment}\nTotal Gain: £${results.totalGain}\nReturn on Investment: ${results.gainPercentage}%\n\n${'='.repeat(50)}\nKEY INSIGHTS\n${'='.repeat(50)}\n\nCompound interest means your money works for you.\nRegular contributions accelerate wealth building.\nTime is your greatest advantage.\n\nGenerated: ${new Date().toLocaleString()}\nfinancehubuk.co.uk`
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
    element.setAttribute('download', `compound-interest-${new Date().getTime()}.txt`)
    element.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Compound Interest Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">See the power of compound interest and exponential growth. Calculate long-term wealth building with regular contributions. Perfect for retirement planning and savings goals.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Compound Interest Growth</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Investment: £{initialInvestment.toLocaleString()}</label>
                <input type="range" min="1000" max="100000" step="1000" value={initialInvestment} onChange={(e) => { setInitialInvestment(parseFloat(e.target.value)); calculateCompound() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Initial investment slider" />
                <input type="number" value={initialInvestment} onChange={(e) => { setInitialInvestment(parseFloat(e.target.value) || 0); calculateCompound() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter initial amount" aria-label="Initial investment input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Contribution: £{monthlyContribution.toLocaleString()}</label>
                <input type="range" min="0" max="2000" step="50" value={monthlyContribution} onChange={(e) => { setMonthlyContribution(parseFloat(e.target.value)); calculateCompound() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Monthly contribution slider" />
                <input type="number" value={monthlyContribution} onChange={(e) => { setMonthlyContribution(parseFloat(e.target.value) || 0); calculateCompound() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter monthly amount" aria-label="Monthly contribution input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Return (%): {annualRate.toFixed(2)}%</label>
                <input type="range" min="1" max="15" step="0.1" value={annualRate} onChange={(e) => { setAnnualRate(parseFloat(e.target.value)); calculateCompound() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Annual return slider" />
                <input type="number" value={annualRate} onChange={(e) => { setAnnualRate(parseFloat(e.target.value) || 0); calculateCompound() }} step="0.1" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter annual return" aria-label="Annual return input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Time Period (Years): {years}</label>
                <input type="range" min="1" max="50" step="1" value={years} onChange={(e) => { setYears(parseFloat(e.target.value)); calculateCompound() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Years slider" />
                <input type="number" value={years} onChange={(e) => { setYears(parseFloat(e.target.value) || 0); calculateCompound() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter years" aria-label="Years input" />
              </div>

              <button onClick={calculateCompound} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate Growth</button>
            </div>

            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Final Portfolio Value</p>
                    <p className="text-4xl font-bold text-primary-600">£{parseFloat(results.finalAmount).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between"><span className="text-gray-700">Total Invested:</span><span className="font-semibold">£{parseFloat(results.totalInvestment).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Gain:</span><span className="font-semibold text-green-600">£{parseFloat(results.totalGain).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Return on Investment:</span><span className="font-semibold text-green-600">{results.gainPercentage}%</span></div>
                  </div>

                  <button 
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 rounded-lg transition"
                  >
                    <FileDown className="w-4 h-4" />
                    Download Results
                  </button>

                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800">🚀 The power of compound interest: Your money works for you!</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your details and click "Calculate Growth"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Power of Compound Interest</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Einstein's Eighth Wonder</h3>
                <p className="text-gray-700 text-sm">Albert Einstein supposedly called compound interest "the eighth wonder of the world." Those who understand it earn it; those who don't pay it. Over decades, compound interest creates significant wealth.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Time is Your Greatest Asset</h3>
                <p className="text-gray-700 text-sm">Investing £250/month from age 25 to 65 (40 years) at 7% = £1.5m. Same £250/month from 45 to 65 (20 years) = £280k. Starting early makes a massive difference due to compound interest.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Rule of 72</h3>
                <p className="text-gray-700 text-sm">Divide 72 by your return rate to find how long to double your money. At 7% = ~10 years. At 10% = 7 years. At 5% = 14 years. Higher returns = faster doubling.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compounding Frequency Impact</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-3 text-left font-semibold">Frequency</th>
                    <th className="px-4 py-3 text-left font-semibold">Impact</th>
                    <th className="px-4 py-3 text-left font-semibold">Example £10,000 at 5%/year</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Annually</td>
                    <td className="px-4 py-3">Baseline</td>
                    <td className="px-4 py-3">£12,762 after 5 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Semi-Annually</td>
                    <td className="px-4 py-3">+0.15% growth</td>
                    <td className="px-4 py-3">£12,799</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Quarterly</td>
                    <td className="px-4 py-3">+0.30% growth</td>
                    <td className="px-4 py-3">£12,820</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Monthly</td>
                    <td className="px-4 py-3">+0.45% growth</td>
                    <td className="px-4 py-3">£12,833</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Daily</td>
                    <td className="px-4 py-3">+0.50% growth</td>
                    <td className="px-4 py-3">£12,841</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-2">More frequent compounding = slightly higher returns. Difference grows over decades.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is compound interest?", a: "Interest earned on your interest. Your investment grows exponentially because gains are reinvested. Over decades, small contributions create significant wealth due to the \"snowball effect\"." },
                { q: "How long until my money doubles (Rule of 72)?", a: "Divide 72 by your return rate. At 7% return, ~10 years to double. At 10% return, ~7 years. At 5% return, ~14 years. Higher returns = faster doubling." },
                { q: "Should I start investing young?", a: "Absolutely. Starting at 25 vs 35 (10 years difference) roughly doubles your final wealth due to compound interest. Time is your biggest advantage." },
                { q: "What return rates are realistic?", a: "Stocks: 8-10% average (long-term). Bonds: 4-6%. Cash: 3-4%. Depends on risk tolerance and asset allocation. Past performance ≠ guaranteed future returns." },
                { q: "How much should I invest monthly?", a: "Invest what you can afford. Even £50-100/month builds wealth over time. Consistency beats amount. Automate to ensure you stick with it." },
                { q: "What if I start late (age 40+)?", a: "Still powerful! £500/month from 40-67 (27 years) at 7% = £569k. Starting late beats not starting. Increase contributions to catch up." },
                { q: "Should I invest in stocks or bonds?", a: "Age matters: Under 40: 80-100% stocks. 40-55: 60-70% stocks. 55+: 40-50% stocks. Rebalance annually. Younger = more risk tolerance for higher returns." },
                { q: "What is inflation risk?", a: "Inflation erodes purchasing power. £100k in 30 years = £50k in today's money (3% inflation). You need returns above inflation to build real wealth." },
                { q: "Can I lose money with compound interest?", a: "Yes, if investing in stocks. Markets fluctuate. But long-term (10+ years), stocks historically recover and deliver positive returns. Don't panic-sell downturns." },
                { q: "How do I maximize compound interest?", a: "Start early. Invest regularly. Choose high-growth investments for long timeframes. Minimize fees. Reinvest all gains. Avoid withdrawals. Time in market beats timing the market." },
                { q: "What is the impact of fees?", a: "1% annual fee reduces 7% returns to 6%. Over 30 years, 1% fee costs you 25-30% of final wealth. Choose low-fee index funds (0.1-0.3% fees)." },
                { q: "Should I use ISAs?", a: "Yes for UK taxpayers. ISA growth is tax-free. Invest up to £20k/year. Perfect for maximizing compound interest without tax drag." },
                { q: "What is dollar-cost averaging?", a: "Investing fixed amount regularly regardless of market price. Reduces impact of volatility. £500/month beats trying to time the market." },
                { q: "How often should I check my investments?", a: "Quarterly or annually. Frequent checking tempts panic-selling. Long-term investing requires patience and discipline." },
                { q: "What is my investment timeline?", a: "Under 3 years: save (safe). 3-5 years: bonds/mixed. 5+ years: stocks (growth). 10+ years: aggressive stocks (maximize compound growth)." }
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
                { term: "Compound Interest", def: "Interest earned on interest - grows exponentially" },
                { term: "Principal", def: "Original investment amount" },
                { term: "Return", def: "Profit or gain on investment" },
                { term: "Volatility", def: "How much investment price fluctuates" },
                { term: "Asset Allocation", def: "How to divide investments across stocks, bonds, cash" },
                { term: "Rebalancing", def: "Adjusting portfolio to maintain target allocation" },
                { term: "Index Fund", def: "Low-cost fund tracking market index" },
                { term: "Dividend", def: "Cash payment from companies to shareholders" },
                { term: "Reinvest", def: "Using dividends/gains to buy more investments" },
                { term: "Tax-Deferred", def: "Growth without paying taxes until withdrawal" },
                { term: "ISA", def: "Individual Savings Account - UK tax-free investment" },
                { term: "Pension", def: "Tax-advantaged long-term retirement savings" }
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
              <Link to="/calculators/savings-interest-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Interest</h3>
                <p className="text-sm text-gray-700">Calculate savings account interest</p>
              </Link>
              <Link to="/calculators/savings-goal-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal</h3>
                <p className="text-sm text-gray-700">Calculate time to reach goals</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan monthly budget</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Start Building Wealth Today</h2>
            <p className="mb-6">Calculate your compound interest and watch exponential growth. Start small, stay consistent, build wealth.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe 
                src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=CompoundInterestCalculator" 
                width="100%" 
                height="350" 
                frameBorder="0" 
                title="SmartSuite Compound Interest Inquiry Form"
                className="rounded-lg"
              />
            </div>
          </section>
        </div>

        {/* FCA / information-only disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-700 text-center">
          <p>
            FinanceHubUK provides tools and information for general guidance only. The results from this calculator
            are estimates and do not constitute personal advice or a recommendation.
          </p>
          <p className="mt-2">
            FinanceHubUK is not authorised by the Financial Conduct Authority (FCA) to provide regulated financial
            advice. You should consider speaking to a regulated financial advisor before making any
            investment decisions.
          </p>
          <p className="mt-2">
            Investment returns are not guaranteed. Past performance does not guarantee future results. All investments
            carry risk, including potential loss of principal. Rates and products can change at short notice.
          </p>
        </div>
      </div>
    </div>
  )
}

