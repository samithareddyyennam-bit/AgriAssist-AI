export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 z-50">

      {/* Animated Spinner */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full border-8 border-green-200"></div>

        <div className="absolute inset-0 w-24 h-24 rounded-full border-8 border-transparent border-t-green-700 animate-spin"></div>
      </div>

      {/* Title */}
      <h1 className="mt-8 text-4xl font-bold text-green-700">
        🌾 AgriAssist AI
      </h1>

      <p className="mt-2 text-lg text-gray-600">
        Smart Farming Powered by AI
      </p>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-6">
        <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce"></div>
        <div
          className="w-4 h-4 bg-green-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-green-600 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      <p className="mt-6 text-green-700 font-semibold animate-pulse">
        Loading Dashboard...
      </p>

    </div>
  );
}