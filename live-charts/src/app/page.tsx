"use client";
import {
    Chart as ChartJS, registerables,
} from 'chart.js'
import {Line} from "react-chartjs-2";
import {useEffect, useRef} from "react";

export default function Home() {
    const chartRef = useRef(null)
    const countOfDataPoints = 100
  const data=  {
      type: "line",
      datasets: [{
          id: "Dataset1",
          data: new Array(countOfDataPoints).fill(null).map(() => ({ y: RandomPointFactory(), x: new Date().toISOString() })),
          label: "# Response in ms",
          borderWith: 1,
          backgroundColor: "#699cd3",
          fill: true

      }],
      labels: new Array(countOfDataPoints).fill(null).map(() => new Date().toISOString())
  }

  ChartJS.register(...registerables)

    useEffect(() => {
        const interval = setInterval(() => {
            addRandomPoint(data)
            // @ts-ignore
            chartRef?.current?.update()
        }, 1000)

        return () => clearInterval(interval)
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Line ref={chartRef} data={data} options={{}}/>
    </main>
  );
}

function addRandomPoint(data: any) {
    const currentLength = data.datasets[0].data.length
    data.labels.shift()
    data.labels.push(new Date().toISOString())
    data.datasets[0].data.shift()
    data.datasets[0].data.push({ y: RandomPointFactory(), x: currentLength + 1 })
}

function RandomPointFactory() {
    return Math.floor(Math.random() * 100)
}
