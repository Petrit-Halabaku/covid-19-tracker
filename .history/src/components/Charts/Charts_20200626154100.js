import React, { useState, useEffect } from "react";

import { Container } from "@material-ui/core";


import { fetchDailyData } from "../../services/api";



import styles from "./Charts.module.css";

const Charts = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    fetchDailyData().then((data) => {
      setDailyData(data);
    });
    console.log(dailyData);
  },[]);

  return <Container>Chareft</Container>;
};

export default Charts;
