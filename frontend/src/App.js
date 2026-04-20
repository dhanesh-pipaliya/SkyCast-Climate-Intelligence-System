import { useState } from "react";
import ChartComponent from "./ChartComponent";

function App() {
  const [city, setCity] = useState("Ahmedabad");
  const [day, setDay] = useState(11);

  const [weather, setWeather] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // Fetch weather
  const getWeather = () => {
    fetch(`http://127.0.0.1:8000/weather/${city}`)
      .then((res) => res.json())
      .then((data) => setWeather(data));
  };

  // Fetch ML prediction
  const getPrediction = () => {
    fetch(`http://127.0.0.1:8000/predict-ml?day=${day}`)
      .then((res) => res.json())
      .then((data) => setPrediction(data));
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial",
      backgroundColor: "#f5f5f5",
      padding: "20px"
    }}>
      {/* <div style={{
  background: "white",
  padding: "20px",
  margin: "20px auto",
  width: "50%",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
}}> */}
      <h1>🌍 SkyCast Climate Intelligence</h1>

      {/* City Input */}
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {/* Weather Result */}
      {weather && (
        <div>
          <h2>City: {weather.city}</h2>
          <p>🌡 Temperature: {weather.temperature}°C</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>🌥 Weather: {weather.weather}</p>
        </div>
      )}

      <hr />

      {/* Day Input */}
      <div>
        <input
          type="number"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <button onClick={getPrediction}>Predict Temperature</button>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div>
          <h2>Day: {prediction.day}</h2>
          <p>🤖 Predicted Temperature: {prediction.predicted_temperature}°C</p>
        </div>
      )}
      {prediction && <ChartComponent prediction={prediction} />}
    </div>
  );
}

export default App;