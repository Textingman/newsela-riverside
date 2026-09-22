import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Riverside Unified School District",
  description: "Privacy Policy for Riverside Unified School District",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#8b1a2e] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-base font-semibold text-gray-900 tracking-tight">
            Riverside Unified School District
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 1, 2026
        </p>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Riverside Unified School District (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or contact us through our
              contact form.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-2">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                <strong>Contact Information:</strong> Name, email address, phone
                number
              </li>
              <li>
                <strong>Communications:</strong> Messages you send us through
                our contact form
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our website
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-2">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              4. SMS Marketing Communications
            </h2>
            <p className="leading-relaxed">
              If you opt in to receive SMS messages, we will send you
              transactional account notification text messages related to your account activity. Message
              frequency varies. Message and data rates may apply. You may opt
              out at any time by replying STOP to any message. For help, reply
              HELP or contact us at{" "}
              <a
                href="mailto:support@riversideunifiedsd.org"
                className="text-[#8b1a2e] underline"
              >
                support@riversideunifiedsd.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              5. Sharing Your Information
            </h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties without your consent, except as
              required by law or to trusted third parties who assist us in
              operating our website and conducting our business, provided those
              parties agree to keep this information confidential.{" "}
              <strong>
                No mobile information will be shared with third parties or
                affiliates.
              </strong>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              6. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              7. Your Rights
            </h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:support@riversideunifiedsd.org"
                className="text-[#8b1a2e] underline"
              >
                support@riversideunifiedsd.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              8. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="mt-3 text-gray-700">
              <p className="font-semibold">Riverside Unified School District</p>
              <p>3380 14th Street</p>
              <p>Riverside, CA 92501-3810</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@riversideunifiedsd.org"
                  className="text-[#8b1a2e] underline"
                >
                  support@riversideunifiedsd.org
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:19513521200" className="text-[#8b1a2e] underline">
                  951.352.1200 x83030
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#8b1a2e] hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
