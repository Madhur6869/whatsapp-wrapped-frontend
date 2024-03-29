import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  LineElement,
  Legend,
  ArcElement,
  Tooltip,
  PointElement
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);
import styles from "@/styles/components/cards/emojis.module.scss";

function MostActiveDays({ labels, values }) {

const maxNumber = Math.max(...values); // Find the maximum number in the array
const maxIndex = values.indexOf(maxNumber);

const days = {
    "Mon": "Monday",
    "Tue": "Tuesday",
    "Wed": "Wednesday",
    "Thu": "Thursday",
    "Fri": "Friday",
    "Sat": "Saturday",
    "Sun": "Sunday",
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
  let chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        borderWidth: 1,
        backgroundColor: "#63D49B",
        borderRadius: 4,
        barThickness: 20,
        borderSkipped: false,
        borderColor: "#63D49B",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Most active days</p>
        <p className={styles.subtitle}>Relive the days on which your conversations were never ending!</p>
      </header>
      <div className={styles.chartContainer}>
        <Line data={chartData}
        options={chartOptions} />
      </div>
      <p className={styles.footer}>
      {days[labels[maxIndex]]}
      </p>
    </div>
  );
}

export default MostActiveDays;
