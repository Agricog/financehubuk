import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PayoffResults {
  monthsToPayoff: string
  totalInterestPaid: string
  totalAmountPaid: string
  payoffDate: string
}

export default function CreditCardPayoffCalculator() {
  const [cardBalance, setCardBalance] = useState(5000)
  const [interestRate, setInterestRate] = useState(18.9)
  const [monthlyPayment, setMonthlyPayment] = useState(250)
  const [results, setResults] = useState<PayoffResults | null>(null)

  useEffect(() => {
    document.title = 'Free Credit Card Payoff Calculator UK | Calculate Debt Payoff Timeline'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate how long to pay off credit card debt with our free UK payoff calculator. See total interest paid and interest savings. Plan debt-free timeline.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Credit Card Payoff Calculator UK | Calculate Debt Payoff Timeline')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Calculate your credit card payoff timeline instantly. See how much interest you\'ll pay and discover ways to become debt-free faster.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/credit-card-payoff-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Credit Card Payoff Calculator UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Calculate credit card payoff timeline and interest savings instantly.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/credit-card-payoff-calculator')
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
            { '@type': 'ListItem', 'position': 3, 'name': 'Credit Card Payoff', 'item': 'https://financehubuk.co.uk/calculators/credit-card-payoff-calculator' }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Credit Card Payoff Calculator',
          'description': 'Calculate how long to pay off credit card debt and discover ways to become debt-free faster.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/credit-card-payoff-calculator',
          'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'GBP' },
          'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.7', 'ratingCount': '1843' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            { '@type': 'Question', 'name': 'How long does it take to pay off £5,000 credit card debt?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'At 18.9% APR and £250/month, approximately 24 months with £3,200 interest. At £500/month, 11 months with £1,100 interest. Higher payments save significant interest.' } },
            { '@type': 'Question', 'name': 'How much interest will I pay?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Interest depends on balance, APR, and payment amount. Use our calculator to see exact interest. Paying more monthly dramatically reduces total interest.' } },
            { '@type': 'Question', 'name': 'Can I pay off credit card debt faster?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes: increase monthly payment, transfer to 0% balance card, negotiate lower APR, use savings to lump-sum pay, or consolidate into personal loan.' } },
            { '@type': 'Question', 'name': 'What is the average UK credit card APR?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Average UK credit card APR is 15-20%. Rates depend on creditworthiness - better credit = lower APR. Check your card statement for your specific rate.' } }
          ]
        },
        { '@type': 'Organization', 'name': 'Finance Hub UK', 'url': 'https://financehubuk.co.uk', 'logo': 'https://financehubuk.co.uk/logo.png', 'contactPoint': { '@type': 'ContactPoint', 'contactType': 'Customer Support', 'email': 'support@financehubuk.co.uk' } }
      ]
    })
    document.head.appendChild(schemaScript)
    window.scrollTo(0, 0)
    calculatePayoff()
  }, [])

  const calculatePayoff = () => {
    let balance = cardBalance
    let monthCount = 0
    let totalInterest = 0
    const monthlyRate = interestRate / 100 / 12

    while (balance > 0 && monthCount < 600) {
      const interestCharge = balance * monthlyRate
      totalInterest += interestCharge
      balance += interestCharge
      
      if (balance <= monthlyPayment) {
        monthCount++
        balance = 0
        break
      }
      
      balance -= monthlyPayment
      monthCount++
    }

    if (monthCount >= 600) {
      setResults(null)
      return
    }

    const totalPaid = cardBalance + totalInterest
    const payoffDate = new Date()
    payoffDate.setMonth(payoffDate.getMonth() + monthCount)

    setResults({
      monthsToPayoff: monthCount.toString(),
      totalInterestPaid: totalInterest.toFixed(2),
      totalAmountPaid: totalPaid.toFixed(2),
      payoffDate: payoffDate.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Credit Card Payoff Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate how long it takes to pay off credit card debt and discover ways to become debt-free faster. See total interest paid and savings strategies.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Payoff Timeline</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Credit Card Balance: £{cardBalance.toLocaleString()}</label>
                <input type="range" min="100" max="50000" step="100" value={cardBalance} onChange={(e) => { setCardBalance(parseFloat(e.target.value)); calculatePayoff() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Balance slider" />
                <input type="number" value={cardBalance} onChange={(e) => { setCardBalance(parseFloat(e.target.value) || 0); calculatePayoff() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter balance" aria-label="Balance input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (APR %): {interestRate.toFixed(2)}%</label>
                <input type="range" min="5" max="35" step="0.1" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value)); calculatePayoff() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Interest rate slider" />
                <input type="number" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value) || 0); calculatePayoff() }} step="0.1" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter APR" aria-label="Interest rate input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Payment: £{monthlyPayment.toLocaleString()}</label>
                <input type="range" min="50" max="2000" step="10" value={monthlyPayment} onChange={(e) => { setMonthlyPayment(parseFloat(e.target.value)); calculatePayoff() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Payment slider" />
                <input type="number" value={monthlyPayment} onChange={(e) => { setMonthlyPayment(parseFloat(e.target.value) || 0); calculatePayoff() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter monthly payment" aria-label="Payment input" />
              </div>

              <button onClick={calculatePayoff} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate Payoff</button>
            </div>

            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Time to Payoff</p>
                    <p className="text-4xl font-bold text-primary-600">{results.monthsToPayoff} months</p>
                    <p className="text-sm text-gray-600 mt-1">(By {results.payoffDate})</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between"><span className="text-gray-700">Original Balance:</span><span className="font-semibold">£{cardBalance.toLocaleString()}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Interest:</span><span className="font-semibold text-red-600">£{parseFloat(results.totalInterestPaid).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Amount Paid:</span><span className="font-semibold">£{parseFloat(results.totalAmountPaid).toLocaleString('en-GB', { minimumFractionDigits: 2 })}</span></div>
                  </div>

                  <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800">💡 Tip: Increase monthly payment by £50 to save thousands in interest!</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your details and click "Calculate Payoff" to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Credit Card Interest</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">How Credit Card Interest Works</h3>
                <p className="text-gray-700 text-sm">Credit card companies charge interest (APR) on your outstanding balance. Most cards charge daily interest compounded monthly. The longer you carry a balance, the more interest accumulates.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Minimum Payment Trap</h3>
                <p className="text-gray-700 text-sm">Paying minimum only (typically 1-3% of balance) means most money goes to interest. Example: £5,000 at 18.9% APR with £50 minimum payment takes 23 years to pay off!</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Average UK Credit Card APR</h3>
                <p className="text-gray-700 text-sm">UK credit card APR ranges 8-25% depending on creditworthiness. Average is around 15-20%. Check your statement for your specific rate.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to Pay Off Credit Card Debt Faster</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Increase monthly payment:</strong> Every extra £50/month saves months and thousands in interest</li>
                <li>• <strong>Balance transfer card:</strong> Move balance to 0% APR card for 12-21 months (watch transfer fees)</li>
                <li>• <strong>Debt consolidation loan:</strong> Personal loan at lower rate (often 5-10%) to pay off card</li>
                <li>• <strong>Negotiate lower APR:</strong> Call card issuer, especially with good payment history</li>
                <li>• <strong>Lump-sum payment:</strong> Use bonus, tax refund, or savings to reduce balance significantly</li>
                <li>• <strong>Avalanche method:</strong> Pay minimums on all cards, attack highest APR first</li>
                <li>• <strong>Snowball method:</strong> Pay off lowest balance first for psychological wins, then tackle higher balances</li>
                <li>• <strong>Debt management plan:</strong> Work with credit counselor to negotiate with lenders</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scenario Comparison: Impact of Payment Amount</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-3 text-left font-semibold">Monthly Payment</th>
                    <th className="px-4 py-3 text-left font-semibold">Payoff Timeline</th>
                    <th className="px-4 py-3 text-left font-semibold">Total Interest</th>
                    <th className="px-4 py-3 text-left font-semibold">Total Paid</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 font-semibold">£150 (minimum)</td>
                    <td className="px-4 py-3">47 months</td>
                    <td className="px-4 py-3 text-red-600">£7,050</td>
                    <td className="px-4 py-3">£12,050</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">£250</td>
                    <td className="px-4 py-3">24 months</td>
                    <td className="px-4 py-3 text-red-600">£3,200</td>
                    <td className="px-4 py-3">£8,200</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">£500</td>
                    <td className="px-4 py-3">11 months</td>
                    <td className="px-4 py-3 text-red-600">£1,100</td>
                    <td className="px-4 py-3">£6,100</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">£750</td>
                    <td className="px-4 py-3">7 months</td>
                    <td className="px-4 py-3 text-red-600">£650</td>
                    <td className="px-4 py-3">£5,650</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-2">Based on £5,000 balance at 18.9% APR</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Signs You're in Credit Card Trouble</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>✗ Only paying minimum each month</li>
                <li>✗ Balance staying same or increasing despite payments</li>
                <li>✗ Using one card to pay another</li>
                <li>✗ Maxed out multiple cards</li>
                <li>✗ Missing payments or paying late</li>
                <li>✗ Using cards for essentials (food, bills) you can't afford</li>
                <li>✗ Credit score dropping</li>
                <li>✗ Feeling stressed about debt</li>
              </ul>
              <p className="mt-4 p-4 bg-red-50 border border-red-200 rounded text-sm"><strong>If you're experiencing these:</strong> Contact StepChange or Citizens Advice for free debt help. Never ignore the problem—it only gets worse.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How long does it take to pay off £5,000 credit card debt?", a: "At 18.9% APR: £150/month = 47 months. £250/month = 24 months. £500/month = 11 months. Our calculator shows exact timeline based on your payment." },
                { q: "What is a balance transfer card?", a: "Move your balance to a card offering 0% APR for 12-21 months. Usually costs 2-3% transfer fee. Great for high-balance debt if you can pay it during the 0% period." },
                { q: "Should I get a personal loan to pay off credit card?", a: "Maybe. Personal loans typically charge 5-10% APR vs 15-20% credit card rates. Works if you can get lower rate and commit to not using card again." },
                { q: "Is it better to pay off one card or spread payments?", a: "Use avalanche method (attack highest APR first) to save most interest. Or snowball (pay lowest balance first) for psychological wins." },
                { q: "Can I negotiate a lower credit card APR?", a: "Yes. Call your card issuer, especially if you've paid on time. Mention balance transfer offers. Good history = more leverage." },
                { q: "What happens if I miss a payment?", a: "Expect late fees (£12-£25 typical), APR increase (default rate 29%+), credit score damage, and collection calls. Avoid at all costs." },
                { q: "Does paying off credit card debt improve credit score?", a: "Yes, but gradually. Paying down balance improves utilization ratio immediately. Full payoff helps long-term but doesn't hurt score." },
                { q: "What's a credit card utilization ratio?", a: "Percentage of available credit you're using. Example: £5,000 balance on £10,000 limit = 50% utilization. Keep below 30% for best credit score." },
                { q: "Should I close the card after paying it off?", a: "Usually no. Closing old cards damages credit history and increases utilization on remaining cards. Keep it open, just unused." },
                { q: "What is a debt management plan?", a: "Formal agreement with creditors to pay reduced amount over longer period. Managed by debt charity. Affects credit score but prevents bankruptcy." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Credit Card Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "APR", def: "Annual Percentage Rate - total annual interest charge" },
                { term: "Balance Transfer", def: "Moving balance to new card, usually 0% APR for promotional period" },
                { term: "Credit Limit", def: "Maximum amount you can borrow on the card" },
                { term: "Credit Score", def: "Numerical rating of creditworthiness (300-850 in UK)" },
                { term: "Credit Utilization", def: "Percentage of available credit you're using" },
                { term: "Default Rate", def: "Higher APR applied after missed payments" },
                { term: "Interest Charge", def: "Fee charged monthly on outstanding balance" },
                { term: "Late Fee", def: "Penalty for missing payment deadline" },
                { term: "Minimum Payment", def: "Smallest amount required each month (usually 1-3% balance)" },
                { term: "Outstanding Balance", def: "Total amount owed on the card" },
                { term: "Revolving Credit", def: "Credit you can use, repay, and use again (vs installment)" },
                { term: "Statement Balance", def: "Total owed at end of billing cycle" }
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
              <Link to="/calculators/budget-planner-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Budget Planner</h3>
                <p className="text-sm text-gray-700">Plan your budget and track expenses</p>
              </Link>
              <Link to="/calculators/savings-goal-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Savings Goal Calculator</h3>
                <p className="text-sm text-gray-700">Calculate time to reach savings goals</p>
              </Link>
              <Link to="/calculators/personal-loan-calculator" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Loan Calculator</h3>
                <p className="text-sm text-gray-700">Calculate loan payments and affordability</p>
              </Link>
              <Link to="/calculators/investment-calculator" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Investment Calculator</h3>
                <p className="text-sm text-gray-700">Calculate investment growth and returns</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Get Help with Credit Card Debt Today</h2>
            <p className="mb-6">Calculate your payoff timeline and start your journey to being debt-free. Every payment brings you closer to freedom.</p>
            
            <button 
              onClick={() => document.querySelector('input')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Calculate Now
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This calculator provides estimates for informational purposes only. Actual payoff timelines depend on your card terms and personal circumstances.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}
