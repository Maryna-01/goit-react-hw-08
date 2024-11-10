import axios from 'axios';
import {
    createAsyncThunk
} from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    delete axios.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            const {
                user,
                token
            } = res.data;

            setAuthHeader(token);
            return {
                user,
                token
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            const {
                user,
                token
            } = res.data;

            setAuthHeader(token);
            return {
                user,
                token
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
            return thunkAPI.rejectWithValue('Токен не знайдено');
        }

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);