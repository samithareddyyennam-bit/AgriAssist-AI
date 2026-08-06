"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Navbar from "../../components/Navbar";

export default function CropPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [name, setName] = useState("");
  const [soil, setSoil] = useState("");
  const [season, setSeason] = useState("");
  const [water, setWater] = useState("");
  const [fertilizer, setFertilizer] = useState("");

  const [editingId, setEditingId] = useState(null);

  // ==========================================
  // CHECK API URL
  // ==========================================

  const checkAPI = () => {
    if (!API_URL) {
      toast.error("API URL is not configured");
      console.error("NEXT_PUBLIC_API_URL is missing");
      return false;
    }

    return true;
  };

  // ==========================================
  // FETCH ALL CROPS
  // ==========================================

  const fetchCrops = async () => {
    if (!checkAPI()) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API_URL + "/api/crops");

      const data = await response.json();

      console.log("Crops API response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Unable to fetch crops");
      }

      if (Array.isArray(data)) {
        setCrops(data);
      } else {
        setCrops([]);
      }
    } catch (error) {
      console.error("Fetch crops error:", error);
      toast.error("Unable to fetch crops");
      setCrops([]);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // LOAD CROPS
  // ==========================================

  useEffect(() => {
    fetchCrops();
  }, []);

  // ==========================================
  // CLEAR FORM
  // ==========================================

  const clearForm = () => {
    setName("");
    setSoil("");
    setSeason("");
    setWater("");
    setFertilizer("");
    setEditingId(null);
  };

  // ==========================================
  // ADD / UPDATE CROP
  // ==========================================

  const saveCrop = async () => {
    if (!checkAPI()) {
      return;
    }

    if (
      !name.trim() ||
      !soil.trim() ||
      !season.trim() ||
      !water.trim() ||
      !fertilizer.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setSaving(true);

      let url = API_URL + "/api/crops";
      let method = "POST";

      if (editingId !== null) {
        url = API_URL + "/api/crops/" + editingId;
        method = "PUT";
      }

      console.log("Sending request:", method, url);

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          soil: soil.trim(),
          season: season.trim(),
          water: water.trim(),
          fertilizer: fertilizer.trim(),
        }),
      });

      const data = await response.json();

      console.log("Save crop response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Crop operation failed");
      }

      if (editingId !== null) {
        toast.success("Crop updated successfully!");
      } else {
        toast.success("Crop added successfully!");
      }

      clearForm();

      await fetchCrops();
    } catch (error) {
      console.error("Save crop error:", error);
      toast.error(error.message || "Server error");
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // EDIT CROP
  // ==========================================

  const editCrop = (crop) => {
    setEditingId(crop.id);

    setName(crop.name || "");
    setSoil(crop.soil || "");
    setSeason(crop.season || "");
    setWater(crop.water || "");
    setFertilizer(crop.fertilizer || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // DELETE CROP
  // ==========================================

  const deleteCrop = async (id) => {
    if (!checkAPI()) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this crop?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        API_URL + "/api/crops/" + id,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      console.log("Delete crop response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Unable to delete crop");
      }

      toast.success("Crop deleted successfully!");

      if (editingId === id) {
        clearForm();
      }

      await fetchCrops();
    } catch (error) {
      console.error("Delete crop error:", error);
      toast.error(error.message || "Server error");
    }
  };

  // ==========================================
  // LOADING SCREEN
  // ==========================================

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-green-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">🌾</div>

            <h2 className="text-2xl font-bold text-green-700">
              Loading Crops...
            </h2>

            <p className="text-gray-500 mt-2">
              Please wait
            </p>
          </div>
        </div>
      </>
    );
  }

  // ==========================================
  // MAIN PAGE
  // ==========================================

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-green-50 p-6 md:p-10">

        {/* PAGE TITLE */}

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
            🌾 Crop Management
          </h1>

          {/* ADD / UPDATE FORM */}

          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {editingId !== null
                ? "✏️ Update Crop"
                : "➕ Add New Crop"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* NAME */}

              <input
                type="text"
                placeholder="Crop Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* SOIL */}

              <input
                type="text"
                placeholder="Soil Type"
                value={soil}
                onChange={(event) => setSoil(event.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* SEASON */}

              <input
                type="text"
                placeholder="Season"
                value={season}
                onChange={(event) => setSeason(event.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* WATER */}

              <input
                type="text"
                placeholder="Water Requirement"
                value={water}
                onChange={(event) => setWater(event.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* FERTILIZER */}

              <input
                type="text"
                placeholder="Fertilizer"
                value={fertilizer}
                onChange={(event) => setFertilizer(event.target.value)}
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            {/* BUTTONS */}

            <div className="flex gap-3 mt-6">

              <button
                onClick={saveCrop}
                disabled={saving}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold"
              >
                {saving
                  ? "Saving..."
                  : editingId !== null
                  ? "Update Crop"
                  : "Add Crop"}
              </button>

              {editingId !== null && (
                <button
                  onClick={clearForm}
                  disabled={saving}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Cancel
                </button>
              )}

            </div>

          </div>

          {/* CROPS LIST */}

          {crops.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-10 text-center">

              <div className="text-5xl mb-4">
                🌱
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                No Crops Available
              </h2>

              <p className="text-gray-500 mt-2">
                Add your first crop using the form above.
              </p>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {crops.map((crop) => (
                <div
                  key={crop.id}
                  className="bg-white rounded-xl shadow-lg p-6"
                >

                  <h2 className="text-2xl font-bold text-green-700 mb-4">
                    🌾 {crop.name}
                  </h2>

                  <div className="space-y-2 text-gray-700">

                    <p>
                      <strong>🌱 Soil:</strong>{" "}
                      {crop.soil}
                    </p>

                    <p>
                      <strong>📅 Season:</strong>{" "}
                      {crop.season}
                    </p>

                    <p>
                      <strong>💧 Water:</strong>{" "}
                      {crop.water}
                    </p>

                    <p>
                      <strong>🌿 Fertilizer:</strong>{" "}
                      {crop.fertilizer}
                    </p>

                  </div>

                  {/* ACTION BUTTONS */}

                  <div className="flex gap-3 mt-6">

                    <button
                      onClick={() => editCrop(crop)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteCrop(crop.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </main>
    </>
  );
}