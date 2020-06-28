import React, { useState, useEffect } from "react";
import { Container, FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../services/api";

import styles from "./picker.module.css";

const CountryPicker = ({ countryChangeHandler }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchCountries().then((name) => {
      setCountry(name);
      console.log(name);
    });
  }, []);
  return (
    <Container align="center" className={styles.formControl}>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            countryChangeHandler(e.target.value);
          }}
        >
          <option value="">Global</option>
          {country.map(({ name }, index) => (
            <option value={name} key={index}>
              {name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Container>
  );
};

export default CountryPicker;
