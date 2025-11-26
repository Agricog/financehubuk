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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    console.log('LoanCalculatorPage mounted')
    document.title = 'Personal Loan Calculator UK'
    setMounted(true)
    calculateLoan()
  }, [])

  const calculateLoan = () => {
    console.log('calculateLoan called', { loanAmount, interestRate, loanTerm })
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    const monthlyPayment = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    const totalPaid = monthlyPayment * numberOfPayments
    const totalInterest = totalPaid - loanAmount

    const newResults = {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      apr: interestRate.toFixed(2)
    }
    console.log('Results:', newResults)
    setResults(newResults)
  }

  if (!mounted) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p>DEBUG: Component rendered. Mounted: {String(mounted)}</p>
        </div>

        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Personal Loan Calculator UK 2025</h1>
          <p className="text-lg text-gray-600">Calculate your monthly loan payments instantly.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Loan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Amount: £{loanAmount}</label>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000" 
                  value={loanAmount} 
                  onChange={(e) => {
                    const val = parseFloat(e.target.value)
                    console.log('Loan amount changed to:', val)
                    setLoanAmount(val)
                    // Recalculate after state update
                    setTimeout(() => {
                      const monthlyRate = interestRate / 100 / 12
                      const numberOfPayments = val / 12
                      const monthlyPayment = (val * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
                      setResults({
                        monthlyPayment: monthlyPayment.toFixed(2),
                        totalInterest: (monthlyPayment * numberOfPayments - val).toFixed(2),
                        totalPaid: (monthlyPayment * numberOfPayments).toFixed(2),
                        apr: interestRate.toFixed(2)
                      })
                    }, 0)
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate: {interestRate.toFixed(2)}%</label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="0.1" 
                  value={interestRate} 
                  onChange={(e) => {
                    const val = parseFloat(e.target.value)
                    setInterestRate(val)
                    setTimeout(() => calculateLoan(), 0)
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term: {loanTerm} years</label>
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  step="1" 
                  value={loanTerm} 
                  onChange={(e) => {
                    const val = parseFloat(e.target.value)
                    setLoanTerm(val)
                    setTimeout(() => calculateLoan(), 0)
                  }}
                  className="w-full h-2 bg-gray-300 rounded-lg"
                />
              </div>

              <button 
                onClick={calculateLoan}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg"
              >
                Calculate
              </button>
            </div>

            <div>
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-4xl font-bold text-primary-600">£{results.monthlyPayment}</p>
                  
                  <div className="bg-white rounded-lg p-4 mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Total Interest:</span>
                      <span>£{results.totalInterest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Cost:</span>
                      <span>£{results.totalPaid}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-100 p-4 rounded border border-red-400">
                  No results yet
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© 2025 Finance Hub UK</p>
        </div>
      </div>
    </div>
  )
}




