import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (props, thunkApi) => {
    try {
        const { data } = await thunkApi.extra.api.post<User>('/login', props);

        if (!data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(data));
        thunkApi.dispatch(userActions.setAuthData(data));

        return data;
    } catch (error) {
        return thunkApi.rejectWithValue('error');
    }
});
