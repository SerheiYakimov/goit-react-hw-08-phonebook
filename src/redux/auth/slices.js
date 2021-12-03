import { createSlice } from "@reduxjs/toolkit";
import { singupThunk, loginThunk, currentThunk, logoutThunk } from "./thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        error: null,
        isLoading: false,
        isAuth: false,
    },
    extraReducers: {
        [singupThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [singupThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token,
            }
         },
        [singupThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        },
        [loginThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [loginThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token,
            }
         },
        [loginThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        },
        [currentThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [currentThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload.user,
            }
         },
        [currentThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                error: action.payload,
            }
        },
        [logoutThunk.pending](state, action) {
            return {
                ...state,
                isLoading: true,
            }
        },
        [logoutThunk.fulfilled](state, action) {
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                user: { name: null, email: null },
                token: null,
                
            }
         },
        [logoutThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        },
    }

})

// export const { } = authSlice.actions;
export default authSlice.reducer;