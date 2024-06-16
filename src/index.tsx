import "@styles/index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./react/App";
import { TranslationProvider } from "./react/contexts/Translations.context";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>,
);
