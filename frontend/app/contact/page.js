import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 flex items-center justify-center p-8">

        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
            📞 Contact Us
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3"
            ></textarea>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
              Send Message
            </button>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}