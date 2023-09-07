import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ArticleBlock } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, TextSize, TextWeight } from '@/shared/ui/Text/Text';
// eslint-disable-next-line neket54-plugin/layer-imports
import { NotFound } from '@/widgets/NotFound';

import { selectArticleDetailsData } from '../../model/selectors/selectArticleDetailsData/selectArticleDetailsData';
import { selectArticleDetailsError } from '../../model/selectors/selectArticleDetailsError/selectArticleDetailsError';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
// eslint-disable-next-line max-len
import { selectArticleDetailsLoading } from '../../model/selectors/selectArticleDetailsLoading/selectArticleDetailsLoading';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleDetailsSkeleton } from '../ArticleDetailsSkeleton/ArticleDetailsSkeleton';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;

  const { t } = useTranslation('article-details-page');
  const dispatch = useAppDispatch();
  const data = useSelector(selectArticleDetailsData);
  const isLoading = useSelector(selectArticleDetailsLoading);
  const error = useSelector(selectArticleDetailsError);

  useEffect(() => {
    if (id && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE':
        return <ArticleCodeBlockComponent key={block.id} block={block} />;
      case 'TEXT':
        return <ArticleTextBlockComponent key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  let content;
  if (isLoading) {
    content = <ArticleDetailsSkeleton />;
  } else if (error) {
    content = <NotFound title={t('Статья не найдена')} />;
  } else {
    content = data && (
      <>
        <div className={cls.header}>
          <Avatar src={data?.user?.avatar} size={32} />
          <Text weight={TextWeight.BOLD}>{data?.user?.username}</Text>
          <Text>{data?.createAt}</Text>
        </div>
        <div className={cls.body}>
          <Text className={cls.title} weight={TextWeight.BLACK} size={TextSize.L}>
            {data?.title}
          </Text>
          <Text className={cls.subtitle} size={TextSize.M}>
            {data.subtitle}
          </Text>
          <img src={data.image} alt='article icon' />
          {data.blocks.map(renderBlock)}
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
