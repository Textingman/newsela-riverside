"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    privacyAgreed: false,
    smsAgreed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Riverside Unified School District Logo" width={32} height={32} className="flex-shrink-0 object-contain" />
          <span className="text-base font-semibold text-gray-900 tracking-tight">
            Riverside Unified School District
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative w-full h-80 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center gap-7">
          {/* Logo Box */}
          <div className="bg-white rounded-md px-9 py-5 flex flex-col items-center gap-2 shadow-md min-w-[180px]">
            <Image src="/logo.png" alt="Riverside Unified School District Logo" width={80} height={80} className="object-contain" />
          </div>

        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="flex-1 max-w-3xl w-full mx-auto px-5 py-9"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-base text-gray-900 placeholder-gray-400 outline-none focus:border-[#971a27] transition-colors"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-base text-gray-900 placeholder-gray-400 outline-none focus:border-[#971a27] transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-base text-gray-900 placeholder-gray-400 outline-none focus:border-[#971a27] transition-colors"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-base text-gray-900 placeholder-gray-400 outline-none focus:border-[#971a27] transition-colors"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-base text-gray-900 placeholder-gray-400 outline-none focus:border-[#971a27] transition-colors resize-y"
            />
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacyAgreed"
              name="privacyAgreed"
              checked={formData.privacyAgreed}
              onChange={handleChange}
              className="mt-0.5 w-4.5 h-4.5 flex-shrink-0 accent-[#971a27] cursor-pointer"
            />
            <label
              htmlFor="privacyAgreed"
              className="text-sm text-gray-600 leading-relaxed cursor-pointer"
            >
              I have read and agree to the{" "}
              <a href="/privacy-policy" className="text-[#971a27] underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms-of-use" className="text-[#971a27] underline">
                Terms of Use
              </a>
              .
            </label>
          </div>

          {/* SMS Consent Checkbox */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="smsAgreed"
              name="smsAgreed"
              checked={formData.smsAgreed}
              onChange={handleChange}
              className="mt-0.5 w-4.5 h-4.5 flex-shrink-0 accent-[#971a27] cursor-pointer"
            />
            <label
              htmlFor="smsAgreed"
              className="text-sm text-gray-600 leading-relaxed cursor-pointer"
            >
              By checking this box and submitting this form, you agree to
              receive transactional account alerts and customer care text messages from Riverside Unified School District. I
              understand I may opt out of SMS communication by replying
              &apos;STOP&apos;. Reply HELP or email{" "}
              <a
                href="mailto:support@riversideunifiedschool.com"
                className="text-[#971a27] underline"
              >
                support@riversideunifiedschool.com
              </a>{" "}
              for help. Message and Data rates may apply. Message frequency
              varies. Carriers are not liable for delayed or undelivered
              messages. Opting in to SMS is optional and not required to submit
              this form or use our services. All messages will be handled by
              Riverside Unified School District.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#971a27] hover:bg-[#6e1220] text-white font-semibold text-base rounded-md transition-colors duration-200 tracking-wide cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
