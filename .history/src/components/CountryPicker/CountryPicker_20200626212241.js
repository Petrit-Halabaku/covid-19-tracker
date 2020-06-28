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
      <FormControl>
        <NativeSelect defaultValue="">
          <option value="">Global</option>
          {country.map(({ name }) => (
            <option value={name}>{name}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Container>
  );
};

export default CountryPicker;
