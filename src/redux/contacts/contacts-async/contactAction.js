import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchContactsRequest = createAction("contacts/request");
//fulfilled
export const fetchContactsSuccess = createAction("contacts/success");
//rejected
export const fetchContactsError = createAction("contacts/error");
