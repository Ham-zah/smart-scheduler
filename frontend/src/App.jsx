import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("…loading");

  const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetch(`${API_BASE}/api/hello`)
      .then((r) => r.json())
      .then((data) => setMsg(data.message))
      .catch((err) => {
        console.error(err);
        setMsg("API unreachable");
      });
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>Smart Scheduler</h1>
      <p>Frontend is live.</p>
      <p><strong>API says:</strong> {msg}</p>
    </div>
  );
}

export default App;
