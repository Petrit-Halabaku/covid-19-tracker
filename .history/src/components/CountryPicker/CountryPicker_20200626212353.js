import React, { useState, useEffect } from "react";
import { Container, FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../services/api";

const CountryPicker = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchCountries().then((name) => {
      setCountry(name);
      console.log(name);
    });
  }, []);
  return (
    <Container>
      <FormControl align="center">
        <NativeSelect defaultValue="">
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
