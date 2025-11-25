import { useEffect } from 'react'
import LoanCalculator from '../components/LoanCalculator'

export default function LoanCalculatorPage() {
  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Personal Loan Calculator UK | Compare Loan Rates & Monthly Payments'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Free UK personal loan calculator. Calculate monthly payments, total cost, and interest for loans from £1,000 to £50,000. Compare rates from top lenders instantly.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Free UK personal loan calculator. Calculate monthly payments, total cost, and interest for loans from £1,000 to £50,000. Compare rates from top lenders instantly.'
      document.head.appendChild(meta)
    }

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute(
      'content',
      'loan calculator UK, personal loan calculator, loan payment calculator, APR calculator, loan comparison UK, best loan rates, debt consolidation calculator'
    )

    // Cleanup on unmount
    return () => {
      document.title = 'Finance Hub UK - Free Financial Calculators'
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Free UK financial calculators for mortgages, insurance, loans & more. Compare quotes from top providers instantly.'
        )
      }
    }
  }, [])

  return <LoanCalculator />
}
