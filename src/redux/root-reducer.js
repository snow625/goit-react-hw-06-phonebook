import { combineReducers } from "@reduxjs/toolkit";

import contactsReduce from "./contacts/contactsReduce"

const rootReducer = combineReducers({
  contacts: contactsReduce,
});

export default rootReducer;
