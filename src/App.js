import React, { createContext, useReducer, useEffect } from "react";
import firbase from "firebase";

import "./App.css";
import { initFirebase } from "./firebase";
import { Routes } from "./routes";

export const StoreContext = createContext();

const initialStocks = {
  stocks: [],
  loading: 100,
};

function storeStocks(state, action) {
  switch (action.type) {
    case "FETCHED":
      return { ...state, stocks: action.stocks, loading: 200 };
    case "FETCHING":
      return { ...state, loading: 300 };
    default:
      return state;
  }
}

function App() {
  const store = useReducer(storeStocks, initialStocks);
  const [state, dispatch] = store;

  useEffect(() => {
    initFirebase();
    dispatch({ type: "FETCHING" });
    firbase
      .database()
      .ref("stock")
      .once("value")
      .then((snapshot) => {
        dispatch({
          type: "FETCHED",
          stocks: Object.values(snapshot.val()),
        });
      });
  }, []);
  console.log(state);
  return (
    <StoreContext.Provider value={store}>
      <Routes />
    </StoreContext.Provider>
  );
}

export default App;
