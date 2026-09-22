import type { Metadata } from "next";

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
          <div className="w-14 h-14 rounded-full bg-[#8b1a2e] flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
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
          className="w-full py-4 bg-[#8b1a2e] hover:bg-[#6e1424] active:scale-95 text-white font-semibold text-base rounded-xl transition-all duration-200 tracking-wide shadow-lg shadow-[#8b1a2e]/30 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          See Calendar
        </a>

        <p className="text-xs text-gray-400">
          Opens the official district calendar
        </p>
      </div>
    </div>
  );
}
