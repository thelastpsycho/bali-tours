'use client'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Personal Information</h3>
            <p className="text-slate-600 mb-4">
              When you book a tour or contact us, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Full name and contact details (email, phone number)</li>
              <li>Home country and accommodation details</li>
              <li>Flight information (if applicable)</li>
              <li>Special requirements or preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Technical Information</h3>
            <p className="text-slate-600 mb-4">
              We automatically collect certain technical information when you visit our website:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">
              We use your information to provide and improve our tour services:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>To process tour bookings and reservations</li>
              <li>To communicate with you about your tours and travel arrangements</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To customize your tour experience based on your preferences</li>
              <li>To send important travel information and updates</li>
              <li>To process payments and manage financial transactions</li>
              <li>To improve our website and services</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Third-Party Service Providers</h3>
            <p className="text-slate-600 mb-4">
              We work with trusted third-party providers to deliver our services:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Payment processors (for secure payment handling)</li>
              <li>Email and messaging platforms (for communication)</li>
              <li>Booking and reservation systems</li>
              <li>Travel partners and activity providers</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Legal Requirements</h3>
            <p className="text-slate-600 mb-4">
              We may disclose your information when required by law or to protect our rights, property, or safety, or that of our customers or the public.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through reputable providers</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information</li>
              <li>Secure data storage and backup systems</li>
            </ul>
            <p className="text-slate-600">
              However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Cookies and Tracking</h2>
            <p className="text-slate-600 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your experience:
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Essential Cookies</h3>
            <p className="text-slate-600 mb-4">
              Required for basic website functionality, including security and authentication.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Analytics Cookies</h3>
            <p className="text-slate-600 mb-4">
              Help us understand how visitors interact with our website to improve our services.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Marketing Cookies</h3>
            <p className="text-slate-600 mb-4">
              Used to deliver relevant advertisements and track marketing campaign effectiveness.
            </p>
            <p className="text-slate-600">
              You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-600 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
            <p className="text-slate-600">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="text-slate-600 mb-4">
              We retain your personal information only as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Fulfill the purposes for which it was collected</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce our agreements</li>
              <li>Fulfill legitimate business interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. International Data Transfers</h2>
            <p className="text-slate-600 mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Children's Privacy</h2>
            <p className="text-slate-600 mb-4">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions, concerns, or requests regarding this privacy policy or your personal information, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-600 mb-2">
                <strong>Email:</strong> privacy@balitourstransportation.com
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Phone:</strong> +62 812-3456-7890
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Address:</strong> Bali, Indonesia
              </p>
              <p className="text-slate-600">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Specific Rights for Indonesian Residents</h2>
            <p className="text-slate-600 mb-4">
              As an Indonesian company, we comply with applicable Indonesian data protection laws, including provisions regarding:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Data processing consent requirements</li>
              <li>Cross-border data transfers</li>
              <li>Data breach notification obligations</li>
              <li>Consumer protection regulations</li>
            </ul>
          </section>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Back to top
          </button>
        </div>
      </div>
    </div>
  )
}