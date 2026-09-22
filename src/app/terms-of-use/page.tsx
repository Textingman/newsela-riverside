import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | Riverside Unified School District",
  description: "Terms of Use for Riverside Unified School District",
};

export default function TermsOfUse() {
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
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 1, 2026
        </p>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using the Riverside Unified School District website, you accept
              and agree to be bound by these Terms of Use. If you do not agree
              to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              2. Use of the Website
            </h2>
            <p className="leading-relaxed mb-2">
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of others. You must not:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Use the site in any way that violates applicable local, national,
                or international laws or regulations
              </li>
              <li>
                Transmit any unsolicited or unauthorized advertising or
                promotional material
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the website
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone&apos;s
                use or enjoyment of the website
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content on this website, including but not limited to text,
              graphics, logos, images, and software, is the property of Riverside
              Unified School District and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              4. Disclaimer of Warranties
            </h2>
            <p className="leading-relaxed">
              This website is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without any warranties of any kind, either
              express or implied. Riverside Unified School District does not warrant that the
              website will be uninterrupted, error-free, or free of viruses or
              other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, Riverside Unified School District shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising out of or related to your use of this
              website or the services provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              6. SMS Communications
            </h2>
            <p className="leading-relaxed mb-3">
              Riverside Unified School District uses SMS (text message) communications
              exclusively for <strong>transactional account notification purposes</strong>. This
              includes sending account updates, transaction confirmations, and
              important notifications related to your account or requests.
              SMS will <strong>not</strong> be used for unsolicited marketing or
              promotional campaigns unrelated to your account activity.
            </p>
            <p className="leading-relaxed mb-3">
              By opting in to receive SMS messages from Riverside Unified School District, you
              consent to receive customer care text messages. Opting in is
              entirely optional and is not required to submit a form or use our
              services.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
              <li>Message frequency varies based on your interactions with us.</li>
              <li>Standard message and data rates may apply.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
              <li>
                To opt out at any time, reply <strong>STOP</strong> to any
                message.
              </li>
              <li>
                For help, reply <strong>HELP</strong> or email{" "}
                <a
                  href="mailto:support@riversideunifiedsd.org"
                  className="text-[#8b1a2e] underline"
                >
                  support@riversideunifiedsd.org
                </a>
                .
              </li>
            </ul>
            <p className="leading-relaxed">
              No mobile information will be shared with third parties or
              affiliates for marketing purposes. All SMS messages will be
              handled solely by Riverside Unified School District.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              7. Third-Party Links
            </h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. These links
              are provided for your convenience only. Riverside Unified School District has no
              control over the content of those sites and accepts no
              responsibility for them or for any loss or damage that may arise
              from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              8. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Use at any time.
              Changes will be effective immediately upon posting to the website.
              Your continued use of the website after any changes constitutes
              your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              9. Governing Law
            </h2>
            <p className="leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance
              with the laws of the State of California, without regard
              to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              10. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Use, please contact
              us:
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
