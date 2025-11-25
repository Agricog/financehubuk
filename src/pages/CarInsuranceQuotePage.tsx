import { useEffect } from 'react'
import CarInsuranceQuote from '../components/CarInsuranceQuote'

export default function CarInsuranceQuotePage() {
  useEffect() => {
    document.title = 'Car Insurance Quotes UK | Compare Cheap Car Insurance'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get instant car insurance quotes from 100+ UK insurers. Compare comprehensive, third party, and TPFT policies. Save up to 50% on your car cover.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Get instant car insurance quotes from 100+ UK insurers. Compare comprehensive, third party, and TPFT policies. Save up to 50% on your car cover.'
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
      'car insurance UK, cheap car insurance, car insurance quotes, comprehensive car insurance, compare car insurance, young driver insurance'
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

  return <CarInsuranceQuote />
}
