import React, { useState } from "react";
import "./Table.css";

export const Table = ({ data, type }) => {
  return (
    <div className="table">
      {data.map((elem, index) => (
        <div key={index} className="row">
          <div className="col">{elem.name}</div>
          <div className="col">{elem.house || '-'}</div>
          <div className="col">{elem.role || '-'}</div>
          <div className="col">{elem.species || '-'}</div>
        </div>
      ))}
    </div>
  );
};
