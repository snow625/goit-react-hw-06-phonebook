import { combineReducers } from "@reduxjs/toolkit";

import itemsReducer from "./items/items-reducer-slice";
import filterReducer from "./filter/filter-reducer-slice";

const contactsReduce = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReduce;
