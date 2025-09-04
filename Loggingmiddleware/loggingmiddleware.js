// Middleware that stores logs in localStorage
export const logEvent = (action, payload = {}) => {
  const entry = { action, payload, timestamp: new Date().toISOString() };
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(entry);
  localStorage.setItem("logs", JSON.stringify(logs));
};
