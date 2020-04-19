import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { initFirebase } from "./firebase";
import UserDetailForm from "./components/UserDetailForm";

function App() {
  initFirebase();

  return <UserDetailForm />;
}

export default App;
