import { createAction } from "@reduxjs/toolkit";

//getcontacts
// pending
export const getContactsRequest = createAction('getContactsRequest');
//resolved
export const getContactsSuccess = createAction('getContactsSuccess');
// rejected
export const getContactsError = createAction('getContactsError');

//addContact
// pending
export const addContactRequest = createAction('addContactRequest');
//resolved
export const addContactSuccess = createAction('addContactSuccess');
// rejected
export const addContactError = createAction('addContactError');

//deleteContact
// pending
export const deleteContactRequest = createAction('deleteContactRequest');
//resolved
export const deleteContactSuccess = createAction('deleteContactSuccess');
// rejected
export const deleteContactError = createAction('deleteContactError');


export const handleFilter = createAction('phonebookHandleFilter');




