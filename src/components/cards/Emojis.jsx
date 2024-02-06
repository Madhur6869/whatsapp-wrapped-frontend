import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
import styles from "@/styles/components/cards/emojis.module.scss";

function Emojis({ labels, values }) {

  const BarChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      // datalabels: {
      //   display: false,
      //   color: "black",
      //   labels: {
      //     title: {
      //       display: true,
      //       text: "Count",
      //       font: {
      //         family: "Work Sans",
      //         weight: "500",
      //       },
      //     },
      //   },
      //   formatter: (value) => {
      //     return "";
      //     // return value > 0 ? value : "";
      //   },
      // },
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
        backgroundColor: "#1B59F8",
        borderRadius: 4,
        barThickness: 20,
        borderSkipped: false,
        borderColor: "#1B59F8",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.title}>Most used emoticons</p>
        <p className={styles.subtitle}>Unravel the emoticons that defined your chat's vibe</p>
      </header>
      <div className={styles.chartContainer}>
        <Bar data={chartData}
        options={BarChartOptions} />
      </div>
      <p className={styles.footer}>
      &#128512;  &#128172;	&#128514;
      </p>
    </div>
  );
}

export default Emojis;
