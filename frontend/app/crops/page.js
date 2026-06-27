"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function CropRecommendation() {
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [crop, setCrop] = useState(null);

  const recommendCrop = async () => {
    if (!soil || !season) {
     toast.error("Please select Soil Type and Season");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/crops/recommend?soil=${soil}&season=${season}`
      );

      const data = await res.json();

      if (!res.ok) {
       toast.error(data.message || "No crop recommendation found.");
       setCrop(null);
       return;
      }

      setCrop(data);
      toast.success("🌾 Crop recommendation generated successfully!");
      setCrop(data);
      toast.success("🌾 Crop recommendation generated successfully!");
    } catch (error) {
      toast.error("Unable to fetch crop recommendation.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-6">

      <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
        🌾 AI Crop Recommendation
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Soil */}
          <div>
            <label className="font-semibold text-lg">
              Soil Type
            </label>

            <select
              className="w-full mt-2 border rounded-lg p-3"
              value={soil}
              onChange={(e) => setSoil(e.target.value)}
            >
              <option value="">Select Soil</option>
              <option>Black Soil</option>
              <option>Red Soil</option>
              <option>Alluvial Soil</option>
              <option>Clay Soil</option>
            </select>
          </div>

          {/* Season */}
          <div>
            <label className="font-semibold text-lg">
              Season
            </label>

            <select
              className="w-full mt-2 border rounded-lg p-3"
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >
              <option value="">Select Season</option>
              <option>Kharif</option>
              <option>Rabi</option>
              <option>Zaid</option>
            </select>
          </div>

        </div>

        <button
          onClick={recommendCrop}
          className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl text-xl hover:bg-green-700"
        >
          🌱 Get AI Recommendation
        </button>

      </div>

      {crop && (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl mt-10 p-8">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Recommended Crop
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <img
              src={`/images/${crop.name.toLowerCase()}.jpg`}
              alt={crop.name}
              className="rounded-xl h-72 object-cover w-full"
            />

            <div className="space-y-4 text-lg">

              <p>
                <strong>🌾 Crop:</strong> {crop.name}
              </p>

              <p>
                <strong>🌱 Soil:</strong> {crop.soil}
              </p>

              <p>
                <strong>📅 Season:</strong> {crop.season}
              </p>

              <p>
                <strong>💧 Water Requirement:</strong> Medium
              </p>

              <p>
                <strong>📈 Expected Yield:</strong> High
              </p>

              <p>
                <strong>🌿 Fertilizer:</strong> NPK 20:20:20
              </p>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}