import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              🌾 AgriAssist AI
            </h2>

            <p className="text-green-100 leading-7">
              Smart farming platform powered by Artificial Intelligence.
              Helping farmers make better crop decisions through
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/" className="hover:text-green-300">
                🏠 Home
              </Link>

              <Link href="/dashboard" className="hover:text-green-300">
                📊 Dashboard
              </Link>

              <Link href="/crop" className="hover:text-green-300">
                🌾 Crop Recommendation
              </Link>

              <Link href="/weather" className="hover:text-green-300">
                🌤 Weather
              </Link>

              <Link href="/disease" className="hover:text-green-300">
                🦠 Disease Detection
              </Link>

              <Link href="/contact" className="hover:text-green-300">
                📞 Contact
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Contact
            </h3>

            <p className="mb-2">
              📧 agriassist@gmail.com
            </p>

            <p className="mb-2">
              📍 Hyderabad, India
            </p>

            <p>
              ☎ +91 9876543210
            </p>

            <div className="flex gap-4 mt-6 text-2xl">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>💼</span>
            </div>

          </div>

        </div>

        <hr className="my-8 border-green-600" />

        <div className="text-center text-green-200">
          © 2026 AgriAssist AI | Developed by <strong>Samitha Reddy</strong> | All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}