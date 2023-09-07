import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  'ArticleDetails/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    if (!articleId) {
      return thunkApi.rejectWithValue('error');
    }

    try {
      const { data } = await thunkApi.extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
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
