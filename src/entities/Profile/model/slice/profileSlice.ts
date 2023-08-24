import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
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
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload };
    },
  },
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
      state.form = action.payload;
      state.readonly = true;
    });
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload || 'error';
      state.isLoading = false;
      state.data = {} as Profile;
      state.readonly = true;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.error = '';
      state.isLoading = true;
      state.readonly = true;
    });
    builder.addCase(updateProfileData.fulfilled, (state, action) => {
      state.error = '';
      state.isLoading = false;
      state.data = action.payload;
      state.form = action.payload;
      state.readonly = true;
    });
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.error = action.payload || 'error';
      state.isLoading = false;
      state.readonly = true;
    });
  },
});

export const { reducer: profileReducer, actions: profileActions } =
  ProfileSlice;
