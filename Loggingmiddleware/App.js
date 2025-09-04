
import React, { useEffect, useState } from "react";
import { logEvent } from "./loggingmiddleware";

const loggingFetch = async (url, options = {}) => {
  logEvent("API_REQUEST", { url, method: options.method || "GET" });
  try {
    const res = await fetch(url, options);
    logEvent("API_RESPONSE", { url, status: res.status, ok: res.ok });
    return res;
  } catch (err) {
    logEvent("API_ERROR", { url, message: String(err) });
    throw err;
  }
};

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loggingFetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(data => {
        setUsers(data);
        logEvent("USERS_LOADED", { count: data.length });
      });
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h1>Logging Middleware Demo (Frontend)</h1>
      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
      <button onClick={() => alert(JSON.parse(localStorage.getItem("logs")||"[]").length + " log entries saved")}>
        Show log count
      </button>
    </div>
  );
}

