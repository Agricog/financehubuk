import { useEffect } from 'react'
import HomeInsuranceQuote from '../components/HomeInsuranceQuote'

export default function HomeInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Home Insurance Quotes UK | Compare Best Rates Instantly'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get instant home insurance quotes from leading UK providers. Compare buildings and contents insurance. Save up to 40% on your home cover.'
      )
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Get instant home insurance quotes from leading UK providers. Compare buildings and contents insurance. Save up to 40% on your home cover.'
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
      'home insurance UK, buildings insurance, contents insurance, home insurance quotes, cheap home insurance, compare home insurance'
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

  return <HomeInsuranceQuote />
}
