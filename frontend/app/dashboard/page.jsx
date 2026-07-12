"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "40px" }}>
      <h1>🌾 AgriAssist AI Dashboard</h1>

      {session ? (
        <>
          <h2>Welcome {session.user.name}</h2>
          <p>{session.user.email}</p>
        </>
      ) : (
        <h2>Please login first</h2>
      )}
    </div>
  );
}