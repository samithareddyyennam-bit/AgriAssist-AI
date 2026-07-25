"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CropPage() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [water, setWater] = useState("");
  const [fertilizer, setFertilizer] = useState("");

  const [editingId, setEditingId] = useState(null);

  // ==========================
  // FETCH CROPS
  // ==========================
  const fetchCrops = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/crops");
      const data = await res.json();

      setCrops(data);
      setLoading(false);
    } catch (err) {
      toast.error("Unable to fetch crops");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  // ==========================
  // ADD CROP
  // ==========================
 const saveCrop = async () => {
  if (!name || !soil || !season || !water || !fertilizer) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    const url = editingId
      ? `http://localhost:5000/api/crops/${editingId}`
      : "http://localhost:5000/api/crops";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        soil,
        season,
        water,
        fertilizer,
      }),
    });

    if (!res.ok) {
      toast.error("Operation failed");
      return;
    }

    toast.success(editingId ? "Crop Updated!" : "Crop Added!");

    setEditingId(null);

    setName("");
    setSoil("");
    setSeason("");
    setWater("");
    setFertilizer("");

    fetchCrops();

  } catch {
    toast.error("Server Error");
  }
};
  // ==========================
  // EDIT
  // ==========================
  const editCrop = (crop) => {
    setEditingId(crop.id);

    setName(crop.name);
    setSoil(crop.soil);
    setSeason(crop.season);
    setWater(crop.water);
    setFertilizer(crop.fertilizer);
  };

  // ==========================
  // UPDATE
  // ==========================
  const updateCrop = async () => {
    try {
      await fetch(
        `http://localhost:5000/api/crops/${editingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            soil,
            season,
            water,
            fertilizer,
          }),
        }
      );

      toast.success("Crop Updated Successfully!");

      setEditingId(null);

      setName("");
      setSoil("");
      setSeason("");
      setWater("");
      setFertilizer("");

      fetchCrops();
    } catch {
      toast.error("Update Failed");
    }
  };

  // ==========================
  // DELETE
  // ==========================
  const deleteCrop = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this crop?"
    );

    if (!confirmDelete) return;

    try {

    const res = await fetch(
      `http://localhost:5000/api/crops/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      toast.error("Unable to delete crop");
      return;
    }

    toast.success("Crop deleted successfully!");

    fetchCrops();

  } catch (err) {
    toast.error("Server Error");
  }

};
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl">
        Loading Crops...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-10">

      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🌾 Crop Management
      </h1>

      {/* Add / Update Form */}

      <div className="bg-white rounded-xl shadow p-6 mb-10">

        <h2 className="text-2xl font-bold mb-6">
          {editingId ? "✏ Update Crop" : "➕ Add New Crop"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            className="border p-3 rounded-lg"
            placeholder="Crop Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Soil"
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Water Requirement"
            value={water}
            onChange={(e) => setWater(e.target.value)}
          />

          <input
            className="border p-3 rounded-lg"
            placeholder="Fertilizer"
            value={fertilizer}
            onChange={(e) => setFertilizer(e.target.value)}
          />

        </div>

        <button
          onClick={saveCrop}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
        >
          {editingId ? "Update Crop" : "Add Crop"}
        </button>

      </div>

      {/* Empty State */}

      {crops.length === 0 ? (
        <div className="bg-white p-10 rounded-xl shadow text-center">

          <h2 className="text-2xl font-bold">
            🌱 No Crops Available
          </h2>

          <p className="text-gray-500 mt-3">
            Add your first crop.
          </p>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {crops.map((crop) => (

            <div
              key={crop.id}
              className="bg-white rounded-xl shadow p-6"
            >

              <h2 className="text-2xl font-bold text-green-700">
                {crop.name}
              </h2>

              <p className="mt-3">
                <strong>Soil:</strong> {crop.soil}
              </p>

              <p>
                <strong>Season:</strong> {crop.season}
              </p>

              <p>
                <strong>Water:</strong> {crop.water}
              </p>

              <p>
                <strong>Fertilizer:</strong> {crop.fertilizer}
              </p>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => {
    setEditingId(crop.id);
    setName(crop.name);
    setSoil(crop.soil);
    setSeason(crop.season);
    setWater(crop.water);
    setFertilizer(crop.fertilizer);
  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteCrop(crop.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}