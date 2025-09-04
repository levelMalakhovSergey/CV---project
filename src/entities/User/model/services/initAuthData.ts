import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { User } from '../types/user';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import axios from 'axios';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (newJsonSettings, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('');
        }

        try {
            // const response = await dispatch(
            //     getUserDataByIdQuery(userId),
            // ).unwrap();
const response = await axios.get('/api/users');

const result = response.data[0]
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                'new'
            );

            return result;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
