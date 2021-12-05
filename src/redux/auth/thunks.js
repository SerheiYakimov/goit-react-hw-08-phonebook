import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const signupUser = '/users/signup';
const userLogin = '/users/login';
const userLogout = '/users/logout';
const currentUser = '/users/current';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

export const singupThunk = createAsyncThunk('users/signup', async(user, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(signupUser, user);
        token.set(data.token);
        toast.success('You have successfully registered!');
        return data;
        
    } catch (err) {
        return rejectWithValue({ error: toast.error('Oops failed to register!') });
    }
});

export const loginThunk = createAsyncThunk('users/login', async (user, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(userLogin, user);
        token.set(data.token);
        toast.success('You are successfully logged in !')
        return data;
    } catch (err) {
        return rejectWithValue({ error: toast.error('Oops failed to login, check your email and password!')  });
    }
});

export const logoutThunk = createAsyncThunk('users/logout', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(userLogout);
        token.set(data.token);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const currentThunk = createAsyncThunk('users/current', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
        console.log('токена нет')
        return thunkAPI.rejectWithValue();
    };
    token.set(persistToken);
    try {
        const { data } = await axios.get(currentUser);
        //  console.log('Data', data);
        return data;
    } catch (err) {}
    // {
    //     return rejectWithValue({ error: err.message });
    // }
});