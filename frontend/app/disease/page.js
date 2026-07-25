"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DiseasePage() {
  const [diseases, setDiseases] = useState([]);
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchDiseases = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/diseases");
      const data = await res.json();

      setDiseases(data);
      setFilteredDiseases(data);
      setLoading(false);
    } catch (err) {
      toast.error("Unable to fetch diseases");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiseases();
  }, []);

  useEffect(() => {
    const result = diseases.filter((item) =>
      item.crop.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredDiseases(result);
  }, [search, diseases]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl">
        Loading Diseases...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50 p-10">

      <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
        🌿 Crop Disease Detection
      </h1>

      <div className="max-w-xl mx-auto mb-10">

        <input
          type="text"
          placeholder="Search crop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-4 shadow"
        />

      </div>

      {filteredDiseases.length === 0 ? (

        <div className="bg-white rounded-xl shadow p-10 text-center">

          <h2 className="text-2xl font-bold">
            No Disease Found
          </h2>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

          {filteredDiseases.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-6"
            >

              <h2 className="text-2xl font-bold text-red-700">
                🌾 {item.crop}
              </h2>

              <p className="mt-4">
                <strong>Disease:</strong> {item.disease}
              </p>

              <p className="mt-2">
                <strong>Symptoms:</strong> {item.symptoms}
              </p>

              <p className="mt-2">
                <strong>Prevention:</strong> {item.prevention}
              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}