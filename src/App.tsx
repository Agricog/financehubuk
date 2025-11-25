import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
import PersonalLoanCalculatorPage from './pages/PersonalLoanCalculatorPage'
import HomeInsuranceQuotePage from './pages/HomeInsuranceQuotePage'
import CarInsuranceQuotePage from './pages/CarInsuranceQuotePage'
import LifeInsuranceQuotePage from './pages/LifeInsuranceQuotePage'
import PetInsuranceQuotePage from './pages/PetInsuranceQuotePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculators/mortgage-calculator" element={<MortgageCalculatorPage />} />
          <Route path="/calculators/personal-loan-calculator" element={<PersonalLoanCalculatorPage />} />
          <Route path="/calculators/home-insurance-quote" element={<HomeInsuranceQuotePage />} />
          <Route path="/calculators/car-insurance-quote" element={<CarInsuranceQuotePage />} />
          <Route path="/calculators/life-insurance-quote" element={<LifeInsuranceQuotePage />} />
          <Route path="/calculators/pet-insurance-quote" element={<PetInsuranceQuotePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App


