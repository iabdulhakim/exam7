import { configureStore } from "@reduxjs/toolkit";
import Sneakers from "./Sneakers";
import cart from "./cart";

const store = configureStore({
  reducer: {
    images: Sneakers,
    cart: cart,
  },
});

export default store;
