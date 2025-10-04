import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-foreground font-medium">Last Updated: January 2025</p>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
              <p>
                Sterling & Associates Law Firm ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal Data: Name, email address, phone number, and other contact information you provide</li>
                <li>Case Information: Details about your legal matter that you share with us</li>
                <li>Usage Data: Information about how you access and use our website</li>
                <li>Cookies and Tracking Technologies: Data collected through cookies and similar technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide legal services and respond to your inquiries</li>
                <li>Communicate with you about your case and our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Attorney-Client Privilege</h2>
              <p>
                All communications between you and our attorneys are protected by attorney-client privilege and will be
                kept strictly confidential, except as required by law or with your express consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the Internet is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="text-foreground">
                Sterling & Associates Law Firm
                <br />
                123 Justice Boulevard, Suite 500
                <br />
                New York, NY 10001
                <br />
                Email: privacy@sterlinglaw.com
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
