import { StateSchema } from '@/app/providers/StoreProvider';

import { selectArticleDetailsCommentsError } from './selectArticleDetailsCommentsError';

describe('pages/ArticleDetailsPage/selectArticleDetailsError', () => {
  test('Проверка положительно результата', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: 'error',
      },
    };
    const articleError = selectArticleDetailsCommentsError(state as StateSchema);
    expect(articleError).toBe('error');
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const articleError = selectArticleDetailsCommentsError(state as StateSchema);
    expect(articleError).toEqual(undefined);
  });
});
