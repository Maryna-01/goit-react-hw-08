import {
    createSlice
} from '@reduxjs/toolkit';
import {
    register,
    logIn,
    logOut,
    refreshUser
} from './operations';

const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('authUser', JSON.stringify(action.payload.user));
                localStorage.setItem('authToken', action.payload.token);

            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('authUser', JSON.stringify(action.payload.user));
                localStorage.setItem('authToken', action.payload.token);

            })
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            .addCase(logOut.fulfilled, () => {
                localStorage.removeItem('authUser');
                localStorage.removeItem('authToken');
                return initialState;
            });

    },
});

export const authReducer = authSlice.reducer;