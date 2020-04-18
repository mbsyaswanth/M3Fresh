import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { initFirebase } from "./firebase";
import ItemCard from "./components/ItemCard";

function App() {
  initFirebase();

  return (
    <div className="App">
      <ItemCard />
    </div>
  );
}

export default App;
