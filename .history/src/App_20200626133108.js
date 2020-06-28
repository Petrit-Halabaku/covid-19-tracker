import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline>
          <Container maxWidth="lf">
            <Header />
            <Cards />
            <Chart />
            <Footer />
          </Container>
        </CssBaseline>
      </>
    );
  }
}

export default App;