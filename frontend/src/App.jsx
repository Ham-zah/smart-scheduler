import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("…loading");

  useEffect(() => {
    fetch("/api/hello")
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
