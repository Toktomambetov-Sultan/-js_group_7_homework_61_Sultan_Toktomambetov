import React from "react";

export default function(key, value) {
  return (
    <div className="country-info__info-group">
      <span className="country-info__key">{key}: </span>
      <span className="country-info__value">{value}</span>
    </div>
  );
}
