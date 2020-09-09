import React, { useState } from "react";
import "./Table.css";

export const Table = ({ data, type }) => {
  return (
    <div className="table">
      {data.map((elem, index) => (
        <div key={index}>{elem[type]}</div>
      ))}
    </div>
  );
};
