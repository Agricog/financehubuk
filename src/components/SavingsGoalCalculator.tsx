import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SavingsGoalCalculatorPage() {
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
  }, [])

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
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Use our free savings goal calculator to discover how long it takes to reach your financial goals based on your target amount, current savings, and monthly contributions.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Savings Goal (£)</label>
                <input type="number" placeholder="e.g., 10000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Current Savings (£)</label>
                  <input type="number" placeholder="e.g., 2000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly Savings (£)</label>
                  <input type="number" placeholder="e.g., 500" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Interest Rate (% p.a.)</label>
                <input type="number" placeholder="e.g., 5.25" step="0.01" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>

              <button className="w-full bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition mt-6">
                Calculate Savings Timeline
              </button>
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
            
            <button 
              onClick={() => document.querySelector('input')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Calculate Now
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This tool provides estimates for informational purposes only. Actual savings timelines depend on interest rates, inflation, and market conditions.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}
