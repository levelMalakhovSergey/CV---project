import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
      
        // const response = await extra.api.post<User>('/login', authData);
    const response = await axios.get('https://68afa839b91dfcdd62bcc5e0.mockapi.io/users');
    
    const allUsers = response.data; // Получаем массив всех пользователей

    // ШАГ 2: Ищем в полученном массиве нашего пользователя
    const foundUser: User = allUsers.find(
      (user:User) => user.username === authData.username
    );
        if (!response.data) {
            throw new Error();
        }
dispatch(userActions.setAuthData(foundUser));
        // dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
