import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { initFirebase } from "./firebase";
import UserDetailForm from "./components/UserDetailForm";
import ItemCard from "./components/ItemCard";
import Products from "./components/Products";

function App() {
  initFirebase();

  return <Products />;
}

export default App;
