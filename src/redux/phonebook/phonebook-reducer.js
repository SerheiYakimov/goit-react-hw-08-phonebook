import { createReducer } from "@reduxjs/toolkit";
import {
  // getContactsRequest,
  // getContactsSuccess,
  // getContactsError,
  // addContactRequest,
  // addContactSuccess,
  // addContactError,
  // deleteContactSuccess,
  // deleteContactRequest,
  // deleteContactError,
  handleFilter,
} from "./phonebook-actions";
import { getThunkContacts, addThunkContact, deleteThunkContact } from "./phonebook-operations";


export const contacts = createReducer([], {
  [getThunkContacts.fulfilled]: (_, action) => action.payload,
  [addThunkContact.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteThunkContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const loading = createReducer(false, {
  [getThunkContacts.pending]: () => true,
  [getThunkContacts.fulfilled]: () => false,
  [getThunkContacts.rejected]: () => false,
  [addThunkContact.pending]: () => true,
  [addThunkContact.fulfilled]: () => false,
  [addThunkContact.rejected]: () => false,
  [deleteThunkContact.pending]: () => true,
  [deleteThunkContact.fulfilled]: () => false,
  [deleteThunkContact.rejected]: () => false,
});

  
export const error = createReducer(null, {
  [getThunkContacts.rejected]: (_, action) => action.payload,
  [addThunkContact.rejected]: (_, action) => action.payload,
  [deleteThunkContact.rejected]: (_, action) => action.payload,
  
});

export const filterReducer = createReducer('', {
  [handleFilter]: (_, { payload }) => payload,
});



//operations
// export const contacts = createReducer([], {
//   [getContactsSuccess]: (_, action) => action.payload,
//   [addContactSuccess]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

  
// export const loading = createReducer(false, {
//   [getContactsRequest]: () => true,
//   [getContactsSuccess]: () => false,
//   [getContactsError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

  
// export const error = createReducer(null, {
//   [getContactsError]: (_, action) => action.payload,
//   [addContactError]: (_, action) => action.payload,
//   [deleteContactError]: (_, action) => action.payload,
  
// });

//async
// export const contacts = createReducer([], {
//   [getContacts.fulfilled]: (_, action) => action.payload,
//   [addContact.fulfilled]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

  
// export const loading = createReducer(false, {
//   [getContacts.pedning]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,
//   [addContact.pedning]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pedning]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

  
// export const error = createReducer(null, {
//   [getContacts.rejected]: (_, action) => action.payload,
//   [addContact.rejected]: (_, action) => action.payload,
//   [deleteContact.rejected]: (_, action) => action.payload,
  
// });











///////////////////////////////////

// const initialState = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ];


// export const contactsReducer = createReducer(initialState, {
// [addNewContact]: (state, { payload }) => [...state, payload],
// [deleteContact]: (state, { payload }) =>
// state.filter(contact => contact.id !== payload),
// });



// export const filterReducer = createReducer('', {
//   [handleFilter]: (_, { payload }) => payload,
// });


// const contactsReducer = (state = initialState, { type, payload }) => {
//    switch (type) {
//      case types.ADD:
//       return [...state, payload];
     
     
//      case types.DELETE:
//        return state.filter((el) => el.id !== payload.id);
     
//      default:
//        return state;
//    }
//  }
  
// const filterReducer = (state = '', {type, payload}) => {
//     switch (type) {
//       case types.HANDLE_FILTER:
//         return payload;
//      default:
//        return state;
//    }
// }

