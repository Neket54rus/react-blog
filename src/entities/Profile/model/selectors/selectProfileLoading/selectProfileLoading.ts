import { StateSchema } from '@/app/providers/StoreProvider';

export const selectProfileLoading = (state: StateSchema) =>
  state.profile?.isLoading;
