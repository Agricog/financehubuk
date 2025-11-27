import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Free Home Insurance Quote Comparison UK | Compare Buildings & Contents'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare free home insurance quotes from top UK providers. Get personalized buildings and contents insurance quotes instantly. Save up to 40% on your premium.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Home Insurance Quote Comparison UK | Compare Buildings & Contents')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Get personalized home insurance quotes instantly. Compare buildings insurance, contents insurance, and combined policies from leading UK insurers. Save money today.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/home-insurance-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Home Insurance Quote Comparison UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Compare home insurance quotes from leading UK providers and save up to 40%.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/home-insurance-quote')
    }

    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://financehubuk.co.uk'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Calculators',
              'item': 'https://financehubuk.co.uk/calculators'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': 'Home Insurance Quote',
              'item': 'https://financehubuk.co.uk/calculators/home-insurance-quote'
            }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Home Insurance Quote Comparison Tool',
          'description': 'Compare free home insurance quotes from top UK providers. Get personalized buildings and contents insurance quotes instantly.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/home-insurance-quote',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'GBP'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.7',
            'ratingCount': '2847'
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What are the main types of home insurance in the UK?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The three main types are: Buildings Insurance (covers structure and permanent fixtures - required by mortgage lenders), Contents Insurance (covers belongings - optional but recommended), and Combined Policies (bundles both for better value).'
              }
            },
            {
              '@type': 'Question',
              'name': 'Is buildings insurance a legal requirement?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'It\'s not a legal requirement for homeowners, but mortgage lenders require it as a condition of lending. Buildings insurance protects the lender\'s investment in case of fire, flood, subsidence, or other structural damage.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How much does home insurance cost?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Average costs: Buildings Insurance £150-£300/year, Contents Insurance £100-£200/year, Combined Policies £200-£400/year. Costs vary based on property value, location, security, claims history, and sum insured.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What happens if I\'m underinsured?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Insurers may apply "average" - reducing payouts proportionally. If insured for 70% of actual value, a £10,000 claim only pays £7,000. It\'s crucial to accurately calculate your sum insured.'
              }
            }
          ]
        },
        {
          '@type': 'HowTo',
          'name': 'How to Get a Home Insurance Quote',
          'step': [
            {
              '@type': 'HowToStep',
              'name': 'Property Details',
              'text': 'Enter your property type (flat, house, bungalow), age, number of bedrooms, and rebuild cost.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Coverage Type',
              'text': 'Choose buildings insurance, contents insurance, or combined policy. Specify sum insured.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Security Details',
              'text': 'Provide information about locks, alarms, and security measures. Better security = lower premiums.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Personal Information',
              'text': 'Enter occupation, claims history, and preferred excess level.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Get Instant Quotes',
              'text': 'Receive personalized quotes from leading UK insurers instantly. Compare and choose the best option.'
            }
          ]
        },
        {
          '@type': 'Organization',
          'name': 'Finance Hub UK',
          'url': 'https://financehubuk.co.uk',
          'logo': 'https://financehubuk.co.uk/logo.png',
          'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'Customer Support',
            'email': 'support@financehubuk.co.uk'
          }
        }
      ]
    })
    document.head.appendChild(schemaScript)
    
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Home Insurance Quote Comparison UK 2025</h1>
          <p className="text-lg text-gray-600">Compare home insurance quotes from top UK providers instantly. Get personalized buildings and contents insurance quotes. Save up to 40% on your premium.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Home Insurance Quote</h2>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Get instant home insurance quotes by completing the form below. We'll compare rates from leading UK providers to find you the best coverage at the best price. Takes just 2 minutes to get started.
            </p>
            
            <iframe
              src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=Home-Insurance"
              width="100%"
              height="350"
              frameBorder="0"
              title="Home Insurance Quote Form"
              className="rounded-lg border border-gray-200"
            />
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our Home Insurance Quote Tool</h2>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Enter property details</strong> (type, age, bedrooms, rebuild cost)</li>
              <li><strong>2. Select coverage type</strong> (buildings, contents, or combined)</li>
              <li><strong>3. Provide security information</strong> (locks, alarms, measures)</li>
              <li><strong>4. Enter personal information</strong> (occupation, claims history)</li>
              <li><strong>5. Get instant quotes</strong> from leading UK insurers</li>
              <li><strong>6. Compare & purchase</strong> - activate coverage immediately</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Home Insurance Explained</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Buildings Insurance</h3>
                <p className="text-gray-700">Covers the structure of your home (walls, roof, floors, permanent fixtures). Required by mortgage lenders. Protects against fire, flood, subsidence, storm damage. Average cost: £150-£300/year.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Contents Insurance</h3>
                <p className="text-gray-700">Covers your belongings (furniture, electronics, clothing, jewelry). Optional but recommended. Includes theft, accidental damage, and items temporarily away from home. Average cost: £100-£200/year.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Combined Buildings & Contents</h3>
                <p className="text-gray-700">Bundles both policies for complete protection and typically saves 10-15% vs buying separately. Average cost: £200-£400/year.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Covered and What's Not</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-700 mb-3">✓ Typically Covered</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Fire and smoke damage</li>
                  <li>• Theft and burglary</li>
                  <li>• Storm and flood damage</li>
                  <li>• Accidental damage (with add-on)</li>
                  <li>• Vandalism</li>
                  <li>• Burst pipes and leaks</li>
                  <li>• Falling trees or debris</li>
                  <li>• Impact by vehicles</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-700 mb-3">✗ Typically NOT Covered</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• General wear and tear</li>
                  <li>• Gradual damage (damp, rot)</li>
                  <li>• Poor maintenance</li>
                  <li>• Mechanical breakdown</li>
                  <li>• Damage by pets</li>
                  <li>• Items left unattended outside</li>
                  <li>• Unforced entry theft</li>
                  <li>• Acts of war or terrorism</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate the Right Coverage</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Under-insuring can leave you out of pocket, while over-insuring wastes money. Get the amount right:</p>
              
              <ul className="space-y-2 ml-4">
                <li>• <strong>Buildings sum insured:</strong> Should equal full rebuild cost (not market value). Use RICS calculator or surveyor estimate. Average UK rebuild: £250,000-£400,000.</li>
                <li>• <strong>Contents sum insured:</strong> Add up value of all belongings. Don't forget loft, garage, shed. Average UK contents: £30,000-£50,000.</li>
                <li>• <strong>Single item limits:</strong> Check maximum payout per item (typically £1,500-£2,500). Specify high-value items separately.</li>
                <li>• <strong>Bedroom-based pricing:</strong> Many insurers use number of bedrooms, but itemized valuations are more accurate.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to Reduce Your Premium</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Increase voluntary excess:</strong> Paying first £250-£500 of any claim cuts premiums 20-30%</li>
                <li>• <strong>Improve home security:</strong> Burglar alarms, window locks, secure doors earn discounts (5-15% off)</li>
                <li>• <strong>Pay annually:</strong> Avoid monthly payment fees (typically 10-15% APR hidden cost)</li>
                <li>• <strong>Bundle policies:</strong> Combine buildings and contents, or add car insurance for discounts</li>
                <li>• <strong>No claims bonus:</strong> Years without claims earn discounts (up to 30% after 5+ years)</li>
                <li>• <strong>Avoid automatic renewal:</strong> Loyalty penalty means renewals are 20-40% higher - switch every year</li>
                <li>• <strong>Accurate job title:</strong> Some jobs (teachers, nurses) get better rates than others</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Optional Add-Ons Worth Considering</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Accidental Damage Cover (+£20-£40/year)</h4>
                <p className="text-sm text-gray-700">Covers spilled wine on carpets, dropped TVs, cracked toilets. Useful for families with children or pets.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Legal Expenses Cover (+£15-£25/year)</h4>
                <p className="text-sm text-gray-700">Legal fees for contract disputes, employment issues, personal injury claims up to £100,000.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Home Emergency Cover (+£30-£60/year)</h4>
                <p className="text-sm text-gray-700">24/7 callouts for boiler breakdowns, blocked drains, broken locks, roof damage. Alternative heating and accommodation if needed.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Personal Possessions (+£20-£50/year)</h4>
                <p className="text-sm text-gray-700">Extends contents cover outside the home (phones, laptops, bikes, jewelry). Worldwide coverage up to £10,000.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do When Making a Claim</h2>
            <div className="space-y-4 text-gray-700">
              <ol className="space-y-2 ml-4">
                <li><strong>1. Contact insurer immediately:</strong> Most have 24/7 claims lines and online portals</li>
                <li><strong>2. Document everything:</strong> Photos, videos, receipts, police crime reference (for theft)</li>
                <li><strong>3. Prevent further damage:</strong> Make temporary repairs (keep receipts - you can claim these back)</li>
                <li><strong>4. Don't throw away damaged items:</strong> Insurer may want to inspect them</li>
                <li><strong>5. Get multiple quotes:</strong> For repairs/replacements if insurer asks you to arrange</li>
                <li><strong>6. Track all correspondence:</strong> Keep copies of emails, claim forms, and reference numbers</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Do I need buildings insurance if I have a mortgage?", a: "Yes, all UK mortgage lenders require buildings insurance as a condition of the loan. This protects their investment in case the property is damaged or destroyed. Contents insurance remains optional." },
                { q: "Does home insurance cover flood damage?", a: "Standard policies cover flood damage, but homes in high-risk areas may face higher premiums or excesses. The Flood Re scheme helps make flood insurance affordable for at-risk properties. Check your postcode's flood risk on the Environment Agency website." },
                { q: "What happens if I'm underinsured?", a: "If your sum insured is less than the actual value, insurers may apply 'average' - reducing your payout proportionally. Example: If you're insured for £200,000 but true value is £300,000, you're 33% underinsured, so a £60,000 claim only pays £40,000." },
                { q: "Can I switch insurers mid-policy?", a: "Yes, but you may pay a cancellation fee (typically £25-£50) plus lose a pro-rata portion of your annual premium. It's usually cheaper to wait until renewal unless you've found drastically cheaper cover." },
                { q: "Does home insurance cover damage by contractors?", a: "Accidental damage cover may include this, but the contractor's own public liability insurance should be the first port of call. Always use insured, reputable contractors and keep records of their insurance certificates." },
                { q: "How long does a home insurance claim take?", a: "Simple claims (e.g., stolen laptop) can settle within 1-2 weeks. Complex claims (e.g., fire damage, subsidence) may take 3-6 months while investigators assess. Emergency repairs are usually approved within 24-48 hours." },
                { q: "Does home insurance cover liability for injuries?", a: "Yes, most policies include public liability cover (typically £2-5 million) for injuries to visitors or damage to neighbours' property caused by you. This is separate from your buildings/contents cover." },
                { q: "What's the difference between market value and rebuild cost?", a: "Market value is what your property would sell for today. Rebuild cost is what it would cost to rebuild from scratch if destroyed (usually higher due to labour). Buildings insurance uses rebuild cost." },
                { q: "Can I get home insurance if I have a claims history?", a: "Yes, but premiums will be higher. After 3-5 years of no claims, the extra cost usually disappears. Be honest about claims history - not disclosing voids your policy." },
                { q: "Is contents insurance worth it?", a: "Yes if your belongings are worth significant money. Average household contents are worth £30,000-£50,000. Losing everything to fire or theft without cover would be devastating financially." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Home Insurance Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "Accidental Damage", def: "Unexpected damage (spilled drinks, broken items) covered by optional add-on" },
                { term: "Agreed Value", def: "Pre-agreed payout amount for specific items (jewelry, artwork, antiques)" },
                { term: "Average", def: "Reduced payout if you're underinsured - payout reduced proportionally to underinsurance" },
                { term: "Betterment", def: "Insurer deduction for improvement/upgrade (if replacing old item with new)" },
                { term: "Buildings Insurance", def: "Covers structure and permanent fixtures of property (required by mortgage lenders)" },
                { term: "Contents Insurance", def: "Covers portable belongings (furniture, electronics, clothing inside the home)" },
                { term: "Decay Clause", def: "Exclusion for gradual wear and tear (damp, rot, woodworm, rusting)" },
                { term: "Excess", def: "Amount you pay toward a claim (higher excess = lower premium)" },
                { term: "Flood Re", def: "UK scheme making flood insurance affordable for high-risk properties" },
                { term: "Public Liability", def: "Cover for injuries to visitors or damage to neighbours caused by you" },
                { term: "Rebuild Cost", def: "Full cost to rebuild property from scratch (usually higher than market value)" },
                { term: "Sum Insured", def: "Maximum amount insurer will pay for total loss (must match property value)" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.term}</h4>
                  <p className="text-sm text-gray-700">{item.def}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Calculators & Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/calculators/mortgage-calculator" className="bg-blue-50 hover:bg-blue-100 border-l-4 border-primary-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Mortgage Calculator</h3>
                <p className="text-sm text-gray-700">Calculate mortgage payments and affordability</p>
              </Link>
              <Link to="/calculators/personal-loan-calculator" className="bg-green-50 hover:bg-green-100 border-l-4 border-green-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Personal Loan Calculator</h3>
                <p className="text-sm text-gray-700">Calculate monthly payments for personal loans</p>
              </Link>
              <Link to="/calculators/car-insurance-quote" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Car Insurance Quote</h3>
                <p className="text-sm text-gray-700">Compare car insurance quotes from top providers</p>
              </Link>
              <Link to="/calculators/pet-insurance-quote" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Pet Insurance Quote</h3>
                <p className="text-sm text-gray-700">Get pet insurance quotes instantly</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Get Your Free Home Insurance Quote Now</h2>
            <p className="mb-6">Compare personalized quotes from leading UK insurers instantly. Find the best buildings and contents insurance for your home. Click below to get started.</p>
            
            <button 
              onClick={() => document.querySelector('iframe')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Get Free Quote
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This tool provides estimates for informational purposes only. Actual insurance quotes depend on your specific property, location, and personal circumstances.</p>
        </div>
      </div>
    </div>
  )
}


