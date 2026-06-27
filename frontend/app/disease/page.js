"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Disease() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const detectDisease = () => {
    if (!image) {
      alert("Please upload an image.");
      return;
    }

    // Dummy AI Prediction
    setResult({
      disease: "Leaf Blight",
      confidence: "96%",
      treatment: "Spray Copper Oxychloride every 7 days and remove infected leaves.",
    });
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-10">

        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">
          🦠 AI Disease Detection
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
              setResult(null);
            }}
            className="w-full border rounded-lg p-3"
          />

          {image && (
            <img
              src={image}
              alt="Crop"
              className="mt-6 rounded-xl h-72 w-full object-cover"
            />
          )}

          <button
            onClick={detectDisease}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
          >
            Detect Disease
          </button>

          {result && (
            <div className="mt-8 bg-green-100 rounded-xl p-6">

              <h2 className="text-2xl font-bold text-green-700 mb-4">
                AI Prediction
              </h2>

              <p className="text-lg">
                <strong>🦠 Disease:</strong> {result.disease}
              </p>

              <p className="text-lg mt-2">
                <strong>📊 Confidence:</strong> {result.confidence}
              </p>

              <p className="text-lg mt-2">
                <strong>💊 Treatment:</strong>
              </p>

              <p className="mt-2">
                {result.treatment}
              </p>

            </div>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
}