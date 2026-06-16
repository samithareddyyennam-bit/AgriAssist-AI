import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {
  return (
    <div>
      <Navbar />

      <main className="p-10 min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold text-green-700">
          Dashboard
        </h1>

        <p className="mt-4 text-lg">
          View farming insights, crop data, and recommendations here.
        </p>
      </main>

      <Footer />
    </div>
  );
}