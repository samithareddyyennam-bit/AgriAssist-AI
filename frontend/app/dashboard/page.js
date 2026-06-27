"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

export default function Dashboard() {
  const [cropCount, setCropCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [diseaseCount, setDiseaseCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/api/crops")
        .then((res) => res.json())
        .then((data) => setCropCount(data.length)),

      fetch("http://localhost:5000/api/weather?city=Hyderabad")
        .then((res) => res.json())
        .then((data) => setWeather(data)),

      fetch("http://localhost:5000/api/diseases")
        .then((res) => res.json())
        .then((data) => setDiseaseCount(data.length)),
    ]).finally(() => {
      setTimeout(() => setLoading(false), 1500);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-green-700">
          🌾 AgriAssist AI Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome back! Here's today's farming overview.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
          <div className="text-5xl">🌾</div>

          <h2 className="mt-4 text-xl font-bold text-green-700">
            Total Crops
          </h2>

          <p className="text-5xl font-bold mt-4">
            {cropCount}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
          <div className="text-5xl">🌤</div>

          <h2 className="mt-4 text-xl font-bold text-green-700">
            Weather
          </h2>

          {weather ? (
            <>
              <p className="text-4xl font-bold mt-3">
                {weather.temperature}°C
              </p>

              <p className="mt-2 text-lg">
                {weather.weather}
              </p>

              <p className="text-gray-500">
                Hyderabad
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
          <div className="text-5xl">🦠</div>

          <h2 className="mt-4 text-xl font-bold text-green-700">
            Diseases
          </h2>

          <p className="text-5xl font-bold mt-4">
            {diseaseCount}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
          <div className="text-5xl">🤖</div>

          <h2 className="mt-4 text-xl font-bold text-green-700">
            AI Suggestion
          </h2>

          <p className="mt-4 text-lg">
            Cotton is recommended for Black Soil during Kharif season.
          </p>
        </div>

      </div>

      {/* Farming Tips */}
      <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

        <h2 className="text-3xl font-bold text-green-700 mb-6">
          🌱 Smart Farming Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-green-100 rounded-xl p-5">
            ✅ Test soil before planting.
          </div>

          <div className="bg-green-100 rounded-xl p-5">
            🌤 Check weather before irrigation.
          </div>

          <div className="bg-green-100 rounded-xl p-5">
            💧 Avoid overwatering crops.
          </div>

          <div className="bg-green-100 rounded-xl p-5">
            🦠 Inspect crops weekly for diseases.
          </div>

        </div>

      </div>

      {/* Crop Statistics */}
      <div className="bg-white rounded-2xl shadow-lg mt-10 p-8">

        <h2 className="text-3xl font-bold text-green-700 mb-8">
          📊 Crop Statistics
        </h2>

        <div className="space-y-6">

          <div>
            <div className="flex justify-between">
              <span>Rice</span>
              <span>90%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-600 h-4 rounded-full w-[90%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Cotton</span>
              <span>75%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-600 h-4 rounded-full w-3/4"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Groundnut</span>
              <span>60%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div className="bg-green-600 h-4 rounded-full w-3/5"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}