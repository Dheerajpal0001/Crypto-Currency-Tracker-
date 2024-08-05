import React from 'react'
import { Chart, Line } from 'react-chartjs-2'
import { Chart as chartjs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'


chartjs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ChartData = ({ arr = [], currency, days }) => {

  const prices = [1, 2, 3];
  const date = [12 / 2 / 23, 12 / 4 / 5, 32 / 5 / 12];

  const data = {

  }



  return <Line
    options={{
      responsive: true,

    }}
    data={{
      labels: date,
      datasets
    }}
  />
}

export default ChartData