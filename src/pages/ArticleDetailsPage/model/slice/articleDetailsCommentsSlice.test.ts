import { Comment } from '@/entities/Comment';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const comments: Comment[] = [
  { id: '1', text: 'Comment 1', user: { avatar: '', id: '1', username: 'admin' } },
  { id: '2', text: 'Comment 2', user: { avatar: '', id: '1', username: 'admin' } },
];

describe('pages/ArticleDetailsPage/articleDetailsCommentsSlice', () => {
  test('Проверка получения комментариев', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      entities: {},
      ids: [],
    };
    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(comments, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      entities: {
        '1': comments[0],
        '2': comments[1],
      },
      ids: ['1', '2'],
    });
  });
});
