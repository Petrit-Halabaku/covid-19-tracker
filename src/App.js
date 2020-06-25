import React, { Component } from "react";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import { fetchData } from "./services/API";

import logo from "./assets/images/covid19.jpg"

import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const covidData = await fetchData();
    this.setState({ data: covidData });
    console.log(this.state.data);
  }

  countryChangeHandler = async (country) => {
    const covidData = await fetchData(country);
    this.setState({ data: covidData, country: country });
    // console.log(this.state.data);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>Covid-19 Tracker</div>
        <img id={styles.cover} src={logo} alt="covid" />
        <Cards data={data} />
        <CountryPicker countryChangeHandler={this.countryChangeHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
