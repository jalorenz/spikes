"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, registerables,
} from 'chart.js'
import {Line} from "react-chartjs-2";

export default function Home() {
    const countOfDataPoints = 100

  const data=  {
      type: "line",
      datasets: [{
          id: "Dataset1",
          data: new Array(countOfDataPoints).fill(null).map((_, i) => ({ y: Math.floor(Math.random() * 100), x: i })),
          label: "# Response in ms",
          borderWith: 1,
          backgroundColor: "white",
          borderColor: "white",
      }],
      labels: new Array(countOfDataPoints).fill(null).map((_, i) => i.toString())
  }

  ChartJS.register(...registerables)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Line data={data} options={{}}/>
    </main>
  );
}
