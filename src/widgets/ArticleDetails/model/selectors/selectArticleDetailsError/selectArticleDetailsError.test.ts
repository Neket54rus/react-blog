import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticleDetailsError } from './selectArticleDetailsError';

describe('widgets/ArticleDetails/selectArticleDetailsError', () => {
  test('Проверка положительно результата', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };
    const articleError = selectArticleDetailsError(state as StateSchema);
    expect(articleError).toBe('error');
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const articleError = selectArticleDetailsError(state as StateSchema);
    expect(articleError).toEqual(undefined);
  });
});
