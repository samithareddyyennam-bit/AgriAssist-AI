"use client";

import { useState } from "react";

export default function AIPage() {
  const [crop, setCrop] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    setLoading(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/ai`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          crop,
          question
        })
      }
    );

    const data = await response.json();

    setAnswer(data.advice);

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI Crop Advisor</h1>

      <input
        placeholder="Crop Name"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Ask your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br /><br />

      <button onClick={getAdvice}>
        Get AI Advice
      </button>

      {loading && <p>Generating advice...</p>}

      <p>{answer}</p>
    </div>
  );
}