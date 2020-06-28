import axios from "axios";

const URL = process.env.REACT_API_URL;

export const fetchData = async () => {
//   let dynamicUrl = URL;

  // country?dynamicUrl=`${dynamicUrl}/countries/${country}`:
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdated }
    } = await axios.get(`${URL}`);

    const covidData = { confirmed, recovered, deaths, lastUpdated };
    return covidData;
  } catch (error) {
    console.error(error);
  }
};
