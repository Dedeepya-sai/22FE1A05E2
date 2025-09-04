import React, { useState } from "react";

export default function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url) return;
    setLoading(true);

    try {
      // Free API for shortening
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();

      if (data.ok) {
        setShortUrl(data.result.full_short_link);
      } else {
        alert("Error shortening URL");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: 8, width: "300px" }}
      />
      <button
        onClick={handleShorten}
        disabled={loading}
        style={{ marginLeft: 10, padding: "8px 16px" }}
      >
        {loading ? "Shortening..." : "Shorten"}
      </button>

      {shortUrl && (
        <div style={{ marginTop: 20 }}>
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

