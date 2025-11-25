import { ArrowLeft, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LifeInsuranceQuote() {
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
              <h1 className="text-3xl font-bold text-gray-900">Life Insurance Quote</h1>
              <p className="text-gray-600">Protect your family's financial future</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Get personalized life insurance quotes based on your age, health, and coverage needs. Compare term life,
              whole life, and income protection policies from top-rated UK insurers.
            </p>
          </div>

          <iframe
            src="https://app.smartsuite.com/form/sba974gi/l5qQJVsntQ?header=false"
            width="100%"
            height="350px"
            frameBorder="0"
            className="rounded-lg border border-gray-200"
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Life Insurance Guide for UK Families</h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Types of Life Insurance</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="block mb-2 text-blue-900">Term Life Insurance (Most Common)</strong>
                  <p className="text-sm mb-2">
                    Covers you for specific period (10-40 years). Pays lump sum if you die within term. No payout if you
                    outlive policy. Cheapest option - £10-£50/month for £250,000 cover.
                  </p>
                  <p className="text-xs text-blue-800">
                    <strong>Best for:</strong> Families with mortgages, young children, income earners.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <strong className="block mb-2 text-green-900">Whole of Life Insurance</strong>
                  <p className="text-sm mb-2">
                    Covers you for entire life (guaranteed payout). Builds cash value over time. More expensive - £80-£200+/month
                    for £100,000 cover.
                  </p>
                  <p className="text-xs text-green-800">
                    <strong>Best for:</strong> Estate planning, inheritance tax, funeral costs, leaving legacy.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <strong className="block mb-2 text-purple-900">Over 50s Life Insurance</strong>
                  <p className="text-sm mb-2">
                    No medical exam, guaranteed acceptance (ages 50-80). Lower payouts (£5,000-£15,000). Higher premiums
                    - often pay more than you'll ever receive.
                  </p>
                  <p className="text-xs text-purple-800">
                    <strong>Best for:</strong> Funeral costs, final expenses when traditional life insurance rejected.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How Much Life Insurance Do I Need?</h3>
              <p className="leading-relaxed mb-3">
                Financial advisers recommend cover that replaces 10-12 times your annual income. Here's a quick formula:
              </p>
              <div className="p-4 bg-gray-100 rounded-lg mb-3">
                <p className="font-mono text-sm">
                  <strong>Basic formula:</strong><br />
                  Outstanding mortgage<br />
                  + Other debts (loans, credit cards)<br />
                  + Future expenses (childcare, education)<br />
                  + 3-5 years household income<br />
                  - Existing savings/investments<br />
                  = Recommended cover amount
                </p>
              </div>
              <p className="leading-relaxed">
                <strong>Example:</strong> £200k mortgage + £20k debts + £60k (3 years of £20k income) = £280,000 cover needed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Factors That Affect Your Premium</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Age:</strong> 25-year-old pays £10/month for £250k. 45-year-old pays £35/month for same cover.
                </li>
                <li>
                  <strong>Smoking Status:</strong> Smokers pay 2-3x more. Even occasional social smoking counts.
                </li>
                <li>
                  <strong>Health Conditions:</strong> Diabetes, high blood pressure, cancer history increase premiums 50-200%.
                </li>
                <li>
                  <strong>Occupation:</strong> High-risk jobs (construction, military, pilots) pay 30-100% more.
                </li>
                <li>
                  <strong>Hobbies:</strong> Dangerous activities (skydiving, scuba diving, motorsports) add 20-50% premium.
                </li>
                <li>
                  <strong>Family History:</strong> Heart disease, cancer in close relatives before age 60 affects rates.
                </li>
                <li>
                  <strong>BMI:</strong> Underweight or obese (BMI under 18 or over 35) increases premiums 10-30%.
                </li>
                <li>
                  <strong>Cover Amount & Term:</strong> More cover or longer term = higher premium (but better value per £).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Should I Get Joint or Individual Life Insurance?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <strong className="block mb-2 text-green-900">Joint Life Insurance (First Death)</strong>
                  <p className="text-sm mb-2">
                    <strong>Pros:</strong> Cheaper (one policy vs two), simpler administration
                  </p>
                  <p className="text-sm mb-2">
                    <strong>Cons:</strong> Only pays out once (first death), survivor left uninsured, complicated if you divorce
                  </p>
                  <p className="text-xs text-green-800">
                    <strong>Best for:</strong> Married couples with mortgage, no major health issues.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <strong className="block mb-2 text-blue-900">Two Individual Policies</strong>
                  <p className="text-sm mb-2">
                    <strong>Pros:</strong> Both insured throughout life, survives divorce, can have different cover amounts
                  </p>
                  <p className="text-sm mb-2">
                    <strong>Cons:</strong> 10-15% more expensive, two policies to manage
                  </p>
                  <p className="text-xs text-blue-800">
                    <strong>Best for:</strong> Couples with different incomes, health issues, or wanting maximum protection.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Critical Illness vs Life Insurance</h3>
              <p className="leading-relaxed mb-3">
                Many people confuse these - they serve different purposes:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Life Insurance</strong>
                  <p className="text-sm">
                    Pays out when you die. Protects family from loss of income, covers debts and mortgage.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Critical Illness Cover (+50-100% cost)</strong>
                  <p className="text-sm">
                    Pays lump sum if diagnosed with serious illness (cancer, heart attack, stroke, MS). You receive payout
                    while alive to cover medical costs, adapt home, replace income during recovery. Often added to life insurance.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <strong className="block mb-1">Income Protection (Separate Product)</strong>
                  <p className="text-sm">
                    Pays monthly income if unable to work due to illness/injury. Covers 50-70% of salary until you can
                    work again or retire. More comprehensive than critical illness for long-term sickness.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Common Life Insurance Mistakes to Avoid</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-red-700">
                <li>Not disclosing smoking/health conditions - voids policy, no payout</li>
                <li>Underestimating cover needed - leaves family financially vulnerable</li>
                <li>Choosing over 50s policy when regular term life is cheaper and better value</li>
                <li>Writing policy in own name instead of trust - family may wait months and pay inheritance tax</li>
                <li>Not reviewing cover after major life events (marriage, children, house purchase)</li>
                <li>Cancelling existing policy before new one starts - gap in cover</li>
                <li>Buying through funeral plan companies - often overpriced, poor value</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Life Insurance FAQs</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Do I need life insurance if I'm single with no kids?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Probably not, unless you have debts others would inherit (joint mortgage) or want to leave money to family.
                Life insurance is primarily for income earners with financial dependents.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I be refused life insurance?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, insurers can decline based on serious health conditions, high-risk lifestyle, or age. If refused, try
                specialist brokers who work with high-risk insurers. Over 50s plans offer guaranteed acceptance but with
                much higher costs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Does life insurance pay out for suicide?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most policies exclude suicide in the first 12-24 months (contestability period). After this period, UK
                policies typically do pay out. Always check your specific policy terms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What's "life insurance in trust" and why does it matter?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Writing your policy "in trust" means the payout goes directly to beneficiaries, bypassing your estate. This
                means: faster payout (days vs months), no inheritance tax (currently 40% above £325,000), protection from
                creditors. It's free and highly recommended.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Can I have multiple life insurance policies?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, there's no limit. You might have employer life insurance (typically 2-4x salary), personal term life
                for mortgage, and whole life for inheritance. All policies pay out independently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                What happens to my life insurance if I move abroad?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Depends on your policy. Some UK insurers continue cover worldwide, others cancel or charge higher premiums
                for non-UK residents. Always notify your insurer before moving - failure to do so can void your policy.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Should I get life insurance through my employer or independently?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Both. Employer life insurance (death in service) is free and valuable, but you lose it if you leave the job.
                Personal life insurance travels with you regardless of employment. Most financial advisers recommend having
                both for maximum protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
