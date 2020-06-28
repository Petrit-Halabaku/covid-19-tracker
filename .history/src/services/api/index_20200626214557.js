import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let dynamicUrl = URL;

  country?dynamicUrl=`${dynamicUrl}/countries/${country}`;
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(`${URL}`);

    const covidData = { confirmed, recovered, deaths, lastUpdate };
    return covidData;
  } catch (error) {
    console.error(error);
  }
};

/* ------------------------------- daily data ------------------------------- */

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    const dailyData = data.map(
      ({ confirmed, recovered, deaths, reportDate }) => ({
        confirmed,
        recovered,
        deaths,
        reportDate,
      })
    );
    console.log(dailyData);
    return dailyData;
  } catch (error) {
    console.error(error);
  }
};

/* ----------------------------- fetch countries ---------------------------- */

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    console.log(countries);

    const filterCountries = countries.map(({ name }) => ({ name }));

    return filterCountries;
  } catch (error) {
    console.error(error);
  }
};
