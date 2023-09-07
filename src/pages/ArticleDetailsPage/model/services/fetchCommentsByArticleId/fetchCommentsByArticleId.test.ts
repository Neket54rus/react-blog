import { Comment } from '@/entities/Comment';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const comments: Comment[] = [
  { id: '1', text: 'Comment 1', user: { avatar: '', id: '1', username: 'admin' } },
  { id: '2', text: 'Comment 2', user: { avatar: '', id: '1', username: 'admin' } },
];

describe('pages/ArticleDetailsPage/fetchCommentsByArticleId', () => {
  test('Проверка положительного результата', async () => {
    const data: Comment[] = comments;

    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('Проверка запроса с ошибкой', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
