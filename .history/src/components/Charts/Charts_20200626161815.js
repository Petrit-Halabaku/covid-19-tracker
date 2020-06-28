import React, { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";

import { fetchDailyData } from "../../services/api";

import styles from "./Charts.module.css";
import { Line, Bar } from "react-chartjs-2";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    fetchDailyData().then((data) => {
      setDailyData(data);
    });
    console.log(dailyData);
  }, []);

  /* ------------------------------- line Chart ------------------------------- */
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  /* -------------------------------- bar chart ------------------------------- */
  const barChart = dailyData.confirmed ? (
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
              dailyData.confirmed.value,
              dailyData.recovered.value,
              dailyData.deaths.value,
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
          //   text: `Current situation in ${country}`,
          fontColor: "#000",
          fontSize: "20",
        },
      }}
    />
  ) : null;

  return (
    <Container>
      <Typography>{barChart}</Typography>
    </Container>
  );
};

export default Charts;
