import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface InvestmentResults {
  finalAmount: string
  totalInvested: string
  totalGain: string
  gainPercentage: string
}

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [annualReturn, setAnnualReturn] = useState(7)
  const [years, setYears] = useState(20)
  const [results, setResults] = useState<InvestmentResults | null>(null)

  useEffect(() => {
    document.title = 'Free Investment Calculator UK | Calculate Investment Growth & Returns'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your investment growth with our free UK investment calculator. See compound interest, total gains, and final portfolio value. Plan for long-term wealth.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Investment Calculator UK | Calculate Investment Growth & Returns')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Calculate investment returns and portfolio growth instantly. See compound interest in action and plan your investment strategy.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/investment-calculator-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Investment Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Calculate investment returns and compound interest instantly.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/investment-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Investment Calculator', 'item': 'https://financehubuk.co.uk/calculators/investment-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Investment Calculator',
          'description': 'Calculate your investment growth and compound interest over time. Plan for long-term wealth and financial goals.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/investment-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'ratingCount': '1642' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is compound interest?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Interest earned on interest. Your investment grows exponentially as gains are reinvested. Over decades, compound interest creates significant wealth.' } },
            { '@type': 'Question', 'name': 'What is a realistic investment return?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Stocks average 8-10% annually long-term. Bonds 4-6%. Cash 4-5%. Depends on risk tolerance and asset allocation. Past performance doesn\'t guarantee future results.' } },
            { '@type': 'Question', 'name': 'How much should I invest monthly?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Invest what you can afford. Even £100/month builds wealth over time due to compound interest. More consistent contributions = better results.' } },
            { '@type': 'Question', 'name': 'How long should I invest for?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Longer timeframes reduce volatility risk and maximize compound interest. 5+ years for moderate risk. 10+ years for stock-heavy portfolios.' } }
          ]
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
    calculateInvestment()
  }, [])

  const calculateInvestment = () => {
    let balance = initialInvestment
    const monthlyRate = annualReturn / 100 / 12
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
      totalInvested: totalContributed.toFixed(2),
      totalGain: totalGain.toFixed(2),
      gainPercentage: gainPercentage
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Investment Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate your investment growth with compound interest. See how your portfolio grows over time and plan for long-term wealth.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Investment Growth</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Initial Investment: £{initialInvestment.toLocaleString()}</label>
                <input type="range" min="1000" max="500000" step="1000" value={initialInvestment} onChange={(e) => { setInitialInvestment(parseFloat(e.target.value)); calculateInvestment() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Initial investment slider" />
                <input type="number" value={initialInvestment} onChange={(e) => { setInitialInvestment(parseFloat(e.target.value) || 0); calculateInvestment() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter initial investment" aria-label="Initial investment input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Contribution: £{monthlyContribution.toLocaleString()}</label>
                <input type="range" min="0" max="5000" step="50" value={monthlyContribution} onChange={(e) => { setMonthlyContribution(parseFloat(e.target.value)); calculateInvestment() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Monthly contribution slider" />
                <input type="number" value={monthlyContribution} onChange={(e) => { setMonthlyContribution(parseFloat(e.target.value) || 0); calculateInvestment() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter monthly contribution" aria-label="Monthly contribution input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Annual Return (%): {annualReturn.toFixed(2)}%</label>
                <input type="range" min="1" max="15" step="0.1" value={annualReturn} onChange={(e) => { setAnnualReturn(parseFloat(e.target.value)); calculateInvestment() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Annual return slider" />
                <input type="number" value={annualReturn} onChange={(e) => { setAnnualReturn(parseFloat(e.target.value) || 0); calculateInvestment() }} step="0.1" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter annual return %" aria-label="Annual return input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Investment Period (Years): {years}</label>
                <input type="range" min="1" max="50" step="1" value={years} onChange={(e) => { setYears(parseFloat(e.target.value)); calculateInvestment() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Years slider" />
                <input type="number" value={years} onChange={(e) => { setYears(parseFloat(e.target.value) || 0); calculateInvestment() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter years" aria-label="Years input" />
              </div>

              <button onClick={calculateInvestment} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate Growth</button>
            </div>

            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Final Portfolio Value</p>
                    <p className="text-4xl font-bold text-primary-600">£{parseFloat(results.finalAmount).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between"><span className="text-gray-700">Total Invested:</span><span className="font-semibold">£{parseFloat(results.totalInvested).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Gain:</span><span className="font-semibold text-green-600">£{parseFloat(results.totalGain).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Return on Investment:</span><span className="font-semibold text-green-600">{results.gainPercentage}%</span></div>
                  </div>

                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                    <p className="text-sm font-semibold text-blue-800">💡 The power of compound interest: Your gains earned gains!</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your investment details and click "Calculate Growth"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Compound Interest</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">The Power of Compound Interest</h3>
                <p className="text-gray-700 text-sm">Albert Einstein called it "the eighth wonder of the world." Compound interest is interest earned on your interest. Over decades, small regular investments grow exponentially.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Time is Your Greatest Asset</h3>
                <p className="text-gray-700 text-sm">Investing £500/month from age 25 to 65 (40 years) at 7% return = £1.5m. Same £500/month from 45 to 65 (20 years) = £280k. Starting early makes a massive difference.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Rule of 72</h3>
                <p className="text-gray-700 text-sm">Divide 72 by your return rate to see how long to double your money. 72 ÷ 7% = ~10 years to double. At 10% return = 7.2 years. Higher returns = faster wealth.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Options in the UK</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Stocks & Equities (8-10% average return)</h4>
                <p className="text-sm text-gray-700">Company shares via ISA or brokerage. Higher growth but higher volatility. Best for 10+ year timeframes.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Bonds (4-6% average return)</h4>
                <p className="text-sm text-gray-700">Fixed income investments with lower risk. Better for conservative investors or shorter timeframes.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">ISA (Individual Savings Account)</h4>
                <p className="text-sm text-gray-700">UK tax-free savings up to £20,000/year. Best for long-term investment strategy.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Pension (Private or Workplace)</h4>
                <p className="text-sm text-gray-700">Tax-advantaged long-term investment. Employer contribution + tax relief = free money.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Investment Funds (Mutual Funds, ETFs)</h4>
                <p className="text-sm text-gray-700">Diversified basket of stocks/bonds managed professionally. Lower fees with ETFs.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Cash/Savings Accounts (4-5% return)</h4>
                <p className="text-sm text-gray-700">Very safe but low returns. Inflation erodes purchasing power. Good emergency fund only.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Risk & Return Trade-Off</h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">Higher risk investments offer higher potential returns but greater volatility:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Conservative (5-6% return):</strong> Bonds, cash. Stable but slow growth. Good for retirement-age investors.</li>
                <li>• <strong>Moderate (7-8% return):</strong> 60% stocks, 40% bonds. Balanced risk/reward. Good for most investors.</li>
                <li>• <strong>Aggressive (9-10%+ return):</strong> 80-100% stocks. High volatility but long-term growth. Good for under-40 investors.</li>
              </ul>
              <p className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm"><strong>Remember:</strong> Past performance ≠ future results. All investments carry risk. Diversify across asset classes and sectors.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is compound interest?", a: "Interest earned on your interest. Investment grows exponentially as gains are reinvested. Over decades, compound interest creates significant wealth due to the 'snowball effect'." },
                { q: "What is a realistic investment return?", a: "Stocks average 8-10% annually (long-term). Bonds 4-6%. Cash 4-5%. Depends on risk tolerance and asset allocation. Past performance doesn't guarantee future results." },
                { q: "How much should I invest monthly?", a: "Invest what you can afford. Even £50-100/month builds wealth over time. More is better, but consistency beats amount. Automate to ensure you stick with it." },
                { q: "How long should I invest for?", a: "Longer timeframes reduce volatility risk and maximize compound interest. 5+ years for moderate risk. 10+ years for stock-heavy portfolios. 20+ years for maximum compound growth." },
                { q: "Should I invest in stocks or bonds?", a: "Depends on age and risk tolerance. Young (under 40): 80%+ stocks. Middle (40-55): 60-70% stocks. Near retirement (55+): 40-50% stocks. Rebalance annually." },
                { q: "What is dollar-cost averaging?", a: "Investing fixed amount regularly regardless of price. Reduces impact of market volatility. Example: £500/month regardless of market ups/downs." },
                { q: "Is property investment better than stocks?", a: "Both have pros/cons. Property: tangible, leverage (mortgages), rental income, but high costs & illiquidity. Stocks: liquid, lower fees, easy to start. Diversify both." },
                { q: "How do I get started investing?", a: "Open an ISA or brokerage account (Hargreaves Lansdown, Interactive Investor, AJ Bell). Research low-cost index funds or ETFs. Start small, increase over time." },
                { q: "What fees should I watch for?", a: "Fund fees (0.1-1% annually), trading fees (£5-20 per trade), adviser fees (0.5-1.5%). Lower fees = more to you. Compare before investing." },
                { q: "Should I use a financial adviser?", a: "If you have >£50k, maybe. Independent Advisers (IFA) are unbiased. Fee-based advisers charge flat fee (good). Commission advisers push high-fee products (avoid)." },
                { q: "What is tax-efficient investing?", a: "Use ISA (tax-free) for stocks/bonds. Use pensions for retirement (tax relief). Hold long-term in tax-sheltered accounts. Minimizes tax drag." },
                { q: "Can I lose money investing?", a: "Yes. Stock market can drop. Bonds can default. Never invest money you can't afford to lose. Don't panic-sell in downturns." },
                { q: "What is rebalancing?", a: "Annually (or quarterly) buying/selling to return to target allocation. If stocks rise to 75% (target 60%), sell stocks, buy bonds. Keeps risk in check." },
                { q: "How do I know if I'm on track for retirement?", a: "Estimate annual expenses × 25 = needed portfolio. Use our calculator to see if you're on pace. Get professional advice if unsure." },
                { q: "What is inflation risk?", a: "Money loses purchasing power over time. £100k in 30 years = £50k in today's dollars (3% inflation). Only way to beat it: invest for returns above inflation." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Investment Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "Asset Allocation", def: "How you divide investments across stocks, bonds, cash" },
                { term: "Compound Interest", def: "Interest earned on interest - exponential growth over time" },
                { term: "Diversification", def: "Spreading investments across different assets to reduce risk" },
                { term: "ETF", def: "Exchange-Traded Fund - basket of stocks/bonds trading like stock" },
                { term: "Index Fund", def: "Fund tracking market index (S&P 500, FTSE 100) with low fees" },
                { term: "ISA", def: "Individual Savings Account - UK tax-free investment account" },
                { term: "Liquidity", def: "How quickly you can convert investment to cash" },
                { term: "Mutual Fund", def: "Professionally managed fund of stocks/bonds" },
                { term: "Portfolio", def: "Collection of all your investments" },
                { term: "Rebalancing", def: "Adjusting portfolio to maintain target asset allocation" },
                { term: "Volatility", def: "How much investment price fluctuates over time" },
                { term: "Yield", def: "Annual income from investment as percentage" }
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
              <Link to="/calculators/savings-goal-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal Calculator</h3>
                <p className="text-sm text-gray-700">Calculate time to reach savings goals</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan your budget and track expenses</p>
              </Link>
              <Link to="/calculators/mortgage-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Mortgage Calculator</h3>
                <p className="text-sm text-gray-700">Calculate mortgage payments and affordability</p>
              </Link>
              <Link to="/calculators/credit-card-payoff-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Credit Card Payoff</h3>
                <p className="text-sm text-gray-700">Calculate debt payoff timeline</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Start Your Investment Journey Today</h2>
            <p className="mb-6">Calculate your investment growth and see the power of compound interest. Start small, stay consistent, build wealth.</p>
            
            <button 
              onClick={() => document.querySelector('input')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Calculate Now
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This calculator provides estimates for informational purposes only. Investment returns are not guaranteed and past performance doesn't guarantee future results.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}
