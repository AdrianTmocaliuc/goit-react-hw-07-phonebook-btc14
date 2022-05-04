import { combineReducers } from "redux";
// import contactsReducer from "./contacts/contacts-reducer";
// import filterReducer from "./filter/filter-reducer";
import contactReducer from "./contacts/contacts-async/contactsReducer";
// import contactsSlice from "./contacts/contacts-slice";
import filterSlice from "./filter/filter-slice";

export default combineReducers({
  contacts: contactReducer,
  filter: filterSlice,
});
