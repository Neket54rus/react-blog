import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleDetailsCommentsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
