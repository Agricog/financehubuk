import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CarInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Free Car Insurance Quote Comparison UK | Compare Rates & Save'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare free car insurance quotes from 100+ UK insurers. Get instant personalized quotes for comprehensive, third party, and TPFT coverage. Save up to 50% on your premium.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Car Insurance Quote Comparison UK | Compare Rates & Save')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Get personalized car insurance quotes instantly. Compare comprehensive, third party, and TPFT policies from leading UK insurers. Save time and money.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/car-insurance-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Car Insurance Quote Comparison UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Compare car insurance quotes from 100+ insurers and save up to 50%.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/car-insurance-quote')
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
              'name': 'Car Insurance Quote',
              'item': 'https://financehubuk.co.uk/calculators/car-insurance-quote'
            }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Car Insurance Quote Comparison Tool',
          'description': 'Compare free car insurance quotes from 100+ UK insurers. Get personalized rates for comprehensive, third party, and TPFT policies instantly.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/car-insurance-quote',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'GBP'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.6',
            'ratingCount': '3421'
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What are the main types of car insurance in the UK?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The three main types are: Third Party Only (legal minimum, covers damage to others), Third Party Fire & Theft (adds fire and theft protection), and Comprehensive (full coverage including your own vehicle). Most drivers opt for comprehensive or TPFT for better protection.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What factors affect my car insurance premium?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Key factors include: driver age and experience, vehicle type and insurance group, postcode (area crime/accident rates), annual mileage, no claims bonus, occupation, driving convictions, and voluntary excess level. Young drivers and high-risk postcodes typically pay more.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How much does car insurance cost in the UK?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Average costs vary: Third Party from £400-£800/year, TPFT from £500-£1,000/year, Comprehensive from £600-£1,200/year. Young drivers (under 25) pay significantly more (£1,500-£3,000+). Experienced drivers with good no claims bonus pay less.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Will a non-fault accident affect my insurance premium?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes. Even non-fault claims can increase premiums 10-20% because insurers view you as higher risk. Your no claims bonus is usually protected, but the base premium may still rise. After 5 years of no claims, the increase typically disappears.'
              }
            }
          ]
        },
        {
          '@type': 'HowTo',
          'name': 'How to Get a Car Insurance Quote',
          'step': [
            {
              '@type': 'HowToStep',
              'name': 'Enter Vehicle Details',
              'text': 'Provide your vehicle registration, make, model, year, and current mileage.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Driver Information',
              'text': 'Enter your age, driving experience, no claims bonus, and any driving convictions.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Coverage Preferences',
              'text': 'Select insurance type: Third Party, TPFT, or Comprehensive. Choose excess levels and optional extras.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Get Instant Quotes',
              'text': 'Receive personalized quotes from multiple insurers instantly. Compare prices and features.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Choose & Buy',
              'text': 'Select the best quote that matches your needs and budget. Complete purchase online instantly.'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Car Insurance Quote Comparison UK 2025</h1>
          <p className="text-lg text-gray-600">Compare car insurance quotes from 100+ UK insurers instantly. Get personalized rates for comprehensive, third party, and TPFT coverage. Save up to 50% on your premium.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Car Insurance Quote</h2>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Our quick quote comparison tool searches 100+ UK insurers to find the best car insurance rates for your vehicle and driving profile. Get instant personalized quotes for Third Party, TPFT, and Comprehensive coverage options.
            </p>
            
            <iframe
              src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=Car-Insurance"
              width="100%"
              height="600"
              frameBorder="0"
              title="Car Insurance Quote Form"
              className="rounded-lg border border-gray-200"
            ></iframe>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our Car Insurance Quote Tool</h2>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Enter vehicle details</strong> (registration, make, model, year, mileage)</li>
              <li><strong>2. Provide driver information</strong> (age, experience, no claims bonus, convictions)</li>
              <li><strong>3. Select coverage type</strong> (Third Party, TPFT, or Comprehensive)</li>
              <li><strong>4. Choose excess level</strong> (higher excess = lower premium)</li>
              <li><strong>5. Get instant quotes</strong> from multiple insurers and compare prices</li>
              <li><strong>6. Purchase online</strong> - activate coverage immediately</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Car Insurance Explained</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Third Party Only (Cheapest)</h3>
                <p className="text-gray-700">Legal minimum in the UK. Covers damage/injury you cause to others, but NOT your own vehicle. Best for old cars worth under £1,000. Average: £400-£800/year.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Third Party, Fire & Theft (Mid-Range)</h3>
                <p className="text-gray-700">Adds fire damage and theft protection to third party cover. Good for cars worth £1,000-£5,000. Average: £500-£1,000/year.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive (Full Cover)</h3>
                <p className="text-gray-700">Covers everything: damage to your car (even if your fault), theft, fire, vandalism, windscreen, personal injury. Recommended for cars over £5,000. Average: £600-£1,200/year.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Affects Your Car Insurance Cost?</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Key Factors That Impact Premium</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Age & Experience:</strong> Drivers under 25 pay 2-3x more. New drivers face highest rates.</li>
                  <li>• <strong>Vehicle Type:</strong> Insurance groups 1-50 (higher = more expensive). Sports cars, luxury vehicles cost most.</li>
                  <li>• <strong>Postcode:</strong> Urban areas with high crime/accident rates increase premiums 30-50%.</li>
                  <li>• <strong>Annual Mileage:</strong> Under 5,000 miles = cheaper. Over 15,000 miles = more expensive.</li>
                  <li>• <strong>No Claims Bonus:</strong> Up to 75% discount after 5+ claim-free years.</li>
                  <li>• <strong>Occupation:</strong> Some jobs (teachers, accountants) get discounts. Others (couriers) pay more.</li>
                  <li>• <strong>Driving Convictions:</strong> SP30 (speeding) adds 10-20%. DR10 (drink driving) adds 50-100%.</li>
                  <li>• <strong>Voluntary Excess:</strong> Higher excess (£500+) reduces premium by 10-25%.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">2025 Average Car Insurance Costs by Driver Type</h4>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>• <strong>Young drivers (17-25):</strong> £1,500-£3,500/year for comprehensive</li>
                  <li>• <strong>Experienced drivers (26-59):</strong> £500-£1,200/year for comprehensive</li>
                  <li>• <strong>Older drivers (60+):</strong> £600-£1,500/year (higher due to accident risk)</li>
                  <li>• <strong>First-time buyers:</strong> £800-£1,500/year (low no claims bonus)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Cut Your Car Insurance Costs</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Black Box Insurance:</strong> Telematics monitors driving. Safe drivers save 20-40% (especially young drivers).</li>
                <li>• <strong>Add Experienced Named Driver:</strong> Adding parent as named driver can reduce premiums 10-15%.</li>
                <li>• <strong>Pay Annually:</strong> Monthly payments include interest (10-20% APR). Pay upfront to save £50-£150.</li>
                <li>• <strong>Limit Mileage:</strong> Accurate low mileage estimate saves money (but don't lie - voids policy).</li>
                <li>• <strong>Secure Parking:</strong> Garage parking vs street parking saves 5-10%.</li>
                <li>• <strong>Dash Cam Discount:</strong> Some insurers offer 10-15% off for dash cam installation.</li>
                <li>• <strong>Advanced Driving Courses:</strong> Pass Plus or IAM courses earn 5-10% discounts.</li>
                <li>• <strong>Multi-Car Policy:</strong> Insure multiple cars with same insurer for 10-15% discount.</li>
                <li>• <strong>Compare Annually:</strong> Loyalty penalty means staying costs 20-40% more than switching.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Optional Extras Worth Considering</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Breakdown Cover (+£30-£100/year)</h4>
                <p className="text-sm text-gray-700">Roadside assistance, recovery, home start. Often cheaper bundled with insurance than standalone AA/RAC.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Courtesy Car (+£20-£50/year)</h4>
                <p className="text-sm text-gray-700">Provides replacement vehicle while yours is repaired after accident. Essential if you rely on your car.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Legal Expenses (+£15-£30/year)</h4>
                <p className="text-sm text-gray-700">Covers legal fees for uninsured losses, injury claims, and recovering costs from at-fault parties.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1">Protected No Claims Bonus (+£40-£80/year)</h4>
                <p className="text-sm text-gray-700">Allows 1-2 at-fault claims without losing NCB. Worth it if you have 4+ years NCB.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Young Driver Insurance Tips</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Insurance for drivers under 25 is notoriously expensive (£1,500-£3,000+/year). Here's how to reduce it:</p>
              
              <ul className="space-y-2 ml-4">
                <li>• Choose low insurance group cars (Groups 1-10): Ford Fiesta, VW Polo, Toyota Aygo</li>
                <li>• Consider black box/telematics insurance (saves 30-50% for safe drivers)</li>
                <li>• Take Pass Plus course immediately after passing test (saves 10-20%)</li>
                <li>• Add experienced parent as named driver (not main driver - that's fronting and illegal)</li>
                <li>• Start with third party or TPFT on older car to build no claims bonus</li>
                <li>• Avoid modifications (body kits, spoilers, alloys) - increases premium 20-50%</li>
                <li>• Consider annual vs monthly payment - saves £100-£200 on high premiums</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I drive other cars with comprehensive insurance?", a: "Most comprehensive policies include 'driving other cars' third party cover, but it's becoming rarer. Always check your policy - never assume. It only covers emergency use, not regular driving of another vehicle." },
                { q: "What's the difference between market value and agreed value?", a: "Market value (most policies) pays current market price if car is written off. Agreed value (classic car policies) sets specific payout amount upfront. For modified or classic cars, agreed value prevents disputes." },
                { q: "Does car insurance cover driving in Europe?", a: "Most UK car insurance provides automatic coverage in Europe (Green Card) for Third Party liability. Comprehensive and TPFT coverage typically extends too. Check your policy - some insurers charge extra for extended European cover." },
                { q: "Will a non-fault accident affect my premium?", a: "Yes, surprisingly. Even non-fault claims can increase premiums 10-20% as insurers view you as higher risk. Your no claims bonus is usually protected if you're not at fault, but the base premium may still rise." },
                { q: "What happens if I'm caught without insurance?", a: "Driving without insurance is illegal and carries severe penalties: £300 fixed penalty + 6 points on licence, or unlimited fine + driving ban in court. Car may be seized and crushed. Future insurance costs skyrocket (often doubles)." },
                { q: "Can I cancel my car insurance and get a refund?", a: "You have 14 days 'cooling off' period for full refund (minus admin fee). After that, you can cancel anytime but pay cancellation fee (£25-£75) plus short-period insurance charge. If you've claimed, you may get no refund." },
                { q: "Does car colour affect insurance cost?", a: "No, this is a myth. UK insurers don't consider colour. What matters is make, model, engine size, insurance group, and modifications. Red cars don't cost more - but red sports cars in high insurance groups certainly do." },
                { q: "What is a named driver?", a: "A named driver is someone else (usually family member) authorized to drive your car. Adding experienced named drivers can reduce premiums. However, you can't make yourself a 'named driver' on someone else's car to dodge higher premiums (that's fronting - it's illegal)." },
                { q: "How long does a non-fault claim stay on my record?", a: "Non-fault claims typically stay on record for 5 years and can affect premiums even though they're 'non-fault'. After 5 years, they should have minimal impact. Some insurers remove them after 3 years." },
                { q: "What's an excess and how does it work?", a: "Excess is the amount YOU pay toward a claim. Higher excess = lower premium. Compulsory excess (set by insurer) + Voluntary excess (you choose) = total excess. If car costs £1,200 to fix and excess is £500, insurer pays £700." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Car Insurance Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "APR", def: "Annual Percentage Rate - total interest cost if paying monthly installments" },
                { term: "Agreed Value", def: "Specific payout amount agreed upfront for vehicle total loss (vs market value)" },
                { term: "Breakdown Cover", def: "Roadside assistance, recovery, and home start service if vehicle breaks down" },
                { term: "Comprehensive", def: "Full car insurance covering own damage, theft, fire, vandalism, and more" },
                { term: "Excess", def: "Amount you pay toward a claim (higher excess = lower premium)" },
                { term: "Fronting", def: "Illegal practice of making yourself named driver to dodge higher premiums" },
                { term: "Green Card", def: "Proof of Third Party liability cover for driving in Europe" },
                { term: "Insurance Group", def: "Rating (1-50) determining vehicle's insurance cost based on make, model, engine" },
                { term: "No Claims Bonus", def: "Discount (up to 75%) for accident-free years (usually max 5 years)" },
                { term: "Named Driver", def: "Additional person authorized to drive your car (often reduces premiums)" },
                { term: "TPFT", def: "Third Party, Fire & Theft - covers damage to others + fire/theft of your car" },
                { term: "Third Party", def: "Legal minimum cover - protects others from your damage/injury, not your car" }
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
              <Link to="/" className="bg-purple-50 hover:bg-purple-100 border-l-4 border-purple-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Home Insurance Quote</h3>
                <p className="text-sm text-gray-700">Compare home insurance from leading providers (coming soon)</p>
              </Link>
              <Link to="/" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Pet Insurance Quote</h3>
                <p className="text-sm text-gray-700">Get pet insurance quotes instantly (coming soon)</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Get Your Free Car Insurance Quote Now</h2>
            <p className="mb-6">Compare personalized quotes from 100+ UK insurers instantly. Find the best deal for your vehicle and driving profile. Click below to get started.</p>
            
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Get Free Quote
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This tool provides estimates for informational purposes only. Actual insurance quotes depend on your specific vehicle, driving history, and personal circumstances.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}


