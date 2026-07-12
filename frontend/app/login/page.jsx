"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>AgriAssist AI Login</h1>

      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/dashboard",
          })
        }
        style={{
          padding: "15px 25px",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}