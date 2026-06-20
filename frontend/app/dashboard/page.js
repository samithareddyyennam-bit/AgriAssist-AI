import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loader from "../../components/ui/Loader";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10 min-h-screen">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Dashboard
        </h1>

        <p className="mb-4">
          Loading crop statistics and weather information...
        </p>

        <Loader />
      </div>

      <Footer />
    </>
  );
}