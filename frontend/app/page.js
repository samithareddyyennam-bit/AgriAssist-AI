import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Features
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <Card
            title="Crop Recommendation"
            description="Get AI suggestions for the best crops based on soil and climate."
          />

          <Card
            title="Weather Updates"
            description="Receive weather forecasts to improve farming decisions."
          />

          <Card
            title="Disease Detection"
            description="Identify crop diseases using AI-powered analysis."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}