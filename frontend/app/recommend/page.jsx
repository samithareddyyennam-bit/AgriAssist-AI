"use client";

import { useState } from "react";

export default function RecommendPage() {
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!soil || !season) {
      alert("Please enter soil type and season");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("API URL is not configured");
      }

      const response = await fetch(
        `${apiUrl}/api/crops/recommend?soil=${encodeURIComponent(
          soil
        )}&season=${encodeURIComponent(season)}`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Recommendation failed");
      }

      setResult(data);
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🌱 AI Crop Recommendation
      </h1>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        <input
          type="text"
          placeholder="Enter Soil Type"
          value={soil}
          onChange={(e) => setSoil(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          placeholder="Enter Season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Finding Crop..." : "Recommend Crop"}
        </button>
      </div>

      {result && (
        <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🌾 {result.name}
          </h2>

          <p>🌱 Soil: {result.soil}</p>
          <p>🌤️ Season: {result.season}</p>
          <p>💧 Water: {result.water}</p>
          <p>🌿 Fertilizer: {result.fertilizer}</p>
        </div>
      )}
    </main>
  );
}