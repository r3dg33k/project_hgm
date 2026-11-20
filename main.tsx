
import React from "react";
import ReactDOM from "react-dom/client";
import "./lib/imageFallback";
import "./styles/chapters.css";
import "./styles/animations.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element "#root" was not found in index.html'
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
