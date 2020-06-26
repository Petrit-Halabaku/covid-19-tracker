import React from "react";
import { Container, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <Typography
        variant="caption"
        display="block"
        align="center"
        gutterBottom
      >
        powered by <a href="covid19.mathdro.id">covid19.mathdro.id</a>
      </Typography>
    </>
  );
};

export default Footer;
