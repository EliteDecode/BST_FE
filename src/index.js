import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import "aos/dist/aos.css";

import { AppProvider } from "./utils/context";
import { ApiProvider } from "./utils/apiContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </AppProvider>
  </React.StrictMode>
);
