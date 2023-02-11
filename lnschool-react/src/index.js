import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./components/context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Steg 4. Importera komponenten...
import App from "./App";

// Versioner före 18.0
//ReactDOM.render(document.querySelector('#root'), <App/>)
// Från och med version 18.0...
ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
