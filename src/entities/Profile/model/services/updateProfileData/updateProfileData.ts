import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const formData = selectProfileForm(thunkApi.getState());

  try {
    const { data } = await thunkApi.extra.api.put<Profile>(
      '/profile',
      formData,
    );

    return data;
  } catch (err) {
    return thunkApi.rejectWithValue('error');
  }
});
