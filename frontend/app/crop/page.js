"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Crop() {
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [crop, setCrop] = useState(null);

  const recommendCrop = async () => {
    if (!soil || !season) {
      alert("Please select Soil Type and Season");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/crops/recommend?soil=${encodeURIComponent(
          soil
        )}&season=${encodeURIComponent(season)}`
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        setCrop(null);
        return;
      }

      setCrop(data);
    } catch (err) {
      alert("Backend is not running!");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-10">

        <h1 className="text-5xl font-bold text-green-700 text-center mb-10">
          🌾 AI Crop Recommendation
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">Soil Type</label>

              <select
                className="w-full border p-3 rounded-lg mt-2"
                value={soil}
                onChange={(e) => setSoil(e.target.value)}
              >
                <option value="">Select Soil</option>
                <option>Black Soil</option>
                <option>Red Soil</option>
                <option>Alluvial Soil</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Season</label>

              <select
                className="w-full border p-3 rounded-lg mt-2"
                value={season}
                onChange={(e) => setSeason(e.target.value)}
              >
                <option value="">Select Season</option>
                <option>Kharif</option>
                <option>Rabi</option>
              </select>
            </div>

          </div>

          <button
            onClick={recommendCrop}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
          >
            Get AI Recommendation
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
                className="rounded-xl h-72 w-full object-cover"
              />

              <div className="space-y-4 text-lg">

                <p>
                  <strong>🌾 Crop :</strong> {crop.name}
                </p>

                <p>
                  <strong>🌱 Soil :</strong> {crop.soil}
                </p>

                <p>
                  <strong>📅 Season :</strong> {crop.season}
                </p>

                <p>
                  <strong>💧 Water :</strong> Medium
                </p>

                <p>
                  <strong>🌿 Fertilizer :</strong> NPK
                </p>

                <p>
                  <strong>📈 Yield :</strong> High
                </p>

              </div>

            </div>

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}