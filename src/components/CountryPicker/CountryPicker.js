import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../services/API";

import styles from "./picker.module.css";

const CountryPicker = ({ countryChangeHandler }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchCountries().then((name) => {
      setCountry(name);
      console.log(name);
    });
    // console.log(country);
  }, [setCountry]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => countryChangeHandler(e.target.value)}
      >
        <option value="">Global</option>
        {country.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
