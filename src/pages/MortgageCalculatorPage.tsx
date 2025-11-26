import { useState } from 'react'
import { ArrowLeft, Download, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function MortgageCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(250000)
  const [deposit, setDeposit] = useState(50000)
  const [interestRate, setInterestRate] = useState(5)
  const [loanTerm, setLoanTerm] = useState(25)
  const [results, setResults] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Free UK Mortgage Calculator 2025 | Calculate Monthly Payments & Interest'
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Free UK mortgage calculator with accurate monthly payment estimates. Calculate mortgage affordability, interest rates, and total repayment costs. Instant results for first-time buyers and remortgages.')
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free UK Mortgage Calculator 2025 - Calculate Monthly Payments & Interest')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Calculate your monthly mortgage payments instantly. Free, accurate UK mortgage calculator with affordability guide for first-time buyers and remortgages.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/mortgage-calculator-og.jpg')

    // Set Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free UK Mortgage Calculator 2025')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Get instant estimates for mortgage payments and affordability checks.')

    // Add schema markup (FAQPage + HowTo)
    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How much deposit do I need for a UK mortgage?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Most UK lenders require a minimum deposit of 5-10% of the property value. However, a larger deposit (15-20%) typically secures better interest rates and reduces your monthly payments. A 25%+ deposit unlocks the best deals.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How much can I borrow?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Lenders typically allow borrowing of 4–4.5 times your annual gross income, subject to affordability checks. Use our calculator to get a personalized estimate based on your deposit and income.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What\'s the average UK mortgage rate in 2025?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Fixed rates typically range 4.5–5.5%; variable rates 5–6%. Rates depend on lender, deposit size, credit score, and market conditions. Always compare multiple offers.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Are mortgage calculators accurate?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Calculators provide accurate estimates based on standard formulas, but actual terms depend on your lender, credit score, and personal circumstances. Use results as a guide, not a guarantee.'
              }
            }
          ]
        },
        {
          '@type': 'HowTo',
          'name': 'How to Use the Mortgage Calculator',
          'step': [
            {
              '@type': 'HowToStep',
              'name': 'Enter Property Price',
              'text': 'Input the total purchase price of the property you\'re considering. Use the slider or enter manually.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Enter Deposit Amount',
              'text': 'Specify how much deposit you have available. This will calculate your loan-to-value (LTV) ratio.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Enter Interest Rate',
              'text': 'Input the current mortgage interest rate. Current UK rates are typically 4.5-5.5% for fixed-rate mortgages.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Set Loan Term',
              'text': 'Specify how many years you want to borrow for. Standard terms are 15-30 years.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Click Calculate',
              'text': 'Click the Calculate button to see your monthly payment, total interest, and complete breakdown.'
            }
          ]
        },
        {
          '@type': 'Organization',
          'name': 'Finance Hub UK',
          'url': 'https://financehubuk.co.uk',
          'logo': 'https://financehubuk.co.uk/logo.png',
          'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'Customer Support',
            'email': 'support@financehubuk.co.uk'
          }
        }
      ]
    })
    document.head.appendChild(schemaScript)
    
    window.scrollTo(0, 0)
    calculateMortgage()
  }, [])

  const calculateMortgage = () => {
    const loanAmount = propertyPrice - deposit
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    if (monthlyRate === 0) {
      const monthlyPayment = loanAmount / numberOfPayments
      const totalPaid = monthlyPayment * numberOfPayments
      const totalInterest = 0
      
      setResults({
        monthlyPayment: monthlyPayment.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        totalPaid: totalPaid.toFixed(2),
        ltvRatio: ((loanAmount / propertyPrice) * 100).toFixed(1),
        loanAmount: loanAmount.toFixed(2)
      })
      return
    }

    const monthlyPayment = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    const totalPaid = monthlyPayment * numberOfPayments
    const totalInterest = totalPaid - loanAmount

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      ltvRatio: ((loanAmount / propertyPrice) * 100).toFixed(1),
      loanAmount: loanAmount.toFixed(2)
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    // Send to SmartSuite
    try {
      const response = await fetch('https://api.smartsuite.com/records/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SMARTSUITE_API_KEY}`,
        },
        body: JSON.stringify({
          application_id: process.env.REACT_APP_SMARTSUITE_APP_ID,
          table_id: process.env.REACT_APP_SMARTSUITE_TABLE_ID,
          fields: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            calculator_type: 'Mortgage Calculator',
            property_price: propertyPrice,
            deposit: deposit,
            interest_rate: interestRate,
            loan_term: loanTerm,
            monthly_payment: results?.monthlyPayment || 'N/A'
          }
        })
      })
      
      if (response.ok) {
        setFormSubmitted(true)
        setFormData({ name: '', email: '', phone: '' })
        setTimeout(() => setFormSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Free UK Mortgage Calculator 2025
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your monthly mortgage payments, total interest, and affordability instantly. Accurate estimates for first-time buyers, remortgaging, and property investment.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Mortgage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="space-y-6">
              {/* Property Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Price: £{propertyPrice.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="10000"
                  value={propertyPrice}
                  onChange={(e) => {
                    setPropertyPrice(parseFloat(e.target.value))
                    calculateMortgage()
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  aria-label="Property price slider"
                />
                <input
                  type="number"
                  value={propertyPrice}
                  onChange={(e) => {
                    setPropertyPrice(parseFloat(e.target.value) || 0)
                    calculateMortgage()
                  }}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter property price"
                  aria-label="Property price input"
                />
              </div>

              {/* Deposit */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Deposit: £{deposit.toLocaleString()} ({((deposit/propertyPrice)*100).toFixed(1)}%)
                </label>
                <input
                  type="range"
                  min="0"
                  max={propertyPrice * 0.5}
                  step="5000"
                  value={deposit}
                  onChange={(e) => {
                    setDeposit(parseFloat(e.target.value))
                    calculateMortgage()
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  aria-label="Deposit slider"
                />
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => {
                    setDeposit(parseFloat(e.target.value) || 0)
                    calculateMortgage()
                  }}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter deposit amount"
                  aria-label="Deposit input"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Interest Rate (Annual %): {interestRate.toFixed(2)}%
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => {
                    setInterestRate(parseFloat(e.target.value))
                    calculateMortgage()
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  aria-label="Interest rate slider"
                />
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => {
                    setInterestRate(parseFloat(e.target.value) || 0)
                    calculateMortgage()
                  }}
                  step="0.1"
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter interest rate"
                  aria-label="Interest rate input"
                />
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Loan Term (Years): {loanTerm}
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => {
                    setLoanTerm(parseFloat(e.target.value))
                    calculateMortgage()
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  aria-label="Loan term slider"
                />
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => {
                    setLoanTerm(parseFloat(e.target.value) || 0)
                    calculateMortgage()
                  }}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter loan term in years"
                  aria-label="Loan term input"
                />
              </div>

              <button
                onClick={calculateMortgage}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Calculate
              </button>
            </div>

            {/* Results */}
            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Monthly Payment</p>
                    <p className="text-4xl font-bold text-primary-600">£{parseFloat(results.monthlyPayment).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Loan Amount:</span>
                      <span className="font-semibold">£{parseFloat(results.loanAmount).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Total Interest:</span>
                      <span className="font-semibold">£{parseFloat(results.totalInterest).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Total Cost:</span>
                      <span className="font-semibold">£{parseFloat(results.totalPaid).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">LTV Ratio:</span>
                      <span className="font-semibold">{results.ltvRatio}%</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your mortgage details and click "Calculate" to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Guide */}
        <div className="space-y-12">
          {/* How to Use */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Mortgage Calculator</h2>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Enter the property price</strong> (e.g., £250,000)</li>
              <li><strong>2. Enter your deposit amount</strong> (e.g., £50,000)</li>
              <li><strong>3. Select an interest rate</strong> (current UK rates: 4.5-5.5%)</li>
              <li><strong>4. Set your loan term</strong> (typically 25 years)</li>
              <li><strong>5. Click "Calculate"</strong> to see your monthly payment, total interest, and LTV ratio</li>
            </ol>
          </section>

          {/* Understanding Mortgage Payments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Mortgage Payments</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Principal and Interest Explained</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Principal:</strong> The money you borrow from the lender (property price minus deposit)</li>
                  <li><strong>Interest:</strong> The charge for borrowing, expressed as a percentage per year (e.g., 5%)</li>
                  <li><strong>Monthly Payment:</strong> Includes paying off both principal and interest each month</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Example Calculation</h4>
                <p className="text-gray-700">If you borrow £225,000 at 5% over 25 years:</p>
                <ul className="mt-3 space-y-1 text-gray-700 ml-4">
                  <li>✓ <strong>Monthly Payment:</strong> £1,315</li>
                  <li>✓ <strong>Total Interest Paid:</strong> £169,500</li>
                  <li>✓ <strong>Total Cost:</strong> £394,500</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mortgage Affordability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Affordability in the UK</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Income Multipliers</h3>
                <p>Typical lenders use 4–4.5× gross annual income to calculate maximum borrowing. For example:</p>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>• Earning £50,000/year → Can typically borrow £200,000-£225,000</li>
                  <li>• Earning £75,000/year → Can typically borrow £300,000-£337,500</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Deposit Requirements</h3>
                <ul className="space-y-2">
                  <li>• <strong>5-10% deposit:</strong> Minimum requirement, but fewer lenders available, higher rates</li>
                  <li>• <strong>15-20% deposit:</strong> Opens more options, better interest rates, lower fees</li>
                  <li>• <strong>25%+ deposit:</strong> Best rates, most favorable terms</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Stress Testing</h3>
                <p>Lenders now conduct "stress testing"—they check if you can still afford your mortgage if interest rates rise (e.g., if rates hit 7% instead of current 5%). This protects both you and the lender.</p>
              </div>
            </div>
          </section>

          {/* Types of UK Mortgages */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of UK Mortgages</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-700">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-3 text-left font-semibold">Mortgage Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                    <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Fixed-Rate</td>
                    <td className="px-4 py-3">Interest rate is locked for 2, 5, or 10 years</td>
                    <td className="px-4 py-3">Budgeting certainty, protection from rate rises</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Variable-Rate</td>
                    <td className="px-4 py-3">Rate can change (tracker, SVR)</td>
                    <td className="px-4 py-3">Accepting rate risk for potential savings</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Interest-Only</td>
                    <td className="px-4 py-3">Pay interest monthly, repay full principal at term end</td>
                    <td className="px-4 py-3">Buy-to-let investors, short-term ownership</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Offset</td>
                    <td className="px-4 py-3">Link savings account to mortgage, reduce interest</td>
                    <td className="px-4 py-3">Savers with high savings balances</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Interest Rates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Mortgage Interest Rates Work</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Fixed vs Variable Rates</h3>
                <ul className="space-y-2 ml-4">
                  <li><strong>Fixed rates:</strong> No change during the deal period (typically 2, 5, or 10 years). Your payment stays the same.</li>
                  <li><strong>Variable rates:</strong> Can change monthly or yearly. They often track the Bank of England base rate or the lender's Standard Variable Rate (SVR).</li>
                  <li><strong>Impact of rate changes:</strong> Every 1% interest rate increase costs approximately £90-100 per month extra on a £200,000 mortgage.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">How to Get the Best Mortgage Rate</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Improve your credit score (aim for 750+)</li>
                  <li>✓ Increase your deposit (15-20%+ unlocks better rates)</li>
                  <li>✓ Compare deals across multiple lenders</li>
                  <li>✓ Consider fixed-rate deals during rate volatility</li>
                  <li>✓ Use a mortgage broker for access to exclusive deals</li>
                </ul>
              </div>
            </div>
          </section>

          {/* First-Time Buyers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">First-Time Buyer Guide</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Government Support & Schemes</h3>
                <ul className="space-y-3">
                  <li><strong>Help to Buy Scheme:</strong> Government-backed loans for first-time buyers. Available in certain regions with lower deposit requirements.</li>
                  <li><strong>Shared Ownership:</strong> Buy a share of a home (25-75%) and pay rent on the rest. Great for lower budgets.</li>
                  <li><strong>Lifetime ISA (LISA):</strong> Save up to £4,000/year and get 25% government boost (£1,000/year max).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Costs to Budget For</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Solicitor fees:</strong> £1,000–£2,000</li>
                  <li>• <strong>Survey fees:</strong> £300–£800</li>
                  <li>• <strong>Valuation fees:</strong> £200–£700 (lender's valuation)</li>
                  <li>• <strong>Stamp Duty:</strong> 0% up to £425,000 (see Stamp Duty Calculator)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hidden Costs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mortgage Fees and Hidden Costs</h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold">Always budget for these costs beyond your monthly payment:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Arrangement fee:</strong> £0–£2,000 (one-off, often rolled into mortgage)</li>
                <li>• <strong>Valuation fee:</strong> £200–£700</li>
                <li>• <strong>Legal fees:</strong> £1,000–£2,000</li>
                <li>• <strong>Survey fees:</strong> £300–£800</li>
                <li>• <strong>Early repayment charges:</strong> Up to 5% on remortgage (if you switch lenders early)</li>
                <li>• <strong>Broker fees:</strong> 0.5-1% of mortgage amount (optional, if using a broker)</li>
              </ul>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How much deposit do I need for a UK mortgage?",
                  a: "Most lenders require a minimum deposit of 5-10% of the property value. However, larger deposits (15-20%) typically secure better interest rates and reduce your monthly payments. A 25%+ deposit unlocks the best deals."
                },
                {
                  q: "How much can I borrow?",
                  a: "Lenders typically allow borrowing of 4–4.5 times your annual gross income, subject to affordability checks. Use our calculator to get a personalized estimate based on your deposit and income."
                },
                {
                  q: "Can I get a mortgage with poor credit?",
                  a: "Yes, but with limitations. Poor credit means higher interest rates, smaller loans, and stricter terms. Improve your credit score before applying—even a 50-point increase can save you thousands in interest."
                },
                {
                  q: "How are monthly payments calculated?",
                  a: "Payments are calculated using an amortization formula based on: Principal (loan amount), interest rate (annual %), and loan term (years). Each payment gradually pays off both principal and interest."
                },
                {
                  q: "What's the average UK mortgage rate in 2025?",
                  a: "Fixed rates typically range 4.5–5.5%; variable rates 5–6%. Rates depend on lender, deposit size, credit score, and market conditions. Always compare multiple offers."
                },
                {
                  q: "What is LTV (Loan-to-Value)?",
                  a: "LTV is your loan amount divided by the property value (as a percentage). Lower LTV = better interest rates. Example: £180,000 loan on £250,000 property = 72% LTV."
                },
                {
                  q: "Can I repay my mortgage early?",
                  a: "Yes, most mortgages allow early repayment, but you may face early repayment charges (typically 1-5% of outstanding balance). Check your mortgage document for terms."
                },
                {
                  q: "What's an interest-only mortgage?",
                  a: "With interest-only mortgages, you pay only the interest each month. The full principal is due at the end of the term. Common for buy-to-let or short-term ownership."
                },
                {
                  q: "Are mortgage calculators accurate?",
                  a: "Calculators provide accurate estimates based on standard formulas, but actual terms depend on your lender, credit score, and personal circumstances. Use results as a guide, not a guarantee."
                },
                {
                  q: "Do I need life insurance for a mortgage?",
                  a: "Lenders won't require it, but it's highly recommended. Payment protection insurance (PPI) or life insurance ensures your family can pay the mortgage if you pass away or become unable to work."
                },
                {
                  q: "What is a tracker mortgage?",
                  a: "A tracker mortgage's interest rate 'tracks' the Bank of England base rate plus a lender margin. When base rates rise, so does your rate. Good if you expect rates to fall."
                },
                {
                  q: "How do I choose a lender?",
                  a: "Compare interest rates, fees, product flexibility, and customer reviews. Use comparison sites (MoneySuperMarket, Confused.com) or work with a mortgage broker for access to exclusive deals."
                },
                {
                  q: "How long does mortgage approval take?",
                  a: "Typically 1–4 weeks, depending on the lender and your circumstances. First-time buyers may take longer due to additional checks. Start the process early."
                },
                {
                  q: "Can self-employed people get mortgages?",
                  a: "Yes, but you'll need to provide 2-3 years of accounts, tax returns, and proof of business income. Some lenders are more flexible than others—shop around."
                },
                {
                  q: "What is APR?",
                  a: "APR (Annual Percentage Rate) includes the interest rate plus mandatory fees (arrangement, valuation, etc.). It gives a true picture of the annual cost of your mortgage."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Glossary */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Mortgage Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "APR", def: "Annual Percentage Rate—total annual cost of mortgage including interest plus fees" },
                { term: "Amortization", def: "Schedule showing how your loan is gradually repaid over the term" },
                { term: "Base Rate", def: "Bank of England's interest rate, which influences tracker mortgages" },
                { term: "Deposit", def: "Upfront payment you make toward property purchase (not borrowed)" },
                { term: "Fixed Rate", def: "Interest rate locked in for a set period (2-10 years)" },
                { term: "LTV", def: "Loan-to-Value ratio: mortgage ÷ property value, expressed as a percentage" },
                { term: "Offset Mortgage", def: "Your savings offset against mortgage balance to reduce interest" },
                { term: "Principal", def: "The amount of money you borrow" },
                { term: "SVR", def: "Standard Variable Rate—lender's default interest rate" },
                { term: "Tracker Mortgage", def: "Interest rate that 'tracks' Bank of England base rate plus margin" },
                { term: "Valuation", def: "Professional assessment of property value by surveyor" },
                { term: "Variable Rate", def: "Interest rate that can change during mortgage term" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.term}</h4>
                  <p className="text-sm text-gray-700">{item.def}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Calculators */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators & Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Stamp Duty Calculator</h3>
                <p className="text-sm text-gray-700">Calculate stamp duty tax on property purchase</p>
              </Link>
              <Link to="/calculators/loan-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Loan Calculator</h3>
                <p className="text-sm text-gray-700">Calculate monthly payments for personal loans</p>
              </Link>
              <Link to="/" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Mortgage Affordability Calculator</h3>
                <p className="text-sm text-gray-700">Find out how much you can borrow (coming soon)</p>
              </Link>
              <Link to="/" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Remortgage Calculator</h3>
                <p className="text-sm text-gray-700">Calculate savings from switching mortgages (coming soon)</p>
              </Link>
            </div>
          </section>

          {/* CTA Form */}
          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Get Expert Mortgage Advice</h2>
            <p className="mb-6">Connect with qualified mortgage advisors who can help you find the best deal for your situation.</p>
            
            {formSubmitted && (
              <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                ✓ Thank you! Your mortgage inquiry has been submitted. We'll contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <p className="text-sm mb-4">📧 Fill out the form below and we'll connect you with expert advisors:</p>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 rounded text-gray-900 placeholder-gray-600"
                  required
                  aria-label="Name"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 rounded text-gray-900 placeholder-gray-600"
                  required
                  aria-label="Email"
                />
                <input 
                  type="tel" 
                  placeholder="Your Phone (optional)" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 rounded text-gray-900 placeholder-gray-600"
                  aria-label="Phone"
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-primary-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Get Free Mortgage Quotes
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This calculator provides estimates for informational purposes only. Actual mortgage terms depend on your lender, credit profile, and personal circumstances.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}


 
