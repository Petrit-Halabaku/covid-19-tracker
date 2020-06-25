import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../services/API";
import { Line, Bar } from "react-chartjs-2";

import styles from "./chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    // const fetchAPI = async () => {
    //   setDailyData(await fetchDailyData());
    // };
    // fetchAPI();
    fetchDailyData().then((item) => {
      setDailyData(item);
    });
    console.log(dailyData);
    // test();
  }, []);

  /* ------------------------------- line chart ------------------------------- */
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
      // options={{
      //   legend: { display: false },
      //   scales: {
      //     yAxes: [
      //       {
      //         ticks: {
      //           beginAtZero: true,
      //           fontColor: "#000",
      //           fontSize: "16",
      //         },
      //       },
      //     ],
      //     xAxes: [
      //       {
      //         ticks: {
      //           fontColor: "#000",
      //           fontSize: "16",
      //         },
      //       },
      //     ],
      //   },
      // }}
    />
  ) : null;

  /* -------------------------------- bar chart ------------------------------- */
  const barChart = data.confirmed ? (
    <Bar
      data={{
        color: "#000000",
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontColor: "#000",
                fontSize: "16",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "#000",
                fontSize: "16",
              },
            },
          ],
        },
        title: {
          display: true,
          text: `Current situation in ${country}`,
          fontColor: "#000",
          fontSize: "20",
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
