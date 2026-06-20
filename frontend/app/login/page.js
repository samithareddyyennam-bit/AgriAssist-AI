import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/ui/Input";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-md mx-auto min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <Input
          label="Email"
          placeholder="Enter your email"
        />

        <div className="mt-4">
          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}