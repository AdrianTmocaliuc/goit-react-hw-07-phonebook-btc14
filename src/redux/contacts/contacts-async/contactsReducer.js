import { createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "./contactAction";

const initialState = {
  contacts: [],
  contactsLoader: false,
  addLoader: false,
  removeContactLoader: false,
};

const contactReducer = createReducer(initialState, {
  [contactsActions.fetchContactsRequest]: (state, _) => ({
    ...state,
    contactsLoader: true,
  }),
  [contactsActions.fetchContactsSuccess]: (state, action) => ({
    ...state,
    contacts: action.payload,
    contactsLoader: false,
  }),
  [contactsActions.fetchContactsError]: (state, _) => ({
    ...state,
    contactsLoader: false,
  }),
});

export default contactReducer;
