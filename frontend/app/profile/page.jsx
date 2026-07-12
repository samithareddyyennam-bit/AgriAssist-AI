"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div>
      <h1>Profile Page 🔒</h1>
    </div>
  );
}