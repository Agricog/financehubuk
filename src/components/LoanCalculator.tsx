import { useState } from 'react'
import { ArrowLeft, CreditCard, Calculator as CalcIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CalculationResult {
  monthlyPayment: number
  totalRepayment: number
  totalInterest: number
  loanAmount: number
}

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [result, setResult] = useState<CalculationResult | null>(null)

  const calculate = () => {
    const principal = parseFloat(loanAmount)
    const annualRate = parseFloat(interestRate)
    const years = parseFloat(loanTerm)

    if (!principal || !annualRate || !years || principal <= 0 || annualRate < 0 || years <= 0) {
      alert('Please enter valid loan amount, interest rate, and term')
      return
    }

    const monthlyRate = annualRate / 100 / 12
    const numberOfPayments = years * 12

    // Monthly payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalRepayment = monthlyPayment * numberOfPayments
    const totalInterest = totalRepayment - principal

    setResult({
      monthlyPayment,
      totalRepayment,
      totalInterest,
      loanAmount: principal,
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
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
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Personal Loan Calculator</h1>
              <p className="text-gray-600">Calculate monthly payments and total loan cost</p>
            </div>
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Loan Amount (£)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g. 10000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Interest Rate (% APR)
              </label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="e.g. 8.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Loan Term (years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                placeholder="e.g. 5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-primary-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition flex items-center justify-center gap-2"
          >
            <CalcIcon className="w-5 h-5" />
            Calculate Loan Payments
          </button>

          {/* Results */}
          {result && (
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Loan Breakdown</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Monthly Payment</p>
                  <p className="text-3xl font-bold text-primary-500">
                    {formatCurrency(result.monthlyPayment)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Fixed for {loanTerm} years</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total Repayment</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatCurrency(result.totalRepayment)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Over {loanTerm} years</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                  <p className="text-2xl font-bold text-red-600">
                    {formatCurrency(result.totalInterest)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Cost of borrowing</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Loan Amount</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(result.loanAmount)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Principal borrowed</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Representative APR:</strong> The actual rate you receive may vary based on your credit
                  score, income, and lender criteria. Rates shown are illustrative.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* SmartSuite Form */}
        {result && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Find Your Best Loan Rate</h2>
            <p className="text-gray-600 mb-6">
              Get personalized loan quotes from top UK lenders. Compare rates and find the best deal for your situation.
            </p>
            <iframe
              src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false"
              width="100%"
              height="600px"
              frameBorder="0"
              className="rounded-lg"
            />
          </div>
        )}

        {/* Educational Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Understanding Personal Loans in the UK</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What is a Personal Loan?</h3>
              <p className="leading-relaxed">
                A personal loan is an unsecured loan that allows you to borrow a fixed amount of money (typically
                £1,000 to £50,000) and repay it in fixed monthly installments over a set period (usually 1-7 years).
                Unlike secured loans, personal loans don't require collateral, but interest rates are typically higher
                as a result. They're commonly used for debt consolidation, home improvements, car purchases, weddings,
                or unexpected expenses.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How Personal Loan Interest Rates Work</h3>
              <p className="leading-relaxed mb-3">
                Personal loan interest rates in the UK vary significantly based on several factors:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Credit Score:</strong> Excellent credit (750+) can secure rates from 3-6% APR, while poor
                  credit may see rates of 15-30% APR or higher
                </li>
                <li>
                  <strong>Loan Amount:</strong> Larger loans (£15,000+) often get better rates than smaller loans
                </li>
                <li>
                  <strong>Loan Term:</strong> Shorter terms (1-3 years) typically have lower APRs than longer terms
                  (5-7 years)
                </li>
                <li>
                  <strong>Employment Status:</strong> Permanent employees usually get better rates than self-employed
                  or contractors
                </li>
                <li>
                  <strong>Income Level:</strong> Higher, stable income improves your rate eligibility
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Comparing Personal Loan Providers</h3>
              <p className="leading-relaxed mb-3">
                The UK personal loan market is competitive. Here's what to compare:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>High Street Banks:</strong> Nationwide, Santander, HSBC - typically 4-10% APR for good credit
                </li>
                <li>
                  <strong>Online Lenders:</strong> Zopa, Oakbrook, Lending Works - competitive rates 3-8% APR
                </li>
                <li>
                  <strong>Credit Unions:</strong> Local credit unions - rates capped at 3% per month (42.6% APR)
                </li>
                <li>
                  <strong>Peer-to-Peer:</strong> Funding Circle, RateSetter - variable rates based on risk profile
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Personal Loan vs Other Borrowing Options
              </h3>
              <p className="leading-relaxed mb-3">Understanding when a personal loan is the right choice:</p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <strong className="block mb-2">Personal Loan (3-10% APR)</strong>
                  <p className="text-sm">
                    Best for: Large purchases, debt consolidation, planned expenses. Fixed rates, predictable payments,
                    no collateral required.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <strong className="block mb-2">0% Credit Card (0% for 12-30 months)</strong>
                  <p className="text-sm">
                    Best for: Purchases you can pay off within the 0% period. No interest if cleared in time, but high
                    rates (20-30%) after promo ends.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <strong className="block mb-2">Secured Loan (2-6% APR)</strong>
                  <p className="text-sm">
                    Best for: Homeowners needing large amounts (£25,000+). Lower rates but your home is at risk if you
                    can't repay.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <strong className="block mb-2">Overdraft (20-40% APR)</strong>
                  <p className="text-sm">
                    Best for: Short-term cash flow gaps only. Very expensive for sustained borrowing.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Tips for Getting the Best Loan Rate</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Check your credit score first:</strong> Use free services like ClearScore, Experian, or
                  Equifax before applying
                </li>
                <li>
                  <strong>Improve your credit:</strong> Pay down existing debts, fix credit report errors, register to
                  vote
                </li>
                <li>
                  <strong>Borrow only what you need:</strong> Larger loans get better rates, but don't overborrow
                </li>
                <li>
                  <strong>Shorter terms save money:</strong> A 3-year loan costs less overall than a 5-year loan, even
                  if monthly payments are higher
                </li>
                <li>
                  <strong>Use soft search tools:</strong> Check rates without affecting your credit score through
                  eligibility checkers
                </li>
                <li>
                  <strong>Consider guarantor loans:</strong> If you have poor credit, a guarantor can help you access
                  better rates
                </li>
                <li>
                  <strong>Read the fine print:</strong> Watch for early repayment fees, arrangement fees, and late
                  payment charges
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Warning Signs of Problem Loans</h3>
              <p className="leading-relaxed mb-3">Avoid these predatory lending practices:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-red-700">
                <li>APR above 50% (likely a high-cost short-term loan or payday loan)</li>
                <li>Upfront fees before loan approval</li>
                <li>Pressure to borrow more than you need</li>
                <li>Lenders not authorized by the FCA (Financial Conduct Authority)</li>
                <li>Unclear terms or hidden fees</li>
                <li>Loans offered without credit checks (often scams or illegal lenders)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Personal Loan FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What credit score do I need for a personal loan?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most lenders require a minimum credit score of 580-600, but for the best rates (3-6% APR), you'll need
                a score of 700+. Scores below 580 may qualify for guarantor loans or secured loans instead.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                How long does it take to get a personal loan?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Online lenders can approve and transfer funds within 24 hours. Traditional banks typically take 3-5
                business days. Complex applications or those requiring additional documentation may take up to 2 weeks.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I pay off my personal loan early?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, but some lenders charge early repayment fees (typically 1-2 months' interest). Under UK law,
                you're entitled to partial refunds on interest if you repay early. Always check your loan agreement for
                early repayment terms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Will applying for a loan affect my credit score?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Soft credit checks (eligibility checks) don't affect your score. Hard credit checks (formal
                applications) create a temporary dip of 5-10 points. Multiple applications in a short period can
                significantly harm your score, so use comparison sites to check eligibility first.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What's the maximum I can borrow with a personal loan?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most UK lenders offer personal loans between £1,000 and £50,000. The exact amount depends on your
                income, credit score, and existing debts. As a rule, lenders cap borrowing at 3-4 times your annual
                income.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Is debt consolidation with a personal loan a good idea?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It can be if the loan APR is lower than your current debts (credit cards at 20-30% APR). Consolidating
                multiple debts into one fixed monthly payment simplifies budgeting. However, extending the term may
                cost more overall despite lower monthly payments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What happens if I miss a loan payment?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Missing a payment triggers late fees (typically £10-£30), damages your credit score, and may lead to
                default notices if repeated. Contact your lender immediately if you're struggling - many offer payment
                holidays or restructuring options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
