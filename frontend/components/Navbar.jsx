export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="flex flex-wrap items-center justify-between">
        
        {/* App Name */}
        <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-300 to-green-200 bg-clip-text text-transparent">
          AgriAssist AI
        </h1>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <li className="cursor-pointer hover:text-gray-200">
            Home
          </li>
          <li className="cursor-pointer hover:text-gray-200">
            About
          </li>
          <li className="cursor-pointer hover:text-gray-200">
            Dashboard
          </li>
          <li className="cursor-pointer hover:text-gray-200">
            Login
          </li>
        </ul>

        {/* Profile Button */}
        <button className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold mt-2 md:mt-0">
          Profile
        </button>

      </div>
    </nav>
  );
}