import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-foreground font-medium">Last Updated: January 2025</p>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the Sterling & Associates Law Firm website, you agree to be bound by these Terms
                of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">
                No Attorney-Client Relationship
              </h2>
              <p>
                Use of this website does not create an attorney-client relationship. An attorney-client relationship is
                formed only when we have agreed to represent you and you have signed a written engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Information Accuracy</h2>
              <p>
                While we strive to provide accurate and up-to-date information, the content on this website is for
                general informational purposes only and should not be relied upon as legal advice. Laws change
                frequently, and information may become outdated.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Case Results Disclaimer</h2>
              <p>
                Case results shown on this website are examples of verdicts and settlements obtained for clients. Every
                case is different, and past results do not guarantee or predict future outcomes. The value of your case
                depends on the specific facts and circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Sterling &
                Associates Law Firm and is protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
              <p>
                Sterling & Associates Law Firm shall not be liable for any damages arising from the use or inability to
                use this website or its content.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of the State of New York, without regard to its conflict
                of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="text-foreground">
                Sterling & Associates Law Firm
                <br />
                123 Justice Boulevard, Suite 500
                <br />
                New York, NY 10001
                <br />
                Email: info@sterlinglaw.com
                <br />
                Phone: (212) 555-1234
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
