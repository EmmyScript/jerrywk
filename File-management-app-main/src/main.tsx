import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Home from './pages/Home.tsx';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
