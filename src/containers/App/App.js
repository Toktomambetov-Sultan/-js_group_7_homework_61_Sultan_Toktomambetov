import Axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

const BASE_URL = "https://restcountries.com/v2/",
  ALL_URL = "all?fields=name",
  NAME_URL = "name/";

function App() {
  const [countriesNames, setCountriesNames] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState({});
  const initCountryInfo = useCallback(
    async () => {
      if (!currentCountry) return;
      const url = BASE_URL + NAME_URL + currentCountry;
      const countryInfoResponse = await Axios(url);
      setCountryInfo(countryInfoResponse.data[0]);
    },
    [currentCountry]
  );
  useEffect(() => {
    const initCountriesNames = async () => {
      const url = BASE_URL + ALL_URL;
      const countriesNamesResponse = await Axios(url);
      setCountriesNames(countriesNamesResponse.data);
      setCurrentCountry(countriesNamesResponse.data[0].name);
    };
    initCountriesNames();
  }, []);
  useEffect(
    () => {
      initCountryInfo();
    },
    [initCountryInfo]
  );
  const countryInfoDescriprions = {
    Capital: countryInfo.capital,
  };
  return (
    <div className="container">
      <div className="App">
        <ul className="countries_list">
          {countriesNames.map(countryName => (
            <li
              className={[
                "country_item",
                countryName.name === countryInfo.name ? "active" : "",
              ].join(" ")}
              key={countryName.name}
              onClick={() => setCurrentCountry(countryName.name)}
            >
              {countryName.name}
            </li>
          ))}
        </ul>
        <div className="country-info">
          <div className="country-info__top">
            <h3 className="country-info__name">{countryInfo.name}</h3>
            <img
              className="country-info__img"
              src={countryInfo.flags ? countryInfo.flags[1] : ""}
              alt=""
            />
          </div>
          <div className="country-info__bottom">
            <div className="country-info__info-group">
              <span className="country-info__key">Capital: </span>
              <span className="country-info__value">{countryInfo.capital}</span>
            </div>
            <div className="country-info__info-group">
              <span className="country-info__key">Region: </span>
              <span className="country-info__value">{countryInfo.region}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
