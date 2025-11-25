import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeInsuranceQuote() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Calculators
        </Link>

        {/* Quote Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
              <Home className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Home Insurance Quote</h1>
              <p className="text-gray-600">Compare home insurance quotes from top UK providers</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Get instant home insurance quotes by completing the form below. We'll compare rates from leading UK
              insurers to find you the best coverage at the best price. Takes just 2 minutes.
            </p>
          </div>

          {/* SmartSuite Form */}
          <iframe
            src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false"
            width="100%"
            height="800px"
            frameBorder="0"
            className="rounded-lg border border-gray-200"
          />
        </div>

        {/* Educational Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Understanding Home Insurance in the UK</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Types of Home Insurance</h3>
              <p className="leading-relaxed mb-3">
                UK home insurance comes in three main types, each offering different levels of protection:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="block mb-2 text-blue-900">Buildings Insurance</strong>
                  <p className="text-sm text-gray-700">
                    Covers the structure of your home (walls, roof, floors, permanent fixtures). Required by mortgage
                    lenders. Protects against fire, flood, subsidence, storm damage. Average cost: £150-£300/year.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <strong className="block mb-2 text-green-900">Contents Insurance</strong>
                  <p className="text-sm text-gray-700">
                    Covers your belongings (furniture, electronics, clothing, jewelry). Optional but recommended.
                    Includes theft, accidental damage, and items temporarily away from home. Average cost: £100-£200/year.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <strong className="block mb-2 text-purple-900">Combined Buildings & Contents</strong>
                  <p className="text-sm text-gray-700">
                    Bundles both policies for complete protection and typically saves 10-15% vs buying separately.
                    Average cost: £200-£400/year.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What's Covered and What's Not</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✓ Typically Covered</h4>
                  <ul className="space-y-1 text-sm">
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
                  <h4 className="font-semibold text-red-700 mb-2">✗ Typically NOT Covered</h4>
                  <ul className="space-y-1 text-sm">
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
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How to Calculate the Right Coverage</h3>
              <p className="leading-relaxed mb-3">
                Under-insuring can leave you out of pocket, while over-insuring wastes money on premiums you don't need:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Buildings sum insured:</strong> Should equal full rebuild cost (not market value). Use RICS
                  calculator or surveyor estimate. Average UK rebuild: £250,000-£400,000.
                </li>
                <li>
                  <strong>Contents sum insured:</strong> Add up value of all belongings. Don't forget loft, garage,
                  shed. Average UK contents: £30,000-£50,000.
                </li>
                <li>
                  <strong>Single item limits:</strong> Check maximum payout per item (typically £1,500-£2,500). Specify
                  high-value items separately.
                </li>
                <li>
                  <strong>Bedroom-based pricing:</strong> Many insurers use number of bedrooms as a pricing shortcut,
                  but itemized valuations are more accurate.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ways to Reduce Your Premium</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Increase voluntary excess:</strong> Paying first £250-£500 of any claim can cut premiums by
                  20-30%
                </li>
                <li>
                  <strong>Improve home security:</strong> Burglar alarms, window locks, secure doors earn discounts
                  (5-15% off)
                </li>
                <li>
                  <strong>Pay annually:</strong> Avoid monthly payment fees (typically 10-15% APR hidden cost)
                </li>
                <li>
                  <strong>Bundle policies:</strong> Combine buildings and contents, or add car insurance for multi-policy
                  discounts
                </li>
                <li>
                  <strong>No claims bonus:</strong> Years without claims earn discounts (up to 30% after 5+ years)
                </li>
                <li>
                  <strong>Avoid automatic renewal:</strong> Loyalty penalty means renewals are 20-40% higher - switch
                  every year
                </li>
                <li>
                  <strong>Accurate job title:</strong> Some jobs (teachers, nurses) get better rates than others
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Optional Add-Ons Worth Considering</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Accidental Damage Cover (+£20-£40/year)</strong>
                  <p className="text-sm">
                    Covers spilled wine on carpets, dropped TVs, cracked toilets. Useful for families with children or
                    pets.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Legal Expenses Cover (+£15-£25/year)</strong>
                  <p className="text-sm">
                    Legal fees for contract disputes, employment issues, personal injury claims up to £100,000.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Home Emergency Cover (+£30-£60/year)</strong>
                  <p className="text-sm">
                    24/7 callouts for boiler breakdowns, blocked drains, broken locks, roof damage. Alternative heating
                    and accommodation if needed.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Personal Possessions (+£20-£50/year)</strong>
                  <p className="text-sm">
                    Extends contents cover outside the home (phones, laptops, bikes, jewelry). Worldwide coverage up to
                    £10,000.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What to Do When Making a Claim</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact insurer immediately:</strong> Most have 24/7 claims lines and online portals
                </li>
                <li>
                  <strong>Document everything:</strong> Photos, videos, receipts, police crime reference (for theft)
                </li>
                <li>
                  <strong>Prevent further damage:</strong> Make temporary repairs (keep receipts - you can claim these
                  back)
                </li>
                <li>
                  <strong>Don't throw away damaged items:</strong> Insurer may want to inspect them
                </li>
                <li>
                  <strong>Get multiple quotes:</strong> For repairs/replacements if insurer asks you to arrange
                </li>
                <li>
                  <strong>Track all correspondence:</strong> Keep copies of emails, claim forms, and reference numbers
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Home Insurance FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Do I need buildings insurance if I have a mortgage?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, all UK mortgage lenders require buildings insurance as a condition of the loan. This protects their
                investment in case the property is damaged or destroyed. Contents insurance remains optional.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Does home insurance cover flood damage?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Standard policies cover flood damage, but homes in high-risk areas may face higher premiums or excesses.
                The Flood Re scheme helps make flood insurance affordable for at-risk properties. Check your postcode's
                flood risk on the Environment Agency website.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What happens if I'm underinsured?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If your sum insured is less than the actual value, insurers may apply "average" - reducing your payout
                proportionally. Example: If you're insured for £200,000 but true value is £300,000, you're 33%
                underinsured, so a £60,000 claim only pays £40,000.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I switch insurers mid-policy?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, but you may pay a cancellation fee (typically £25-£50) plus lose a pro-rata portion of your annual
                premium. It's usually cheaper to wait until renewal unless you've found drastically cheaper cover.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Does home insurance cover damage by tradies?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Accidental damage cover may include this, but the tradesperson's own public liability insurance should be
                the first port of call. Always use insured, reputable contractors and keep records of their insurance
                certificates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                How long does a home insurance claim take?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Simple claims (e.g., stolen laptop) can settle within 1-2 weeks. Complex claims (e.g., fire damage,
                subsidence) may take 3-6 months while investigators assess. Emergency repairs are usually approved within
                24-48 hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Does home insurance cover liability for injuries?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, most policies include public liability cover (typically £2-5 million) for injuries to visitors or
                damage to neighbours' property caused by you. This is separate from your buildings/contents cover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
