import { useEffect } from 'react'
import MortgageCalculator from '../components/MortgageCalculator'

export default function MortgageCalculatorPage() {
  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Mortgage Affordability Calculator UK | Free Instant Results'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Calculate how much you can borrow for a mortgage in the UK. Free calculator with instant results based on your income and deposit. Get accurate affordability estimates from UK lenders.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Calculate how much you can borrow for a mortgage in the UK. Free calculator with instant results based on your income and deposit. Get accurate affordability estimates from UK lenders.'
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
      'mortgage calculator UK, mortgage affordability, how much can I borrow, mortgage calculator, home loan calculator, UK mortgage, first time buyer mortgage'
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

  return <MortgageCalculator />
}
