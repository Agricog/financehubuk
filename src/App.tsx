import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MortgageCalculatorPage from './pages/MortgageCalculatorPage'
import LoanCalculatorPage from './pages/LoanCalculatorPage'
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

