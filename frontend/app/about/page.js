import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/about.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative z-10 text-5xl font-bold text-white text-center">
          About AgriAssist AI
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Our Mission
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          AgriAssist AI is a smart farming platform designed to help farmers
          make better agricultural decisions using Artificial Intelligence.
          Our goal is to improve crop productivity, reduce losses, and support
          sustainable farming practices.
        </p>

        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Key Features
        </h2>

        <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li>AI-powered crop recommendations</li>
          <li>Real-time weather monitoring</li>
          <li>Plant disease detection using AI</li>
          <li>Smart farming insights and guidance</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}