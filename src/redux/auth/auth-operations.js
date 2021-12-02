

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const singUpUser = '/users/singup';
// const userLogin = '/users/login';
// const userLogout = '/users/logout';
// const CurrentUser = '/users/current';

// export const singUpUserThunk = createAsyncThunk('singUpUser', async (user, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(singUpUser, user);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

// export const userLoginThunk = createAsyncThunk('userLogin', async (user, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(userLogin, user);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

// export const userLogoutThunk = createAsyncThunk('userLogout', async (user, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(userLogout, user);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });

// export const CurrentUserThunk = createAsyncThunk('currentUser', async (user, { rejectWithValue }) => {
//     try {
//         const response = await axios.post(CurrentUser, user);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error);
//     }
// });
