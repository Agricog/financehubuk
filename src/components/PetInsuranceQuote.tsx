import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PetInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Free Pet Insurance Quote Comparison UK | Dogs, Cats & More'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare free pet insurance quotes from top UK providers. Get personalized quotes for dogs, cats, rabbits, and exotic pets. Lifetime cover from £8-£120/month. Save up to 40% on premiums.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Pet Insurance Quote Comparison UK | Dogs, Cats & More')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Get personalized pet insurance quotes instantly. Compare lifetime, time-limited, and accident-only cover from leading UK insurers. Protect your beloved pet.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/pet-insurance-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Pet Insurance Quote Comparison UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Compare pet insurance quotes for dogs, cats, and more. Save up to 40% on premiums.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/pet-insurance-quote')
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
              'name': 'Pet Insurance Quote',
              'item': 'https://financehubuk.co.uk/calculators/pet-insurance-quote'
            }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Pet Insurance Quote Comparison Tool',
          'description': 'Compare free pet insurance quotes from top UK providers. Get personalized quotes for dogs, cats, rabbits, and exotic pets.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/pet-insurance-quote',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'GBP'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.7',
            'ratingCount': '1924'
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What are the main types of pet insurance?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The four main types are: Accident Only (covers only injuries, not illness), Time-Limited (covers each condition for 12 months only), Maximum Benefit (lifetime limit per condition), and Lifetime (annual limit that renews yearly - recommended). Lifetime offers best protection for chronic conditions.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How much does pet insurance cost in the UK?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Costs vary widely: Young cat £12-£20/month, Young small dog £20-£35/month, Young large dog £35-£55/month, Pedigree dog £60-£120/month, Senior dog (10+) £80-£150+/month. Costs increase 10-20% annually as pets age.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What are pre-existing conditions and why do they matter?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Pre-existing conditions are any health issues your pet showed signs of before the policy started - even if undiagnosed. These are excluded forever from any insurer. This is why you should insure pets while young and healthy before symptoms appear.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Is pet insurance worth it?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes if: you couldn\'t afford a £3,000+ vet bill, your pet is pedigree/high-risk, you\'re under 5 years old. No if: you have large emergency fund, pet is mixed breed/healthy, you\'re already senior (8+). Pet insurance protects against worst-case scenarios.'
              }
            }
          ]
        },
        {
          '@type': 'HowTo',
          'name': 'How to Get a Pet Insurance Quote',
          'step': [
            {
              '@type': 'HowToStep',
              'name': 'Pet Information',
              'text': 'Enter your pet type (dog, cat, rabbit, exotic), breed, age, and whether neutered/spayed.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Coverage Type',
              'text': 'Choose between Accident Only, Time-Limited, Maximum Benefit, or Lifetime cover (recommended).'
            },
            {
              '@type': 'HowToStep',
              'name': 'Coverage Amount',
              'text': 'Select your preferred vet fee limit (£3,000, £6,000, £8,000, £10,000+). Higher limits protect better.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Get Instant Quotes',
              'text': 'Receive personalized quotes from leading UK pet insurers instantly based on your pet\'s profile.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Compare & Purchase',
              'text': 'Review features, excess, co-insurance, and exclusions. Choose your preferred policy and activate cover.'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Pet Insurance Quote Comparison UK 2025</h1>
          <p className="text-lg text-gray-600">Compare pet insurance quotes from top UK providers instantly. Get personalized quotes for dogs, cats, rabbits, and exotic pets. Lifetime cover from £8-£120/month.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Pet Insurance Quote</h2>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Get instant pet insurance quotes tailored to your pet's species, breed, age, and health. Compare accident-only, time-limited, and lifetime cover from leading UK pet insurers. Takes just 2 minutes to get started.
            </p>
            
            <iframe
              src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=Pet-Insurance"
              width="100%"
              height="350"
              frameBorder="0"
              title="Pet Insurance Quote Form"
              className="rounded-lg border border-gray-200"
            />
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our Pet Insurance Quote Tool</h2>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Enter pet information</strong> (species, breed, age, neutered status)</li>
              <li><strong>2. Select coverage type</strong> (accident-only, time-limited, maximum benefit, or lifetime)</li>
              <li><strong>3. Choose vet fee limit</strong> (£3,000, £6,000, £8,000, £10,000+)</li>
              <li><strong>4. Get instant quotes</strong> from multiple UK pet insurers</li>
              <li><strong>5. Compare policies</strong> - coverage, excess, co-insurance, monthly cost</li>
              <li><strong>6. Purchase & activate</strong> - get covered immediately</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Pet Insurance Explained</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Accident Only (Cheapest)</h3>
                <p className="text-gray-700 mb-2">Covers injuries from accidents (hit by car, broken bones, poisoning). Does NOT cover illnesses. Very limited - only suitable for young, healthy pets on tight budgets. Average: £8-£15/month.</p>
                <p className="text-sm text-gray-600"><strong>Not recommended:</strong> Illnesses cost far more than accidents. Limited value.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Time-Limited (12 Months Per Condition)</h3>
                <p className="text-gray-700 mb-2">Covers each condition for 12 months from first diagnosis, up to annual limit (£1,000-£2,000). After 12 months, that condition is excluded forever. Suitable for short-term illnesses only. Average: £15-£30/month.</p>
                <p className="text-sm text-gray-600"><strong>Risky for:</strong> Chronic conditions (arthritis, diabetes) exceed 12-month limit.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Lifetime (Best Cover - RECOMMENDED)</h3>
                <p className="text-gray-700 mb-2">Provides annual vet fee limit (£3,000-£15,000) that renews every year for life. Covers ongoing conditions indefinitely as long as you renew. Gold standard for comprehensive protection. Average: £25-£60/month.</p>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> All pets, especially breeds prone to hereditary conditions.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Maximum Benefit (Per Condition Limit)</h3>
                <p className="text-gray-700 mb-2">Each condition has lifetime maximum (£3,000-£7,000). Once reached, that condition is excluded forever. No annual renewal of limits. Cheaper than lifetime but higher risk. Average: £20-£40/month.</p>
                <p className="text-sm text-gray-600"><strong>Risk:</strong> Expensive conditions (cancer £8,000+) can exhaust limit quickly.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Covered (Lifetime Policies)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-700 mb-3">✓ Usually Covered</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Vet fees for illness/injury</li>
                  <li>• Diagnostic tests (X-rays, scans)</li>
                  <li>• Prescription medications</li>
                  <li>• Surgery and hospitalization</li>
                  <li>• Complementary treatments (physio, hydro)</li>
                  <li>• Third party liability (dog only)</li>
                  <li>• Death from illness/accident</li>
                  <li>• Overseas travel cover (EU)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-700 mb-3">✗ Usually NOT Covered</h3>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Pre-existing conditions</li>
                  <li>• Routine care (vaccinations, flea/worm)</li>
                  <li>• Dental care (unless accident)</li>
                  <li>• Pregnancy and breeding costs</li>
                  <li>• Behavioral issues</li>
                  <li>• Elective procedures (tail docking)</li>
                  <li>• Conditions in exclusion period (14 days)</li>
                  <li>• Preventable conditions (obesity-related)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Does Pet Insurance Cost?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Pet insurance costs vary dramatically based on species, breed, age, and location:</p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Young Cat (1 year old) - Lifetime £4,000 cover</h4>
                  <p className="text-sm">Average: £12-£20/month. Moggies cheaper than pedigrees (Persians, Bengals).</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Adult Cat (5 years old) - Lifetime £4,000 cover</h4>
                  <p className="text-sm">Average: £20-£35/month. Premiums rise with age.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Young Small Dog (1 year, e.g., Jack Russell) - Lifetime £6,000</h4>
                  <p className="text-sm">Average: £20-£35/month. Small breeds generally cheaper.</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Young Large Dog (1 year, e.g., Labrador) - Lifetime £8,000</h4>
                  <p className="text-sm">Average: £35-£55/month. Large breeds cost more (hip dysplasia, cruciate issues).</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Young Pedigree (1 year, e.g., French Bulldog) - Lifetime £10,000</h4>
                  <p className="text-sm">Average: £60-£120/month. Brachycephalic breeds (Pugs, Bulldogs) have highest premiums.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-1">Senior Dog (10 years old) - Lifetime £6,000 cover</h4>
                  <p className="text-sm">Average: £80-£150+/month. Over 8-10 years, premiums skyrocket. Many insurers won't accept new policies for dogs over 8-10 years old.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pre-Existing Conditions Trap</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed font-semibold text-red-600">This is the #1 reason claims are rejected.</p>
              <p className="leading-relaxed">Any condition your pet showed signs of before the policy started is excluded forever - even if undiagnosed.</p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Real Example</h4>
                <p className="text-sm">Your dog limps once before insurance starts. You don't think much of it. Six months later, diagnosed with hip dysplasia (£4,000 surgery). Claim rejected because "signs existed pre-policy." You pay £4,000 out of pocket despite paying £40/month premiums.</p>
              </div>

              <p className="leading-relaxed font-semibold">Critical rule: Insure pets while young and healthy. Waiting until they show symptoms means that condition is excluded forever.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ways to Reduce Your Premium</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Increase voluntary excess:</strong> £100-£250 excess reduces premium 15-25%. But you pay first portion of every claim.</li>
                <li>• <strong>Lower vet fee limit:</strong> £4,000 vs £8,000 limit saves 20-30%, but risky for expensive conditions (cancer £10,000+).</li>
                <li>• <strong>Choose co-insurance:</strong> 80% policies (you pay 20%) save 10-20% but you cover portion of every claim.</li>
                <li>• <strong>Microchip your pet:</strong> Many insurers give 5-10% discount for microchipped pets.</li>
                <li>• <strong>Neuter/spay:</strong> Some insurers discount 5% for neutered pets (reduces certain health risks).</li>
                <li>• <strong>Multi-pet discount:</strong> Insure 2+ pets with same insurer for 10% off each policy.</li>
                <li>• <strong>Pay annually:</strong> Avoid monthly payment fees (typically 9-12% APR hidden cost).</li>
                <li>• <strong>Shop around yearly:</strong> Premiums rise 20-40% at renewal. Switching can save £100-£300/year.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Is Pet Insurance Worth It?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed font-semibold">It depends on your financial situation and risk tolerance.</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Get Insurance If:</h3>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>✓ You couldn't afford £3,000+ unexpected vet bill</li>
                    <li>✓ Your pet is pedigree/prone to health issues</li>
                    <li>✓ You'd struggle with financial decisions vs pet's health</li>
                    <li>✓ You want peace of mind and predictable costs</li>
                    <li>✓ Your pet is young (under 5 years)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Self-Insure If:</h3>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>✓ You have £5,000+ emergency fund for pets</li>
                    <li>✓ You're comfortable with financial risk</li>
                    <li>✓ Your pet is mixed breed/healthy history</li>
                    <li>✓ You'd save premium in high-interest account</li>
                    <li>✓ Your pet is already senior (over 8 years)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <p className="text-sm"><strong>Reality check:</strong> Over a pet's lifetime (15 years), you'll pay £5,000-£15,000 in premiums. Most pets won't claim that much. But 1 in 3 pets will have a claim over £3,000 in their lifetime. Insurance is about protecting against the worst-case scenario.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Pet Insurance Mistakes to Avoid</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Waiting until pet is older/symptomatic to buy insurance (pre-existing exclusions)</li>
                <li>• Choosing accident-only or time-limited to save money (false economy - inadequate cover)</li>
                <li>• Not reading policy wording - assuming "lifetime" means unlimited (it doesn't)</li>
                <li>• Failing to declare all health issues at application (voids entire policy)</li>
                <li>• Cancelling policy after one expensive year (lose continuity, new conditions excluded)</li>
                <li>• Not shopping around annually (loyalty penalty = 30-50% higher premiums)</li>
                <li>• Setting excess too high to save money (£500 excess means you pay first £500 of every claim)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I switch pet insurance with pre-existing conditions?", a: "Yes, but the new insurer will exclude any conditions your pet has been treated for (or shown symptoms of) in the past. This is why continuity matters - once you start a policy with a condition covered, that insurer continues covering it as long as you renew annually." },
                { q: "Do pet insurance premiums increase every year?", a: "Yes, for two reasons: (1) Your pet ages, becoming higher risk. (2) Vet costs rise 5-10% annually. Expect premiums to increase 10-20% per year, sometimes more. By age 10, you may be paying 3-4x what you started with." },
                { q: "What's the difference between co-insurance and excess?", a: "Excess is a fixed amount you pay per condition per year (e.g., first £100 of each claim). Co-insurance is a percentage you pay of every claim (e.g., 20% of all costs). Some policies have both. A £2,000 claim with £100 excess + 20% co-insurance means you pay £100 + £380 = £480." },
                { q: "Will pet insurance cover dental treatment?", a: "Only if it's due to accident or illness (e.g., broken tooth from injury). Routine dental care, tartar buildup, and preventable gum disease are excluded. Some insurers offer optional dental cover add-on for £5-£10/month extra." },
                { q: "Can I use any vet, or does insurance restrict me?", a: "Most UK pet insurance lets you use any licensed vet. Some policies restrict specialist referrals (requiring pre-authorization). Always check if your preferred vet accepts direct claims (some insurers pay vet directly, others reimburse you)." },
                { q: "Should I insure my rabbit, guinea pig, or exotic pet?", a: "Fewer insurers cover exotics, and premiums are higher (£10-£30/month for rabbits). Vet fees can be expensive (£500-£2,000 for serious conditions). If you can't afford large unexpected bills, insurance is worth considering. Check policy limits - often lower than dog/cat policies (£1,000-£3,000)." },
                { q: "What happens if my vet bill exceeds my annual limit?", a: "You pay the excess out of pocket. This is why choosing adequate vet fee limits matters. £4,000 lifetime cover may seem generous, but cancer treatment easily costs £8,000-£12,000. Consider £6,000-£10,000 limits for larger breeds or pedigrees." },
                { q: "Can I claim for wellness visits or vaccinations?", a: "No, routine preventative care (vaccinations, flea/worm treatments, check-ups) is typically not covered. Insurance covers unexpected illness and injury treatment. Some insurers offer optional wellness cover add-on, but it's usually poor value." },
                { q: "How long does pet insurance take to payout?", a: "Direct claim (vet bills insurer): 1-2 weeks. Reimbursement (you pay vet, insurer reimburses): 2-4 weeks after submitting receipts. Always ask vet whether they can claim directly - faster for you." },
                { q: "What's the best age to buy pet insurance?", a: "As young as possible - ideally before 8 weeks old. Young pets have no pre-existing conditions, premiums are lowest, and you'll have full coverage for lifetime. Some insurers won't accept pets over 8-10 years old for new policies." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Pet Insurance Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "Accident Only", def: "Insurance covering only injuries from accidents, not illnesses or medical conditions" },
                { term: "Annual Limit", def: "Maximum amount insurer will pay each year for all claims combined" },
                { term: "Chronic Condition", def: "Long-term ongoing illness (arthritis, diabetes) requiring continuous treatment" },
                { term: "Co-Insurance", def: "Percentage of claim you pay out of pocket (e.g., 20% co-insurance means you pay 20%)" },
                { term: "Exclusion Period", def: "Usually 14 days at start of policy where claims aren't covered (cooling-off period)" },
                { term: "Excess", def: "Fixed amount you pay toward each claim (e.g., £100 excess per condition per year)" },
                { term: "Lifetime Cover", def: "Annual vet fee limit that renews yearly for life (covers chronic conditions indefinitely)" },
                { term: "Maximum Benefit", def: "Lifetime limit per condition (once reached, that condition is excluded forever)" },
                { term: "Per Condition Limit", def: "Maximum insurer will pay for one specific health condition across policy lifetime" },
                { term: "Pre-Existing Condition", def: "Any illness/injury pet showed signs of before policy started (excluded forever)" },
                { term: "Time-Limited", def: "Each condition covered for only 12 months from diagnosis; after that, excluded forever" },
                { term: "Vet Fee Limit", def: "Maximum amount insurer will pay for veterinary treatment (£3,000-£15,000 typically)" }
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
              <Link to="/calculators/home-insurance-quote" className="bg-orange-50 hover:bg-orange-100 border-l-4 border-orange-500 p-6 rounded transition">
                <h3 className="font-semibold text-gray-900 mb-2">Home Insurance Quote</h3>
                <p className="text-sm text-gray-700">Compare home insurance from leading providers</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-3">Get Your Pet Protected Today</h2>
            <p className="mb-6">Get personalized pet insurance quotes instantly. Compare lifetime, time-limited, and accident-only cover from leading UK insurers. Protect your beloved pet's health and your finances.</p>
            
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Get Free Quote
            </button>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This tool provides estimates for informational purposes only. Actual pet insurance quotes depend on your pet's species, breed, age, health, and location.</p>
          <p className="mt-2"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></p>
        </div>
      </div>
    </div>
  )
}




