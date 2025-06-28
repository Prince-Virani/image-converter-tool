import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Image Converter handles your data and protects your privacy when using our image conversion tools.",
}

export default function PrivacyPage() {
  return (
    <main className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-lg mb-6">Last Updated: April 22, 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          At Image Converter, we respect your privacy and are committed to protecting your personal data. This Privacy
          Policy explains how we collect, use, and safeguard your information when you use our website and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">When you use our image conversion tools, we may collect:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Images you upload for conversion</li>
          <li>Technical data such as IP address, browser type, and device information</li>
          <li>Usage data about how you interact with our website</li>
          <li>Contact information if you choose to communicate with us</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide and maintain our image conversion services</li>
          <li>Improve and optimize our website and tools</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Monitor and analyze usage patterns and trends</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Image Data</h2>
        <p className="mb-4">When you upload images to our service:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>We process them temporarily to perform the requested conversion</li>
          <li>We do not permanently store your images on our servers</li>
          <li>Images are automatically deleted after processing or within 24 hours, whichever comes first</li>
          <li>
            We do not view, analyze, or use the content of your images for any purpose other than providing the
            conversion service
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to enhance your experience on our website. You can control
          cookies through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access,
          alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services to help us operate our website and provide our services. These third parties
          have access to your information only to perform specific tasks on our behalf and are obligated not to disclose
          or use it for any other purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have rights regarding your personal data, including the right to access,
          correct, delete, or restrict processing of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:privacy@pngimageconverter.com" className="text-primary hover:underline">
            privacy@pngimageconverter.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
