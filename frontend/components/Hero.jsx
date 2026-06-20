import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] bg-green-100 dark:bg-gray-900 text-center px-6">
      <h1 className="text-5xl font-bold text-green-800 dark:text-white mb-4">
        Smart Farming with AgriAssist AI
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        Helping farmers make better decisions using AI-powered crop
        suggestions, weather updates, and disease detection.
      </p>

      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </section>
  );
}