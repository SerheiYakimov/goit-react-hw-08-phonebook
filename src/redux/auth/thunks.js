import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const signupUser = '/users/signup';
const userLogin = '/users/login';
const userLogout = '/users/logout';
const CurrentUser = '/users/current';

const token = {
    set(token) {
        axios.defaults.headers.common.Autorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Autorization = '';
    }
}

export const singupThunk = createAsyncThunk('users/signup', async(user, { rejectWithValue }) => {
    try {
        const response = await axios.post(signupUser, user);
        console.log(response.data);
        return response.data;
    } catch (err) {
        return rejectWithValue({ error: err.message });
    }
});

export const loginThunk = createAsyncThunk('users/login', async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post(userLogin, user);
        console.log(response.data);
        return response.data;
    } catch (err) {
        return rejectWithValue({ error: err.message });
    }
});

// export const userLogoutThunk = createAsyncThunk('users/logout', async (user, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(userLogout, user);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

export const currentThunk = createAsyncThunk('users/current', async (_, { rejectWithValue, getState }) => {
    const state = getState();
    console.log('store', state.auth.token);
    // try {
    //     const response = await axios.get(CurrentUser);
    //     return response.data;
    // } catch (error) {
    //     return rejectWithValue(error);
    // }
});