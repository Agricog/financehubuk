import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | Finance Hub UK'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: 25 November 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Finance Hub UK ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                financehubuk.co.uk and use our financial calculators and quote request services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2.1 Personal Information You Provide</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you use our quote request forms, we collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Property details (for mortgage/insurance quotes)</li>
                <li>Financial information relevant to your quote request</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Referring website or search engine</li>
                <li>Calculator usage patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use Google Analytics to understand how visitors use our site. Google Analytics uses cookies to
                collect anonymous information about site usage. You can opt out of Google Analytics by installing the
                Google Analytics Opt-out Browser Add-on.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use collected information to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Process and respond to your quote requests</li>
                <li>Connect you with appropriate financial service providers</li>
                <li>Improve our calculators and website functionality</li>
                <li>Send you information about products and services (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Analyze website usage and optimize user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under the General Data Protection Regulation (GDPR), we process your personal data based on:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for quote requests</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests (providing calculator services, improving website)</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with UK law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. How We Share Your Information</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">5.1 Third-Party Service Providers</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                We share your information with trusted third parties who assist us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>SmartSuite:</strong> Form submission and lead management</li>
                <li><strong>Google Analytics:</strong> Website analytics (anonymized data)</li>
                <li><strong>Railway:</strong> Website hosting infrastructure</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.2 Financial Service Partners</h3>
              <p className="text-gray-700 leading-relaxed">
                When you request quotes, we may share your information with relevant financial service providers
                (insurance companies, mortgage brokers, loan providers) to fulfill your request. We only share with
                partners who comply with UK data protection laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5.3 Legal Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law or to protect our rights, safety, or property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Your Rights Under GDPR</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                As a UK/EU resident, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                To exercise these rights, contact us at: <strong>privacy@financehubuk.co.uk</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required by law. Quote request data is typically retained for
                3 years for regulatory compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. International Data Transfers</h2>
              <p className="text-gray-700 leading-relaxed">
                Your data may be transferred to and processed in countries outside the UK/EU. When we transfer data
                internationally, we ensure appropriate safeguards are in place to protect your data in accordance with
                GDPR requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal
                data from children. If you become aware that a child has provided us with personal data, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date. Continued use of our services after
                changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have questions about this Privacy Policy or wish to exercise your data protection rights, contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Finance Hub UK</strong></p>
                <p className="text-gray-700">Email: privacy@financehubuk.co.uk</p>
                <p className="text-gray-700">Website: financehubuk.co.uk</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK
                supervisory authority for data protection issues: <strong>ico.org.uk</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
