export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="flex items-center justify-between flex-wrap">
        
        <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-300 to-green-200 bg-clip-text text-transparent">
  AgriAssist AI
</h1>

        <ul className="flex flex-wrap gap-4 justify-center">
          <li className="cursor-pointer hover:text-gray-200">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-200">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-200">
            Services
          </li>
          <li className="cursor-pointer hover:text-gray-200">
            Contact
          </li>
        </ul>

        <button className="bg-white text-green-700 px-4 py-2 rounded-lg">
          Profile
        </button>
      </div>
    </nav>
  );
}