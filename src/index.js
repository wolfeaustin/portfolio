import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("typeface-special-elite");
require("typeface-titillium-web");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
