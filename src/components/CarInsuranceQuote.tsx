import { ArrowLeft, Car } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CarInsuranceQuote() {
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
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Car Insurance Quote</h1>
              <p className="text-gray-600">Compare car insurance rates from leading UK insurers</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Get instant car insurance quotes tailored to your vehicle and driving history. Compare comprehensive,
              third party, and third party fire & theft policies from over 100 UK insurers.
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
          <h2 className="text-2xl font-bold mb-6">Car Insurance in the UK Explained</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Types of Car Insurance</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="block mb-2 text-blue-900">Third Party Only (Cheapest)</strong>
                  <p className="text-sm">
                    Legal minimum in the UK. Covers damage/injury you cause to others, but NOT your own vehicle. Best
                    for old cars worth under £1,000. Average: £400-£800/year.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <strong className="block mb-2 text-green-900">Third Party, Fire & Theft (Mid-Range)</strong>
                  <p className="text-sm">
                    Adds fire damage and theft protection to third party cover. Good for cars worth £1,000-£5,000.
                    Average: £500-£1,000/year.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <strong className="block mb-2 text-purple-900">Comprehensive (Full Cover)</strong>
                  <p className="text-sm">
                    Covers everything: damage to your car (even if your fault), theft, fire, vandalism, windscreen,
                    personal injury. Recommended for cars over £5,000. Average: £600-£1,200/year.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Factors That Affect Your Premium</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Age & Experience:</strong> Drivers under 25 pay 2-3x more. New drivers (less than 2 years) face
                  highest rates.
                </li>
                <li>
                  <strong>Vehicle Type:</strong> Insurance groups 1-50 (higher = more expensive). Sports cars, luxury
                  vehicles, and high-performance models cost most.
                </li>
                <li>
                  <strong>Postcode:</strong> Urban areas with high crime/accident rates increase premiums by 30-50%.
                </li>
                <li>
                  <strong>Annual Mileage:</strong> Under 5,000 miles = cheaper. Over 15,000 miles = more expensive.
                </li>
                <li>
                  <strong>No Claims Bonus:</strong> Up to 75% discount after 5+ claim-free years.
                </li>
                <li>
                  <strong>Occupation:</strong> Some jobs (teachers, accountants) get discounts. Others (couriers,
                  entertainers) pay more.
                </li>
                <li>
                  <strong>Driving Convictions:</strong> SP30 (speeding) adds 10-20%. DR10 (drink driving) adds 50-100%.
                </li>
                <li>
                  <strong>Voluntary Excess:</strong> Higher excess (£500+) reduces premium by 10-25%.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How to Cut Your Car Insurance Costs</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Black Box Insurance:</strong> Telematics monitors driving. Safe drivers save 20-40% (especially
                  young drivers).
                </li>
                <li>
                  <strong>Add Experienced Named Driver:</strong> Adding parent as named driver can reduce young driver
                  premiums 10-15%.
                </li>
                <li>
                  <strong>Pay Annually:</strong> Monthly payments include interest (10-20% APR). Pay upfront to save £50-£150.
                </li>
                <li>
                  <strong>Limit Mileage:</strong> Accurate low mileage estimate saves money. But don't lie - voids policy.
                </li>
                <li>
                  <strong>Secure Parking:</strong> Garage parking vs street parking saves 5-10%.
                </li>
                <li>
                  <strong>Dash Cam Discount:</strong> Some insurers offer 10-15% off for dash cam installation.
                </li>
                <li>
                  <strong>Advanced Driving Courses:</strong> Pass Plus or IAM courses earn 5-10% discounts.
                </li>
                <li>
                  <strong>Multi-Car Policy:</strong> Insure multiple cars with same insurer for 10-15% discount.
                </li>
                <li>
                  <strong>Compare Annually:</strong> Loyalty penalty means staying costs 20-40% more than switching.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Optional Extras Worth Considering</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Breakdown Cover (+£30-£100/year)</strong>
                  <p className="text-sm">
                    Roadside assistance, recovery, home start. Often cheaper bundled with insurance than standalone AA/RAC.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Courtesy Car (+£20-£50/year)</strong>
                  <p className="text-sm">
                    Provides replacement vehicle while yours is repaired after accident. Essential if you rely on your car.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Legal Expenses (+£15-£30/year)</strong>
                  <p className="text-sm">
                    Covers legal fees for uninsured losses, injury claims, and recovering costs from at-fault parties.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Protected No Claims Bonus (+£40-£80/year)</strong>
                  <p className="text-sm">
                    Allows 1-2 at-fault claims without losing NCB. Worth it if you have 4+ years NCB.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Young Driver Insurance Tips</h3>
              <p className="leading-relaxed mb-3">
                Insurance for drivers under 25 is notoriously expensive (£1,500-£3,000+/year). Here's how to reduce it:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Choose low insurance group cars (Groups 1-10): Ford Fiesta, VW Polo, Toyota Aygo</li>
                <li>Consider black box/telematics insurance (saves 30-50% for safe drivers)</li>
                <li>Take Pass Plus course immediately after passing test (saves 10-20%)</li>
                <li>Add experienced parent as named driver (not main driver - that's fronting and illegal)</li>
                <li>Start with third party or TPFT on older car to build no claims bonus</li>
                <li>Avoid modifications (body kits, spoilers, alloys) - increases premium 20-50%</li>
                <li>Consider annual vs monthly payment - saves £100-£200 on high premiums</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Car Insurance FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I drive other cars with comprehensive insurance?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most comprehensive policies include "driving other cars" third party cover, but it's becoming rarer.
                Always check your policy - never assume. It only covers emergency use, not regular driving of another
                vehicle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What's the difference between market value and agreed value?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Market value (most policies) pays current market price if car is written off. Agreed value (classic car
                policies) sets specific payout amount upfront. For modified or classic cars, agreed value prevents
                disputes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Does car insurance cover driving in Europe?</h3>
              <p className="text-gray-700 leading-relaxed">
                Most UK pet insurance lets you use any licensed vet. Some policies restrict specialist referrals (requiring
                pre-authorization). Always check if your preferred vet accepts direct claims.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Will a non-fault accident affect my premium?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, surprisingly. Even non-fault claims can increase premiums 10-20% as insurers view you as higher
                risk. Your no claims bonus is usually protected if you're not at fault, but the base premium may still
                rise.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">What happens if I'm caught without insurance?</h3>
              <p className="text-gray-700 leading-relaxed">
                Driving without insurance is illegal and carries severe penalties: £300 fixed penalty + 6 points on
                licence, or unlimited fine + driving ban in court. Car may be seized and crushed. Future insurance costs
                skyrocket (often doubles).
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I cancel my car insurance and get a refund?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You have 14 days "cooling off" period for full refund (minus admin fee). After that, you can cancel
                anytime but pay cancellation fee (£25-£75) plus short-period insurance charge. If you've claimed, you may
                get no refund.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Does car colour affect insurance cost?</h3>
              <p className="text-gray-700 leading-relaxed">
                No, this is a myth. UK insurers don't consider colour. What matters is make, model, engine size,
                insurance group, and modifications. Red cars don't cost more - but red sports cars in high insurance
                groups certainly do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

