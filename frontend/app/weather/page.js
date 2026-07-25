"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const city = "Hyderabad";

      const res = await fetch(
        `http://localhost:5000/api/weather?city=${city}`
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Unable to fetch weather");
        setLoading(false);
        return;
      }

      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Unable to fetch weather");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl">
        Loading Weather...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">
        🌤 Weather Information
      </h1>

      {weather && (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 space-y-4">
          <p className="text-xl">
            🏙 <strong>City:</strong> {weather.city}
          </p>

          <p className="text-xl">
            🌤 <strong>Weather:</strong> {weather.weather}
          </p>

          <p className="text-xl">
            🌡 <strong>Temperature:</strong> {weather.temperature} °C
          </p>

          <p className="text-xl">
            💧 <strong>Humidity:</strong> {weather.humidity}%
          </p>

          <p className="text-xl">
            📝 <strong>Description:</strong> {weather.description}
          </p>

          <p className="text-xl">
            💨 <strong>Wind Speed:</strong> {weather.wind} m/s
          </p>
        </div>
      )}
    </div>
  );
}