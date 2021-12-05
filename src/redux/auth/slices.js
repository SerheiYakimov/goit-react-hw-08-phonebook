import { createSlice } from "@reduxjs/toolkit";
import { singupThunk, loginThunk, currentThunk, logoutThunk } from "./thunks";
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; - rtk q


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null },
        token: null,
        error: null,
        isLoading: false,
        isAuth: false,
        isCurrentUser: false,
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
                isCurrentUser: true,
            }
        },
        [currentThunk.fulfilled](state, action) {
            return {
                ...state,
                // user: action.payload.user,
                isLoading: false,
                isAuth: true,
                isCurrentUser: false,
            }
        },
        [currentThunk.rejected](state, action) {
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                error: action.payload,
                isCurrentUser: false,
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
                user: { name: null, email: null },
                isLoading: false,
                isAuth: false,
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

});

export default authSlice.reducer;

// const BASE_CONTACTS_URL = 'https://619b80902782760017445631.mockapi.io'; - rtk q
// const contacts = '/contacts';

// export const contactsApiSlice = createApi({
//     reducerPath: 'contactsApi',
//     baseQuery: fetchBaseQuery({ baseUrl: BASE_CONTACTS_URL }),
//     tagTypes: ['Contacts'],
//     endpoints: (builder) => {
//         return {
//             //action
//             fetchContacts: builder.query({
//                 query: () => contacts,
//                 providesTags: (result, err, arg) => {
//                     return [
//                         ...result.map(({ id }) => {
//                             return {
//                                 type: 'Contacts',
//                                 id,
//                             }
//                         })
//                     ]
//                 }
//             }),
//             addContact: builder.mutation({
//                 query: (contact) => {
//                     return {
//                         method: 'POST',
//                         url: contacts,
//                         body: contact,
//                     }
//                 },
//                 invalidatesTags: ['contacts'],
//             }),
//             deleteContact: builder.mutation({
//                 query: (id) => {
//                     return {
//                         url: `${contacts}/${id}`,
//                         method: 'DELETE',
//                     }
//                 },
//                 invalidatesTags: (result, err, id) => [{type: 'Contacts', id}]

//             })
//         }
//     },
// })

// export const { useFetchContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApiSlice;
