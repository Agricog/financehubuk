import { useState } from 'react'
import { ArrowLeft, Home, Calculator as CalcIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CalculationResult {
  maxBorrowLow: number
  maxBorrowHigh: number
  monthlyPaymentLow: number
  monthlyPaymentHigh: number
  totalRepaymentLow: number
  totalRepaymentHigh: number
}

export default function MortgageCalculator() {
  const [income, setIncome] = useState('')
  const [deposit, setDeposit] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculate = () => {
    const annualIncome = parseFloat(income)
    const depositAmount = parseFloat(deposit)

    if (!annualIncome || !depositAmount || annualIncome <= 0 || depositAmount <= 0) {
      alert('Please enter valid income and deposit amounts')
      return
    }

    // UK mortgage calculations (4x and 4.5x income multiples)
    const maxBorrowLow = annualIncome * 4
    const maxBorrowHigh = annualIncome * 4.5

    // Calculate with average UK mortgage rate (assume 5% for example)
    const interestRate = 0.05
    const years = 25
    const monthlyRate = interestRate / 12
    const numberOfPayments = years * 12

    // Monthly payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const monthlyPaymentLow =
      (maxBorrowLow * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const monthlyPaymentHigh =
      (maxBorrowHigh * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalRepaymentLow = monthlyPaymentLow * numberOfPayments
    const totalRepaymentHigh = monthlyPaymentHigh * numberOfPayments

    setResult({
      maxBorrowLow,
      maxBorrowHigh,
      monthlyPaymentLow,
      monthlyPaymentHigh,
      totalRepaymentLow,
      totalRepaymentHigh,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
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
          Back to All Calculators
        </Link>

        {/* Calculator Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mortgage Affordability Calculator</h1>
              <p className="text-gray-600">Calculate how much you can borrow for a mortgage in the UK</p>
            </div>
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Annual Income (£)
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="e.g. 40000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Deposit Amount (£)
              </label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
                placeholder="e.g. 25000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-primary-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition flex items-center justify-center gap-2"
          >
            <CalcIcon className="w-5 h-5" />
            Calculate Affordability
          </button>

          {/* Results */}
          {result && (
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Mortgage Affordability</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">You could borrow</p>
                  <p className="text-2xl font-bold text-primary-500">
                    {formatCurrency(result.maxBorrowLow)} - {formatCurrency(result.maxBorrowHigh)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Based on 4-4.5x your income</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Monthly payment (25 years)</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.monthlyPaymentLow)} - {formatCurrency(result.monthlyPaymentHigh)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">At 5% interest rate</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total repayment</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.totalRepaymentLow)} - {formatCurrency(result.totalRepaymentHigh)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Over 25 years</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Your deposit</p>
                  <p className="text-2xl font-bold text-green-600">{formatCurrency(parseFloat(deposit))}</p>
                  <p className="text-xs text-gray-500 mt-1">Initial payment</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SmartSuite Form */}
        {result && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Get Your Detailed Report</h2>
            <p className="text-gray-600 mb-6">
              Enter your details to receive a personalized mortgage report with lender recommendations.
            </p>
            <iframe
              src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=MortgageAffordability"
              width="100%"
              height="350"
              frameBorder="0"
              className="rounded-lg"
              title="SmartSuite Mortgage Inquiry Form"
            />
          </div>
        )}

        {/* Educational Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">How Mortgage Affordability Works in the UK</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Income Multiples Explained</h3>
              <p className="leading-relaxed">
                UK mortgage lenders typically offer between 4 and 4.5 times your annual gross income. This means if you
                earn £40,000 per year, you could potentially borrow between £160,000 and £180,000. Some specialist
                lenders may offer up to 5.5 times income for high earners or professionals in specific fields like
                medicine, law, or accounting. The exact multiple depends on your credit score, existing debts, and the
                lender's criteria.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Deposit Requirements</h3>
              <p className="leading-relaxed mb-3">
                While it's possible to get a mortgage with a 5% deposit, most lenders prefer at least 10% to offer
                better interest rates. The size of your deposit directly affects your loan-to-value (LTV) ratio, which
                determines the interest rate you'll pay:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>5-10% deposit:</strong> Limited lender options, higher interest rates (typically 4.5-6%)
                </li>
                <li>
                  <strong>10-15% deposit:</strong> More lender choices, moderate rates (typically 4-5%)
                </li>
                <li>
                  <strong>20%+ deposit:</strong> Best rates available, widest lender selection (typically 3.5-4.5%)
                </li>
                <li>
                  <strong>40%+ deposit:</strong> Premium rates and exclusive mortgage products
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Affordability Assessments</h3>
              <p className="leading-relaxed mb-3">
                Lenders don't just look at your income. They conduct comprehensive affordability checks that include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Monthly expenses (bills, food, transport, childcare)</li>
                <li>Existing credit commitments (loans, credit cards, car finance)</li>
                <li>Number of dependents</li>
                <li>Employment stability and type (employed, self-employed, contractor)</li>
                <li>Stress testing - can you afford payments if rates rise by 3%?</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Tips to Maximize Your Borrowing Power</h3>
              <p className="leading-relaxed mb-3">
                Want to increase how much you can borrow? Here are proven strategies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Reduce existing debts:</strong> Pay off credit cards and loans to improve your
                  debt-to-income ratio
                </li>
                <li>
                  <strong>Improve your credit score:</strong> Check your credit report, fix errors, register to vote
                </li>
                <li>
                  <strong>Save a larger deposit:</strong> Every extra 5% deposit can unlock better rates
                </li>
                <li>
                  <strong>Apply jointly:</strong> A partner's income can significantly boost borrowing capacity
                </li>
                <li>
                  <strong>Consider a longer term:</strong> 30-35 year mortgages lower monthly payments (but cost more
                  overall)
                </li>
                <li>
                  <strong>Explore Help to Buy schemes:</strong> Government initiatives like Shared Ownership can help
                  first-time buyers
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Additional Costs to Budget For</h3>
              <p className="leading-relaxed mb-3">
                Beyond the deposit and monthly mortgage payments, factor in these costs:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Stamp Duty:</strong> Tax on property purchases (first-time buyers exempt up to £425,000)
                </li>
                <li>
                  <strong>Solicitor fees:</strong> £800-£1,500 for conveyancing
                </li>
                <li>
                  <strong>Survey costs:</strong> £300-£1,000 depending on survey type
                </li>
                <li>
                  <strong>Mortgage arrangement fee:</strong> £0-£2,000 (sometimes added to mortgage)
                </li>
                <li>
                  <strong>Moving costs:</strong> £500-£1,500 for removal services
                </li>
                <li>
                  <strong>Buildings insurance:</strong> Mandatory, typically £200-£500/year
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                How much can I borrow for a mortgage in the UK?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most UK lenders will lend between 4 and 4.5 times your annual gross income. For example, if you earn
                £50,000, you could typically borrow £200,000-£225,000. Some lenders offer up to 5.5 times income for
                high earners or specific professions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">What deposit do I need for a mortgage?</h3>
              <p className="text-gray-700 leading-relaxed">
                The minimum deposit is typically 5% of the property value, but 10-20% deposits unlock better interest
                rates and more lender options. First-time buyers should aim for at least 10% to access competitive
                rates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Does my credit score affect mortgage affordability?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, significantly. A good credit score (700+) can help you access better rates and higher income
                multiples. Poor credit (below 600) may limit your options to specialist lenders with higher rates or
                require larger deposits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I get a mortgage if I'm self-employed?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely. Self-employed applicants typically need 2-3 years of accounts or tax returns. Lenders
                calculate affordability based on average net profit after expenses. Some lenders specialize in
                self-employed mortgages and may be more flexible.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What's the difference between Agreement in Principle and a mortgage offer?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                An Agreement in Principle (AIP) is a quick initial check showing how much a lender might offer you. A
                full mortgage offer comes after a detailed application and property valuation. The AIP helps when making
                offers on properties, but it's not a guarantee.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Should I fix my mortgage rate or go variable?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fixed rates provide payment certainty for 2-5 years, protecting you from rate rises. Variable rates
                (tracker or standard variable) can be lower initially but may increase. Most buyers opt for 2 or 5-year
                fixes for stability during the early years of homeownership.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I use gifted deposits from family?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, most lenders accept gifted deposits from immediate family. You'll need a signed gifted deposit
                letter confirming it's a gift (not a loan) and proof of the donor's funds. This is common for
                first-time buyers receiving help from parents.
              </p>
            </div>
          </div>
        </div>

        {/* FCA / information-only disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500 text-center">
          <p>
            FinanceHubUK provides tools and information for general guidance only. The results from this calculator
            are estimates and do not constitute personal advice or a recommendation.
          </p>
          <p className="mt-2">
            FinanceHubUK is not authorised by the Financial Conduct Authority (FCA) to provide regulated financial
            advice. You should consider speaking to a regulated mortgage adviser or lender before making any
            borrowing decisions.
          </p>
          <p className="mt-2">
            Lender criteria, rates and products can change at short notice and may differ from the examples shown.
          </p>
        </div>
      </div>
    </div>
  )
}

