import React, { createContext, useReducer, useEffect, useState } from "react";
import firebase from "firebase";

import "./App.css";
import { initFirebase } from "./firebase";
import { Routes } from "./routes";

initFirebase();

export const StoreContext = createContext();

export const CartContext = createContext();

const initialStocks = {
  stocks: [],
  cart: {},
  loading: 100,
};

function storeStocks(state, action) {
  switch (action.type) {
    case "FETCHED":
      return { ...state, stocks: action.stocks, loading: 200 };
    case "FETCHING":
      return { ...state, loading: 300 };
    case "ADD_ITEM":
      state.cart[action.cartItem.productId] = action.cartItem;
      return state;
    default:
      return state;
  }
}

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
