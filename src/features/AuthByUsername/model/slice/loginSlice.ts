import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/login';

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: undefined,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
                state.password = '';
                state.username = '';
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.password = '';
            });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
