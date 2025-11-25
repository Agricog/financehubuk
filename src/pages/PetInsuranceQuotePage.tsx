import { useEffect } from 'react'
import PetInsuranceQuote from '../components/PetInsuranceQuote'

export default function PetInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Pet Insurance Quotes UK | Compare Dog & Cat Insurance'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get instant pet insurance quotes for dogs, cats, and exotic pets. Compare lifetime, time-limited, and accident-only cover from top UK insurers.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Get instant pet insurance quotes for dogs, cats, and exotic pets. Compare lifetime, time-limited, and accident-only cover from top UK insurers.'
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
      'pet insurance UK, dog insurance, cat insurance, pet insurance quotes, cheap pet insurance, lifetime pet cover'
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

  return <PetInsuranceQuote />
}
