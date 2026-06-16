export default function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 border">
      <h2 className="text-2xl font-bold text-green-700 mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>

      <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg">
        Learn More
      </button>
    </div>
  );
}