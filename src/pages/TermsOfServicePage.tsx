import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function TermsOfServicePage() {
  useEffect(() => {
    document.title = 'Terms of Service | Finance Hub UK'
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: 25 November 2025</p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Finance Hub UK (financehubuk.co.uk), you accept and agree to be bound by these
                Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Description of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Finance Hub UK provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Free online financial calculators (mortgage, loan, insurance, etc.)</li>
                <li>Quote request services connecting users with financial service providers</li>
                <li>Educational content about financial products and services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our services are provided for informational purposes only and do not constitute financial advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Use of Calculators</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3.1 Accuracy Disclaimer</h3>
              <p className="text-gray-700 leading-relaxed">
                Our calculators provide estimates based on the information you provide. Results are for illustrative
                purposes only and should not be relied upon as exact figures. Actual loan terms, insurance premiums, and
                financial products may differ significantly from calculator results.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.2 No Financial Advice</h3>
              <p className="text-gray-700 leading-relaxed">
                Calculator results and website content do not constitute financial, legal, or tax advice. You should
                consult with qualified professionals before making financial decisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3.3 User Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for verifying all calculator inputs and results. We are not liable for errors,
                omissions, or decisions made based on calculator outputs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Quote Request Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4.1 Lead Submission</h3>
              <p className="text-gray-700 leading-relaxed">
                When you submit a quote request, you authorize us to share your information with relevant financial
                service providers who may contact you with quotes and offers.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.2 No Guarantees</h3>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee that you will receive quotes, be approved for products, or receive specific terms. All
                financial decisions are made by third-party providers based on their own criteria.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4.3 Third-Party Providers</h3>
              <p className="text-gray-700 leading-relaxed">
                We are not responsible for the products, services, terms, or conduct of third-party financial service
                providers. You enter into agreements directly with them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. User Conduct</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide false, inaccurate, or misleading information</li>
                <li>Use automated systems (bots, scrapers) to access our services</li>
                <li>Attempt to interfere with, disrupt, or compromise our website security</li>
                <li>Use our services for unlawful purposes or to violate any regulations</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Submit excessive quote requests or abuse our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on Finance Hub UK, including calculators, text, graphics, logos, and software, is owned by or
                licensed to us and protected by UK and international copyright, trademark, and other intellectual property
                laws. You may not reproduce, distribute, modify, or create derivative works without our express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">7.1 "As Is" Basis</h3>
              <p className="text-gray-700 leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or
                implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">7.2 No Liability for Damages</h3>
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, Finance Hub UK shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or
                other intangible losses resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
                <li>Your use or inability to use our services</li>
                <li>Reliance on calculator results or website content</li>
                <li>Financial decisions made based on our services</li>
                <li>Conduct of third-party financial service providers</li>
                <li>Unauthorized access to or alteration of your data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">7.3 Maximum Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                Our total liability to you for all claims arising from your use of our services shall not exceed £100 GBP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Finance Hub UK, its affiliates, and their respective
                officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses
                (including legal fees) arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy,
                privacy practices, or terms of service of external sites. Accessing external links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Modifications to Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without
                notice. We are not liable to you or any third party for any modification, suspension, or discontinuance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. Continued use of our services after changes
                constitutes acceptance of the updated terms. We encourage you to review these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any
                disputes arising from these Terms or your use of our services shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or
                eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and
                effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">14. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Finance Hub
                UK regarding your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">15. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                For questions about these Terms of Service, contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Finance Hub UK</strong></p>
                <p className="text-gray-700">Email: support@financehubuk.co.uk</p>
                <p className="text-gray-700">Website: financehubuk.co.uk</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
