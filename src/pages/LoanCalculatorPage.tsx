import { useState } from 'react'
import { ArrowLeft, Download, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

interface LoanResults {
  monthlyPayment: string
  totalInterest: string
  totalPaid: string
  apr: string
}

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(10000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(5)
  const [results, setResults] = useState<LoanResults | null>(null)

  useEffect(() => {
    document.title = 'Personal Loan Calculator UK | Compare Loan Rates & Monthly Payments'
    window.scrollTo(0, 0)
    calculateLoan()
  }, [])

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    if (monthlyRate === 0) {
      const monthlyPayment = loanAmount / numberOfPayments
      const totalPaid = monthlyPayment * numberOfPayments
      
      setResults({
        monthlyPayment: monthlyPayment.toFixed(2),
        totalInterest: '0.00',
        totalPaid: totalPaid.toFixed(2),
        apr: interestRate.toFixed(2)
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
      apr: interestRate.toFixed(2)
    })

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_usage', {
        loan_amount: loanAmount,
        interest_rate: interestRate,
        loan_term: loanTerm,
        monthly_payment: monthlyPayment.toFixed(2)
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Personal Loan Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate your monthly loan payments, total interest, and APR instantly. Accurate estimates for personal loans, debt consolidation, and debt management.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Personal Loan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount: £{loanAmount.toLocaleString()}</label>
                <input type="range" min="1000" max="50000" step="1000" value={loanAmount} onChange={(e) => { setLoanAmount(parseFloat(e.target.value)); calculateLoan() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Loan amount slider" />
                <input type="number" value={loanAmount} onChange={(e) => { setLoanAmount(parseFloat(e.target.value) || 0); calculateLoan() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter loan amount" aria-label="Loan amount input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (Annual %): {interestRate.toFixed(2)}%</label>
                <input type="range" min="1" max="15" step="0.1" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value)); calculateLoan() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Interest rate slider" />
                <input type="number" value={interestRate} onChange={(e) => { setInterestRate(parseFloat(e.target.value) || 0); calculateLoan() }} step="0.1" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter interest rate" aria-label="Interest rate input" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term (Years): {loanTerm}</label>
                <input type="range" min="1" max="7" step="1" value={loanTerm} onChange={(e) => { setLoanTerm(parseFloat(e.target.value)); calculateLoan() }} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" aria-label="Loan term slider" />
                <input type="number" value={loanTerm} onChange={(e) => { setLoanTerm(parseFloat(e.target.value) || 0); calculateLoan() }} className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Enter loan term in years" aria-label="Loan term input" />
              </div>

              <button onClick={calculateLoan} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition">Calculate</button>
            </div>

            <div className="space-y-4">
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Monthly Payment</p>
                    <p className="text-4xl font-bold text-primary-600">£{parseFloat(results.monthlyPayment).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between"><span className="text-gray-700">Total Interest:</span><span className="font-semibold">£{parseFloat(results.totalInterest).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Total Cost:</span><span className="font-semibold">£{parseFloat(results.totalPaid).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">APR:</span><span className="font-semibold">{results.apr}%</span></div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition"><Share2 className="w-4 h-4" />Share</button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition"><Download className="w-4 h-4" />Download</button>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Enter your loan details and click "Calculate" to see results</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use This Personal Loan Calculator</h2>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Enter the loan amount</strong> (e.g., £10,000)</li>
              <li><strong>2. Enter the interest rate (APR)</strong> (current UK rates: 4.9%–10%)</li>
              <li><strong>3. Set your loan term</strong> (typically 1–7 years)</li>
              <li><strong>4. Click "Calculate"</strong> to see your monthly payment, total interest, and complete cost</li>
              <li><strong>5. Compare offers</strong> from multiple lenders using this estimate</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Personal Loan Payments</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How Monthly Payments Work</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Loan Amount:</strong> The principal you borrow (e.g., £10,000)</li>
                  <li><strong>Interest Rate (APR):</strong> The annual cost of borrowing, expressed as a percentage</li>
                  <li><strong>Loan Term:</strong> How many years you have to repay (e.g., 5 years = 60 payments)</li>
                  <li><strong>Monthly Payment:</strong> Fixed amount you pay each month until the loan is cleared</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Example Calculation</h4>
                <p className="text-gray-700">If you borrow £10,000 at 6.5% APR over 5 years:</p>
                <ul className="mt-3 space-y-1 text-gray-700 ml-4">
                  <li>✓ <strong>Monthly Payment:</strong> £197.53</li>
                  <li>✓ <strong>Total Interest Paid:</strong> £1,851.80</li>
                  <li>✓ <strong>Total Cost:</strong> £11,851.80</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Loan Rates in the UK</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What Affects Your Rate?</h3>
                <ul className="space-y-2">
                  <li>• <strong>Credit Score:</strong> 750+ scores unlock best rates; lower scores pay more</li>
                  <li>• <strong>Loan Amount:</strong> Larger loans sometimes get better rates</li>
                  <li>• <strong>Loan Term:</strong> Longer terms may have higher rates due to increased risk</li>
                  <li>• <strong>Employment Status:</strong> Self-employed borrowers may pay slightly more</li>
                  <li>• <strong>Debt-to-Income Ratio:</strong> Lenders assess your existing debts vs. income</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">2025 UK Personal Loan Rates</h3>
                <ul className="space-y-2">
                  <li>• <strong>Excellent Credit (750+):</strong> 4.9%–6.9%</li>
                  <li>• <strong>Good Credit (700–749):</strong> 6.9%–8.9%</li>
                  <li>• <strong>Fair Credit (650–699):</strong> 8.9%–11.9%</li>
                  <li>• <strong>Poor Credit (Below 650):</strong> 12%+</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Personal Loans</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-700">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-3 text-left font-semibold">Loan Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Description</th>
                    <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3 font-semibold">Unsecured Personal Loan</td>
                    <td className="px-4 py-3">No collateral required; based on creditworthiness</td>
                    <td className="px-4 py-3">General borrowing, home improvements, holidays</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Debt Consolidation Loan</td>
                    <td className="px-4 py-3">Combines multiple debts into one monthly payment</td>
                    <td className="px-4 py-3">Paying off credit cards, multiple loans</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Secured Personal Loan</td>
                    <td className="px-4 py-3">Backed by collateral (savings, vehicle); lower rates</td>
                    <td className="px-4 py-3">Large amounts, lower credit scores</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">Fixed vs Variable Rate</td>
                    <td className="px-4 py-3">Fixed = predictable; Variable = rate can change</td>
                    <td className="px-4 py-3">Fixed for budgeting certainty, Variable for short-term</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Debt Consolidation with Personal Loans</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">When Consolidation Makes Sense</h3>
                <ul className="space-y-2 ml-4">
                  <li>• You have multiple credit card debts at high interest (18%+)</li>
                  <li>• A personal loan rate is lower than your current debts</li>
                  <li>• You want to simplify payments into one monthly bill</li>
                  <li>• You can commit to not accumulating new debt</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Consolidation Example</h4>
                <p className="text-gray-700"><strong>Before:</strong> £3 credit cards at 18% = £180/month interest</p>
                <p className="text-gray-700"><strong>After:</strong> 1 personal loan at 7% = £58/month interest</p>
                <p className="text-gray-700 mt-2"><strong>Savings:</strong> £1,464/year in interest charges</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What is a personal loan?", a: "A personal loan is unsecured borrowing (typically £1,000–£50,000) from a bank or lender. You receive the money upfront and repay it over a fixed term (1–7 years) with interest." },
                { q: "What are current UK personal loan rates?", a: "Rates typically range 4.9%–15% depending on your credit score, loan amount, and lender. Excellent credit scores (750+) unlock rates around 4.9%–6.9%." },
                { q: "How is my monthly payment calculated?", a: "Monthly payments use an amortization formula: (Loan Amount × Monthly Rate) / (1 - (1 + Monthly Rate)^-Months). This ensures equal payments each month." },
                { q: "What's the difference between APR and interest rate?", a: "APR (Annual Percentage Rate) includes the interest rate plus all mandatory fees. Always compare APR between lenders, not just the interest rate." },
                { q: "Can I get a personal loan with poor credit?", a: "Yes, but rates will be higher (12%+). Options include: finding a guarantor, securing the loan with collateral, borrowing smaller amounts, or shortening the term." },
                { q: "How long does personal loan approval take?", a: "Most lenders decide within 24 hours. Full funding typically takes 3–7 days after approval. Some online lenders offer same-day decisions." },
                { q: "Is there a penalty for early repayment?", a: "Many lenders charge Early Repayment Fees (typically 1–2 months' interest). However, some UK lenders have removed these. Check the terms before borrowing." },
                { q: "Can I consolidate multiple debts with a personal loan?", a: "Yes. If your personal loan rate is lower than your existing debts, consolidation can save you money and simplify payments into one monthly bill." },
                { q: "What can I use a personal loan for?", a: "Personal loans are flexible: home improvements, holidays, car purchases, medical expenses, education, business expenses, or consolidating debt." },
                { q: "How much can I borrow?", a: "Most UK lenders offer £1,000–£50,000. The amount depends on: income, credit score, debt-to-income ratio, and employment status." },
                { q: "What happens if I miss a payment?", a: "Late payments damage your credit score and may trigger fees. Multiple missed payments lead to defaults. Contact your lender immediately if struggling." },
                { q: "Should I use a guarantor?", a: "A guarantor can help you secure better rates if your credit is poor. However, they're legally responsible for the debt if you default." },
                { q: "Are online personal loans safe?", a: "Yes, if the lender is FCA-regulated. Check the FCA register before applying. Avoid lenders offering guaranteed approval or requesting upfront fees." },
                { q: "Can self-employed people get personal loans?", a: "Yes, but you'll need to provide 2–3 years of accounts/tax returns. Some lenders are stricter with self-employed applicants." },
                { q: "What if I'm rejected for a loan?", a: "Build credit, reduce existing debt, improve income, or apply to lenders that accept lower credit scores. Avoid multiple applications quickly." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Personal Loan Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "APR", def: "Annual Percentage Rate—total annual cost including interest plus fees" },
                { term: "Amortization", def: "Schedule showing how your loan is gradually repaid over the term" },
                { term: "Collateral", def: "Asset pledged as security for a secured loan" },
                { term: "Credit Score", def: "Numerical rating based on your credit history; affects loan rates" },
                { term: "Debt-to-Income Ratio", def: "Your total monthly debt divided by gross income" },
                { term: "Default", def: "Failure to make payments; damages credit score" },
                { term: "Early Repayment Fee", def: "Penalty if you repay the loan early" },
                { term: "Fixed Rate", def: "Interest rate locked in for the entire loan term" },
                { term: "Guarantor", def: "Person who agrees to repay if you default" },
                { term: "Interest", def: "Cost of borrowing money, expressed as a percentage" },
                { term: "Principal", def: "The original loan amount borrowed" },
                { term: "Unsecured Loan", def: "Loan with no collateral required" }
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
                <p className="text-sm text-gray-700">Calculate mortgage payments and affordability</p>
              </Link>
              <Link to="/" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Stamp Duty Calculator</h3>
                <p className="text-sm text-gray-700">Calculate stamp duty tax on property purchase</p>
              </Link>
              <Link to="/" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Debt Consolidation Calculator</h3>
                <p className="text-sm text-gray-700">Compare consolidation savings (coming soon)</p>
              </Link>
              <Link to="/" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Credit Card Calculator</h3>
                <p className="text-sm text-gray-700">Calculate credit card interest and payoff time (coming soon)</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Get Expert Loan Advice</h2>
            <p className="mb-6">Connect with qualified financial advisors who can help you find the best personal loan deal for your situation.</p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <iframe src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false" width="100%" height="600" frameBorder="0" title="SmartSuite Loan Inquiry Form"></iframe>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This calculator provides estimates for informational purposes only. Actual loan terms depend on your lender, credit profile, and personal circumstances.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}



