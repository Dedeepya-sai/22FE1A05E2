// Logging middleware (repository root & React app copy)
// Stores logs in localStorage under key 'appLogs'

const LOG_KEY = 'appLogs';

function log(action, payload = {}) {
  try {
    const list = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    const entry = { time: new Date().toISOString(), action, payload };
    list.push(entry);
    localStorage.setItem(LOG_KEY, JSON.stringify(list));
  } catch (e) {
    // silently fail
  }
}

function getLogs() {
  return JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
}

function clearLogs() {
  localStorage.removeItem(LOG_KEY);
}

export { log, getLogs, clearLogs };
