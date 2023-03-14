import React from "react";
import { createRoot } from "react-dom/client";
import App from "@features/App";
import Favicon from "react-favicon";
import HelmetFonts from "@styles/helmet";

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <>
    <Favicon url="https://user-images.githubusercontent.com/16946573/144957680-01ea405e-959b-46b1-a163-df688466ac23.png" />
    <HelmetFonts />
    <App />
  </>
);
