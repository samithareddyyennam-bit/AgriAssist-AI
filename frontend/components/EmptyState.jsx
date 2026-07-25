export default function EmptyState() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-10 text-center">

      <h2 className="text-3xl">
        🌱
      </h2>

      <h1 className="text-2xl font-bold mt-3">
        No Crop Recommendation Yet
      </h1>

      <p className="text-gray-600 mt-2">
        Select Soil and Season to get recommendation.
      </p>

    </div>
  );
}