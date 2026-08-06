"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    if (session) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Dashboard API:", data);
          setDashboard(data);
        })
        .catch((err) => {
          console.error("Dashboard error:", err);
        });
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
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 p-10">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          🌾 AgriAssist AI Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-10">
          <h2 className="text-2xl font-bold">
            Welcome {session.user?.name}
          </h2>

          <p className="text-gray-600">
            {session.user?.email}
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

              <Link
                href="/weather"
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Open Weather
              </Link>
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

              <Link
                href="/recommend"
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Recommend Crop
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-bold text-xl">
                🌱 Soil Type
              </h2>

              <p className="mt-3 text-2xl">
                {dashboard.soil}
              </p>

              <Link
                href="/crop"
                className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Manage Crops
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-bold text-xl">
                📅 Season
              </h2>

              <p className="mt-3 text-2xl">
                {dashboard.season}
              </p>
            </div>

            <div className="bg-green-600 text-white rounded-xl shadow p-6">

              <h2 className="font-bold text-xl">
                🤖 AI Crop Advisor
              </h2>

              <Link
                href="/ai"
                className="inline-block mt-4 bg-white text-green-700 px-4 py-2 rounded-lg"
              >
                Open AI Assistant
              </Link>

            </div>

          </div>
        )}

      </div>
    </>
  );
}