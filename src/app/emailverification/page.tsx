// app/email-sent/page.tsx
import Link from 'next/link';

export default function EmailSent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f2f5fc] to-[#e0e7ff] px-4">
      <div className="bg-white p-10 sm:p-12 rounded-3xl shadow-xl text-center max-w-lg w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Email Sent!</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your catalog has been sent to your email.  
          Please check your inbox.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block bg-[#7D0C0C] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#580808] transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
