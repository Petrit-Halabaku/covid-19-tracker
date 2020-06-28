import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  //   let dynamicUrl = URL;

  // country?dynamicUrl=`${dynamicUrl}/countries/${country}`:
  try {
    const { data } = await axios.get(`${URL}`);
console.log(data);
    const covidData = [ data.confirmed, data.recovered, data.deaths, data.lastUpdated ]
    return covidData;
  } catch (error) {
    console.error(error);
  }
};
