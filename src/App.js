import React from "react";

import "./App.css";
import { initFirebase } from "./firebase";
import { Routes } from "./routes";

function App() {
  initFirebase();

  return <Routes />;
}

export default App;
