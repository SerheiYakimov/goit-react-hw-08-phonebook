import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//     getContactsRequest,
//     getContactsSuccess,
//     getContactsError,
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// } from "./phonebook-actions";

axios.defaults.baseURL = 'https://619b80902782760017445631.mockapi.io/api/v1';


export const getThunkContacts = createAsyncThunk('getContact', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/contacts');
        // console.log('thunkData', data);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const addThunkContact = createAsyncThunk('addContact', async (contact, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/contacts', contact);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteThunkContact = createAsyncThunk('deleteContact', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error);
    }
})





//async operations
// export const getContacts = () => async dispatch => {
//     dispatch(getContactsRequest())
//     try {
//         const { data } = await axios.get('/contacts');
//          console.log(data);
//         dispatch(getContactsSuccess(data));    
//     } catch (error) {
//         dispatch(getContactsError(error))
//     }
// };

// export const addContact = contact => async dispatch => {
//     dispatch(addContactRequest());
//     try {
//         const { data } = await axios.post('/contacts', contact);
//         dispatch(addContactSuccess(data));
//     } catch (error) {
//         dispatch(addContactError(error));
//     }
// }

// export const deleteContact = id => async dispatch => {
//     dispatch(deleteContactRequest());
//     try {
//         await axios.delete(`/contacts/${id}`);
//         dispatch(deleteContactSuccess(id))
//     } catch (error) {
//         dispatch(deleteContactError(error))
//     }
// }


//operations
// export const getContacts = () => dispatch => {
//     dispatch(getContactsRequest())
//     axios.get('/contacts')
//         .then(({ data }) => {
//             dispatch(getContactsSuccess(data));
//         })
//         .catch (err => {
//             dispatch(getContactsError(err));
//         });
    
// };

// export const addContact = contact => dispatch => {
//     dispatch(addContactRequest())
//     axios
//         .post('/contacts', contact)
//         .then(({ data }) => {
//             dispatch(addContactSuccess(data));
//         })
//         .catch (err => {
//             dispatch(addContactError(err));
//         });
// };

// export const deleteContact = (id) => dispatch => {
//     dispatch(deleteContactRequest());
//     axios.delete(`/contacts/${id}`)
//         .then(() => dispatch(deleteContactSuccess(id)))
//         .catch(error => dispatch(deleteContactError(error)))
// }


