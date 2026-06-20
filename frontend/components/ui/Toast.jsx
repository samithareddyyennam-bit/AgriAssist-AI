"use client";

import { toast } from "react-hot-toast";

export default function Toast() {
  return (
    <button
      onClick={() => toast.success("AgriAssist AI notification!")}
      className="bg-green-700 text-white px-4 py-2 rounded"
    >
      Show Toast
    </button>
  );
}