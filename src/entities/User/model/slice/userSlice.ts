import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../types/user';

const initialState: UserSchema = {
};

const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export const {
	actions: userActions,
	reducer: userReducer,
} = UserSlice;
