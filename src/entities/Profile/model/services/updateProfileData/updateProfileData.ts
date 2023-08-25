import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { selectProfileForm } from '../../selectors/selectProfileForm/selectProfileForm';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfile } from '../validateProfile/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const formData = selectProfileForm(thunkApi.getState());

    const errors = validateProfile(formData);

    if (errors.length) {
      return thunkApi.rejectWithValue(errors);
    }

    try {
      const { data } = await thunkApi.extra.api.put<Profile>('/profile', formData);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
