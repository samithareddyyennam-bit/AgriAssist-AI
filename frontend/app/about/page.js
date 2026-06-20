"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Modal from "../../components/ui/Modal";
import Toast from "../../components/ui/Toast";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="p-10 min-h-screen">
        <h1 className="text-4xl font-bold text-green-700">
          About AgriAssist AI
        </h1>

        <p className="mt-4">
          AgriAssist AI helps farmers with smart agricultural solutions.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 bg-green-700 text-white px-4 py-2 rounded"
        >
          Open Modal
        </button>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="About AgriAssist AI"
        >
          <div className="mt-4">
            <Toast/>
          </div>
          <p>
            This modal demonstrates the reusable Modal component.
          </p>
        </Modal>
      </div>

      <Footer />
    </>
  );
}