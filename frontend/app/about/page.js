import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-10 bg-black text-white">
        <h1 className="text-4xl font-bold text-green-700">
          About AgriAssist AI
        </h1>

        <p className="mt-4 text-lg">
          AgriAssist AI helps farmers with smart agricultural solutions using AI.
        </p>
      </main>

      <Footer />
    </div>
  );
}