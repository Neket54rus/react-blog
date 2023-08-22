import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  try {
    const { data } = await thunkApi.extra.api.get<Profile>('/profile');
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue('error');
  }
});
