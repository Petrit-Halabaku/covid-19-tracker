import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  //   let dynamicUrl = URL;

  // country?dynamicUrl=`${dynamicUrl}/countries/${country}`:
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
