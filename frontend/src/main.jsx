import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NotificationProvider } from "./context/NotificationContext";

import App from "./App";

import { DashboardProvider } from "./context/DashboardContext";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";
import "./styles/theme.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/analyzer.css";
import "./styles/generator.css";
import "./styles/reports.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>

  <NotificationProvider>

    <AuthProvider>

      <DashboardProvider>

        <App />

      </DashboardProvider>

    </AuthProvider>

  </NotificationProvider>

</ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);