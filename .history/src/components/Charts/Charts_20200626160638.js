import React, { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";

import { fetchDailyData } from "../../services/api";

import styles from "./Charts.module.css";
import { Line } from "react-chartjs-2";

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
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#0000ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#ff0000",
            // backgroundColor:"#ff0000",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <Container >
      <Typography >{lineChart}</Typography>
    </Container>
  );
};

export default Charts;
