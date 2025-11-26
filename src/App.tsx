import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
import LoanCalculatorPage from './pages/LoanCalculatorPage'
import HomeInsuranceQuotePage from './pages/HomeInsuranceQuotePage'
import CarInsuranceQuotePage from './pages/CarInsuranceQuotePage'
import LifeInsuranceQuotePage from './pages/LifeInsuranceQuotePage'
import PetInsuranceQuotePage from './pages/PetInsuranceQuotePage'
import SavingsGoalCalculator from './pages/SavingsGoalCalculator'
import BudgetPlannerCalculator from './pages/BudgetPlannerCalculator'
import CreditCardPayoffCalculator from './pages/CreditCardPayoffCalculator'
import InvestmentCalculator from './pages/InvestmentCalculator'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculators/mortgage-calculator" element={<MortgageCalculatorPage />} />
            <Route path="/calculators/loan-calculator" element={<LoanCalculatorPage />} />
            <Route path="/calculators/home-insurance-quote" element={<HomeInsuranceQuotePage />} />
            <Route path="/calculators/car-insurance-quote" element={<CarInsuranceQuotePage />} />
            <Route path="/calculators/life-insurance-quote" element={<LifeInsuranceQuotePage />} />
            <Route path="/calculators/pet-insurance-quote" element={<PetInsuranceQuotePage />} />
            <Route path="/calculators/savings-goal-calculator" element={<SavingsGoalCalculator />} />
            <Route path="/calculators/budget-planner-calculator" element={<BudgetPlannerCalculator />} />
            <Route path="/calculators/credit-card-payoff-calculator" element={<CreditCardPayoffCalculator />} />
            <Route path="/calculators/investment-calculator" element={<InvestmentCalculator />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App



