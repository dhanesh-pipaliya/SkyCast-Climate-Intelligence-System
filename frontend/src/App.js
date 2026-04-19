import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/predict")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌍 SkyCast Climate System</h1>

      {data ? (
        <div>
          <h2>Temperature Prediction: {data.temperature_prediction}°C</h2>
          <h3>Rain Probability: {data.rain_probability}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;