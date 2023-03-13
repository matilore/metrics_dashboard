import React from "react";
import { createRoot } from "react-dom/client";
import App from "@features/App";

const root = createRoot(document.getElementById("root") as Element);
root.render(<App />);
