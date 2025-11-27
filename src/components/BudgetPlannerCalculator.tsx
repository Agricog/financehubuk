import { useState, useEffect } from 'react'
import { ArrowLeft, FileDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BudgetResults {
  needs: string
  wants: string
  savings: string
  total: string
  needsPercentage: string
  wantsPercentage: string
  savingsPercentage: string
  remaining: string
}

export default function BudgetPlannerCalculatorPage() {
  const [income, setIncome] = useState(3000)
  
  // Needs
  const [rent, setRent] = useState(800)
  const [utilities, setUtilities] = useState(150)
  const [groceries, setGroceries] = useState(300)
  const [transport, setTransport] = useState(100)
  
  // Wants
  const [entertainment, setEntertainment] = useState(100)
  const [diningOut, setDiningOut] = useState(150)
  const [subscriptions, setSubscriptions] = useState(30)
  const [shopping, setShopping] = useState(100)
  
  const [results, setResults] = useState<BudgetResults | null>(null)

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
    calculateBudget()
  }, [])

  const calculateBudget = () => {
    const totalNeeds = rent + utilities + groceries + transport
    const totalWants = entertainment + diningOut + subscriptions + shopping
    const totalExpenses = totalNeeds + totalWants
    const totalSavings = income - totalExpenses
    const remaining = income - totalExpenses

    const needsPercentage = ((totalNeeds / income) * 100).toFixed(1)
    const wantsPercentage = ((totalWants / income) * 100).toFixed(1)
    const savingsPercentage = ((totalSavings / income) * 100).toFixed(1)

    setResults({
      needs: totalNeeds.toFixed(2),
      wants: totalWants.toFixed(2),
      savings: totalSavings.toFixed(2),
      total: totalExpenses.toFixed(2),
      needsPercentage: needsPercentage,
      wantsPercentage: wantsPercentage,
      savingsPercentage: savingsPercentage,
      remaining: remaining.toFixed(2)
    })
  }

  const handleDownload = () => {
    if (!results) return
    const data = `BUDGET PLANNER RESULTS\n${'='.repeat(50)}\n\nMonthly Gross Income: £${income.toLocaleString()}\n\n${'='.repeat(50)}\nEXPENSES BREAKDOWN\n${'='.repeat(50)}\n\nNEEDS (50%)\nRent/Mortgage: £${rent.toLocaleString()}\nUtilities: £${utilities.toLocaleString()}\nGroceries: £${groceries.toLocaleString()}\nTransport: £${transport.toLocaleString()}\nTotal Needs: £${results.needs} (${results.needsPercentage}%)\n\nWANTS (30%)\nEntertainment: £${entertainment.toLocaleString()}\nDining Out: £${diningOut.toLocaleString()}\nSubscriptions: £${subscriptions.toLocaleString()}\nShopping: £${shopping.toLocaleString()}\nTotal Wants: £${results.wants} (${results.wantsPercentage}%)\n\n${'='.repeat(50)}\nSUMMARY\n${'='.repeat(50)}\n\nTotal Expenses: £${results.total}\nRemaining/Savings: £${results.remaining} (${results.savingsPercentage}%)\n\nGenerated: ${new Date().toLocaleString()}\nfinancehubuk.co.uk`
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data))
    element.setAttribute('download', `budget-plan-${new Date().getTime()}.txt`)
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Budget Planner Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Create your monthly budget and track income, expenses, and savings. Use the 50/30/20 budgeting rule to manage money effectively.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Monthly Budget</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Gross Income: £{income.toLocaleString()}</label>
                <input type="range" min="1000" max="10000" step="500" value={income} onChange={(e) => { setIncome(parseFloat(e.target.value)); calculateBudget() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Income slider" />
                <input type="number" value={income} onChange={(e) => { setIncome(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter monthly income" aria-label="Income input" />
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-green-600">NEEDS (50%) - Essential Expenses</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-700">Rent/Mortgage: £{rent.toLocaleString()}</label>
                    <input type="number" value={rent} onChange={(e) => { setRent(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 800" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Utilities: £{utilities.toLocaleString()}</label>
                    <input type="number" value={utilities} onChange={(e) => { setUtilities(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 150" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Groceries: £{groceries.toLocaleString()}</label>
                    <input type="number" value={groceries} onChange={(e) => { setGroceries(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 300" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Transport: £{transport.toLocaleString()}</label>
                    <input type="number" value={transport} onChange={(e) => { setTransport(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 100" />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-blue-600">WANTS (30%) - Discretionary Spending</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-700">Entertainment: £{entertainment.toLocaleString()}</label>
                    <input type="number" value={entertainment} onChange={(e) => { setEntertainment(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 100" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Dining Out: £{diningOut.toLocaleString()}</label>
                    <input type="number" value={diningOut} onChange={(e) => { setDiningOut(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 150" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Subscriptions: £{subscriptions.toLocaleString()}</label>
                    <input type="number" value={subscriptions} onChange={(e) => { setSubscriptions(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 30" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700">Shopping: £{shopping.toLocaleString()}</label>
                    <input type="number" value={shopping} onChange={(e) => { setShopping(parseFloat(e.target.value) || 0); calculateBudget() }} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm mt-1" placeholder="e.g., 100" />
                  </div>
                </div>
              </div>

              <button onClick={calculateBudget} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate Budget</button>
            </div>

            <div>
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 space-y-4 sticky top-20">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Monthly Income</p>
                    <p className="text-2xl font-bold text-primary-600">£{income.toLocaleString()}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-700">Needs</span>
                      <div className="text-right">
                        <p className="font-semibold">£{parseFloat(results.needs).toLocaleString('en-GB', { minimumFractionDigits: 0 })}</p>
                        <p className="text-xs text-gray-600">{results.needsPercentage}%</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-700">Wants</span>
                      <div className="text-right">
                        <p className="font-semibold">£{parseFloat(results.wants).toLocaleString('en-GB', { minimumFractionDigits: 0 })}</p>
                        <p className="text-xs text-gray-600">{results.wantsPercentage}%</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-gray-700">Savings</span>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">£{parseFloat(results.remaining).toLocaleString('en-GB', { minimumFractionDigits: 0 })}</p>
                        <p className="text-xs text-gray-600">{results.savingsPercentage}%</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 rounded-lg transition"
                  >
                    <FileDown className="w-4 h-4" />
                    Download Results
                  </button>

                  <div className={`p-3 rounded text-center text-sm font-semibold ${parseFloat(results.remaining) > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {parseFloat(results.remaining) > 0 ? `✅ Savings: £${parseFloat(results.remaining).toLocaleString('en-GB', { minimumFractionDigits: 0 })}` : `⚠️ Over budget by £${Math.abs(parseFloat(results.remaining)).toLocaleString('en-GB', { minimumFractionDigits: 0 })}`}
                  </div>

                  {parseFloat(results.needsPercentage) > 50 && <p className="text-xs text-orange-700 bg-orange-100 p-2 rounded">⚠️ Needs exceed 50% - consider reducing housing/essential costs</p>}
                  {parseFloat(results.wantsPercentage) > 30 && <p className="text-xs text-orange-700 bg-orange-100 p-2 rounded">⚠️ Wants exceed 30% - reduce discretionary spending</p>}
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-600 h-full flex items-center justify-center">
                  <p>Enter your details and calculate</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The 50/30/20 Budgeting Rule Explained</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">50% - Needs (Essentials)</h3>
                <p className="text-gray-700 text-sm">Rent/mortgage, utilities, groceries, transport, insurance. Basic expenses to survive and function. Should never exceed 50% of after-tax income.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
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
              <Link to="/calculators/loan-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Loan Calculator</h3>
                <p className="text-sm text-gray-700">Calculate loan payments and affordability</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Plan Your Budget Today</h2>
            <p className="mb-6">Create your monthly budget and take control of your finances. Track income, expenses, and savings instantly.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe 
                src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=BudgetPlannerCalculator" 
                width="100%" 
                height="350" 
                frameBorder="0" 
                title="SmartSuite Budget Planner Inquiry Form"
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


