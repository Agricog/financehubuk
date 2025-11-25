import { useEffect } from 'react'
import LifeInsuranceQuote from '../components/LifeInsuranceQuote'

export default function LifeInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Life Insurance Quotes UK | Compare Affordable Life Cover'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get instant life insurance quotes from leading UK providers. Compare term life, whole life, and income protection. Protect your family from £10/month.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Get instant life insurance quotes from leading UK providers. Compare term life, whole life, and income protection. Protect your family from £10/month.'
      document.head.appendChild(meta)
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute(
      'content',
      'life insurance UK, term life insurance, life cover quotes, cheap life insurance, family protection, income protection'
    )

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

  return <LifeInsuranceQuote />
}
