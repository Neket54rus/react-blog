// TODO: по надобности расписать interface для каждого блока статьи

import { User } from '@/entities/User';

type ArticleType = 'IT';

type ArticleBlockType = 'TEXT' | 'CODE';

export interface ArticleBlock {
  id: string;
  type: ArticleBlockType;
  title?: string;
  paragraphs?: string[];
  code?: string;
}

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  image: string;
  views: number;
  createAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
