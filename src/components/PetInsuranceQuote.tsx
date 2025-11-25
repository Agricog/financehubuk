import { ArrowLeft, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PetInsuranceQuote() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Calculators
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Pet Insurance Quote</h1>
              <p className="text-gray-600">Compare pet insurance plans for dogs, cats, and more</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Get instant pet insurance quotes tailored to your pet's breed, age, and health. Compare accident-only,
              time-limited, and lifetime cover from leading UK pet insurers.
            </p>
          </div>

          <iframe
            src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false"
            width="100%"
            height="800px"
            frameBorder="0"
            className="rounded-lg border border-gray-200"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Pet Insurance Explained for UK Pet Owners</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Types of Pet Insurance</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="block mb-2 text-blue-900">Accident Only (Cheapest)</strong>
                  <p className="text-sm mb-2">
                    Covers injuries from accidents (hit by car, broken bones, poisoning). Does NOT cover illnesses. Very
                    limited - only suitable for young, healthy pets on tight budgets. Average: £8-£15/month.
                  </p>
                  <p className="text-xs text-blue-800">
                    <strong>Not recommended:</strong> Illnesses cost far more than accidents. Limited value.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <strong className="block mb-2 text-yellow-900">Time-Limited (12 Months Per Condition)</strong>
                  <p className="text-sm mb-2">
                    Covers each condition for 12 months from first diagnosis, up to annual limit (£1,000-£2,000). After 12
                    months, that condition is excluded forever. Suitable for short-term illnesses only. Average: £15-£30/month.
                  </p>
                  <p className="text-xs text-yellow-800">
                    <strong>Risky for:</strong> Chronic conditions (arthritis, diabetes) exceed 12-month limit.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <strong className="block mb-2 text-green-900">Lifetime (Best Cover - RECOMMENDED)</strong>
                  <p className="text-sm mb-2">
                    Provides annual vet fee limit (£3,000-£15,000) that renews every year for life. Covers ongoing
                    conditions indefinitely as long as you renew. Gold standard for comprehensive protection. Average:
                    £25-£60/month.
                  </p>
                  <p className="text-xs text-green-800">
                    <strong>Best for:</strong> All pets, especially breeds prone to hereditary conditions.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <strong className="block mb-2 text-purple-900">Maximum Benefit (Per Condition Limit)</strong>
                  <p className="text-sm mb-2">
                    Each condition has lifetime maximum (£3,000-£7,000). Once reached, that condition is excluded forever.
                    No annual renewal of limits. Cheaper than lifetime but higher risk. Average: £20-£40/month.
                  </p>
                  <p className="text-xs text-purple-800">
                    <strong>Risk:</strong> Expensive conditions (cancer £8,000+) can exhaust limit quickly.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What's Covered (Lifetime Policies)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Usually Covered</h4>
                  <ul className="space-y-1 text-sm">
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
                  <h4 className="font-semibold text-red-700 mb-2">✗ Usually NOT Covered</h4>
                  <ul className="space-y-1 text-sm">
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
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How Much Does Pet Insurance Really Cost?</h3>
              <p className="leading-relaxed mb-3">
                Pet insurance costs vary dramatically based on species, breed, age, and location:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Young Cat (1 year old) - Lifetime £4,000 cover</strong>
                  <p className="text-sm">Average: £12-£20/month. Moggies cheaper than pedigrees (Persians, Bengals).</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Adult Cat (5 years old) - Lifetime £4,000 cover</strong>
                  <p className="text-sm">Average: £20-£35/month. Premiums rise with age.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Young Small Dog (1 year old, e.g., Jack Russell) - Lifetime £6,000 cover</strong>
                  <p className="text-sm">Average: £20-£35/month. Small breeds generally cheaper.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Young Large Dog (1 year old, e.g., Labrador) - Lifetime £8,000 cover</strong>
                  <p className="text-sm">Average: £35-£55/month. Large breeds cost more (hip dysplasia, cruciate issues).</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Young Pedigree Dog (1 year old, e.g., French Bulldog) - Lifetime £10,000 cover</strong>
                  <p className="text-sm">
                    Average: £60-£120/month. Brachycephalic breeds (Pugs, Bulldogs) have highest premiums due to breathing
                    issues.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Senior Dog (10 years old) - Lifetime £6,000 cover</strong>
                  <p className="text-sm">
                    Average: £80-£150+/month. Over 8-10 years, premiums skyrocket. Many insurers won't accept new policies
                    for dogs over 8-10 years old.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">The Pre-Existing Conditions Trap</h3>
              <p className="leading-relaxed mb-3">
                <strong className="text-red-600">This is the #1 reason claims are rejected.</strong> Any condition your pet
                showed signs of before the policy started is excluded forever - even if undiagnosed.
              </p>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-3">
                <strong className="block mb-2 text-red-900">Real Example:</strong>
                <p className="text-sm">
                  Your dog limps once before insurance starts. You don't think much of it. Six months later, diagnosed with
                  hip dysplasia (£4,000 surgery). Claim rejected because "signs existed pre-policy." You pay £4,000 out of
                  pocket despite paying £40/month premiums.
                </p>
              </div>
              <p className="leading-relaxed">
                <strong>Critical rule:</strong> Insure pets while young and healthy. Waiting until they show symptoms means
                that condition is excluded forever.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ways to Reduce Your Premium</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Increase voluntary excess:</strong> £100-£250 excess reduces premium 15-25%. But you pay first
                  portion of every claim.
                </li>
                <li>
                  <strong>Lower vet fee limit:</strong> £4,000 vs £8,000 limit saves 20-30%, but risky for expensive
                  conditions (cancer £10,000+).
                </li>
                <li>
                  <strong>Choose co-insurance:</strong> 80% policies (you pay 20%) save 10-20% but you cover portion of
                  every claim.
                </li>
                <li>
                  <strong>Microchip your pet:</strong> Many insurers give 5-10% discount for microchipped pets.
                </li>
                <li>
                  <strong>Neuter/spay:</strong> Some insurers discount 5% for neutered pets (reduces certain health risks).
                </li>
                <li>
                  <strong>Multi-pet discount:</strong> Insure 2+ pets with same insurer for 10% off each policy.
                </li>
                <li>
                  <strong>Pay annually:</strong> Avoid monthly payment fees (typically 9-12% APR hidden cost).
                </li>
                <li>
                  <strong>Shop around yearly:</strong> Premiums rise 20-40% at renewal. Switching can save £100-£300/year.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Is Pet Insurance Worth It?</h3>
              <p className="leading-relaxed mb-3">
                <strong>Simple answer: It depends on your financial situation and risk tolerance.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <strong className="block mb-2 text-green-900">Get Insurance If:</strong>
                  <ul className="space-y-1 text-sm">
                    <li>✓ You couldn't afford £3,000+ unexpected vet bill</li>
                    <li>✓ Your pet is pedigree/prone to health issues</li>
                    <li>✓ You'd struggle with financial decisions vs pet's health</li>
                    <li>✓ You want peace of mind and predictable costs</li>
                    <li>✓ Your pet is young (under 5 years)</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="block mb-2 text-blue-900">Self-Insure If:</strong>
                  <ul className="space-y-1 text-sm">
                    <li>✓ You have £5,000+ emergency fund for pets</li>
                    <li>✓ You're comfortable with financial risk</li>
                    <li>✓ Your pet is mixed breed/healthy history</li>
                    <li>✓ You'd save premium in high-interest account</li>
                    <li>✓ Your pet is already senior (over 8 years)</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm mt-3 text-gray-600">
                <strong>Reality check:</strong> Over a pet's lifetime (15 years), you'll pay £5,000-£15,000 in premiums.
                Most pets won't claim that much. But 1 in 3 pets will have a claim over £3,000 in their lifetime. Insurance
                is about protecting against the worst-case scenario, not getting "value for money" back.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Common Pet Insurance Mistakes</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-red-700">
                <li>Waiting until pet is older/symptomatic to buy insurance (pre-existing exclusions)</li>
                <li>Choosing accident-only or time-limited to save money (false economy - inadequate cover)</li>
                <li>Not reading policy wording - assuming "lifetime" means unlimited (it doesn't)</li>
                <li>Failing to declare all health issues at application (voids entire policy)</li>
                <li>Cancelling policy after one expensive year (lose continuity, new conditions excluded)</li>
                <li>Not shopping around annually (loyalty penalty = 30-50% higher premiums)</li>
                <li>Setting excess too high to save money (£500 excess means you pay first £500 of every claim)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Pet Insurance FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I switch pet insurance with pre-existing conditions?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, but the new insurer will exclude any conditions your pet has been treated for (or shown symptoms of) in
                the past. This is why continuity matters - once you start a policy with a condition covered, that insurer
                continues covering it (as long as you renew annually).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Do pet insurance premiums increase every year?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, for two reasons: (1) Your pet ages, becoming higher risk. (2) Vet costs rise 5-10% annually. Expect
                premiums to increase 10-20% per year, sometimes more. By age 10, you may be paying 3-4x what you started
                with.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What's the difference between co-insurance and excess?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Excess is a fixed amount you pay per condition per year (e.g., first £100 of each claim). Co-insurance is a
                percentage you pay of every claim (e.g., 20% of all costs). Some policies have both. A £2,000 claim with
                £100 excess + 20% co-insurance means you pay £100 + £380 (20% of £1,900) = £480.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Will pet insurance cover dental treatment?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Only if it's due to accident or illness (e.g., broken tooth from injury). Routine dental care, tartar
                buildup, and preventable gum disease are excluded. Some insurers offer optional dental cover add-on for
                £5-£10/month extra.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I use any vet, or does insurance restrict me?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most UK pet insurance lets you use any licensed vet. Some policies restrict specialist referrals (requiring
                pre-authorization). Always check if your preferred vet accepts direct claims (some insurers pay vet
                directly, others reimburse you).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Should I insure my rabbit, guinea pig, or exotic pet?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fewer insurers cover exotics, and premiums are higher (£10-£30/month for rabbits). Vet fees can be
                expensive (£500-£2,000 for serious conditions). If you can't afford large unexpected bills, insurance is
                worth considering. But check policy limits - they're often lower than dog/cat policies (£1,000-£3,000).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What happens if my vet bill exceeds my annual limit?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You pay the excess out of pocket. This is why choosing adequate vet fee limits matters. £4,000 lifetime
                cover may seem generous, but cancer treatment easily costs £8,000-£12,000. Consider £6,000-£10,000 limits
                for larger breeds or pedigrees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


