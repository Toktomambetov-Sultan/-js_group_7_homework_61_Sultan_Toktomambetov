import React from "react";
import "./CountryItem.css";

export default function CountryItem({
  countryName,
  onHeaderClick,
  currentCountry,
}) {
  return (
    <li
      className={[
        "country_item",
        countryName.name === currentCountry ? "active" : "",
      ].join(" ")}
      onClick={() => onHeaderClick(countryName.name)}
    >
      {countryName.name}
    </li>
  );
}
