export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 mt-10">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-xl font-bold">
          AgriAssist AI
        </h2>

        <div className="flex gap-6">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p className="text-sm">
          © 2026 AgriAssist AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}