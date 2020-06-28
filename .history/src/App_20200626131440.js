import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from "./parts/Header/Header"

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline>
          <Container maxWidth="sm">
            <Header/>
            {/* <Cards/>
            <Chart/>
            <Footer/> */}
          </Container>
        </CssBaseline>
      </>
    );
  }
}

export default App;
