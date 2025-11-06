'use client'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600">
            Please read these terms carefully before using our tour services.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By accessing and using Bali Tours Transportation's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Description of Services</h2>
            <p className="text-slate-600 mb-4">
              Bali Tours Transportation provides private driver services and curated tour packages in Bali, Indonesia. Our services include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Private transportation with experienced drivers</li>
              <li>Guided tours to popular destinations</li>
              <li>Customizable tour itineraries</li>
              <li>Airport transfers and transportation services</li>
              <li>Tour coordination and booking services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Booking and Payment</h2>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Reservation Requirements</h3>
            <p className="text-slate-600 mb-4">
              To book our services, you must:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Be at least 18 years of age or have parental consent</li>
              <li>Provide accurate and complete information</li>
              <li>Have a valid payment method</li>
              <li>Provide contact details for tour coordination</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Payment Terms</h3>
            <p className="text-slate-600 mb-4">
              Payment is required as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Full payment or deposit as specified during booking</li>
              <li>Acceptable payment methods: credit card, bank transfer, or cash</li>
              <li>All prices are quoted in Indonesian Rupiah (IDR) unless otherwise specified</li>
              <li>Additional charges may apply for special requests or changes</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Cancellation Policy</h3>
            <p className="text-slate-600 mb-4">
              Cancellation terms vary by service type:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Full refund for cancellations made 48+ hours before service</li>
              <li>50% refund for cancellations made 24-48 hours before service</li>
              <li>No refund for cancellations made less than 24 hours before service</li>
              <li>Cancellation fees may apply for special arrangements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Customer Responsibilities</h2>
            <p className="text-slate-600 mb-4">
              As a customer, you agree to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Provide accurate pickup location and timing</li>
              <li>Be ready at the agreed pickup time</li>
              <li>Respect local customs and traditions during tours</li>
              <li>Follow safety instructions provided by drivers/guides</li>
              <li>Maintain appropriate behavior and respect others</li>
              <li>Pay for any additional expenses not included in the tour package</li>
              <li>Inform us of any special needs or requirements in advance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Service Limitations</h2>
            <p className="text-slate-600 mb-4">
              Our services are subject to certain limitations:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Services are available within Bali, Indonesia only</li>
              <li>Tour duration and timing may be affected by traffic, weather, or local conditions</li>
              <li>We reserve the right to modify itineraries for safety or operational reasons</li>
              <li>Certain attractions may have separate entrance fees not included in tour packages</li>
              <li>Services are not available during certain religious or national holidays</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Liability and Disclaimer</h2>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Service Liability</h3>
            <p className="text-slate-600 mb-4">
              Bali Tours Transportation shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Personal injury or property damage caused by customer negligence</li>
              <li>Loss or damage to personal belongings during tours</li>
              <li>Delays caused by traffic, weather, or factors beyond our control</li>
              <li>Changes in attraction schedules or temporary closures</li>
              <li>Food-related allergies or dietary restrictions not disclosed in advance</li>
            </ul>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Insurance</h3>
            <p className="text-slate-600 mb-4">
              We recommend that customers obtain travel insurance covering:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Medical emergencies and evacuation</li>
              <li>Trip cancellation and interruption</li>
              <li>Lost or damaged baggage</li>
              <li>Personal liability coverage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Intellectual Property</h2>
            <p className="text-slate-600 mb-4">
              All content on this website, including but not limited to text, images, graphics, logos, and software, is the property of Bali Tours Transportation or its content suppliers and is protected by international copyright laws.
            </p>
            <p className="text-slate-600 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Reproduce, distribute, or modify our content without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Copy or redistribute tour itineraries or proprietary information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Prohibited Activities</h2>
            <p className="text-slate-600 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Engage in disruptive or harmful behavior during tours</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use false information when booking services</li>
              <li>Violate local laws, customs, or regulations during tours</li>
              <li>Bring illegal substances or weapons on tours</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Force Majeure</h2>
            <p className="text-slate-600 mb-4">
              We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Natural disasters, extreme weather conditions</li>
              <li>Political unrest, strikes, or civil disturbances</li>
              <li>Government actions or restrictions</li>
              <li>Pandemic or public health emergencies</li>
              <li>Transportation disruptions or infrastructure failures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Dispute Resolution</h2>
            <p className="text-slate-600 mb-4">
              Any disputes arising from these terms or our services shall be resolved as follows:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>First, through direct communication and negotiation</li>
              <li>If unresolved, through mediation or arbitration in Bali, Indonesia</li>
              <li>Disputes shall be governed by the laws of Indonesia</li>
              <li>Customers waive the right to class action lawsuits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Privacy and Data Protection</h2>
            <p className="text-slate-600 mb-4">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Modification of Terms</h2>
            <p className="text-slate-600 mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services constitutes acceptance of any modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Termination</h2>
            <p className="text-slate-600 mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-4">
              <li>Breach of these terms of service</li>
              <li>Violation of local laws or regulations</li>
              <li>Disruptive or harmful behavior</li>
              <li>Failure to make required payments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Contact Information</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-600 mb-2">
                <strong>Email:</strong> info@balitourstransportation.com
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Phone:</strong> +62 812-3456-7890
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Address:</strong> Bali, Indonesia
              </p>
              <p className="text-slate-600">
                <strong>Business Hours:</strong> 7:00 AM - 10:00 PM WITA (UTC+8)
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">15. Indonesian Law Compliance</h2>
            <p className="text-slate-600 mb-4">
              These terms are governed by and construed in accordance with Indonesian law. Any disputes will be subject to the exclusive jurisdiction of the courts of Bali, Indonesia.
            </p>
            <p className="text-slate-600 mb-4">
              We comply with Indonesian tourism regulations, consumer protection laws, and transportation service requirements.
            </p>
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