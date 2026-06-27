"use client";

import { useState } from "react";

export default function RecommendPage() {
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/crops/recommend?soil=${encodeURIComponent(
          soil
        )}&season=${encodeURIComponent(season)}`
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setResult(data);
      } else {
        alert(data.message);
        setResult([]);
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        AI Crop Recommendation
      </h1>

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
        <input
          type="text"
          placeholder="Enter Soil Type"
          className="w-full border p-3 rounded mb-4"
          value={soil}
          onChange={(e) => setSoil(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Season"
          className="w-full border p-3 rounded mb-4"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        >
          Recommend Crop
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {result.map((crop) => (
          <div key={crop.id} className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-bold text-green-700">{crop.name}</h2>
            <p>🌱 Soil: {crop.soil}</p>
            <p>🌤 Season: {crop.season}</p>
          </div>
        ))}
      </div>
    </div>
  );
}