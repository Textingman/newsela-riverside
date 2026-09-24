import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Riverside Unified School District",
  description: "Learn about Riverside Unified School District and our commitment to student success.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-base font-semibold text-gray-900 tracking-tight">
            Riverside Unified School District
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Who We Are
            </h2>
            <p className="leading-relaxed">
              Riverside Unified School District is one of the largest school districts in California, serving the diverse and vibrant community of Riverside. We are committed to academic excellence, equity, and innovation, providing students with the tools and opportunities they need to thrive. Our district encompasses a wide range of programs and services designed to meet the needs of every learner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              To educate, challenge, and inspire all students to achieve their highest potential and become responsible, productive citizens in a diverse and changing world.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Our Commitment to Communication
            </h2>
            <p className="leading-relaxed">
              Riverside Unified School District is committed to keeping students, parents, and community members informed and connected. We use modern communication tools, including SMS text messaging, to deliver important transactional account alerts and customer care notifications directly to families. Our messaging is used exclusively for account-related updates, important announcements, and customer support — never for unsolicited marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              We welcome your questions and feedback. Please reach out to us at:
            </p>
            <ul className="list-none space-y-2 mt-3">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@riversideunifiedsd.org" className="text-[#003366] underline">
                  support@riversideunifiedsd.org
                </a>
              </li>
              <li>
                <strong>Phone:</strong> 951.352.1200 x83030
              </li>
              <li>
                <strong>Address:</strong> 3380 14th Street, Riverside, CA 92501-3810
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
