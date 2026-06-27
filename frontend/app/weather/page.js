"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/weather?city=Hyderabad")
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-10">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
          🌤 Weather Forecast
        </h1>

        {weather ? (
          <div className="max-w-5xl mx-auto">

            <div className="bg-white rounded-2xl shadow-xl p-8">

              <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="text-center">

                  <h2 className="text-3xl font-bold text-green-700">
                    Hyderabad
                  </h2>

                  <h1 className="text-7xl mt-6">
                    ☀️
                  </h1>

                  <h2 className="text-5xl font-bold mt-6">
                    {weather.temperature}°C
                  </h2>

                  <p className="text-2xl mt-4">
                    {weather.weather}
                  </p>

                </div>

                <div>

                  <div className="space-y-5 text-xl">

                    <div className="flex justify-between border-b pb-2">
                      <span>💧 Humidity</span>
                      <span>65%</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span>🌬 Wind Speed</span>
                      <span>12 km/h</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span>🌡 Feels Like</span>
                      <span>{weather.temperature + 2}°C</span>
                    </div>

                    <div className="flex justify-between border-b pb-2">
                      <span>🌅 Sunrise</span>
                      <span>06:02 AM</span>
                    </div>

                    <div className="flex justify-between">
                      <span>🌇 Sunset</span>
                      <span>06:41 PM</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-xl mt-10 p-8">

              <h2 className="text-3xl font-bold text-green-700 mb-6">
                🌱 Farming Advice
              </h2>

              <ul className="space-y-4 text-lg">

                <li>✅ Good weather for irrigation.</li>

                <li>✅ Suitable day for sowing seeds.</li>

                <li>✅ Monitor soil moisture regularly.</li>

                <li>✅ Protect crops from high afternoon temperatures.</li>

              </ul>

            </div>

          </div>
        ) : (
          <div className="text-center text-2xl font-bold">
            Loading Weather...
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}