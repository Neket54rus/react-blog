import { StateSchema } from '@/app/providers/StoreProvider';
import { selectArticleDetailsLoading } from './selectArticleDetailsLoading';

describe('widgets/ArticleDetails/selectArticleDetailsLoading', () => {
  test('Проверка положительного результата', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    const articleLoading = selectArticleDetailsLoading(state as StateSchema);
    expect(articleLoading).toBe(true);
  });

  test('Проверка на пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    const articleLoading = selectArticleDetailsLoading(state as StateSchema);
    expect(articleLoading).toEqual(undefined);
  });
});
