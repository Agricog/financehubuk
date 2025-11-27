import { useState, useEffect } from 'react'
import { ArrowLeft, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SavingsResult {
  monthsNeeded: string
  yearsNeeded: string
  totalWithInterest: string
  totalInterestEarned: string
}

export default function SavingsGoalCalculatorPage() {
  const [savingsGoal, setSavingsGoal] = useState(10000)
  const [currentSavings, setCurrentSavings] = useState(2000)
  const [monthlySavings, setMonthlySavings] = useState(500)
  const [interestRate, setInterestRate] = useState(5.25)
  const [results, setResults] = useState<SavingsResult | null>(null)

  useEffect(() => {
    document.title = 'Free Savings Goal Calculator UK | Calculate How Long to Save'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate how long it takes to save for your goals. Free UK savings goal calculator shows timeline and monthly amounts needed. Houses, cars, holidays & more.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Savings Goal Calculator UK | Calculate How Long to Save')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Discover how long it takes to save for your goals. Plan house deposits, car purchases, holidays, and more with our free calculator.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/savings-goal-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Savings Goal Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Calculate how long to save for your goals. Plan your financial future.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/savings-goal-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Savings Goal Calculator', 'item': 'https://financehubuk.co.uk/calculators/savings-goal-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Savings Goal Calculator',
          'description': 'Calculate how long it takes to save for your goals and plan your savings strategy.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/savings-goal-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'ratingCount': '1256' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'How long will it take me to save £10,000?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Depends on your monthly savings rate. Saving £250/month takes 40 months (3.3 years). Saving £500/month takes 20 months. Use our calculator to find your exact timeline.' } },
            { '@type': 'Question', 'name': 'What is the 50/30/20 rule for savings?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Allocate 50% income to needs, 30% to wants, 20% to savings/debt. This helps balance spending and saving goals. Adjust based on your circumstances.' } },
            { '@type': 'Question', 'name': 'Should I put money in savings or investments?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Savings for short-term goals (under 3 years), investments for long-term (5+ years). Savings accounts are safe, investments offer better returns but carry risk.' } },
            { '@type': 'Question', 'name': 'How much should I save each month?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Financial advisors recommend 10-20% of gross income. Start with what you can afford and increase over time. Even £50/month adds up.' } }
          ]
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
    calculateGoal()
  }, [])

  const calculateGoal = () => {
    let balance = currentSavings
    const monthlyRate = interestRate / 100 / 12
    let months = 0

    while (balance < savingsGoal && months < 600) {
      balance = balance * (1 + monthlyRate) + monthlySavings
      months++
    }

    const years = (months / 12).toFixed(1)
    const totalWithInterest = balance.toFixed(2)
    const totalInterestEarned = (balance - currentSavings - (monthlySavings * months)).toFixed(2)

    setResults({
      monthsNeeded: months.toString(),
      yearsNeeded: years,
      totalWithInterest: totalWithInterest,
      totalInterestEarned: totalInterestEarned
    })
  }

  const handleDownload = () => {
    if (!results) return
    const data = `SAVINGS GOAL CALCULATOR RESULTS\n${'='.repeat(50)}\n\nSavings Goal: £${savingsGoal.toLocaleString()}\nCurrent Savings: £${currentSavings.toLocaleString()}\nMonthly Savings: £${monthlySavings.toLocaleString()}\nInterest Rate: ${interestRate}% p.a.\n\n${'='.repeat(50)}\nRESULTS\n${'='.repeat(50)}\n\nMonths to Reach Goal: ${results.monthsNeeded}\nYears to Reach Goal: ${results.yearsNeeded}\nTotal Saved: £${(currentSavings + (monthlySavings * parseInt(results.monthsNeeded))).toLocaleString()}\nInterest Earned: £${results.totalInterestEarned}\nTotal Amount: £${results.totalWithInterest}\n\nGenerated: ${new Date().toLocaleString()}\nfinancehubuk.co.uk`
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
    element.setAttribute('download', `savings-goal-calculation-${new Date().getTime()}.txt`)
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Savings Goal Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate how long it takes to save for your goals. Plan house deposits, car purchases, holidays, and more with our free calculator.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Savings Timeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Savings Goal: £{savingsGoal.toLocaleString()}</label>
                <input type="range" min="1000" max="500000" step="5000" value={savingsGoal} onChange={(e) => { setSavingsGoal(parseFloat(e.target.value)); calculateGoal() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Savings goal slider" />
                <input type="number" value={savingsGoal} onChange={(e) => { setSavingsGoal(parseFloat(e.target.value) || 0); calculateGoal() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter savings goal" aria-label="Savings goal input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Current Savings: £{currentSavings.toLocaleString()}</label>
                <input type="range" min="0" max={savingsGoal * 0.5} step="1000" value={currentSavings} onChange={(e) => { setCurrentSavings(parseFloat(e.target.value)); calculateGoal() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Current savings slider" />
                <input type="number" value={currentSavings} onChange={(e) => { setCurrentSavings(parseFloat(e.target.value) || 0); calculateGoal() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter current savings" aria-label="Current savings input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Savings: £{monthlySavings.toLocaleString()}</label>
                <input type="range" min="50" max="5000" step="50" value={monthlySavings} onChange={(e) => { setMonthlySavings(parseFloat(e.target.value)); calculateGoal() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Monthly savings slider" />
                <input type="number" value={monthlySavings} onChange={(e) => { setMonthlySavings(parseFloat(e.target.value) || 0); calculateGoal() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter monthly savings" aria-label="Monthly savings input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (% p.a.): {interestRate.toFixed(2)}%</label>
                <input type="range" min="0" max="10" step="0.25" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value)); calculateGoal() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Interest rate slider" />
                <input type="number" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value) || 0); calculateGoal() }} step="0.01" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter interest rate" aria-label="Interest rate input" />
              </div>

              <button onClick={calculateGoal} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate Savings Timeline</button>
            </div>

            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Time to Reach Goal</p>
                    <p className="text-4xl font-bold text-primary-600">{results.monthsNeeded} months</p>
                    <p className="text-lg text-gray-700 mt-1">≈ {results.yearsNeeded} years</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between"><span className="text-gray-700">Savings Goal:</span><span className="font-semibold">£{savingsGoal.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Current Savings:</span><span className="font-semibold">£{currentSavings.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Monthly Contribution:</span><span className="font-semibold">£{monthlySavings.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Saved:</span><span className="font-semibold">£{(currentSavings + (monthlySavings * parseInt(results.monthsNeeded))).toLocaleString('en-GB', { minimumFractionDigits: 0 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Interest Earned:</span><span className="font-semibold text-green-600">£{parseFloat(results.totalInterestEarned).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                  </div>

                  <button 
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 rounded-lg transition"
                  >
                    <FileDown className="w-4 h-4" />
                    Download Results
                  </button>

                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800">✅ You'll reach your goal in {results.yearsNeeded} years with consistent savings!</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your savings details and click "Calculate Savings Timeline"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Savings Goals in the UK</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">House Deposit (£50,000-£100,000)</h3>
                <p className="text-gray-700 text-sm">Saving £600/month takes 83-167 months (7-14 years) without interest. Many first-time buyers take 5-10 years to save deposit.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Car Purchase (£15,000-£25,000)</h3>
                <p className="text-gray-700 text-sm">Saving £500/month takes 30-50 months (2.5-4 years). Feasible short-term goal for many savers.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Fund (£3,000-£5,000)</h3>
                <p className="text-gray-700 text-sm">Quick goal achievable in 6-10 months at £500/month. Financial advisors recommend 3-6 months expenses.</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Holiday (£3,000-£5,000)</h3>
                <p className="text-gray-700 text-sm">Achievable in 3-6 months with dedicated savings. Popular goal for mid-year or Christmas holidays.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Saving Strategies That Work</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Automate transfers:</strong> Set up standing orders to savings account on payday - "pay yourself first"</li>
                <li>• <strong>Use high-interest savings:</strong> ISAs (tax-free up to £20,000), notice accounts, fixed-rate bonds</li>
                <li>• <strong>Round-up apps:</strong> Apps like Chip round purchases and save spare change automatically</li>
                <li>• <strong>Cut expenses:</strong> Reduce subscriptions, meal plan, use cashback - redirect savings to goal</li>
                <li>• <strong>Increase income:</strong> Side gigs, overtime, freelance work accelerate goal timeline</li>
                <li>• <strong>Challenge yourself:</strong> 52-week challenge (save £1 week 1, £2 week 2, etc. = £1,378 total)</li>
                <li>• <strong>Use sinking funds:</strong> Separate savings buckets for each goal (Christmas fund, holiday fund, car fund)</li>
                <li>• <strong>Track progress:</strong> Visual reminders (chart, jar) keep you motivated</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best UK Savings Accounts for Goal Savers</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">ISA (Individual Savings Account)</h4>
                <p className="text-sm text-gray-700">Save up to £20,000/year tax-free. Interest paid without tax. Best for long-term goals over 5 years.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Fixed-Rate Bond</h4>
                <p className="text-sm text-gray-700">Lock money for 1-5 years at guaranteed rate (currently 4-5%). No access until maturity. Great for specific timelines.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Notice Account</h4>
                <p className="text-sm text-gray-700">Access money with 30-90 day notice. Current rates 4-4.5%. Flexibility + decent returns.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Regular Savings Account</h4>
                <p className="text-sm text-gray-700">Bonus interest for monthly deposits (often 5-7%). Great for automated savings habits.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How much should I save monthly to reach my goal?", a: "Divide goal by months available. Want £10,000 in 2 years? Save £417/month. Add buffer for lower-income months." },
                { q: "What if I can't reach my goal on time?", a: "Extend timeline, increase monthly savings, or find additional income. Even small increases accelerate progress." },
                { q: "Should I prioritize savings or debt repayment?", a: "Generally pay high-interest debt (credit cards 20%+) first. Low-interest debt (mortgages 4-5%) can be managed alongside savings." },
                { q: "Is it better to save lump sums or regular amounts?", a: "Regular monthly savings builds discipline and compound interest. Lump sums (bonuses) accelerate goals significantly." },
                { q: "How do I avoid dipping into my savings?", a: "Use separate account you can't easily access. Don't link debit card. Set transfers as standing orders." },
                { q: "What interest rates can I get right now?", a: "Currently 4-5% on savings accounts, 4-5.5% on fixed bonds. Rates change - check comparison sites for best current rates." },
                { q: "Can I use investments instead of savings?", a: "For 5+ year goals, yes. Stocks, bonds, funds average 6-8% annually but carry volatility risk. 3-5 years, use savings." },
                { q: "How does inflation affect my savings goal?", a: "Inflation erodes purchasing power. £10,000 buys less in 5 years. Target 5-10% more to offset inflation." },
                { q: "Should I have multiple savings goals?", a: "Yes - emergency fund first (3-6 months expenses), then short-term (under 3 years), then long-term (5+ years)." },
                { q: "What's the fastest way to save £5,000?", a: "Automate £625/month for 8 months. Or save £714/month for 7 months. Cut non-essentials, sell unused items." }
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
                { term: "Premium Bonds", def: "NS&I investment where you don't earn interest but enter monthly draws for prizes" },
                { term: "Principal", def: "Original amount deposited - interest calculated on this" },
                { term: "Sinking Fund", def: "Separate savings bucket for specific goals (holiday fund, car fund, etc.)" },
                { term: "Term", def: "Length of time money is locked in savings/bonds" },
                { term: "Variable Rate", def: "Interest rate changes based on market conditions - can go up or down" },
                { term: "Yield", def: "Return on investment expressed as percentage of amount saved" }
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
              <Link to="/calculators/mortgage-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Mortgage Calculator</h3>
                <p className="text-sm text-gray-700">Calculate mortgage affordability and payments</p>
              </Link>
              <Link to="/calculators/budget-planner-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan monthly budget and track spending</p>
              </Link>
              <Link to="/calculators/investment-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Calculator</h3>
                <p className="text-sm text-gray-700">Calculate investment returns and growth</p>
              </Link>
              <Link to="/calculators/loan-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Loan Calculator</h3>
                <p className="text-sm text-gray-700">Calculate loan payments and affordability</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Start Saving Towards Your Goals Today</h2>
            <p className="mb-6">Use our free savings goal calculator to plan your financial future and discover how long it takes to reach your targets.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe 
                src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=SavingsGoalCalculator" 
                width="100%" 
                height="350" 
                frameBorder="0" 
                title="SmartSuite Savings Goal Inquiry Form"
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
            advice. You should consider speaking to a regulated financial advisor or lender before making any
            financial decisions.
          </p>
          <p className="mt-2">
            Lender criteria, rates and products can change at short notice and may differ from the examples shown.
          </p>
        </div>
      </div>
    </div>
  )
}


