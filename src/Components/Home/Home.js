import React, { useState } from "react";
import { Table } from "../Table";
import "./Home.css";

export const Home = ({ data }) => {
  return (
    <div className="home">
      {data.data === undefined ? "" : <Table data={data.data} type={"name"} />}
    </div>
  );
};
