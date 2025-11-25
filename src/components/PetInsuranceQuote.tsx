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
                  <strong className="block mb-1">Young Small Dog (1 year old, e.g.,
