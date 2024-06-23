import "@styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import * as nexus from "./nexusExporter";
import { App } from "./react/App";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export { nexus };
