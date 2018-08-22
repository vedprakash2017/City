import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import City from "./city";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<City />, document.getElementById("root"));
registerServiceWorker();
