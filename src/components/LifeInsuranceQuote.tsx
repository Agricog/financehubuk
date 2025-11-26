import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LifeInsuranceQuotePage() {
  useEffect(() => {
    document.title = 'Free Life Insurance Quote Comparison UK | Protect Your Family'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare free life insurance quotes from top UK providers. Get personalized term life, whole life, and income protection quotes instantly. Protect your family\'s financial future.')
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', 'Free Life Insurance Quote Comparison UK | Protect Your Family')
    
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', 'Get personalized life insurance quotes instantly. Compare term life, whole life, and critical illness cover from leading UK insurers. Protect your family today.')
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', window.location.href)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', 'https://financehubuk.co.uk/images/life-insurance-og.jpg')

    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    if (twitterCard) twitterCard.setAttribute('content', 'summary_large_image')

    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', 'Free Life Insurance Quote Comparison UK')

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', 'Compare life insurance quotes from leading UK providers and protect your family.')

    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://financehubuk.co.uk/calculators/life-insurance-quote')
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
              'name': 'Life Insurance Quote',
              'item': 'https://financehubuk.co.uk/calculators/life-insurance-quote'
            }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Life Insurance Quote Comparison Tool',
          'description': 'Compare free life insurance quotes from top UK providers. Get personalized term life, whole life, and income protection quotes instantly.',
          'applicationCategory': 'FinanceApplication',
          'url': 'https://financehubuk.co.uk/calculators/life-insurance-quote',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'GBP'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'ratingCount': '2156'
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'What types of life insurance are available in the UK?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'The main types are: Term Life Insurance (covers specific period - cheapest option), Whole of Life Insurance (covers entire life with guaranteed payout), Over 50s Life Insurance (no medical exam, guaranteed acceptance), and Critical Illness Cover (pays lump sum if diagnosed with serious illness).'
              }
            },
            {
              '@type': 'Question',
              'name': 'How much life insurance do I need?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Financial advisers recommend 10-12 times your annual income. Use this formula: outstanding mortgage + debts + future expenses + 3-5 years household income - savings = recommended cover. Example: £200k mortgage + £20k debts + £60k expenses = £280k cover needed.'
              }
            },
            {
              '@type': 'Question',
              'name': 'How much does life insurance cost?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Term life insurance typically costs £10-£50/month for £250,000 cover depending on age, health, and smoking status. A healthy 25-year-old might pay £15/month while a 45-year-old smoker could pay £80/month for the same cover.'
              }
            },
            {
              '@type': 'Question',
              'name': 'What is life insurance "in trust" and why does it matter?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Writing your policy in trust means payout goes directly to beneficiaries, bypassing your estate. Benefits: faster payout (days vs months), no inheritance tax (currently 40% above £325,000), and protection from creditors. It\'s free and highly recommended.'
              }
            }
          ]
        },
        {
          '@type': 'HowTo',
          'name': 'How to Get a Life Insurance Quote',
          'step': [
            {
              '@type': 'HowToStep',
              'name': 'Personal Information',
              'text': 'Enter your age, gender, health status, and smoking status. Be accurate - insurers verify this.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Coverage Needs',
              'text': 'Specify how much cover you need (typically 10-12x annual income) and the term (10-40 years).'
            },
            {
              '@type': 'HowToStep',
              'name': 'Additional Covers',
              'text': 'Choose optional add-ons like critical illness cover, waiver of premium, or family income benefit.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Get Instant Quotes',
              'text': 'Receive personalized quotes from leading UK insurers instantly based on your profile.'
            },
            {
              '@type': 'HowToStep',
              'name': 'Purchase & Complete',
              'text': 'Choose your preferred quote, complete full health declarations, and activate cover.'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Life Insurance Quote Comparison UK 2025</h1>
          <p className="text-lg text-gray-600">Compare life insurance quotes from top UK providers instantly. Get personalized term life, whole life, and income protection quotes. Protect your family's financial future.</p>
          <p className="text-sm text-gray-500 mt-2">Last updated: 26 November 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Life Insurance Quote</h2>
          
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Get personalized life insurance quotes based on your age, health, and coverage needs. Compare term life, whole life, and income protection policies from top-rated UK insurers. Takes just 2 minutes to get started.
            </p>
            
            <iframe
              src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false&Prefill_Registration+Source=Life-Insurance"
              width="100%"
              height="350"
              frameBorder="0"
              title="Life Insurance Quote Form"
              className="rounded-lg border border-gray-200"
            ></iframe>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Our Life Insurance Quote Tool</h2>
            <ol className="space-y-3 text-gray-700">
              <li><strong>1. Enter personal information</strong> (age, gender, health status, smoking)</li>
              <li><strong>2. Specify coverage needs</strong> (amount needed, desired term length)</li>
              <li><strong>3. Choose optional add-ons</strong> (critical illness, waiver, family income)</li>
              <li><strong>4. Get instant quotes</strong> from multiple UK insurers</li>
              <li><strong>5. Compare policies</strong> - features, terms, monthly costs</li>
              <li><strong>6. Purchase & activate</strong> - complete health declarations and get covered</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Life Insurance Explained</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Term Life Insurance (Most Common)</h3>
                <p className="text-gray-700 mb-2">Covers you for specific period (10-40 years). Pays lump sum if you die within term. No payout if you outlive policy. Cheapest option - £10-£50/month for £250,000 cover.</p>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> Families with mortgages, young children, income earners.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Whole of Life Insurance</h3>
                <p className="text-gray-700 mb-2">Covers you for entire life (guaranteed payout). Builds cash value over time. More expensive - £80-£200+/month for £100,000 cover.</p>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> Estate planning, inheritance tax, funeral costs, leaving legacy.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                <h3 className="font-semibold text-gray-900 mb-2">Over 50s Life Insurance</h3>
                <p className="text-gray-700 mb-2">No medical exam, guaranteed acceptance (ages 50-80). Lower payouts (£5,000-£15,000). Higher premiums - often pay more than you'll ever receive.</p>
                <p className="text-sm text-gray-600"><strong>Best for:</strong> Funeral costs, final expenses when traditional life insurance rejected.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Life Insurance Do You Need?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Financial advisers recommend cover that replaces 10-12 times your annual income. Here's how to calculate:</p>
              
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Calculation Formula</h4>
                <ul className="space-y-1 ml-4 font-mono text-sm">
                  <li>Outstanding mortgage</li>
                  <li>+ Other debts (loans, credit cards)</li>
                  <li>+ Future expenses (childcare, education)</li>
                  <li>+ 3-5 years household income</li>
                  <li>- Existing savings/investments</li>
                  <li>= <strong>Recommended cover amount</strong></li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">Example Calculation</h4>
                <ul className="space-y-1 text-gray-700 ml-4">
                  <li>• Mortgage outstanding: £200,000</li>
                  <li>• Other debts: £20,000</li>
                  <li>• Future expenses (3 years): £60,000</li>
                  <li>• Existing savings: £0</li>
                  <li><strong>Total cover needed: £280,000</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect Your Premium</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="space-y-2 ml-4">
                <li>• <strong>Age:</strong> 25-year-old pays £10/month for £250k. 45-year-old pays £35/month for same cover.</li>
                <li>• <strong>Smoking Status:</strong> Smokers pay 2-3x more. Even occasional social smoking counts.</li>
                <li>• <strong>Health Conditions:</strong> Diabetes, high blood pressure, cancer history increase premiums 50-200%.</li>
                <li>• <strong>Occupation:</strong> High-risk jobs (construction, military, pilots) pay 30-100% more.</li>
                <li>• <strong>Hobbies:</strong> Dangerous activities (skydiving, scuba diving, motorsports) add 20-50% premium.</li>
                <li>• <strong>Family History:</strong> Heart disease, cancer in close relatives before age 60 affects rates.</li>
                <li>• <strong>BMI:</strong> Underweight or obese (BMI under 18 or over 35) increases premiums 10-30%.</li>
                <li>• <strong>Cover Amount & Term:</strong> More cover or longer term = higher premium (but better value per £).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Joint vs Individual Life Insurance</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Joint Life Insurance (First Death)</h3>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-900 mb-1">✓ Pros:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Cheaper (one policy vs two)</li>
                    <li>• Simpler administration</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-900 mb-1">✗ Cons:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Only pays out once (first death)</li>
                    <li>• Survivor left uninsured</li>
                    <li>• Complicated if you divorce</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Married couples with mortgage, no major health issues.</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Two Individual Policies</h3>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-900 mb-1">✓ Pros:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Both insured throughout life</li>
                    <li>• Survives divorce</li>
                    <li>• Different cover amounts</li>
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-900 mb-1">✗ Cons:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• 10-15% more expensive</li>
                    <li>• Two policies to manage</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Couples with different incomes or health issues.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Illness vs Life Insurance vs Income Protection</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">Many people confuse these three - they serve different purposes:</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Life Insurance</h4>
                  <p className="text-sm">Pays out when you die. Protects family from loss of income, covers debts and mortgage.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Critical Illness Cover</h4>
                  <p className="text-sm">Pays lump sum if diagnosed with serious illness (cancer, heart attack, stroke, MS). You receive payout while alive to cover medical costs and replace income during recovery.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Income Protection</h4>
                  <p className="text-sm">Pays monthly income if unable to work due to illness/injury. Covers 50-70% of salary until you can work again or retire. Most comprehensive for long-term sickness.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Life Insurance Mistakes to Avoid</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• <strong>Not disclosing smoking/health conditions</strong> - voids policy, no payout</li>
                <li>• <strong>Underestimating cover needed</strong> - leaves family financially vulnerable</li>
                <li>• <strong>Choosing over 50s policy when regular term life is cheaper</strong> - poor value for younger applicants</li>
                <li>• <strong>Writing policy in own name instead of trust</strong> - family may wait months and pay inheritance tax</li>
                <li>• <strong>Not reviewing cover after major life events</strong> - marriage, children, house purchase</li>
                <li>• <strong>Cancelling existing policy before new one starts</strong> - gap in cover</li>
                <li>• <strong>Buying through funeral plan companies</strong> - often overpriced, poor value</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Do I need life insurance if I'm single with no kids?", a: "Probably not, unless you have debts others would inherit (joint mortgage) or want to leave money to family. Life insurance is primarily for income earners with financial dependents." },
                { q: "Can I be refused life insurance?", a: "Yes, insurers can decline based on serious health conditions, high-risk lifestyle, or age. If refused, try specialist brokers who work with high-risk insurers. Over 50s plans offer guaranteed acceptance." },
                { q: "Does life insurance pay out for suicide?", a: "Most policies exclude suicide in the first 12-24 months (contestability period). After this period, UK policies typically do pay out. Always check your specific policy terms." },
                { q: "What is 'life insurance in trust' and why does it matter?", a: "Writing your policy in trust means payout goes directly to beneficiaries, bypassing your estate. This means: faster payout (days vs months), no inheritance tax (40% above £325,000), and protection from creditors. It's free and highly recommended." },
                { q: "Can I have multiple life insurance policies?", a: "Yes, there's no limit. You might have employer life insurance (typically 2-4x salary), personal term life for mortgage, and whole life for inheritance. All policies pay out independently." },
                { q: "What happens to my life insurance if I move abroad?", a: "Depends on your policy. Some UK insurers continue cover worldwide, others cancel or charge higher premiums for non-UK residents. Always notify your insurer before moving." },
                { q: "Should I get life insurance through my employer or independently?", a: "Both. Employer life insurance is free and valuable, but you lose it if you leave the job. Personal life insurance travels with you. Most advisers recommend having both for maximum protection." },
                { q: "Can I reduce my life insurance premiums after purchase?", a: "Generally no - premiums are fixed for the term. However, you can reduce coverage (lower payout = lower cost), extend the term (better value over time), or shop around at renewal for better rates with different providers." },
                { q: "What medical tests are required for life insurance?", a: "For small amounts (under £250,000), often none - just health declarations. Larger amounts typically require blood/urine tests, sometimes ECG. Very high amounts may require full medical exam. Results usually available within 2 weeks." },
                { q: "How long does a life insurance claim take to pay out?", a: "If policy is in trust and beneficiaries provide full documentation, payout typically occurs within 2-4 weeks. Without trust or if disputes arise (e.g., medical records needed), can take 2-3 months or longer." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Glossary of Life Insurance Terms</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { term: "Beneficiary", def: "Person(s) who receive the life insurance payout when you die" },
                { term: "Critical Illness Cover", def: "Optional add-on paying lump sum if diagnosed with serious illness (cancer, heart attack, stroke)" },
                { term: "Death Benefit", def: "Lump sum payout to beneficiaries when policyholder dies" },
                { term: "Decreasing Term", def: "Term life where payout amount decreases over time (often matches mortgage balance)" },
                { term: "Family Income Benefit", def: "Optional add-on paying monthly income to family instead of lump sum if you die" },
                { term: "In Trust", def: "Policy written in trust so payout bypasses estate (faster payout, no inheritance tax)" },
                { term: "Income Protection", def: "Separate insurance paying monthly income if unable to work due to illness/injury" },
                { term: "Joint Policy", def: "Single policy covering two people (pays out on first death)" },
                { term: "Lump Sum", def: "Single cash payment made to beneficiaries (vs monthly income payments)" },
                { term: "Premium", def: "Monthly or annual payment you make to keep life insurance active" },
                { term: "Sum Assured", def: "Amount of life insurance cover you have (payout amount if you die)" },
                { term: "Term", def: "Length of time you're covered (e.g., 25 years) - reverts to no cover when term ends" }
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
            <h2 className="text-2xl font-bold mb-3">Protect Your Family's Future Today</h2>
            <p className="mb-6">Get personalized life insurance quotes instantly. Compare term life, whole life, and income protection policies from leading UK insurers. Protect your family's financial security.</p>
            
            <button 
  onClick={() => document.querySelector('iframe')?.scrollIntoView({ behavior: 'smooth' })}
  className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
>
  Get Free Quote
</button>

          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>This tool provides estimates for informational purposes only. Actual life insurance quotes depend on your health, lifestyle, and personal circumstances.</p>
        </div>
      </div>
    </div>
  )
}

