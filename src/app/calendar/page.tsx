import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Calendar | Riverside Unified School District",
  description: "Riverside Unified School District Calendar",
};

export default function Calendar() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900/80 px-5">
      {/* Modal Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm px-8 py-10 flex flex-col items-center gap-6 text-center">
        {/* Brand Icon + Name */}
        <div className="flex flex-col items-center gap-3">
          <Image src="/logo.png" alt="Riverside Unified School District Logo" width={56} height={56} className="object-contain" />
          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Riverside Unified School District
          </p>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            View the District Calendar
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Stay up to date with important dates, events, and school schedules.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="https://www.riversideunified.org/our-district/district-calendar"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#971a27] hover:bg-[#6e1220] active:scale-95 text-white font-semibold text-base rounded-xl transition-all duration-200 tracking-wide shadow-lg shadow-[#971a27]/30 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          See Calendar
        </a>

      </div>
    </div>
  );
}
