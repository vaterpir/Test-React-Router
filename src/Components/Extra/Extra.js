import React, { useState, useEffect } from "react";
import { Table } from "../Table";
import "./Extra.css";

export const Extra = ({ data }) => {
  return (
    <div className="extra">
      {data.data === undefined ? "" : <Table data={data.data} type={"spell"} />}
    </div>
  );
};
