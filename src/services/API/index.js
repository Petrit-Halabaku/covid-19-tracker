import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let dynamicURL = URL;

  if (country) {
    dynamicURL = `${URL}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicURL);

    const covidData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return covidData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    const dailyData = data.map((item) => ({
      confirmed: item.confirmed.total,
      deaths: item.deaths.total,
      date: item.reportDate,
    }));
    console.log(dailyData);
    return dailyData;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    console.log(countries);
    const filteredCountries = countries.map((country) => ({
      name: country.name,
    }));

    return filteredCountries;
  } catch (error) {
    console.error(error);
  }
};
