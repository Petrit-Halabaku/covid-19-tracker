import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return ".......Loading";
  }
  return (
    <>
      <Grid container justify="center">
        <Grid
          item
          component={Card}
          sm={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" gutterBottom>
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
            <Typography color="textSecondary" variant="body2">
              active cases
            </Typography>
          </CardContent>
        </Grid>
        {/* ---------------------------- */}
        <Grid
          item
          component={Card}
          sm={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" gutterBottom>
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
            <Typography color="textSecondary" variant="body2">
              recovered cases
            </Typography>
          </CardContent>
        </Grid>
        {/* ---------------------------- */}
        <Grid
          item
          component={Card}
          sm={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent align="center">
            <Typography color="" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" gutterBottom>
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
            <Typography color="textSecondary" variant="body1">
              deaths
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
