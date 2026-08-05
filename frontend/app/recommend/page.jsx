const handleSearch = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      alert("API URL is not configured");
      return;
    }

    const url = `${apiUrl}/api/crops/recommend?soil=${encodeURIComponent(
      soil
    )}&season=${encodeURIComponent(season)}`;

    const res = await fetch(url);
    const data = await res.json();

    console.log("API Response:", data);

    if (!res.ok) {
      alert(data.message || data.error || "Recommendation failed");
      setResult([]);
      return;
    }

    // Backend returns a single crop object
    if (data && data.name) {
      setResult([data]);
    } else {
      alert("No crop recommendation found");
      setResult([]);
    }
  } catch (err) {
    console.error("Recommendation error:", err);
    alert("Unable to connect to backend server");
    setResult([]);
  }
};