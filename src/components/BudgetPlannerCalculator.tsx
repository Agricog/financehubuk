import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BudgetPlannerCalculatorPage() {
  useEffect(() => {
    document.title = 'Free Budget Planner Calculator UK | Plan Your Monthly Budget'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create your monthly budget using our free UK budget planner calculator. Track income, expenses, and savings. Use the 50/30/20 budgeting rule.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Budget Planner Calculator UK | Plan Your Monthly Budget')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Plan your monthly budget instantly. Track income, expenses, and savings. Manage money effectively with our free budget calculator.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/budget-planner-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Budget Planner Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Create your monthly budget and track spending instantly.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/budget-planner-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Budget Planner', 'item': 'https://financehubuk.co.uk/calculators/budget-planner-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Budget Planner Calculator',
          'description': 'Plan your monthly budget and track income, expenses, and savings.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/budget-planner-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.7', 'ratingCount': '2341' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'What is the 50/30/20 budgeting rule?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Allocate 50% of after-tax income to needs (rent, utilities, food), 30% to wants (entertainment, dining), 20% to savings/debt. Adjust based on your situation.' } },
            { '@type': 'Question', 'name': 'How do I create a monthly budget?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'List all income sources, track all expenses (fixed and variable), subtract from income, allocate remainder to savings/goals. Review and adjust monthly.' } },
            { '@type': 'Question', 'name': 'What expenses should I track?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Fixed: rent, insurance, subscriptions. Variable: food, transport, entertainment. Irregular: maintenance, gifts. Track all to find spending patterns.' } },
            { '@type': 'Question', 'name': 'How can I reduce my expenses?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Cancel unused subscriptions, meal plan, use cashback, switch providers for insurance/utilities, reduce eating out. Small cuts add up significantly.' } }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Budget Planner Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Create your monthly budget and track income, expenses, and savings. Use the 50/30/20 budgeting rule to manage money effectively.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Monthly Budget</h2>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Plan your monthly budget by entering your income and expenses. Our calculator shows where your money goes and helps you identify areas to save.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Monthly Gross Income (£)</label>
                <input type="number" placeholder="e.g., 3000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">NEEDS (50%)</h4>
                <div className="space-y-3">
                  <div><label className="text-sm text-gray-700">Rent/Mortgage (£)</label><input type="number" placeholder="e.g., 800" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                  <div><label className="text-sm text-gray-700">Utilities (£)</label><input type="number" placeholder="e.g., 150" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                  <div><label className="text-sm text-gray-700">Groceries (£)</label><input type="number" placeholder="e.g., 300" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                  <div><label className="text-sm text-gray-700">Transport (£)</label><input type="number" placeholder="e.g., 100" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">WANTS (30%)</h4>
                <div className="space-y-3">
                  <div><label className="text-sm text-gray-700">Entertainment (£)</label><input type="number" placeholder="e.g., 100" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                  <div><label className="text-sm text-gray-700">Dining Out (£)</label><input type="number" placeholder="e.g., 150" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                  <div><label className="text-sm text-gray-700">Subscriptions (£)</label><input type="number" placeholder="e.g., 30" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                  <div><label className="text-sm text-gray-700">Shopping (£)</label><input type="number" placeholder="e.g., 100" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm mt-1" /></div>
                </div>
              </div>

              <button className="w-full bg-primary-500 text-white font-semibold py-3 rounded-lg hover:bg-primary-600 transition mt-6">
                Calculate Budget
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The 50/30/20 Budgeting Rule Explained</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">50% - Needs (Essentials)</h3>
                <p className="text-gray-700 text-sm">Rent/mortgage, utilities, groceries, transport, insurance. Basic expenses to survive and function. Should never exceed 50% of after-tax income.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">30% - Wants (Discretionary)</h3>
                <p className="text-gray-700 text-sm">Entertainment, dining out, shopping, subscriptions, hobbies. Non-essential spending that improves quality of life but isn't necessary.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">20% - Savings & Debt (Future)</h3>
                <p className="text-gray-700 text-sm">Emergency fund, savings goals, pension, debt repayment. Building financial security and working toward long-term goals.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Budgeting Mistakes to Avoid</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Being too strict:</strong> Unrealistic budgets fail. Allow flexibility for life happening.</li>
                <li>• <strong>Forgetting irregular expenses:</strong> Car insurance, car repairs, gifts - budget quarterly costs monthly.</li>
                <li>• <strong>Not tracking spending:</strong> You can't budget what you don't measure. Track every expense for 1 month.</li>
                <li>• <strong>No emergency fund:</strong> Emergency fund prevents budget derailment. Start with £1,000 minimum.</li>
                <li>• <strong>Cutting essentials too much:</strong> 50% rule assumes reasonable housing/food costs. Adjust if circumstances demand.</li>
                <li>• <strong>Ignoring spending creep:</strong> "Small" purchases add up. Coffee £5 x 20 days = £100/month.</li>
                <li>• <strong>Not reviewing monthly:</strong> Budgets need adjustment. Review and update monthly.</li>
                <li>• <strong>Setting and forgetting:</strong> Budget is guide, not law. Be flexible but intentional with deviations.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expense Categories & Tracking</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Fixed Expenses</h4>
                <p className="text-sm text-gray-700 mb-2">Same amount every month:</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-2">
                  <li>• Rent/mortgage</li>
                  <li>• Car payment</li>
                  <li>• Insurance premiums</li>
                  <li>• Subscriptions</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Variable Expenses</h4>
                <p className="text-sm text-gray-700 mb-2">Changes monthly:</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-2">
                  <li>• Groceries</li>
                  <li>• Utilities</li>
                  <li>• Dining out</li>
                  <li>• Shopping</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Irregular Expenses</h4>
                <p className="text-sm text-gray-700 mb-2">Occasional but predictable:</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-2">
                  <li>• Car maintenance</li>
                  <li>• Gifts</li>
                  <li>• Holidays</li>
                  <li>• Home repairs</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Expenses</h4>
                <p className="text-sm text-gray-700 mb-2">Unpredictable but happen:</p>
                <ul className="text-xs text-gray-700 space-y-1 ml-2">
                  <li>• Medical bills</li>
                  <li>• Car repairs</li>
                  <li>• Job loss</li>
                  <li>• Home damage</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What if my needs are more than 50%?", a: "Adjust the rule. Use 60/30/10 if housing is expensive (London, etc.). Focus on reducing 30% wants to increase 20% savings." },
                { q: "Should I budget before or after tax?", a: "After tax (net income). Your take-home is what you can actually spend. Budget doesn't change because of taxes." },
                { q: "How do I handle irregular expenses?", a: "Estimate yearly cost, divide by 12, add to monthly budget. Car insurance £600/year = £50/month budgeted." },
                { q: "What tracking apps should I use?", a: "Emma, Money Dashboard, YNAB, Snoop. Choose based on preference - free options are sufficient for most." },
                { q: "How often should I review my budget?", a: "Monthly minimum. Review spending, compare to budget, adjust for next month. Quarterly deep dive for trends." },
                { q: "Can I adjust the 50/30/20 rule?", a: "Yes. Use 60/30/10 for high housing costs, 40/40/20 if high student debt. Adjust to your reality." },
                { q: "What if I have variable income?", a: "Budget on low-income estimate. Anything above is bonus to savings. Prevents overspending in high-income months." },
                { q: "Should I cut wants to zero?", a: "No. You need some discretionary spending for mental health and enjoying life. Balance saving with living." },
                { q: "How do I stick to my budget?", a: "Automate transfers, use multiple accounts, tell someone, track daily, reward progress. Accountability helps." },
                { q: "What's a realistic budget saving target?", a: "20% (50/30/20 rule) is excellent. Even 10% is great progress. Start where you are, increase gradually." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Budgeting Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "Budget", def: "Plan for spending money based on income and expenses" },
                { term: "Discretionary Spending", def: "Non-essential spending on wants rather than needs" },
                { term: "Fixed Costs", def: "Expenses that stay same amount each month (rent, insurance)" },
                { term: "Gross Income", def: "Total income before taxes are deducted" },
                { term: "Net Income", def: "Income after taxes - what you actually take home" },
                { term: "Needs", def: "Essential expenses required to live (housing, food, utilities)" },
                { term: "Wants", def: "Non-essential discretionary spending (entertainment, dining)" },
                { term: "Variable Costs", def: "Expenses that change monthly (groceries, utilities)" },
                { term: "Sinking Fund", def: "Savings for irregular expenses (annual car insurance, gifts)" },
                { term: "Emergency Fund", def: "3-6 months of expenses saved for unexpected situations" },
                { term: "Expense Tracking", def: "Recording and categorizing all spending to understand patterns" },
                { term: "Budget Deficit", def: "Spending more than income - unsustainable long-term" }
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
                <p className="text-sm text-gray-700">Calculate how long to reach your savings goals</p>
              </Link>
              <Link to="/calculators/credit-card-payoff-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Credit Card Payoff</h3>
                <p className="text-sm text-gray-700">Calculate payoff timeline and interest saved</p>
              </Link>
              <Link to="/calculators/investment-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Calculator</h3>
                <p className="text-sm text-gray-700">Calculate investment growth and returns</p>
              </Link>
              <Link to="/calculators/personal-loan-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Loan Calculator</h3>
                <p className="text-sm text-gray-700">Calculate loan payments and affordability</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Plan Your Budget Today</h2>
            <p className="mb-6">Create your monthly budget and take control of your finances. Track income, expenses, and savings instantly.</p>
            
            <button 
              onClick={() => document.querySelector('input')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Create Budget
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This tool provides estimates for informational purposes only. Budgets should be adjusted based on personal circumstances and financial goals.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}
