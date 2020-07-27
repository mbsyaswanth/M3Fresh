import React, { createContext, useReducer, useEffect, useState } from "react";
import firebase from "firebase";

import "./App.css";
import { initFirebase } from "./firebase";
import { Routes } from "./routes";

import { storeStocks } from "./Store";

initFirebase();
const initMessaging = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("token:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};

initMessaging();

export const StoreContext = createContext();

export const CartContext = createContext();

const initialStocks = {
  stocks: [],
  cart: {},
  loading: 100,
};

function App() {
  const store = useReducer(storeStocks, initialStocks);
  const [state, dispatch] = store;
  const cart = useState({});

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    firebase
      .database()
      .ref("stock")
      .once("value")
      .then((snapshot) => {
        dispatch({
          type: "FETCHED",
          stocks: snapshot.val(),
        });
      });
  }, []);
  console.log(state);
  return (
    <CartContext.Provider value={cart}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
