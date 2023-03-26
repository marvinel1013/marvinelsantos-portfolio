import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SplashScreen from "./components/splash_screen/SplashScreen";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SplashScreen />
  </React.StrictMode>
);
