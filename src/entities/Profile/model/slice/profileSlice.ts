import { createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
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
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = '';
      state.isLoading = true;
      state.data = {} as Profile;
      state.readonly = true;
    });
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.error = '';
      state.isLoading = false;
      state.data = action.payload;
      state.readonly = true;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload || 'error';
      state.isLoading = false;
      state.data = {} as Profile;
      state.readonly = true;
    });
  },
});

export const { reducer: profileReducer, actions: profileActions } =
  ProfileSlice;
