import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleDetailsComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>((state) => {
  return state.articleDetailsComments || articleDetailsCommentsAdapter.getInitialState();
});

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      state.isLoading = false;
      articleDetailsCommentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsActions } =
  articleDetailsCommentsSlice;
