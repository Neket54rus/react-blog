import { StateSchema } from '@/app/providers/StoreProvider';

import { selectArticleDetailsCommentsLoading } from './selectArticleDetailsCommentsLoading';

describe('pages/ArticleDetailsPage/selectArticleDetailsCommentsLoading', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    const articleLoading = selectArticleDetailsCommentsLoading(state as StateSchema);
    expect(articleLoading).toBe(true);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const articleLoading = selectArticleDetailsCommentsLoading(state as StateSchema);
    expect(articleLoading).toEqual(undefined);
  });
});
