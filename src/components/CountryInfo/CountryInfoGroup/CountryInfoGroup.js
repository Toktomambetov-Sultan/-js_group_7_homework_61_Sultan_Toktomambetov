import React from "react";
import "./CountryInfoGroup.css";

export default function({ attr, value }) {
  return (
    <div className="country-info__info-group">
      <span className="country-info__key">{attr}: </span>
      <span className="country-info__value">{value}</span>
    </div>
  );
}
