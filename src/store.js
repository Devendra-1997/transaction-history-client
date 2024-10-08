import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice.js";
import transactionReducer from "./redux/transaction/transactionSlice.js";
const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
  },
});

export default store;
