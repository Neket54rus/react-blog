import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (id, thunkApi) => {
    try {
      if (!id) {
        throw new Error('articleId is required');
      }

      const { data } = await thunkApi.extra.api.get<Article>(`/articles/${id}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue('error');
    }
  },
);
