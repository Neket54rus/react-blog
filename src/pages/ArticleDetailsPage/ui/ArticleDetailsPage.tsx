import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
import { ArticleDetails } from '@/widgets/ArticleDetails';
import { NotFound } from '@/widgets/NotFound';

import { articleDetailsCommentsReducer, getArticleDetailsComments } from '../model/slice/articleDetailsCommentsSlice';
// eslint-disable-next-line max-len
import { selectArticleDetailsCommentsLoading } from '../model/selectors/comments/selectArticleDetailsCommentsLoading/selectArticleDetailsCommentsLoading';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { t } = useTranslation('article-details-page');
  const comments = useSelector(getArticleDetailsComments.selectAll);
  const commentsLoading = useSelector(selectArticleDetailsCommentsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id && __PROJECT__ !== 'storybook') {
    return <NotFound title={t('Статья не найдена')} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {/* TODO: исправить момент с id */}
        <ArticleDetails id={id || '1'} />
        <Text className={cls.commentsText} size={TextSize.L} weight={TextWeight.BLACK}>
          {t('Комментарии')}
        </Text>
        <CommentList comments={comments} isLoading={commentsLoading} />
      </div>
    </DynamicModuleLoader>
  );
});

export default ArticleDetailsPage;
