import { useState } from 'react'
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
    document.title = 'Personal Loan Calculator UK'
    calculateLoan()
  }, [])

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    const monthlyPayment = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    const totalPaid = monthlyPayment * numberOfPayments
    const totalInterest = totalPaid - loanAmount

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPaid: totalPaid.toFixed(2),
      apr: interestRate.toFixed(2)
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Personal Loan Calculator</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Loan Amount: £{loanAmount.toLocaleString()}</label>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000" 
                  value={loanAmount} 
                  onChange={(e) => { setLoanAmount(parseFloat(e.target.value)); calculateLoan() }} 
                  className="w-full h-2 bg-gray-300 rounded-lg" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Interest Rate: {interestRate.toFixed(2)}%</label>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="0.1" 
                  value={interestRate} 
                  onChange={(e) => { setInterestRate(parseFloat(e.target.value)); calculateLoan() }} 
                  className="w-full h-2 bg-gray-300 rounded-lg" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Loan Term: {loanTerm} years</label>
                <input 
                  type="range" 
                  min="1" 
                  max="7" 
                  step="1" 
                  value={loanTerm} 
                  onChange={(e) => { setLoanTerm(parseFloat(e.target.value)); calculateLoan() }} 
                  className="w-full h-2 bg-gray-300 rounded-lg" 
                />
              </div>

              <button onClick={calculateLoan} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg">
                Calculate
              </button>
            </div>

            <div>
              {results ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-4xl font-bold text-primary-600">£{parseFloat(results.monthlyPayment).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  
                  <div className="bg-white rounded-lg p-4 mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Total Interest:</span>
                      <span className="font-semibold">£{parseFloat(results.totalInterest).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Cost:</span>
                      <span className="font-semibold">£{parseFloat(results.totalPaid).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


