import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Components/App";
import Modal from "react-modal";
Modal.setAppElement("#root");
ReactDOM.render(<App onLoad={() => fn()} />, document.getElementById("root"));
