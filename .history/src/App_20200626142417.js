import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";

import { fetchData } from "./services/api";

import "./App.css";

class App extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetchData().then((data) => {
      this.setState({ data: data });
      console.log(data);
    });
  }

  render() {
    return (
      <>
        <CssBaseline>
          <Container maxWidth="lg">
            <Header />
            <Cards />
            <Charts />
            <Footer />
          </Container>
        </CssBaseline>
      </>
    );
  }
}

export default App;
