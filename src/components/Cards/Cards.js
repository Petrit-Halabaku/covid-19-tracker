import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./card.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  //   console.log();
  //   const { confirmed, recovered, deaths, lastUpdate } = data;

  if (!confirmed) {
    console.log(confirmed);
    return "...Loading";
  } else {
    return (
      <>
      {/* ------------------ */}
        <Grid container  justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            sm={8}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">avtive cases</Typography>
            </CardContent>
          </Grid>
{/* --------------------- */}
          <Grid
            item
            component={Card}
            xs={12}
            sm={8}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">Number of Deaths</Typography>
            </CardContent>
          </Grid>
{/* -------------------- */}
          <Grid
            item
            component={Card}
            xs={12}
            sm={8}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={1}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">avtive cases</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </>
    );
  }
};

export default Cards;
