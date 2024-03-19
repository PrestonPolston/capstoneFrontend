import { createSlice } from "@reduxjs/toolkit";
import { metalApi } from "../api/metalApi";
import {
  manageAllOrdersStorage,
  manageAllUsersStorage,
} from "../app/sessionStorage/adminStorage";

const initialState = {
  allUsers: manageAllUsersStorage.retrieveFromSessionStorage("allUsers"),
  allOrders: manageAllOrdersStorage.retrieveFromSessionStorage("allOrders"),
};

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    allUsers: {},
    allOrders: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      metalApi.endpoints.getAllOrders.matchFulfilled,
      (state, action) => {
        state.allOrders = action.payload;
        manageAllOrdersStorage.setItem(
          "allOrders",
          JSON.stringify(state.allOrders)
        );
      }
    );
    builder.addMatcher(
      metalApi.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        state.allUsers = action.payload;
        manageAllUsersStorage.setItem(
          "allUsers",
          JSON.stringify(state.allUsers)
        );
      }
    );
  },
});

export default adminSlice.reducer;
