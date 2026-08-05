import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Smart Farming with AgriAssist AI
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Helping farmers make better decisions using AI-powered crop
          suggestions, weather updates, and disease detection.
        </p>

        <Link href="/login">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
}