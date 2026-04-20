import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ChartComponent({ prediction }) {
  if (!prediction) return null;

  const days = Array.from({ length: 10 }, (_, i) => i + 1);
  const temps = days.map((d) => prediction.predicted_temperature - (10 - d));

  const data = {
    labels: days,
    datasets: [
      {
        label: "Temperature Trend",
        data: temps,
        borderWidth: 2,
        fill: false
      }
    ]
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Line data={data} />
    </div>
  );
}

export default ChartComponent;