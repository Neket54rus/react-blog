import { createSlice } from '@reduxjs/toolkit';

import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    data: {} as Profile,
    error: '',
    isLoading: false,
    readonly: true,
};

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { reducer: profileReducer, actions: profileActions } =
    ProfileSlice;
