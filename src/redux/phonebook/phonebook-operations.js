import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const getThunkContacts = createAsyncThunk('getContact', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/contacts');
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






