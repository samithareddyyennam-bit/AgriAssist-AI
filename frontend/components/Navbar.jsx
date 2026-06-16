export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-green-700 text-white">
      <h1 className="text-2xl font-bold">AgriAssist AI</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-green-200">
          Home
        </li>
        <li className="cursor-pointer hover:text-green-200">
          About
        </li>
        <li className="cursor-pointer hover:text-green-200">
          Services
        </li>
        <li className="cursor-pointer hover:text-green-200">
          Contact
        </li>
      </ul>

      <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold">
        Profile
      </button>
    </nav>
  );
}