import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <div>
      <Navbar />

      <main className="p-10 min-h-screen bg-black text-white">
        <h1 className="text-4xl font-bold text-green-700">
          Login
        </h1>

        <p className="mt-4 text-lg">
          Login to access your personalized farming dashboard.
        </p>
      </main>

      <Footer />
    </div>
  );
}