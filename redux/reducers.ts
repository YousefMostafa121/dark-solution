import { combineReducers } from "@reduxjs/toolkit";

import APP from "./APP";

const combineReducer = combineReducers({
  [APP.slice.name]: APP.slice.reducer,
});

export default combineReducer;
