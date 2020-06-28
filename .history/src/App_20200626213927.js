import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";

import { fetchData } from "./services/api";

import "./App.css";
import CountryPicker from "./components/CountryPicker/CountryPicker";

/* -------------------------------------------------------------------------- */
/*                                     APP                                    */
/* -------------------------------------------------------------------------- */
class App extends Component {
  state = {
    data: {},
    country: "",
  };

  componentDidMount() {
    fetchData().then((covidData) => {
      this.setState({ data: covidData });
      console.log(this.state.data);
    });
  }

  countryChangeHandler = (country) => {
    fetchData(country).then((item) => {
      this.setState({ data: item, country: country });
      console.log(country);
    });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <CssBaseline>
          <Container maxWidth="lg">
            <Header />
            <Cards data={data} />
            <CountryPicker countryChangeHandler={this.countryChangeHandler} />
            <Charts data={data} />
            <Footer />
          </Container>
        </CssBaseline>
      </>
    );
  }
}

export default App;
