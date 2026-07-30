"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    if (session) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`)
        .then((res) => res.json())
        .then((data) => setDashboard(data));
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        Loading Dashboard...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="h-screen flex justify-center items-center text-xl">
        Please Login
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        🌾 AgriAssist AI Dashboard
      </h1>

      {/* User Card */}

      <div className="bg-white rounded-xl shadow p-6 mb-10">

        <h2 className="text-2xl font-bold">
          Welcome {session.user.name}
        </h2>

        <p className="text-gray-600">
          {session.user.email}
        </p>

      </div>

      {dashboard && (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl">
              🌤 Weather
            </h2>

            <p className="mt-3 text-2xl">
              {dashboard.weather}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl">
              🌡 Temperature
            </h2>

            <p className="mt-3 text-2xl">
              {dashboard.temperature}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl">
              🌾 Recommended Crop
            </h2>

            <p className="mt-3 text-2xl">
              {dashboard.crop}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl">
              🌱 Soil Type
            </h2>

            <p className="mt-3 text-2xl">
              {dashboard.soil}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-xl">
              📅 Season
            </h2>

            <p className="mt-3 text-2xl">
              {dashboard.season}
            </p>

          </div>

          <div className="bg-green-600 text-white rounded-xl shadow p-6 flex flex-col justify-center">

            <h2 className="font-bold text-xl">
              🤖 AI Crop Advisor
            </h2>

            <a
              href="/ai"
              className="mt-4 bg-white text-green-700 text-center py-2 rounded-lg font-semibold hover:bg-green-100"
            >
              Open AI Assistant
            </a>

          </div>

        </div>

      )}

    </div>
  );
}