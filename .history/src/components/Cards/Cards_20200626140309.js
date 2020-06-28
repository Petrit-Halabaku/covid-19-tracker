import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid item component={Card} sm={12} md={3} className={styles.card}>
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" gutterBottom>
              512651
            </Typography>
            <Typography color="textSecondary">last updated</Typography>
            <Typography color="textSecondary" variant="body2">
              active cases
            </Typography>
          </CardContent>
        </Grid>
        {/* ---------------------------- */}
        <Grid item component={Card} sm={12} md={3} className={styles.card}>
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" gutterBottom>
              151651
            </Typography>
            <Typography color="textSecondary">last updated</Typography>
            <Typography color="textSecondary" variant="body2">
              recovered cases
            </Typography>
          </CardContent>
        </Grid>
        {/* ---------------------------- */}
        <Grid item component={Card} sm={12} md={3} className={styles.card}>
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" gutterBottom>
              151651
            </Typography>
            <Typography color="textSecondary">last updated</Typography>
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